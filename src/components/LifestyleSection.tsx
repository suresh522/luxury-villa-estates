import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import infinityPool from "@/assets/infinity-pool-sunset.jpg";
import cabanaBeach from "@/assets/cabana-beach.jpg";
import beachDining from "@/assets/beach-dining-night.jpg";

const LifestyleSection = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">The RiO Lifestyle</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Indulge in <span className="text-gradient">Extraordinary</span>
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large card */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden min-h-[480px]">
            <img src={infinityPool} alt="Infinity pool at sunset" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-accent text-xs font-bold uppercase tracking-wider">Sunset Sessions</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mt-2">Infinity Pool & Ocean Views</h3>
              <p className="text-primary-foreground/70 text-sm mt-2 max-w-md">
                Watch the sun melt into the Bay of Bengal from your private infinity pool.
              </p>
            </div>
          </div>

          {/* Stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="group relative rounded-2xl overflow-hidden min-h-[230px] flex-1">
              <img src={cabanaBeach} alt="Beach cabana" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">Relaxation</span>
                <h3 className="text-xl font-bold text-primary-foreground mt-1">Private Beach Cabanas</h3>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden min-h-[230px] flex-1">
              <img src={beachDining} alt="Beach dining" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">Fine Dining</span>
                <h3 className="text-xl font-bold text-primary-foreground mt-1">Candlelit Beach Dinners</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-10">
              Reserve Your Experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
