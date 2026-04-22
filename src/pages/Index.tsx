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
        <meta name="description" content="Experience luxury beachaccess private pool villas at RiO Pool Villas, Chirala. Premium resort with infinity pools, ocean views, spa, fine dining, water sports, weddings & honeymoon packages near Ramapuram Beach, Andhra Pradesh." />
        <meta name="keywords" content="luxury pool villas Chirala, beachaccess pool villas Andhra Pradesh, private pool villas India, RiO Pool Villas, beach pool villas near Hyderabad, infinity pool villas, honeymoon pool villas Chirala, family pool villas beach India, Ramapuram Beach pool villas, luxury holiday destination India, best pool villas in Chirala, premium villas AP, weekend getaway Hyderabad, coastal luxury pool villas, romantic getaway India, pool villas near Vijayawada, boutique pool villas AP, beach holiday India, oceanview villa, exclusive beachaccess pool villas, luxury accommodation Chirala, villa with private pool, beachaccess pool villas booking, spa pool villas Andhra Pradesh, fine dining resort India, water sports Chirala, couple getaway AP, premium pool villas booking, coastal luxury pool villas India, beach wedding venue Chirala" />
        <link rel="canonical" href="https://riopoolvillas.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where is RiO Pool Villas located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RiO Pool Villas is located on Ramapuram Beach Road, Vetapalem, Chirala, Andhra Pradesh 523187, India. It is approximately 5 hours from Hyderabad and 3 hours from Vijayawada."
                }
              },
              {
                "@type": "Question",
                "name": "What is the price range for villas at RiO Pool Villas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our luxury pool villas range from ₹18,000 to ₹35,000 per night, depending on the villa size and amenities. All villas include private pools, beach access, and complimentary breakfast."
                }
              },
              {
                "@type": "Question",
                "name": "Does RiO Pool Villas offer wedding and event services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, RiO Pool Villas offers complete wedding and event planning services including beachfront ceremonies, reception arrangements, catering, décor, and accommodation packages for guests."
                }
              },
              {
                "@type": "Question",
                "name": "What amenities are included in the villas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every villa includes a private swimming pool, air conditioning, Wi-Fi, smart TV, king-size beds, fully equipped kitchen, 24/7 concierge, beach access, and complimentary spa and fitness center access."
                }
              }
            ]
          }
        `}</script>
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
            description="Hand crafted pool villas designed for the discerning traveler. Each villa offers private pools, beach access, and world-class amenities."
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
              <Button size="lg" variant="outline" className="rounded-full bg-transparent px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
