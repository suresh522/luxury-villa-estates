import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Music, Camera, Utensils, Users, Star, Sparkles, Flower2 } from "lucide-react";
import weddingVenue from "@/assets/wedding-venue.jpg";
import honeymoonPkg from "@/assets/honeymoon-package.jpg";
import corporateEvents from "@/assets/corporate-events.jpg";

const packages = [
  {
    title: "Intimate Beach Wedding",
    guests: "Up to 50 Guests",
    price: "₹3,50,000",
    features: ["Beachfront ceremony setup", "Floral arch & aisle décor", "Sound system & lighting", "Wedding coordinator", "2-night villa stay"],
    highlight: false,
  },
  {
    title: "Grand Celebration",
    guests: "Up to 150 Guests",
    price: "₹8,50,000",
    features: ["Premium venue styling", "Live band & DJ", "Professional photography", "Multi-course banquet", "3-night villa stay", "Spa packages for couple"],
    highlight: true,
  },
  {
    title: "Royal Affair",
    guests: "Up to 300 Guests",
    price: "₹15,00,000",
    features: ["Full resort buyout", "Celebrity chef menu", "Fireworks display", "Helicopter entry option", "5-night luxury suite", "Honeymoon package included"],
    highlight: false,
  },
];

const services = [
  { icon: Flower2, title: "Floral Design", desc: "Custom floral arrangements by award-winning designers" },
  { icon: Camera, title: "Photography", desc: "Professional photo & video with drone coverage" },
  { icon: Music, title: "Entertainment", desc: "Live bands, DJs, and cultural performances" },
  { icon: Utensils, title: "Catering", desc: "Multi-cuisine menus crafted by our executive chef" },
  { icon: Users, title: "Guest Management", desc: "Accommodation and transport for all guests" },
  { icon: Sparkles, title: "Décor & Styling", desc: "Bespoke themes from traditional to contemporary" },
];

const WeddingEvents = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Wedding & Events | RiO Pool Villas Chirala - Beach Wedding Venue</title>
        <meta name="description" content="Plan your dream beach wedding at RiO Pool Villas Chirala. Luxury beachfront wedding venue with complete event planning, catering, and accommodation packages." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={weddingVenue} alt="Beach Wedding at RiO Pool Villas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy))/0.4] to-transparent" />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <Heart className="w-10 h-10 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Weddings & Events</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Create unforgettable celebrations at the most stunning beachfront venue in Andhra Pradesh
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeading subtitle="Our Services" title="Complete Event Solutions" description="From intimate gatherings to grand celebrations, we handle every detail." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-border bg-card hover-lift text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading subtitle="Packages" title="Wedding Packages" description="Tailored packages for every scale of celebration." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 ${pkg.highlight ? "bg-primary text-primary-foreground ring-4 ring-accent scale-105" : "bg-card border border-border"}`}>
                {pkg.highlight && <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4 flex items-center gap-1"><Star className="w-3 h-3" /> Most Popular</div>}
                <h3 className="text-2xl font-bold mb-1">{pkg.title}</h3>
                <p className={`text-sm mb-4 ${pkg.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{pkg.guests}</p>
                <p className="text-3xl font-extrabold mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className={`text-sm flex items-start gap-2 ${pkg.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      <span className="text-accent mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant={pkg.highlight ? "secondary" : "default"} className="w-full rounded-full">Enquire Now</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honeymoon + Corporate split */}
      <section className="section-padding">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={honeymoonPkg} alt="Honeymoon at RiO" className="w-full h-80 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">Honeymoon Packages</h3>
                <p className="text-primary-foreground/70 text-sm mb-4">Romantic escapes with private dinners, spa treatments & ocean sunsets</p>
                <Link to="/contact"><Button size="sm" className="rounded-full">Plan Your Honeymoon</Button></Link>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={corporateEvents} alt="Corporate Events at RiO" className="w-full h-80 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">Corporate Retreats</h3>
                <p className="text-primary-foreground/70 text-sm mb-4">Team building, conferences & offsite meetings in paradise</p>
                <Link to="/contact"><Button size="sm" className="rounded-full">Plan Your Event</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeddingEvents;
