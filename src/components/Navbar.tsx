import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import rioLogo from "@/assets/rio-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/villas", label: "Our Villas" },
  { to: "/experiences", label: "Experiences" },
  { to: "/dining", label: "Dining" },
  { to: "/spa", label: "Spa" },
  { to: "/gallery", label: "Gallery" },
  { to: "/amenities", label: "Amenities" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 shadow-lg backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-luxury flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={rioLogo}
            alt="RiO Pool Villas"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? scrolled
                    ? "text-primary"
                    : "text-primary-foreground border-b-2 border-accent"
                  : scrolled
                  ? "text-foreground/80"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919988886888"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 99 8888 6888
          </a>
          <Link to="/contact">
            <Button variant="default" size="sm" className="rounded-full px-6">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-in-up">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-lg font-semibold uppercase tracking-wide ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <a href="tel:+919988886888" className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Phone className="w-4 h-4" /> +91 99 8888 6888
              </a>
              <Link to="/contact">
                <Button className="w-full rounded-full">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
