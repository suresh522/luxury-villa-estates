import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import rioLogo from "@/assets/rio-logo.png";

interface NavItem {
  to?: string;
  label: string;
  children?: { to: string; label: string }[];
}

const navLinks: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/villas", label: "Our Villas" },
  {
    label: "Experiences",
    children: [
      { to: "/experiences", label: "All Experiences" },
      { to: "/adventures", label: "Adventure & Water Sports" },
      { to: "/kids-activities", label: "Kids Activities" },
    ],
  },
  { to: "/dining", label: "Dining" },
  { to: "/spa", label: "Spa" },
  { to: "/gallery", label: "Gallery" },
  { to: "/amenities", label: "Amenities" },
  {
    label: "Events",
    children: [
      { to: "/wedding-events", label: "Weddings & Events" },
      { to: "/honeymoon", label: "Honeymoon Packages" },
    ],
  },
  { to: "/about", label: "About" },
];

const DropdownMenu = ({ item, scrolled, pathname }: { item: NavItem; scrolled: boolean; pathname: string }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = item.children?.some((c) => c.to === pathname);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
          isActive
            ? scrolled ? "text-primary" : "text-primary-foreground border-b-2 border-primary"
            : scrolled ? "text-foreground/80" : "text-primary-foreground/80"
        }`}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 w-56 z-50">
          <div className="bg-navy backdrop-blur-xl rounded-xl shadow-xl border border-white/10 py-2 animate-fade-in-up">
          {item.children!.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              className={`block px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary ${
                pathname === child.to ? "text-primary bg-primary/10" : "text-primary-foreground/80"
              }`}
            >
              {child.label}
            </Link>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
        <Link to="/" className="flex items-center mr-12">
          <img
            src={rioLogo}
            alt="RiO Pool Villas"
            className="h-12 md:h-14 w-auto object-contain"
            style={{ filter: scrolled ? 'brightness(0)' : 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label} item={link} scrolled={scrolled} pathname={location.pathname} />
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? scrolled
                      ? "text-primary"
                      : "text-primary-foreground border-b-2 border-primary"
                    : scrolled
                    ? "text-foreground/80"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA + phone */}
        <div className="hidden lg:flex items-center gap-5 ml-8">
          <Link
            to="/contact"
            className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
              location.pathname === "/contact"
                ? scrolled ? "text-primary" : "text-primary-foreground border-b-2 border-primary"
                : scrolled ? "text-foreground/80" : "text-primary-foreground/80"
            }`}
          >
            Contact
          </Link>
          <span className={`mx-2 text-sm ${scrolled ? "text-border" : "text-primary-foreground/30"}`}>|</span>
          <a
            href="tel:+919988886888"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 99 8888 6888
          </a>
          <Link to="/contact" className="ml-5">
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
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-in-up max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) =>
              link.children ? (
                <MobileDropdown key={link.label} item={link} pathname={location.pathname} />
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className={`block text-lg font-semibold uppercase tracking-wide ${
                    location.pathname === link.to ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className={`block text-lg font-semibold uppercase tracking-wide ${
                location.pathname === "/contact" ? "text-primary" : "text-foreground/80"
              }`}
            >
              Contact
            </Link>
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

const MobileDropdown = ({ item, pathname }: { item: NavItem; pathname: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full text-lg font-semibold uppercase tracking-wide ${
          item.children?.some((c) => c.to === pathname) ? "text-primary" : "text-foreground/80"
        }`}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
          {item.children!.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className={`block text-base font-medium ${pathname === child.to ? "text-primary" : "text-muted-foreground"}`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
