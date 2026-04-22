import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    image: heroSlide1,
    subtitle: "Welcome to Paradise",
    title: "RiO Pool",
    highlight: "Villas",
    description: "Discover unmatched luxury at Chirala's premier beachaccess pool villas. Private pool villas where the ocean meets your doorstep.",
  },
  {
    image: heroSlide2,
    subtitle: "Starlit Escapes",
    title: "Moonlit",
    highlight: "Luxury",
    description: "Experience magical evenings with illuminated pools, starry skies, and the soothing sound of ocean waves.",
  },
  {
    image: heroSlide3,
    subtitle: "Aerial Paradise",
    title: "BeachAccess",
    highlight: "Villas",
    description: "Nestled along pristine Ramapuram Beach, our exclusive resort offers an unparalleled coastal retreat.",
  },
  {
    image: heroSlide4,
    subtitle: "Golden Moments",
    title: "Sunset",
    highlight: "Bliss",
    description: "Wake up to breathtaking ocean views and end your day with spectacular sunsets from your private terrace.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[400px] lg:min-h-[700px]  md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.1)",
          }}
        >
          <img
            src={slide.image}
            alt={`${slide.title} ${slide.highlight}`}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            {...(i !== 0 ? { loading: "lazy" as const } : {})}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="gold-divider mx-auto mb-8" />
        <p
          key={`sub-${current}`}
          className="font-body text-sm md:text-base uppercase tracking-[0.4em] text-primary-foreground/80 mb-4 animate-fade-in-up"
        >
          {slides[current].subtitle}
        </p>
        <h1
          key={`title-${current}`}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {slides[current].title}
          <span className="block text-primary">{slides[current].highlight}</span>
        </h1>
        <p
          key={`desc-${current}`}
          className="font-body text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {slides[current].description}
        </p>
        <div
          className="flex flex-row sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/villas">
            <Button size="lg" className="rounded-full px-5 py-5 md:px-10 md:py-6 lg:px-10 lg:py-6 text-base font-body">
              Explore Villas
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-5 py-6 md:px-10 md:py-6 lg:px-10 lg:py-6 text-base font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Book Your Stay
            </Button>
          </Link>
        </div>
      </div>

      {/* Nav Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-4 ">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;
