import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import { Shield, Heart, Leaf, Users, Globe, Sparkles, Award, Star, CheckCircle } from "lucide-react";

import heroSlide4 from "@/assets/hero-slide-4.jpg";
import villaLiving from "@/assets/villa-living.jpg";
import teamStaff from "@/assets/team-staff.jpg";
import coupleBeach from "@/assets/couple-beach.jpg";
import spaWellness from "@/assets/spa-wellness.jpg";
import poolBar from "@/assets/pool-bar.jpg";
import diningExp from "@/assets/dining-experience.jpg";
import conciergeLobby from "@/assets/concierge-lobby.jpg";
import aerialResort from "@/assets/aerial-resort.jpg";
import infinityPool from "@/assets/infinity-pool-sunset.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <ParallaxSection image={heroSlide4} className="pt-40 pb-20">
        <SectionHeading subtitle="Our Story" title="About RiO Pool Villas" description="Where luxury meets the serene beauty of Andhra Pradesh's coastline." light />
      </ParallaxSection>

      {/* Story - Luxury split */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Since 2020</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                A Vision of <span className="text-gradient">Coastal Luxury</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Born from a passion for hospitality and the breathtaking beauty of Chirala's coastline, RiO Pool Villas was conceived as a sanctuary where travelers can immerse themselves in the lap of luxury while staying connected to nature.</p>
                <p>Each villa has been meticulously designed by award-winning architects, blending modern minimalism with traditional Indian coastal aesthetics. Our private pools, lush gardens, and direct beach access create an atmosphere of unparalleled tranquility.</p>
                <p>Located along Ramapuram Beach Road, our resort offers the perfect escape from city life while remaining easily accessible from major cities in Andhra Pradesh and Telangana.</p>
              </div>
              <div className="flex gap-8 mt-8 pt-8 border-t border-border">
                {[
                  { value: "5+", label: "Years of Excellence" },
                  { value: "1000+", label: "Happy Guests" },
                  { value: "4.9★", label: "Guest Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={villaLiving} alt="Villa interior" loading="lazy" className="rounded-2xl w-full" style={{ boxShadow: 'var(--shadow-elevated)' }} />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl hidden md:block">
                <Award className="w-8 h-8 mb-2" />
                <p className="text-sm font-bold">Award Winning</p>
                <p className="text-xs opacity-80">Hospitality 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image band with floating cards */}
      <section className="relative py-0">
        <div className="relative h-[400px] overflow-hidden">
          <img src={aerialResort} alt="Aerial view" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="container-luxury px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "5-Star Experience", desc: "Every detail crafted for perfection, from thread count to turndown service." },
              { icon: Shield, title: "Complete Privacy", desc: "Gated villas with private pools ensuring your personal sanctuary." },
              { icon: Globe, title: "World-Class Standards", desc: "International hospitality benchmarks with local warmth and charm." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 text-center" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - reversed layout */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src={conciergeLobby} alt="Concierge service" loading="lazy" className="rounded-2xl w-full" style={{ boxShadow: 'var(--shadow-elevated)' }} />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Hospitality from the <span className="text-gradient">Heart</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>At RiO Pool Villas, we believe that true luxury is about personalized experiences. Our dedicated team of hospitality professionals is committed to anticipating your every need.</p>
                <p>From the moment you arrive to the moment you depart, every interaction is designed to make you feel valued, comfortable, and truly at home in paradise.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Shield, label: "Safety First" },
                  { icon: Heart, label: "Guest Care" },
                  { icon: Leaf, label: "Eco-Friendly" },
                  { icon: Globe, label: "World Class" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-secondary-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Commitment - checklist style */}
      <section className="section-padding bg-navy">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-8">
                The RiO <span className="text-primary">Promise</span>
              </h2>
              <div className="space-y-5">
                {[
                  "Handpicked premium amenities in every villa",
                  "Farm-to-table organic dining experiences",
                  "Personalized concierge for every guest",
                  "Sustainable & eco-conscious operations",
                  "24/7 security and privacy assurance",
                  "Curated local cultural experiences",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-primary-foreground/80 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={infinityPool} alt="Luxury commitment" loading="lazy" className="rounded-2xl w-full" style={{ boxShadow: 'var(--shadow-elevated)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeading subtitle="A Day at RiO" title="Your Perfect Day" description="Experience a typical day of luxury and relaxation at our resort." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "6:00 AM", title: "Sunrise Yoga", desc: "Begin your day with beachfront yoga and meditation.", image: spaWellness },
              { time: "9:00 AM", title: "Gourmet Breakfast", desc: "Enjoy a curated breakfast by the pool or in your villa.", image: diningExp },
              { time: "2:00 PM", title: "Beach & Pool", desc: "Relax by your private pool or explore the pristine beach.", image: poolBar },
              { time: "7:00 PM", title: "Sunset Dinner", desc: "Indulge in a candlelit dinner as the sun sets.", image: coupleBeach },
            ].map((item) => (
              <div key={item.time} className="group bg-card rounded-2xl overflow-hidden hover-lift" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {item.time}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
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
              { icon: Sparkles, title: "Personalized Service", desc: "Every guest receives tailored attention from our dedicated concierge team, ensuring your stay is exactly how you envision it.", image: teamStaff },
              { icon: Leaf, title: "Sustainable Luxury", desc: "We're committed to eco-friendly practices, from solar-powered amenities to locally sourced organic cuisine.", image: spaWellness },
              { icon: Users, title: "Cultural Immersion", desc: "Experience authentic Andhra Pradesh culture through curated local experiences, traditional cuisine, and cultural performances.", image: diningExp },
            ].map((item) => (
              <div key={item.title} className="group bg-card rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <div className="gold-divider mb-4" />
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
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
