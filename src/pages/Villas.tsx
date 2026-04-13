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
      <Helmet>
        <title>Luxury Pool Villas Collection — RiO Pool Villas Chirala | Book Now</title>
        <meta name="description" content="Browse our handpicked collection of luxury private pool villas in Chirala. Beachfront villas with infinity pools, ocean views, 2-4 bedrooms. Book your dream villa at RiO Pool Villas." />
        <meta name="keywords" content="luxury pool villas Chirala, private pool villa booking, beachfront villa Andhra Pradesh, villa with infinity pool, premium villa accommodation, ocean view villa India" />
        <link rel="canonical" href="https://riopoolvillas.com/villas" />
      </Helmet>
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
