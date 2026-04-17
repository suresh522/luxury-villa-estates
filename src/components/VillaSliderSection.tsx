import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bed, Bath, Users } from "lucide-react";
import { allVillas } from "@/data/villas";
import SectionHeading from "@/components/SectionHeading";

const VillaSliderSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const villas = allVillas;

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % villas.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [villas.length, isTransitioning]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((p) => (p - 1 + villas.length) % villas.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [villas.length, isTransitioning]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const getIndex = (offset: number) => (current + offset) % villas.length;

  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 ">
          <SectionHeading
            subtitle="Explore Our Collection"
            title="Handpicked Luxury Villas"
            description="Each villa is a masterpiece of design and comfort, offering private pools and ocean views."
          />
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Previous villa"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Next villa"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[0, 1, 2].map((offset) => {
            const villa = villas[getIndex(offset)];
            return (
              <Link
                to={`/villa/${villa.id}`}
                key={`${current}-${offset}`}
                className="group block animate-fade-in-up"
                style={{ animationDuration: '0.6s' }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src={villa.image}
                    alt={villa.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold">
                    {villa.priceLabel}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{villa.title}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {villa.description}
                    </p>
                    <div className="flex items-center gap-4 text-white/80 text-xs">
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5" /> {villa.bedrooms} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5" /> {villa.bathrooms} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {villa.guests} Guests
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {villas.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to villa ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/villas">
            <Button variant="outline" size="lg" className="rounded-full px-10">
              View All Villas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VillaSliderSection;
