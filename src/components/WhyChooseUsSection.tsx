import { Shield, Star, Clock, MapPin, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Private & Exclusive",
    description: "Gated beachfront property with 24/7 security ensuring your complete privacy and peace of mind.",
  },
  {
    icon: Star,
    title: "5-Star Amenities",
    description: "World-class facilities including infinity pools, spa, fitness center, and fine dining restaurants.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description: "Dedicated personal butler and concierge service available round the clock for every need.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Nestled along pristine Ramapuram Beach with easy access from Hyderabad and Vijayawada.",
  },
  {
    icon: Headphones,
    title: "Personalized Service",
    description: "Customized experiences from airport transfers to in-villa dining and cultural excursions.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Architect-designed villas blending modern luxury with traditional coastal Indian aesthetics.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3 text-primary">Why RiO</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            The RiO Difference
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
            What sets us apart from every other luxury resort on the coast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-lg bg-card hover-lift transition-all"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
