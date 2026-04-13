import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Waves, UtensilsCrossed, Sparkles, Dumbbell, Wifi, Car, ShieldCheck, Palmtree,
  Sun, Wind, Tv, Coffee, Shirt, Baby, Gamepad2, Music, Camera, Glasses,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";

import amenityHero from "@/assets/amenity-hero.jpg";
import amenityPool from "@/assets/amenity-private-pool.jpg";
import amenityFitness from "@/assets/amenity-fitness.jpg";
import amenityConcierge from "@/assets/amenity-concierge.jpg";
import amenityFamily from "@/assets/amenity-family.jpg";
import amenityLounge from "@/assets/amenity-lounge.jpg";

/* ── data ─────────────────────────────────────────── */
const showcaseAmenities = [
  {
    image: amenityPool,
    title: "Private Infinity Pools",
    desc: "Every villa at RiO features its own temperature-controlled infinity pool with mesmerizing ocean views. Swim under the stars or bask in the golden sunrise — your pool, your rules.",
    features: ["Temperature controlled", "LED underwater lighting", "Poolside sun loungers", "Private pool deck"],
  },
  {
    image: amenityFitness,
    title: "Oceanview Fitness Center",
    desc: "Stay active with our state-of-the-art fitness center featuring floor-to-ceiling windows overlooking the Bay of Bengal. Premium equipment meets breathtaking panoramas.",
    features: ["Technogym equipment", "Personal trainer on request", "Yoga mats & props", "Post-workout smoothie bar"],
  },
  {
    image: amenityConcierge,
    title: "24/7 Concierge & Butler",
    desc: "From arranging surprise celebrations to curating bespoke excursions, our dedicated concierge team ensures every moment of your stay is flawless.",
    features: ["Dedicated villa butler", "Restaurant reservations", "Custom itineraries", "Special occasion planning"],
  },
  {
    image: amenityFamily,
    title: "Family & Kids Zone",
    desc: "Fun-filled activities for the little ones while you unwind. Our supervised kids' club, splash pool, and adventure playground keep the whole family entertained.",
    features: ["Kids splash pool", "Supervised play area", "Board games library", "Outdoor adventure trail"],
  },
  {
    image: amenityLounge,
    title: "Beachfront Lounge & Bar",
    desc: "Sip hand-crafted cocktails as the sun dips below the horizon. Our oceanfront lounge offers the perfect blend of relaxation and sophistication.",
    features: ["Signature cocktails", "Sunset cabanas", "Live acoustic sessions", "Premium spirit selection"],
  },
];

const quickAmenities = [
  { icon: Waves, label: "Private Pool" },
  { icon: Palmtree, label: "Beach Access" },
  { icon: UtensilsCrossed, label: "In-Villa Dining" },
  { icon: Sparkles, label: "Spa & Wellness" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Car, label: "Airport Transfer" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Sun, label: "Sun Deck" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: "Smart TV" },
  { icon: Coffee, label: "Espresso Machine" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: Baby, label: "Baby Amenities" },
  { icon: Gamepad2, label: "Game Room" },
  { icon: Music, label: "Live Music" },
  { icon: Camera, label: "Photography Spots" },
  { icon: Glasses, label: "Library Lounge" },
];

/* ── component ────────────────────────────────────── */
const Amenities = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Resort Amenities — RiO Pool Villas Chirala | World-Class Facilities</title>
        <meta name="description" content="Discover world-class amenities at RiO Pool Villas — private pools, fitness center, kids zone, concierge, laundry, beach access, smart rooms, and 24/7 security in Chirala." />
        <meta name="keywords" content="resort amenities Chirala, luxury villa facilities, private pool resort, fitness center resort, kids zone beach resort, smart room villa India" />
        <link rel="canonical" href="https://riopoolvillas.com/amenities" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={amenityHero} alt="RiO Pool Villas aerial resort view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-3">World-Class Amenities</p>
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Luxury Beyond Compare
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            From private infinity pools to bespoke concierge service, every amenity at RiO Pool Villas is designed for an extraordinary stay.
          </p>
        </div>
      </section>

      {/* Quick amenity icons strip */}
      <section className="py-12 bg-secondary overflow-hidden">
        <div className="container-luxury">
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-6">
            {quickAmenities.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[11px] font-medium text-muted-foreground text-center leading-tight">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase — alternating layout */}
      <section className="section-padding">
        <div className="container-luxury space-y-24">
          {showcaseAmenities.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="w-full h-[340px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* floating badge */}
                <div className="absolute -bottom-4 left-6 bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs font-semibold shadow-lg">
                  0{idx + 1} — Premium
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Featured Amenity</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection image={amenityLounge}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Your Comfort, Our Priority"
            title="Every Detail, Perfected"
            description="At RiO Pool Villas, luxury isn't just a word — it's woven into every amenity, every interaction, every moment of your stay."
            light
          />
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-10">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </ParallaxSection>

      {/* Comparison table */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Villa Amenities"
            title="What's Included in Every Villa"
            description="All our villas come with a comprehensive suite of premium amenities as standard."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                heading: "In-Villa Essentials",
                items: ["Private infinity pool", "King-size luxury bedding", "Smart TV with streaming", "Espresso & tea station", "Mini bar (stocked daily)", "High-speed fiber WiFi", "Air conditioning & ceiling fans", "Electronic safe"],
              },
              {
                heading: "Services & Experiences",
                items: ["24/7 butler service", "In-villa chef on request", "Spa treatments in-room", "Airport luxury transfers", "Laundry & dry cleaning", "Babysitting service", "Custom excursion planning", "Private yoga sessions"],
              },
              {
                heading: "Resort Facilities",
                items: ["Oceanview fitness center", "Beachfront lounge & bar", "Kids' club & splash pool", "Curated library lounge", "Landscaped tropical gardens", "Outdoor event pavilion", "Bicycle rentals", "Water sports equipment"],
              },
            ].map((col) => (
              <div key={col.heading} className="bg-card rounded-2xl p-8 shadow-md">
                <h3 className="font-display text-lg font-bold text-foreground mb-5 border-b border-border pb-3">{col.heading}</h3>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Experience Luxury Living
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Every amenity crafted to perfection. Book your private pool villa and discover a world of indulgence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/villas">
              <Button size="lg" variant="secondary" className="rounded-full px-10">
                Explore Villas
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
