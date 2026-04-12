import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Baby, Waves, Palette, TreePine, Gamepad2, BookOpen, ShieldCheck, Clock } from "lucide-react";
import kidsImg from "@/assets/kids-activities.jpg";

const activities = [
  { icon: Waves, title: "Splash Pool & Water Play", desc: "Dedicated kids pool with splash pads and water slides in a safe, supervised environment.", age: "3-12 years" },
  { icon: Palette, title: "Arts & Crafts Studio", desc: "Creative workshops including shell painting, sand art, tie-dye, and pottery for young artists.", age: "4-14 years" },
  { icon: TreePine, title: "Nature Explorer Trail", desc: "Guided nature walks, bird watching, and beach treasure hunts led by trained naturalists.", age: "5-14 years" },
  { icon: Gamepad2, title: "Indoor Game Zone", desc: "Air-conditioned play area with board games, video games, foosball, and air hockey.", age: "5-16 years" },
  { icon: BookOpen, title: "Story & Movie Nights", desc: "Outdoor movie screenings under the stars with popcorn and cozy bean bags.", age: "All ages" },
  { icon: Baby, title: "Tiny Tots Program", desc: "Specialized care for toddlers with sensory play, mini yoga, and nap-time rooms.", age: "1-3 years" },
];

const KidsActivities = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kids Activities | RiO Pool Villas Chirala - Family-Friendly Resort</title>
        <meta name="description" content="Family-friendly luxury resort with supervised kids activities, splash pools, arts & crafts, nature trails, and entertainment at RiO Pool Villas Chirala." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={kidsImg} alt="Kids Activities at RiO Pool Villas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy))/0.3] to-transparent" />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kids Activities</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">Fun, learning, and adventure for every age group</p>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="bg-primary/10 py-6">
        <div className="container-luxury flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-foreground">
          <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Trained & Certified Staff</div>
          <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> 9 AM – 9 PM Daily</div>
          <div className="flex items-center gap-2"><Baby className="w-5 h-5 text-primary" /> Ages 1–16 Welcome</div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle="Fun & Learning" title="Activities for Little Explorers" description="Every day is an adventure at RiO. Our curated programs keep kids engaged, happy, and safe." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((a, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-8 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <a.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">{a.age}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Plan a Family Getaway</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">All kids activities are complimentary for villa guests. Book your family vacation today.</p>
          <Link to="/contact"><Button variant="secondary" size="lg" className="rounded-full px-10">Book Family Package</Button></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsActivities;
