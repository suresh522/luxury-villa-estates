import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VillaCard from "@/components/VillaCard";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import parallaxAerial from "@/assets/parallax-aerial.jpg";

const allVillas = [
  {
    id: "ocean-breeze",
    title: "Ocean Breeze Villa",
    description: "A stunning beachfront villa with private infinity pool and unobstructed ocean views. Perfect for families and couples.",
    image: villa1,
    price: "₹25,000/night",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    area: "2500",
  },
  {
    id: "sunset-haven",
    title: "Sunset Haven Suite",
    description: "Elegant suite with panoramic sunset views, king bed, and luxurious interiors. Romantic escape redefined.",
    image: villa2,
    price: "₹18,000/night",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    area: "1800",
  },
  {
    id: "royal-terrace",
    title: "Royal Terrace Villa",
    description: "Two-story villa with rooftop jacuzzi, private garden, and outdoor dining area. The ultimate luxury retreat.",
    image: villa3,
    price: "₹35,000/night",
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    area: "3500",
  },
  {
    id: "spa-retreat",
    title: "Spa Retreat Villa",
    description: "Wellness-focused villa with private spa area, meditation garden, and direct beach access.",
    image: villa4,
    price: "₹22,000/night",
    bedrooms: 2,
    bathrooms: 3,
    guests: 4,
    area: "2200",
  },
  {
    id: "tropical-paradise",
    title: "Tropical Paradise Villa",
    description: "Open-concept living surrounded by lush tropical gardens with premium rattan furnishings and ocean breeze.",
    image: gallery1,
    price: "₹28,000/night",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    area: "2800",
  },
  {
    id: "moonlight-villa",
    title: "Moonlight Villa",
    description: "Experience magical evenings with illuminated pool, starlit skies, and premium nighttime ambiance.",
    image: gallery2,
    price: "₹30,000/night",
    bedrooms: 3,
    bathrooms: 4,
    guests: 8,
    area: "3200",
  },
];

const Villas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <ParallaxSection image={parallaxAerial} className="pt-40 pb-20">
        <SectionHeading
          subtitle="Our Collection"
          title="Luxury Pool Villas"
          description="Choose from our handpicked collection of premium beachfront pool villas, each designed for unparalleled comfort."
          light
        />
      </ParallaxSection>

      {/* Villas Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVillas.map((villa) => (
              <VillaCard key={villa.id} {...villa} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Villas;
