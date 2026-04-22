import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import villa5 from "@/assets/villa-5.jpg";
import villa6 from "@/assets/villa-6.jpg";
import villaBedroom from "@/assets/villa-bedroom.jpg";
import villaBathroom from "@/assets/villa-bathroom.jpg";
import villaLiving from "@/assets/villa-living.jpg";
import poolBar from "@/assets/pool-bar.jpg";

export interface Villa {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  // price: number;
  // priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  area: string;
  features: string[];
}

export const allVillas: Villa[] = [
  {
    id: "ocean-breeze",
    title: "Ocean Breeze Villa",
    description: "A stunning beachaccess villa with private infinity pool and unobstructed ocean views.",
    longDescription: "The Ocean Breeze Villa is our signature beachaccess property, featuring a stunning private infinity pool that seemingly merges with the ocean horizon. With 3 bedrooms, each with en-suite bathrooms, this villa offers spacious living for families or groups. The open plan living area flows seamlessly onto the pool deck, while the fully equipped kitchen and private dining area make in villa entertaining effortless. Wake up to panoramic ocean views and fall asleep to the gentle sound of waves.",
    image: villa1,
    gallery: [villa1, villaBedroom, villaLiving, villaBathroom],
    // price: 25000,
    // priceLabel: "₹25,000/night",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    area: "2500",
    features: ["Private Infinity Pool", "Ocean View", "Beach Access", "Outdoor Dining", "King Beds", "Smart TV", "WiFi", "Air Conditioning"],
  },
  {
    id: "sunset-haven",
    title: "Sunset Haven Suite",
    description: "Elegant suite with panoramic sunset views, king bed, and luxurious interiors.",
    longDescription: "The Sunset Haven Suite is designed for romance and relaxation. Positioned to capture the most spectacular sunsets on the coast, this elegant 2-bedroom suite features a luxurious king bed, deep soaking tub, and a private terrace with plunge pool. The interiors blend contemporary design with warm coastal touches, creating an atmosphere of intimate luxury. Perfect for couples seeking a romantic escape.",
    image: villa2,
    gallery: [villa2, villaBedroom, villaBathroom, poolBar],
    // price: 18000,
    // priceLabel: "₹18,000/night",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    area: "1800",
    features: ["Plunge Pool", "Sunset View", "Soaking Tub", "Private Terrace", "King Bed", "Mini Bar", "WiFi", "Air Conditioning"],
  },
  {
    id: "royal-terrace",
    title: "Royal Terrace Villa",
    description: "Two-story villa with rooftop jacuzzi, private garden, and outdoor dining area.",
    longDescription: "The Royal Terrace Villa is our most expansive property, spread across two levels with a rooftop terrace featuring a private jacuzzi and 360-degree views. The ground floor opens onto a lush private garden with an outdoor dining area perfect for alfresco meals prepared by our chef. Four bedrooms with premium bedding, a spacious living room, and a modern kitchen make this the ultimate group retreat.",
    image: villa3,
    gallery: [villa3, villaLiving, villaBedroom, villaBathroom],
    // price: 35000,
    // priceLabel: "₹35,000/night",
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    area: "3500",
    features: ["Rooftop Jacuzzi", "Private Garden", "Outdoor Dining", "Chef Kitchen", "360° Views", "Smart Home", "WiFi", "Air Conditioning"],
  },
  {
    id: "spa retreat",
    title: "Spa Retreat Villa",
    description: "Wellness focused villa with private spa area, meditation garden, and beach access.",
    longDescription: "The Spa Retreat Villa is a haven of wellness and tranquility. Featuring a dedicated private spa area with treatment room, a zen meditation garden, and direct beach access, this villa is designed for those seeking rejuvenation. The interiors use natural materials and calming tones, while the outdoor rain shower and yoga deck add to the holistic experience.",
    image: villa4,
    gallery: [villa4, villaBathroom, villaLiving, villaBedroom],
    // price: 22000,
    // priceLabel: "₹22,000/night",
    bedrooms: 2,
    bathrooms: 3,
    guests: 4,
    area: "2200",
    features: ["Private Spa", "Meditation Garden", "Beach Access", "Rain Shower", "Yoga Deck", "Organic Amenities", "WiFi", "Air Conditioning"],
  },
  {
    id: "tropical-paradise",
    title: "Tropical Paradise Villa",
    description: "Open-concept living surrounded by lush tropical gardens with premium furnishings.",
    longDescription: "The Tropical Paradise Villa embraces indoor-outdoor living with its open-concept design surrounded by lush tropical gardens. Premium rattan furnishings, natural stone floors, and living plant walls create a connection with nature while maintaining five-star comfort. The oversized pool is perfect for families, and the covered outdoor lounge is ideal for lazy afternoons.",
    image: villa5,
    gallery: [villa5, villaLiving, poolBar, villaBedroom],
    // price: 28000,
    // priceLabel: "₹28,000/night",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    area: "2800",
    features: ["Oversized Pool", "Tropical Garden", "Outdoor Lounge", "Natural Materials", "Family Friendly", "BBQ Area", "WiFi", "Air Conditioning"],
  },
  {
    id: "moonlight-villa",
    title: "Moonlight Villa",
    description: "Experience magical evenings with illuminated pool, starlit skies, and premium ambiance.",
    longDescription: "The Moonlight Villa is designed for those who come alive after dark. The dramatically lit infinity pool, ambient landscape lighting, and stargazing deck create an unforgettable nighttime atmosphere. By day, the villa offers stunning ocean views from every room. The designer interiors feature dark woods, metallic accents, and premium textures for a sophisticated aesthetic.",
    image: villa6,
    gallery: [villa6, villaBedroom, villaBathroom, villaLiving],
    // price: 30000,
    // priceLabel: "₹30,000/night",
    bedrooms: 3,
    bathrooms: 4,
    guests: 8,
    area: "3200",
    features: ["Infinity Pool", "Stargazing Deck", "Designer Interiors", "Ambient Lighting", "Ocean Views", "Premium Bar", "WiFi", "Air Conditioning"],
  },
];
