interface ParallaxSectionProps {
  image: string;
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection = ({ image, children, className = "" }: ParallaxSectionProps) => {
  return (
    <section className={`relative py-24 md:py-36 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 parallax-overlay" />
      <div className="relative z-10 container-luxury px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
