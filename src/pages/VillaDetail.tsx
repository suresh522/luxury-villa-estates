import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Bed, Bath, Users, Maximize, ChevronLeft, ChevronRight, Check, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VillaCard from "@/components/VillaCard";
import { allVillas } from "@/data/villas";
import { toast } from "@/hooks/use-toast";

const VillaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const villa = allVillas.find((v) => v.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState(2);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [checkIn, checkOut]);

  const total = villa ? nights * villa.price : 0;

  if (!villa) return <Navigate to="/villas" replace />;

  const otherVillas = allVillas.filter((v) => v.id !== id).slice(0, 3);

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      toast({ title: "Please select dates", description: "Choose check-in and check-out dates to proceed.", variant: "destructive" });
      return;
    }
    if (nights < 1) {
      toast({ title: "Invalid dates", description: "Check-out must be after check-in.", variant: "destructive" });
      return;
    }
    toast({
      title: "Booking Request Sent!",
      description: `Your booking for ${villa.title} (${nights} nights) has been submitted. We'll contact you shortly.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{villa.title} — RiO Pool Villas Chirala | Luxury Private Pool Villa</title>
        <meta name="description" content={`Book ${villa.title} at RiO Pool Villas Chirala — ${villa.description} ${villa.bedrooms} bedrooms, ${villa.bathrooms} bathrooms, up to ${villa.guests} guests. Starting ${villa.priceLabel}.`} />
        <meta name="keywords" content={`${villa.title}, luxury villa Chirala, private pool villa booking, beachfront villa Andhra Pradesh, ${villa.features.slice(0, 4).join(', ')}`} />
        <link rel="canonical" href={`https://riopoolvillas.com/villa/${villa.id}`} />
      </Helmet>
      <Navbar />

      {/* Gallery */}
      <section className="pt-24 pb-8">
        <div className="container-luxury px-4">
          <Link to="/villas" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Villas
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main image */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-lg aspect-[16/10]">
              <img
                src={villa.gallery[activeImage]}
                alt={villa.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => setActiveImage((activeImage - 1 + villa.gallery.length) % villa.gallery.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImage((activeImage + 1) % villa.gallery.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {villa.gallery.slice(1, 4).map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-lg cursor-pointer aspect-[16/10] lg:aspect-auto ${
                    activeImage === i + 1 ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setActiveImage(i + 1)}
                >
                  <img src={img} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details + Booking */}
      <section className="section-padding pt-8">
        <div className="container-luxury px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-body font-semibold">
                    {villa.priceLabel}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {villa.title}
                </h1>
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  {[
                    { icon: Bed, value: villa.bedrooms, label: "Bedrooms" },
                    { icon: Bath, value: villa.bathrooms, label: "Bathrooms" },
                    { icon: Users, value: villa.guests, label: "Guests" },
                    { icon: Maximize, value: villa.area, label: "sqft" },
                  ].map(({ icon: Icon, value, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{value} {label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">About This Villa</h2>
                <p className="text-muted-foreground leading-relaxed">{villa.longDescription}</p>
              </div>

              <Separator />

              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Villa Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {villa.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">House Rules</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <p>✓ Check-in: 2:00 PM</p>
                  <p>✓ Check-out: 11:00 AM</p>
                  <p>✓ No smoking indoors</p>
                  <p>✓ Pets allowed on request</p>
                  <p>✓ Events & parties allowed</p>
                  <p>✓ ID proof required at check-in</p>
                </div>
              </div>
            </div>

            {/* Right: Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-card rounded-lg p-6 space-y-6" style={{ boxShadow: "var(--shadow-elevated)" }}>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-foreground">{villa.priceLabel}</p>
                  <p className="text-sm text-muted-foreground">per night</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="checkin" className="text-sm flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" /> Check-in
                    </Label>
                    <Input id="checkin" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="checkout" className="text-sm flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" /> Check-out
                    </Label>
                    <Input id="checkout" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-sm flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4" /> Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min={1}
                      max={villa.guests}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                    />
                  </div>
                </div>

                {nights > 0 && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">₹{villa.price.toLocaleString()} × {nights} nights</span>
                      <span className="text-foreground font-medium">₹{total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="text-foreground font-medium">₹{Math.round(total * 0.1).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span className="text-foreground font-medium">₹{Math.round(total * 0.18).toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-base">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">₹{Math.round(total * 1.28).toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <Button onClick={handleBooking} className="w-full rounded-full py-6 text-base font-body">
                  {nights > 0 ? `Book Now — ₹${Math.round(total * 1.28).toLocaleString()}` : "Select Dates to Book"}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-xs text-muted-foreground">or contact us directly</p>
                  <div className="flex justify-center gap-4">
                    <a href="tel:+919988886888" className="flex items-center gap-1 text-sm text-primary hover:underline">
                      <Phone className="w-3 h-3" /> Call
                    </a>
                    <a href="mailto:riopoolvillachirala@gmail.com" className="flex items-center gap-1 text-sm text-primary hover:underline">
                      <Mail className="w-3 h-3" /> Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Villas */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-[0.3em] mb-3 text-primary">You May Also Like</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Similar Villas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherVillas.map((v) => (
              <VillaCard key={v.id} {...v} price={v.priceLabel} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VillaDetail;
