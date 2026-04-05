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

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import parallaxAerial from "@/assets/parallax-aerial.jpg";
import parallaxDining from "@/assets/parallax-dining.jpg";

const villas = [
  {
    id: "ocean-breeze",
    title: "Ocean Breeze Villa",
    description: "A stunning beachfront villa with private infinity pool and unobstructed ocean views.",
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
    description: "Elegant suite with panoramic sunset views, king bed, and luxurious interiors.",
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
    description: "Two-story villa with rooftop jacuzzi, private garden, and outdoor dining area.",
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
    description: "Wellness-focused villa with private spa area, meditation garden, and beach access.",
    image: villa4,
    price: "₹22,000/night",
    bedrooms: 2,
    bathrooms: 3,
    guests: 4,
    area: "2200",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Featured Villas */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Our Collection"
            title="Luxury Pool Villas"
            description="Hand-crafted villas designed for the discerning traveler. Each villa offers private pools, beachfront access, and world-class amenities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {villas.map((villa) => (
              <VillaCard key={villa.id} {...villa} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/villas">
              <Button variant="outline" size="lg" className="rounded-full px-10 font-body">
                View All Villas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection image={parallaxAerial}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Your Private Paradise"
            title="Where the Ocean Meets Luxury"
            description="Nestled along the pristine Ramapuram Beach in Chirala, RiO Pool Villas offers an exclusive escape from the ordinary."
            light
          />
          <Link to="/about">
            <Button size="lg" className="rounded-full px-10 font-body">
              Discover Our Story
            </Button>
          </Link>
        </div>
      </ParallaxSection>

      {/* Amenities */}
      <AmenitiesSection />

      {/* Parallax Dining */}
      <ParallaxSection image={parallaxDining}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Dining"
            title="Culinary Excellence"
            description="From intimate beachside dinners to poolside brunches, our chefs craft exquisite meals using the freshest local ingredients."
            light
          />
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-10 font-body">
              Reserve a Table
            </Button>
          </Link>
        </div>
      </ParallaxSection>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready for Paradise?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Book your luxury escape today and experience the magic of RiO Pool Villas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-10 font-body">
                Book Now
              </Button>
            </Link>
            <a href="tel:+919988886888">
              <Button size="lg" variant="outline" className="rounded-full px-10 font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
