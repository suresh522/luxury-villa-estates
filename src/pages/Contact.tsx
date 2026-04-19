import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ParallaxSection from "@/components/ParallaxSection";

import parallaxDining from "@/assets/parallax-dining.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Sent!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact & Book — RiO Pool Villas Chirala | Enquiry & Reservations</title>
        <meta name="description" content="Contact RiO Pool Villas for bookings, enquiries, and reservations. Luxury beachfront pool villas in Chirala, Andhra Pradesh. Call +91 99 8888 6888 or email us." />
        <meta name="keywords" content="book luxury villa Chirala, RiO Pool Villas contact, resort reservation Andhra Pradesh, beach villa enquiry, luxury stay booking India" />
        <link rel="canonical" href="https://riopoolvillas.com/contact" />
      </Helmet>
      <Navbar />

      <ParallaxSection image={parallaxDining} className="pt-40 pb-20">
        <SectionHeading subtitle="Get in Touch" title="Contact Us" description="Plan your luxury escape at RiO Pool Villas. We're here to make your dream vacation a reality." light />
      </ParallaxSection>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <div className="gold-divider mb-8" />
              </div>

              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: "Ramapuram Beach Rd, Vetapalem, Chirala, Andhra Pradesh, India-523187",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 99 8888 6888",
                  href: "tel:+919988886888",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "riopoolvillas@gmail.com",
                  href: "mailto:riopoolvillas@gmail.com",
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  content: "24/7 We never sleep, so you can rest easy",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-dark" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div className="rounded-lg overflow-hidden aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.0!2d80.35!3d15.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ5JzQ4LjAiTiA4MMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RiO Pool Villas Location"
                />
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg p-8 md:p-10" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                <h3 className="font-display text-2xl font-semibold text-card-foreground mb-2">Book Your Stay</h3>
                <p className="text-sm text-muted-foreground mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-body font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-body font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="rounded-lg" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-body font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-body font-medium text-foreground mb-1.5 block">Number of Guests</label>
                      <Input name="guests" type="number" value={formData.guests} onChange={handleChange} placeholder="2" min="1" max="20" className="rounded-lg" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-body font-medium text-foreground mb-1.5 block">Check-in Date</label>
                      <Input name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-body font-medium text-foreground mb-1.5 block">Check-out Date</label>
                      <Input name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} className="rounded-lg" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-body font-medium text-foreground mb-1.5 block">Special Requests</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your dream vacation..." rows={4} className="rounded-lg" />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full font-body">
                    <Send className="w-4 h-4 mr-2" />
                    Send Enquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
