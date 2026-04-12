import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Plane, Clock, Shield, MapPin, Phone } from "lucide-react";
import transferImg from "@/assets/airport-transfer.jpg";

const vehicles = [
  { type: "Sedan", model: "Toyota Camry / Honda City", capacity: "2-3 guests", price: "₹3,500", desc: "Comfortable sedan for couples or solo travelers" },
  { type: "SUV", model: "Toyota Fortuner / Innova Crysta", capacity: "4-6 guests", price: "₹5,500", desc: "Spacious SUV for families with luggage" },
  { type: "Luxury", model: "Mercedes E-Class / BMW 5 Series", capacity: "2-3 guests", price: "₹12,000", desc: "Premium luxury vehicle for VIP transfers" },
  { type: "Van", model: "Tempo Traveller", capacity: "8-12 guests", price: "₹8,000", desc: "Group transport for events and large families" },
];

const airports = [
  { name: "Vijayawada Airport (VGA)", distance: "180 km", time: "~3 hours" },
  { name: "Rajiv Gandhi Intl. Airport, Hyderabad (HYD)", distance: "370 km", time: "~5.5 hours" },
  { name: "Visakhapatnam Airport (VTZ)", distance: "350 km", time: "~5 hours" },
  { name: "Chennai Airport (MAA)", distance: "450 km", time: "~6.5 hours" },
];

const Transfers = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Airport Transfers | RiO Pool Villas Chirala - Luxury Transport Service</title>
        <meta name="description" content="Premium airport transfer and private car service to RiO Pool Villas Chirala. Luxury vehicles, professional chauffeurs, and 24/7 availability." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={transferImg} alt="Luxury Airport Transfer" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy))/0.4] to-transparent" />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <Car className="w-10 h-10 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Airport & Transfers</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">Seamless luxury transfers from airport to paradise</p>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-card border-b border-border py-8">
        <div className="container-luxury grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Clock, label: "24/7 Availability" },
            { icon: Shield, label: "Licensed Chauffeurs" },
            { icon: Plane, label: "Flight Tracking" },
            { icon: MapPin, label: "Door-to-Door" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <f.icon className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-foreground">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle="Our Fleet" title="Choose Your Ride" description="Select from our range of premium vehicles for a comfortable journey." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vehicles.map((v, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-2xl border border-border bg-card hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-foreground">{v.type}</h3>
                    <span className="text-lg font-extrabold text-primary">{v.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{v.model} · {v.capacity}</p>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Distances */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading subtitle="Nearest Airports" title="How to Reach Us" description="We arrange pickups from all major airports in the region." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {airports.map((a, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center">
                <Plane className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground text-sm mb-2">{a.name}</h4>
                <p className="text-2xl font-extrabold text-primary mb-1">{a.distance}</p>
                <p className="text-xs text-muted-foreground">{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Book Your Transfer</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">Call us or send a request and we'll arrange your seamless pickup.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button variant="secondary" size="lg" className="rounded-full px-10">Request Transfer</Button></Link>
            <a href="tel:+919988886888"><Button variant="outline" size="lg" className="rounded-full px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"><Phone className="w-4 h-4 mr-2" /> Call Now</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transfers;
