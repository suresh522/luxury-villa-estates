import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Waves, UtensilsCrossed, Dumbbell, Palmtree } from "lucide-react";
import spaImg from "@/assets/spa-wellness.jpg";
import diningImg from "@/assets/dining-experience.jpg";
import waterImg from "@/assets/water-sports.jpg";
import yogaImg from "@/assets/yoga-wellness.jpg";

const experiences = [
  {
    icon: Waves,
    title: "Private Pool & Beach",
    description: "Every villa features a private pool with direct beach access to Ramapuram Beach.",
    image: waterImg,
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Candlelit beachside dinners and poolside brunches with locally sourced ingredients.",
    image: diningImg,
  },
  {
    icon: Dumbbell,
    title: "Spa & Wellness",
    description: "Rejuvenate with traditional Ayurvedic treatments and modern wellness therapies.",
    image: spaImg,
  },
  {
    icon: Palmtree,
    title: "Yoga & Meditation",
    description: "Sunrise yoga sessions on the beach deck with certified wellness instructors.",
    image: yogaImg,
  },
];

const ExperiencesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3 text-primary">Curated Experiences</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Beyond Accommodation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
            Immerse yourself in a world of curated luxury experiences designed to create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`group relative overflow-hidden rounded-lg ${
                i === 0 ? "md:row-span-2 min-h-[400px] md:min-h-0" : "min-h-[250px]"
              }`}
            >
              <img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <exp.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 max-w-md">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
            <Button variant="outline" size="lg" className="rounded-full px-10 font-body">
              Explore All Experiences
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
