import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";
import { Waves, Camera, Palette, Music, Compass, Sparkles } from "lucide-react";

import waterSports from "@/assets/water-sports.jpg";
import coupleBeach from "@/assets/couple-beach.jpg";
import beachDining from "@/assets/beach-fine-dining.jpg";
import villaTwilight from "@/assets/villa-twilight.jpg";
import cabanaBeach from "@/assets/cabana-beach.jpg";
import villaExterior from "@/assets/villa-exterior-pool.jpg";

const experiences = [
  {
    title: "Water Sports & Adventure",
    desc: "Surfing, kayaking, jet skiing, and parasailing along the pristine Bay of Bengal coastline.",
    image: waterSports,
    icon: Waves,
  },
  {
    title: "Romantic Beach Experiences",
    desc: "Private candlelit dinners on the beach, couples spa treatments, and sunset catamaran cruises.",
    image: coupleBeach,
    icon: Sparkles,
  },
  {
    title: "Cultural Explorations",
    desc: "Guided tours of local temples, weaving villages, and traditional Andhra Pradesh heritage sites.",
    image: villaTwilight,
    icon: Compass,
  },
  {
    title: "Photography Tours",
    desc: "Capture the beauty of Chirala with guided golden hour photography sessions along the coast.",
    image: cabanaBeach,
    icon: Camera,
  },
  {
    title: "Art & Craft Workshops",
    desc: "Learn traditional Chirala handloom weaving, pottery, and local art forms from master artisans.",
    image: villaExterior,
    icon: Palette,
  },
  {
    title: "Live Entertainment",
    desc: "Evening performances featuring classical dance, live music, and cultural shows under the stars.",
    image: beachDining,
    icon: Music,
  },
];

const Experiences = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <ParallaxSection image={waterSports} className="pt-40 pb-20">
        <SectionHeading
          subtitle="Adventures Await"
          title="Curated Experiences"
          description="From thrilling water sports to serene cultural explorations, every moment is unforgettable."
          light
        />
      </ParallaxSection>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="group bg-card rounded-2xl overflow-hidden hover-lift"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <exp.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection image={coupleBeach}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Custom Experiences"
            title="Let Us Plan Your Perfect Day"
            description="Our concierge team can create bespoke experiences tailored to your preferences. Contact us to design your dream itinerary."
            light
          />
        </div>
      </ParallaxSection>

      <Footer />
    </div>
  );
};

export default Experiences;
