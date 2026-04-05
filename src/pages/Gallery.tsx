import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroVilla from "@/assets/hero-villa.jpg";
import parallaxDining from "@/assets/parallax-dining.jpg";
import parallaxAerial from "@/assets/parallax-aerial.jpg";

const categories = ["All", "Villas", "Pool", "Beach", "Interiors", "Dining"];

const images = [
  { src: heroVilla, category: "Villas", alt: "Beachfront villa at sunset" },
  { src: villa1, category: "Pool", alt: "Private infinity pool" },
  { src: villa2, category: "Interiors", alt: "Luxury bedroom suite" },
  { src: villa3, category: "Villas", alt: "Royal terrace villa" },
  { src: villa4, category: "Beach", alt: "Beachfront spa pavilion" },
  { src: gallery1, category: "Interiors", alt: "Tropical living room" },
  { src: gallery2, category: "Pool", alt: "Pool at night" },
  { src: gallery3, category: "Beach", alt: "Beach sunrise" },
  { src: gallery4, category: "Interiors", alt: "Outdoor bathroom" },
  { src: parallaxDining, category: "Dining", alt: "Candlelit dinner" },
  { src: parallaxAerial, category: "Villas", alt: "Aerial resort view" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      <ParallaxSection image={gallery3} className="pt-40 pb-20">
        <SectionHeading subtitle="Gallery" title="Captured Moments" description="A visual journey through the beauty of RiO Pool Villas." light />
      </ParallaxSection>

      <section className="section-padding">
        <div className="container-luxury">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full text-sm font-body transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all flex items-end p-4">
                  <p className="text-primary-foreground text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
