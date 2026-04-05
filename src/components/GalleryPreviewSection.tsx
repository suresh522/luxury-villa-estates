import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import villaLiving from "@/assets/villa-living.jpg";
import villaBedroom from "@/assets/villa-bedroom.jpg";
import villaBathroom from "@/assets/villa-bathroom.jpg";
import poolBar from "@/assets/pool-bar.jpg";
import coupleBeach from "@/assets/couple-beach.jpg";

const images = [
  { src: villaLiving, alt: "Villa living room", span: "md:col-span-2 md:row-span-2" },
  { src: villaBedroom, alt: "Luxury bedroom", span: "" },
  { src: villaBathroom, alt: "Spa bathroom", span: "" },
  { src: poolBar, alt: "Pool bar", span: "md:col-span-2" },
  { src: coupleBeach, alt: "Beach walk", span: "" },
];

const GalleryPreviewSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3 text-primary">Visual Journey</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            A Glimpse of Paradise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="rounded-full px-10 font-body">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
