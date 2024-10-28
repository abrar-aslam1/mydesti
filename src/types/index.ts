export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  venues: number;
  planners: number;
}

export interface Venue {
  id: string;
  name: string;
  location: string;
  description: string;
  images: string[];
  rating: number;
  maxCapacity: number;
  priceRange: {
    min: number;
    max: number;
  };
  amenities: string[];
}

export interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  links?: { label: string; href: string; }[];
  content?: string;
}