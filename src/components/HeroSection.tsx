import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-villa.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury beachfront pool villa at golden hour" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="gold-divider mx-auto mb-8" />
        <p className="font-body text-sm md:text-base uppercase tracking-[0.4em] text-primary-foreground/80 mb-4 fade-in-up">
          Welcome to Paradise
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6 fade-in-up stagger-1">
          RiO Pool
          <span className="block text-primary">Villas</span>
        </h1>
        <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up stagger-2">
          Discover unmatched luxury at Chirala's premier beachfront resort. Private pool villas where the ocean meets your doorstep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
          <Link to="/villas">
            <Button size="lg" className="rounded-full px-10 py-6 text-base font-body">
              Explore Villas
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-base font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Book Your Stay
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;
