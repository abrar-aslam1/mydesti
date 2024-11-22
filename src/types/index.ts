export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  venues: number;
  planners: number;
  featured: boolean;
  regions: Region[];
  statistics: DestinationStatistics;
}

export interface Region {
  name: string;
  description: string;
  venueCount: number;
  averageCost: number;
  popularMonths: string[];
  features: string[];
  weatherInfo: WeatherInfo;
  accessibility: Accessibility;
}

export interface WeatherInfo {
  springTemp: string;
  summerTemp: string;
  fallTemp: string;
  winterTemp: string;
  rainyDays: string;
}

export interface Accessibility {
  internationalAirport: boolean;
  publicTransport: string;
  nearbyAccommodation: string;
}

export interface DestinationStatistics {
  averageGuestCount: number;
  averageBudget: number;
  popularSeasons: {
    spring: number;
    summer: number;
    fall: number;
    winter: number;
  };
  venueTypes: {
    palaces: number;
    resorts: number;
    beaches: number;
    historic: number;
  };
  guestOrigins: {
    europe: number;
    middleEast: number;
    asia: number;
    americas: number;
  };
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
