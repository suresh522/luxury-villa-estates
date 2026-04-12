import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Anchor, Wind, Fish, Sailboat, Mountain, Sunrise } from "lucide-react";
import adventureImg from "@/assets/adventure-sports.jpg";

const adventures = [
  { icon: Sailboat, title: "Jet Skiing", price: "₹2,500/ride", duration: "30 min", desc: "Thrilling high-speed jet ski rides along the Chirala coastline with professional instructors." },
  { icon: Wind, title: "Parasailing", price: "₹3,000/flight", duration: "15 min", desc: "Soar above the ocean and enjoy breathtaking aerial views of the coastline and resort." },
  { icon: Anchor, title: "Kayaking & Canoeing", price: "₹1,500/hour", duration: "1 hour", desc: "Paddle through calm backwaters and explore hidden coves along the beach." },
  { icon: Fish, title: "Deep Sea Fishing", price: "₹5,000/trip", duration: "3 hours", desc: "Join experienced fishermen for an authentic deep-sea fishing experience." },
  { icon: Mountain, title: "Beach Trekking", price: "Complimentary", duration: "2 hours", desc: "Guided coastal trekking through scenic trails, dunes, and local villages." },
  { icon: Sunrise, title: "Sunrise Boat Tour", price: "₹4,000/person", duration: "2 hours", desc: "Early morning catamaran ride to watch the sunrise over the Bay of Bengal." },
];

const Adventures = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Adventure & Water Sports | RiO Pool Villas Chirala - Beach Activities</title>
        <meta name="description" content="Exciting water sports and adventure activities at RiO Pool Villas Chirala. Jet skiing, parasailing, kayaking, deep sea fishing, and more." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={adventureImg} alt="Adventure Sports at RiO" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy))/0.3] to-transparent" />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Adventure & Water Sports</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Adrenaline-pumping activities on the pristine waters of Chirala</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle="Thrilling Experiences" title="Choose Your Adventure" description="From high-speed water sports to peaceful sunrise tours, there's something for everyone." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((a, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card overflow-hidden hover-lift">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <a.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xl font-extrabold text-primary">{a.price}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{a.title}</h3>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-3">Duration: {a.duration}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
                <div className="px-8 pb-6">
                  <Link to="/contact"><Button className="w-full rounded-full" variant="outline">Book Activity</Button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Safety First</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            All water sports activities are conducted by certified professionals with international safety standards. Life jackets, helmets, and safety gear provided. Activities subject to weather conditions.
          </p>
          <Link to="/contact"><Button size="lg" className="rounded-full px-10">Enquire About Activities</Button></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Adventures;
