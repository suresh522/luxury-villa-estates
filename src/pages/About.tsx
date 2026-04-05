import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";
import AmenitiesSection from "@/components/AmenitiesSection";

import parallaxAerial from "@/assets/parallax-aerial.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <ParallaxSection image={parallaxAerial} className="pt-40 pb-20">
        <SectionHeading subtitle="Our Story" title="About RiO Pool Villas" description="Where luxury meets the serene beauty of Andhra Pradesh's coastline." light />
      </ParallaxSection>

      {/* Story */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Since 2020" title="A Vision of Coastal Luxury" align="left" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born from a passion for hospitality and the breathtaking beauty of Chirala's coastline, RiO Pool Villas was conceived as a sanctuary where travelers can immerse themselves in the lap of luxury while staying connected to nature.
                </p>
                <p>
                  Each villa has been meticulously designed by award-winning architects, blending modern minimalism with traditional Indian coastal aesthetics. Our private pools, lush gardens, and direct beach access create an atmosphere of unparalleled tranquility.
                </p>
                <p>
                  Located along Ramapuram Beach Road, our resort offers the perfect escape from city life while remaining easily accessible from major cities in Andhra Pradesh and Telangana.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={gallery1} alt="Villa living room" loading="lazy" className="rounded-lg w-full" style={{ boxShadow: 'var(--shadow-elevated)' }} />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
                <p className="font-display text-3xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container-luxury px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Happy Guests" },
              { value: "6", label: "Luxury Villas" },
              { value: "4.9★", label: "Guest Rating" },
              { value: "24/7", label: "Concierge Service" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Values */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle="Our Promise" title="What Makes Us Special" description="We don't just offer accommodation — we create memories that last a lifetime." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Personalized Service", desc: "Every guest receives tailored attention from our dedicated concierge team, ensuring your stay is exactly how you envision it." },
              { title: "Sustainable Luxury", desc: "We're committed to eco-friendly practices, from solar-powered amenities to locally sourced organic cuisine." },
              { title: "Cultural Immersion", desc: "Experience authentic Andhra Pradesh culture through curated local experiences, traditional cuisine, and cultural performances." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="gold-divider mb-4" />
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AmenitiesSection />
      <Footer />
    </div>
  );
};

export default About;
