import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Hyderabad",
    text: "An absolutely magical experience! The private pool villa exceeded all our expectations. The staff was incredibly attentive and the beachfront location is breathtaking.",
    rating: 5,
  },
  {
    name: "Rajesh & Anitha",
    location: "Bangalore",
    text: "We celebrated our anniversary at RiO and it was the most romantic getaway ever. The private dining experience by the pool was unforgettable.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    location: "Chennai",
    text: "Perfect family vacation! The kids loved the pool and beach. The villa was spacious, clean, and beautifully designed. Will definitely return.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Guests Say"
          description="Hear from travelers who've experienced the RiO Pool Villas difference."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-8 relative"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
