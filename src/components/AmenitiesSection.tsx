import { Waves, UtensilsCrossed, Sparkles, Dumbbell, Wifi, Car, ShieldCheck, Palmtree } from "lucide-react";
import SectionHeading from "./SectionHeading";

const amenities = [
  { icon: Waves, title: "Private Pool", desc: "Each villa features a stunning private infinity pool" },
  { icon: Palmtree, title: "Beach Access", desc: "Direct access to pristine Ramapuram Beach" },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "In-villa gourmet dining with personal chef" },
  { icon: Sparkles, title: "Spa & Wellness", desc: "Traditional Ayurvedic spa treatments" },
  { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art gym with ocean views" },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Complimentary fiber-optic internet" },
  { icon: Car, title: "Airport Transfer", desc: "Luxury car pickup and drop service" },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Round-the-clock security and concierge" },
];

const AmenitiesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Amenities"
          title="World-Class Experiences"
          description="Every detail crafted to deliver an unforgettable luxury experience at RiO Pool Villas."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-6 text-center hover-lift cursor-default"
              style={{ boxShadow: 'var(--shadow-soft)', animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="font-display text-base font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
