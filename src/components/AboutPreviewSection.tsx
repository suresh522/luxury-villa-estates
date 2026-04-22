import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Star } from "lucide-react";
import aboutAerial from "@/assets/about-resort-aerial.jpg";
import resortLobby from "@/assets/resort-lobby.jpg";

const AboutPreviewSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <div className="relative">
            <img
              src={aboutAerial}
              alt="RiO Pool Villas aerial view"
              loading="lazy"
              className="rounded-2xl w-full aspect-[4/3] object-cover"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            />
            <img
              src={resortLobby}
              alt="Luxury resort lobby"
              loading="lazy"
              className="absolute -bottom-8 -right-4 w-2/5 rounded-2xl border-4 border-secondary aspect-square object-cover hidden md:block"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            />
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-5 rounded-2xl hidden md:flex flex-col items-center">
              <span className="text-3xl font-extrabold">5+</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold">Years</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Welcome to <span className="text-gradient">RiO Pool Villas</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              “Step into sophistication with a stunning galaxy-view ceiling soaring to 16 ft, paired with top-notch furniture and world-class amenities for a truly luxurious living experience.”
            </p>
            {/* <p className="text-muted-foreground leading-relaxed mb-4">
              Born from a passion for hospitality and the breathtaking beauty of Chirala's coastline,
              RiO Pool Villas is a sanctuary where travelers immerse themselves in the lap of luxury
              while staying connected to nature.
            </p> */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              Each pool villa has been meticulously designed by award winning architects, blending modern
              minimalism with traditional Indian coastal aesthetics.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Award, value: "Award", label: "Winning pool villas" },
                { icon: Users, value: "1000+", label: "Happy Guests" },
                { icon: Star, value: "4.9★", label: "Guest Rating" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-xl bg-card border border-border"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-lg font-extrabold text-foreground">{item.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg" className="rounded-full px-10">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
