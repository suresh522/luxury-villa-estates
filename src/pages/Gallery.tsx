import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import villa5 from "@/assets/villa-5.jpg";
import villa6 from "@/assets/villa-6.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import villaLiving from "@/assets/villa-living.jpg";
import villaBedroom from "@/assets/villa-bedroom.jpg";
import villaBathroom from "@/assets/villa-bathroom.jpg";
import diningExp from "@/assets/dining-experience.jpg";
import spaWellness from "@/assets/spa-wellness.jpg";
import poolBar from "@/assets/pool-bar.jpg";
import waterSports from "@/assets/water-sports.jpg";
import coupleBeach from "@/assets/couple-beach.jpg";
import yogaWellness from "@/assets/yoga-wellness.jpg";

const categories = ["All", "Villas", "Pool", "Beach", "Interiors", "Dining", "Wellness"];

const images = [
  { src: heroSlide1, category: "Pool", alt: "Infinity pool at sunset" },
  { src: villa1, category: "Villas", alt: "Ocean Breeze Villa" },
  { src: villaBedroom, category: "Interiors", alt: "Luxury master bedroom" },
  { src: heroSlide3, category: "Villas", alt: "Aerial resort view" },
  { src: poolBar, category: "Pool", alt: "Pool bar and lounge" },
  { src: diningExp, category: "Dining", alt: "Beachside candlelit dinner" },
  { src: villa2, category: "Villas", alt: "Sunset Haven Suite" },
  { src: villaLiving, category: "Interiors", alt: "Open-plan living area" },
  { src: waterSports, category: "Beach", alt: "Water sports adventure" },
  { src: villa3, category: "Villas", alt: "Royal Terrace Villa" },
  { src: spaWellness, category: "Wellness", alt: "Spa treatment room" },
  { src: heroSlide2, category: "Pool", alt: "Night pool ambiance" },
  { src: villa5, category: "Villas", alt: "Tropical Paradise Villa" },
  { src: villaBathroom, category: "Interiors", alt: "Luxury spa bathroom" },
  { src: coupleBeach, category: "Beach", alt: "Romantic beach walk" },
  { src: villa4, category: "Villas", alt: "Spa Retreat Villa" },
  { src: yogaWellness, category: "Wellness", alt: "Beach yoga session" },
  { src: heroSlide4, category: "Dining", alt: "Sunset terrace dining" },
  { src: villa6, category: "Villas", alt: "Moonlight Villa" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      <ParallaxSection image={heroSlide1} className="pt-40 pb-20">
        <SectionHeading subtitle="Gallery" title="Captured Moments" description="A visual journey through the beauty of RiO Pool Villas." light />
      </ParallaxSection>

      <section className="section-padding">
        <div className="container-luxury">
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
