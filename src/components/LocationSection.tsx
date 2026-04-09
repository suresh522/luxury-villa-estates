import { MapPin, Clock, Car, Plane } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

import aerialResort from "@/assets/aerial-resort.jpg";
import locationSlide1 from "@/assets/location-slide-1.jpg";
import locationSlide2 from "@/assets/location-slide-2.jpg";
import locationSlide3 from "@/assets/location-slide-3.jpg";

const locationImages = [
  { src: aerialResort, alt: "Aerial view of RiO Pool Villas" },
  { src: locationSlide1, alt: "Beachfront resort aerial panorama" },
  { src: locationSlide2, alt: "Luxury coastal resort with infinity pool" },
  { src: locationSlide3, alt: "Resort entrance at dusk" },
];

const LocationSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-elevated)' }}>
          {/* Image slider side */}
          <ImageSlider
            images={locationImages}
            interval={4000}
            className="min-h-[400px]"
            overlay={
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent z-[1]" />
                <div className="absolute bottom-8 left-8 right-8 z-[2]">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    Prime Location
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Ramapuram Beach, Chirala
                  </h3>
                </div>
              </>
            }
          />

          {/* Info side */}
          <div className="bg-navy p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              How to <span className="text-primary">Reach Us</span>
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-8">
              Conveniently located on the pristine Andhra Pradesh coastline.
            </p>
            <div className="space-y-6">
              {[
                { icon: Plane, label: "Vijayawada Airport", value: "~2.5 hrs drive" },
                { icon: Car, label: "From Hyderabad", value: "~5 hrs drive" },
                { icon: MapPin, label: "Chirala Railway Station", value: "~20 min drive" },
                { icon: Clock, label: "Check-in / Check-out", value: "2:00 PM / 11:00 AM" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">{item.label}</p>
                    <p className="text-xs text-primary-foreground/50">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
