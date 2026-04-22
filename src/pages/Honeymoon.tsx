import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Wine, Sparkles, Sunset, Bath, Camera } from "lucide-react";
import honeymoonImg from "@/assets/honeymoon-package.jpg";

const packages = [
  {
    title: "Romantic Escape",
    nights: "2 Nights / 3 Days",
    price: "₹45,000",
    inclusions: ["Private pool villa", "Candlelit dinner on the beach", "Couples spa session", "Champagne & roses on arrival", "Late checkout"],
  },
  {
    title: "Blissful Retreat",
    nights: "3 Nights / 4 Days",
    price: "₹72,000",
    inclusions: ["Premium ocean-view villa", "Daily breakfast in bed", "2 couples spa treatments", "Sunset boat cruise", "Private photography session", "Romantic poolside dinner"],
  },
  {
    title: "Forever Yours",
    nights: "5 Nights / 6 Days",
    price: "₹1,20,000",
    inclusions: ["Royal Terrace Villa", "All meals included", "Daily spa treatments", "Private beach setup", "Stargazing dinner", "Full-day excursion", "Keepsake photo album"],
  },
];

const Honeymoon = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Honeymoon Packages | RiO Pool Villas Chirala - Romantic Beach Getaway</title>
        <meta name="description" content="Romantic honeymoon packages at RiO Pool Villas Chirala. Private pool villas, candlelit dinners, couples spa, sunset cruises, and unforgettable beach moments." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={honeymoonImg} alt="Honeymoon at RiO Pool Villas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy))/0.5] to-transparent" />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <Heart className="w-10 h-10 mx-auto mb-4 text-accent animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Honeymoon Packages</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">Begin your forever in paradise</p>
        </div>
      </section>

      {/* Romantic Touches */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeading subtitle="Romance Awaits" title="Curated for Couples" description="Every detail designed to make your honeymoon unforgettable." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Wine, label: "Champagne" },
              { icon: Bath, label: "Couples Spa" },
              { icon: Sunset, label: "Sunset Cruise" },
              { icon: Sparkles, label: "Rose Petals" },
              { icon: Camera, label: "Photo Shoot" },
              { icon: Heart, label: "Beach Dinner" },
            ].map((t, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-card border border-border">
                <t.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-sm font-semibold text-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading subtitle="Packages" title="Choose Your Romance" description="Hand-picked packages for the perfect beginning." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${i === 1 ? "bg-primary text-primary-foreground border-primary ring-4 ring-accent" : "bg-card border-border"}`}>
                <h3 className="text-2xl font-bold mb-1">{pkg.title}</h3>
                <p className={`text-sm mb-4 ${i === 1 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{pkg.nights}</p>
                {/* <p className="text-3xl font-extrabold mb-6">{pkg.price}</p> */}
                <ul className="space-y-3 mb-8">
                  {pkg.inclusions.map((inc, j) => (
                    <li key={j} className={`text-sm flex items-start gap-2 ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      <Heart className="w-3 h-3 mt-1 text-accent flex-shrink-0" /> {inc}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"><Button variant={i === 1 ? "secondary" : "default"} className="w-full rounded-full">Book Now</Button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Honeymoon;
