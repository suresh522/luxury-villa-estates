import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VillaCard from "@/components/VillaCard";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";
import { allVillas } from "@/data/villas";

import heroSlide3 from "@/assets/hero-slide-3.jpg";

const Villas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <ParallaxSection image={heroSlide3} className="pt-40 pb-20">
        <SectionHeading
          subtitle="Our Collection"
          title="Luxury Pool Villas"
          description="Choose from our handpicked collection of premium beachfront pool villas, each designed for unparalleled comfort."
          light
        />
      </ParallaxSection>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVillas.map((villa) => (
              <VillaCard key={villa.id} {...villa} price={villa.priceLabel} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Villas;
