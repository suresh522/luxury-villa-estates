import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";
import { UtensilsCrossed, Wine, Leaf, Clock } from "lucide-react";

import beachDining from "@/assets/beach-fine-dining.jpg";
import diningExp from "@/assets/dining-experience.jpg";
import poolBar from "@/assets/pool-bar.jpg";
import villaOpen from "@/assets/villa-open-living.jpg";

const menus = [
  {
    title: "Sunrise Breakfast",
    time: "7:00 AM – 10:30 AM",
    desc: "Start your day with a curated breakfast by the pool. Fresh tropical fruits, artisan breads, regional specialties and international favorites.",
    image: diningExp,
  },
  {
    title: "Poolside Lunch",
    time: "12:00 PM – 3:00 PM",
    desc: "Light bites, grilled seafood, and refreshing cocktails served right to your sun lounger or cabana.",
    image: poolBar,
  },
  {
    title: "Sunset Cocktails",
    time: "5:00 PM – 7:00 PM",
    desc: "Watch the sky turn gold as our mixologists craft artisanal cocktails using local ingredients and premium spirits.",
    image: villaOpen,
  },
  {
    title: "Candlelit Dinner",
    time: "7:30 PM – 10:30 PM",
    desc: "An intimate dining experience under the stars. Multi-course menus featuring the finest Andhra and international cuisine.",
    image: beachDining,
  },
];

const Dining = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Fine Dining & Restaurants — RiO Pool Villas Chirala | Farm-to-Table</title>
        <meta name="description" content="Experience world-class farm-to-table dining at RiO Pool Villas. Beachfront restaurant, private dining, poolside bar, and curated culinary experiences in Chirala, AP." />
        <meta name="keywords" content="fine dining Chirala, beachfront restaurant Andhra Pradesh, luxury resort dining, farm to table resort India, pool bar villa, private dining experience" />
        <link rel="canonical" href="https://riopoolvillas.com/dining" />
      </Helmet>
      <Navbar />

      <ParallaxSection image={beachDining} className="pt-40 pb-20">
        <SectionHeading
          subtitle="Culinary Excellence"
          title="Fine Dining & Experiences"
          description="Savor exquisite cuisine crafted with locally sourced ingredients and international flair."
          light
        />
      </ParallaxSection>

      {/* Dining philosophy */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Farm to Table, <span className="text-gradient">Ocean to Plate</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our culinary team sources the freshest ingredients from local farms, organic gardens,
                and the Bay of Bengal. Every dish tells a story of tradition, innovation, and passion.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: UtensilsCrossed, label: "Multi-Cuisine" },
                  { icon: Wine, label: "Premium Bar" },
                  { icon: Leaf, label: "Organic Produce" },
                  { icon: Clock, label: "In-Villa Dining" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-secondary-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src={diningExp} alt="Fine dining experience" loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover" style={{ boxShadow: "var(--shadow-elevated)" }} />
          </div>
        </div>
      </section>

      {/* Menu timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeading subtitle="Daily Menu" title="A Day of Culinary Delights" description="From sunrise to starlight, every meal is a celebration." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menus.map((item) => (
              <div key={item.title} className="group bg-card rounded-2xl overflow-hidden hover-lift" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {item.time}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;
