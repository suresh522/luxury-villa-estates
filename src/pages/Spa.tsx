import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";
import { Droplets, Flower2, Wind, Sun } from "lucide-react";

import spaWellness from "@/assets/spa-wellness.jpg";
import yogaWellness from "@/assets/yoga-wellness.jpg";
import villaBathroom from "@/assets/villa-bathroom.jpg";
import cabanaBeach from "@/assets/cabana-beach.jpg";

const treatments = [
  {
    title: "Signature Ocean Massage",
    duration: "90 min",
    price: "₹5,500",
    desc: "A deeply relaxing full-body massage using warm coconut oil infused with coastal herbs.",
    icon: Droplets,
  },
  {
    title: "Ayurvedic Rejuvenation",
    duration: "120 min",
    price: "₹7,000",
    desc: "Traditional Ayurvedic therapy combining Shirodhara, Abhyanga, and herbal steam.",
    icon: Flower2,
  },
  {
    title: "Couples Spa Retreat",
    duration: "150 min",
    price: "₹12,000",
    desc: "An intimate spa experience for two, featuring synchronized massages and a private jacuzzi.",
    icon: Wind,
  },
  {
    title: "Sunrise Yoga & Meditation",
    duration: "60 min",
    price: "₹2,000",
    desc: "Begin your day with beachfront yoga guided by a certified instructor.",
    icon: Sun,
  },
];

const Spa = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Luxury Spa & Wellness — RiO Pool Villas Chirala | Rejuvenate by the Ocean</title>
        <meta name="description" content="Indulge in luxury spa treatments and wellness therapies at RiO Pool Villas. Ocean massage, Ayurvedic therapy, yoga sessions, and holistic wellness on Chirala beach." />
        <meta name="keywords" content="luxury spa Chirala, wellness resort Andhra Pradesh, ocean massage, Ayurvedic spa India, yoga retreat beach, spa treatments resort" />
        <link rel="canonical" href="https://riopoolvillas.com/spa" />
      </Helmet>
      <Navbar />

      <ParallaxSection image={spaWellness} className="pt-40 pb-20">
        <SectionHeading
          subtitle="Wellness & Rejuvenation"
          title="Spa & Wellness"
          description="Restore your body and soul in our world-class spa sanctuary."
          light
        />
      </ParallaxSection>

      {/* Spa philosophy */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img src={villaBathroom} alt="Spa treatment room" loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover" style={{ boxShadow: "var(--shadow-elevated)" }} />
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Holistic Wellness</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Ancient Wisdom, <span className="text-gradient">Modern Luxury</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our spa blends centuries-old Ayurvedic traditions with contemporary wellness practices.
                Each treatment uses organic, locally sourced ingredients to nurture your body and spirit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With private treatment rooms overlooking the ocean, outdoor rain showers, and a meditation
                garden, every moment is designed for complete tranquility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeading subtitle="Our Treatments" title="Signature Experiences" description="Curated wellness journeys tailored to your needs." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((t) => (
              <div key={t.title} className="bg-card rounded-2xl p-8 hover-lift" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <t.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-2xl font-extrabold text-primary">{t.price}</span>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-1">{t.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{t.duration}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga CTA */}
      <ParallaxSection image={yogaWellness}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Mind & Body"
            title="Beachfront Yoga & Meditation"
            description="Join our daily sunrise yoga sessions on the pristine sands of Ramapuram Beach."
            light
          />
        </div>
      </ParallaxSection>

      {/* Facilities grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle="Facilities" title="Wellness Spaces" description="Purpose-built spaces for your rejuvenation journey." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Private Treatment Rooms", desc: "Ocean-view suites with premium amenities for individualized care.", image: villaBathroom },
              { title: "Meditation Garden", desc: "A serene zen garden surrounded by tropical flora and water features.", image: cabanaBeach },
              { title: "Yoga Deck", desc: "An elevated wooden platform on the beach for sunrise and sunset sessions.", image: yogaWellness },
            ].map((f) => (
              <div key={f.title} className="group rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={f.image} alt={f.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
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

export default Spa;
