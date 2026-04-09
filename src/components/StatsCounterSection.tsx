import villaTwilight from "@/assets/villa-twilight.jpg";

const StatsCounterSection = () => {
  const stats = [
    { value: "1000+", label: "Happy Guests" },
    { value: "6", label: "Luxury Villas" },
    { value: "4.9", label: "Guest Rating" },
    { value: "24/7", label: "Concierge" },
    { value: "3", label: "Dining Venues" },
    { value: "100%", label: "Beachfront" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={villaTwilight} alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />
      </div>
      <div className="relative z-10 container-luxury px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-3xl md:text-4xl font-extrabold text-primary transition-transform group-hover:scale-110">
                {stat.value}
              </p>
              <div className="w-8 h-0.5 bg-accent mx-auto my-3" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;
