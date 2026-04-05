import { Link } from "react-router-dom";
import { Bed, Bath, Users, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VillaCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  area: string;
}

const VillaCard = ({ id, title, description, image, price, bedrooms, bathrooms, guests, area }: VillaCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden hover-lift" style={{ boxShadow: 'var(--shadow-card)' }}>
      <Link to={`/villa/${id}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-body font-semibold">
            {price}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/villa/${id}`}>
          <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 hover:text-primary transition-colors">{title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { icon: Bed, value: bedrooms, label: "Beds" },
            { icon: Bath, value: bathrooms, label: "Baths" },
            { icon: Users, value: guests, label: "Guests" },
            { icon: Maximize, value: area, label: "sqft" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">
                {value} {label}
              </p>
            </div>
          ))}
        </div>

        <Link to={`/villa/${id}`}>
          <Button variant="outline" className="w-full rounded-full font-body">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VillaCard;
