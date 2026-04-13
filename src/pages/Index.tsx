import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import VillaCard from "@/components/VillaCard";
import AmenitiesSection from "@/components/AmenitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ParallaxSection from "@/components/ParallaxSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GalleryPreviewSection from "@/components/GalleryPreviewSection";
import LifestyleSection from "@/components/LifestyleSection";
import StatsCounterSection from "@/components/StatsCounterSection";
import LocationSection from "@/components/LocationSection";
import AboutPreviewSection from "@/components/AboutPreviewSection";
import VillaSliderSection from "@/components/VillaSliderSection";
import { allVillas } from "@/data/villas";

import poolBar from "@/assets/pool-bar.jpg";
import coupleBeach from "@/assets/couple-beach.jpg";

const Index = () => {
  const featuredVillas = allVillas.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>RiO Pool Villas — Luxury Beachfront Private Pool Villas in Chirala, AP</title>
        <meta name="description" content="Experience luxury beachfront private pool villas at RiO Pool Villas, Chirala. Premium resort with infinity pools, ocean views, spa, fine dining, water sports, weddings & honeymoon packages near Ramapuram Beach, Andhra Pradesh." />
        <meta name="keywords" content="luxury pool villas Chirala, beachfront resort Andhra Pradesh, private pool villas India, RiO Pool Villas, beach resort near Hyderabad, infinity pool resort, honeymoon resort Chirala, family resort beach India, Ramapuram Beach resort, luxury holiday destination India, best resort in Chirala, premium villas AP, weekend getaway Hyderabad, coastal luxury resort, romantic getaway India, pool villa near Vijayawada, boutique resort AP, beach holiday India, oceanview villa, exclusive beach resort" />
        <link rel="canonical" href="https://riopoolvillas.com/" />
      </Helmet>
      <Navbar />

      {/* Hero Slider */}
      <HeroSection />

      {/* About Preview */}
      <AboutPreviewSection />

      {/* Featured Villas */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Our Collection"
            title="Luxury Pool Villas"
            description="Hand-crafted villas designed for the discerning traveler. Each villa offers private pools, beachfront access, and world-class amenities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVillas.map((villa) => (
              <VillaCard key={villa.id} {...villa} price={villa.priceLabel} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/villas">
              <Button variant="outline" size="lg" className="rounded-full px-10">
                View All Villas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Villa Infinite Slider */}
      <VillaSliderSection />

      {/* Lifestyle Bento */}
      <LifestyleSection />

      {/* Stats Counter */}
      <StatsCounterSection />

      {/* Experiences Grid */}
      <ExperiencesSection />

      {/* Parallax CTA */}
      <ParallaxSection image={poolBar}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Your Private Paradise"
            title="Where the Ocean Meets Luxury"
            description="Nestled along the pristine Ramapuram Beach in Chirala, RiO Pool Villas offers an exclusive escape from the ordinary."
            light
          />
          <Link to="/about">
            <Button size="lg" className="rounded-full px-10">
              Discover Our Story
            </Button>
          </Link>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Amenities */}
      <AmenitiesSection />

      {/* Gallery Preview */}
      <GalleryPreviewSection />

      {/* Location */}
      <LocationSection />

      {/* Parallax Lifestyle */}
      <ParallaxSection image={coupleBeach}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Romance & Celebration"
            title="Create Timeless Memories"
            description="From intimate honeymoons to grand celebrations, RiO Pool Villas is the perfect backdrop for life's most precious moments."
            light
          />
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-10">
              Plan Your Event
            </Button>
          </Link>
        </div>
      </ParallaxSection>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready for Paradise?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Book your luxury escape today and experience the magic of RiO Pool Villas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-10">
                Book Now
              </Button>
            </Link>
            <a href="tel:+919988886888">
              <Button size="lg" variant="outline" className="rounded-full px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Call +91 99 8888 6888
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
