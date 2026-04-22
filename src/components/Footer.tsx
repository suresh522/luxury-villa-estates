import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import rioLogo from "@/assets/rio-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={rioLogo} alt="RiO Pool Villas" className="h-16 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Experience the ultimate luxury beachaccess living at Chirala's finest pool villas.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              {/* X (Twitter) icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Explore</h4>
            <div className="space-y-3">
              {[
                { to: "/villas", label: "Our Villas" },
                { to: "/experiences", label: "Experiences" },
                { to: "/adventures", label: "Adventure Sports" },
                { to: "/dining", label: "Dining" },
                { to: "/spa", label: "Spa & Wellness" },
                { to: "/gallery", label: "Gallery" },
                { to: "/amenities", label: "Amenities" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Services</h4>
            <div className="space-y-3">
              {[
                { to: "/wedding-events", label: "Weddings & Events" },
                { to: "/honeymoon", label: "Honeymoon Packages" },
                { to: "/kids-activities", label: "Kids Activities" },
                { to: "/transfers", label: "Airport Transfers" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Ramapuram Beach Rd, Vetapalem, Chirala, Andhra Pradesh, India-523187
              </a>
              <a href="tel:+919533442666" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 95 3344 2666
              </a>
              <a href="mailto:riopoolvillas@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                riopoolvillas@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} RiO Pool Villas. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
