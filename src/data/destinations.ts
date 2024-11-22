import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'turkey',
    name: 'Turkey',
    location: 'Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
    description: 'A magical blend of ancient history and modern luxury with stunning Mediterranean coastline',
    features: ['Historic Palaces', 'Coastal Ceremonies', 'Luxury Hotels', 'Traditional Venues'],
    venues: 180,
    planners: 50,
    featured: true,
    regions: [
      {
        name: 'Istanbul',
        description: 'Historic Ottoman palaces and Bosphorus views',
        venueCount: 65,
        averageCost: 25000,
        popularMonths: ['May', 'June', 'September'],
        features: ['Bosphorus Views', 'Historic Palaces', 'Luxury Hotels'],
        weatherInfo: {
          springTemp: '15-20°C',
          summerTemp: '25-30°C',
          fallTemp: '15-20°C',
          winterTemp: '5-10°C',
          rainyDays: 'Low'
        },
        accessibility: {
          internationalAirport: true,
          publicTransport: 'Excellent',
          nearbyAccommodation: 'Abundant'
        }
      },
      {
        name: 'Antalya',
        description: 'Mediterranean beach resorts and coastal venues',
        venueCount: 45,
        averageCost: 18000,
        popularMonths: ['June', 'July', 'August'],
        features: ['Beach Ceremonies', 'Resort Venues', 'Garden Weddings'],
        weatherInfo: {
          springTemp: '20-25°C',
          summerTemp: '30-35°C',
          fallTemp: '20-25°C',
          winterTemp: '10-15°C',
          rainyDays: 'Very Low'
        },
        accessibility: {
          internationalAirport: true,
          publicTransport: 'Good',
          nearbyAccommodation: 'Plentiful'
        }
      },
      {
        name: 'Cappadocia',
        description: 'Unique cave venues and hot air balloon ceremonies',
        venueCount: 30,
        averageCost: 15000,
        popularMonths: ['April', 'May', 'September'],
        features: ['Cave Venues', 'Balloon Ceremonies', 'Valley Views'],
        weatherInfo: {
          springTemp: '15-20°C',
          summerTemp: '25-30°C',
          fallTemp: '15-20°C',
          winterTemp: '0-5°C',
          rainyDays: 'Low'
        },
        accessibility: {
          internationalAirport: true,
          publicTransport: 'Moderate',
          nearbyAccommodation: 'Good'
        }
      },
      {
        name: 'Bodrum',
        description: 'Luxury beach clubs and yacht weddings',
        venueCount: 40,
        averageCost: 22000,
        popularMonths: ['June', 'July', 'August'],
        features: ['Beach Clubs', 'Yacht Weddings', 'Sunset Views'],
        weatherInfo: {
          springTemp: '20-25°C',
          summerTemp: '30-35°C',
          fallTemp: '20-25°C',
          winterTemp: '10-15°C',
          rainyDays: 'Very Low'
        },
        accessibility: {
          internationalAirport: true,
          publicTransport: 'Good',
          nearbyAccommodation: 'Plentiful'
        }
      },
      {
        name: 'Fethiye',
        description: 'Beautiful lagoons and mountain backdrops',
        venueCount: 35,
        averageCost: 16000,
        popularMonths: ['May', 'June', 'September'],
        features: ['Beach Weddings', 'Mountain Views', 'Lagoon Settings'],
        weatherInfo: {
          springTemp: '20-25°C',
          summerTemp: '30-35°C',
          fallTemp: '20-25°C',
          winterTemp: '10-15°C',
          rainyDays: 'Low'
        },
        accessibility: {
          internationalAirport: false,
          publicTransport: 'Moderate',
          nearbyAccommodation: 'Good'
        }
      },
      {
        name: 'Izmir',
        description: 'Historic venues and vineyard ceremonies',
        venueCount: 38,
        averageCost: 17000,
        popularMonths: ['May', 'June', 'September'],
        features: ['Vineyard Weddings', 'Historic Sites', 'Coastal Views'],
        weatherInfo: {
          springTemp: '18-23°C',
          summerTemp: '28-33°C',
          fallTemp: '18-23°C',
          winterTemp: '8-13°C',
          rainyDays: 'Moderate'
        },
        accessibility: {
          internationalAirport: true,
          publicTransport: 'Excellent',
          nearbyAccommodation: 'Abundant'
        }
      }
    ],
    statistics: {
      averageGuestCount: 120,
      averageBudget: 25000,
      popularSeasons: {
        spring: 35,
        summer: 40,
        fall: 20,
        winter: 5
      },
      venueTypes: {
        palaces: 25,
        resorts: 35,
        beaches: 20,
        historic: 20
      },
      guestOrigins: {
        europe: 45,
        middleEast: 25,
        asia: 15,
        americas: 15
      }
    }
  },
  {
    id: 'bali',
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Tropical paradise with stunning beaches and rich culture',
    features: ['Beach Ceremonies', 'Luxury Resorts', 'Cultural Venues'],
    venues: 150,
    planners: 45,
    featured: false,
    regions: [],
    statistics: {
      averageGuestCount: 80,
      averageBudget: 20000,
      popularSeasons: {
        spring: 25,
        summer: 30,
        fall: 25,
        winter: 20
      },
      venueTypes: {
        palaces: 0,
        resorts: 50,
        beaches: 30,
        historic: 20
      },
      guestOrigins: {
        europe: 30,
        middleEast: 10,
        asia: 50,
        americas: 10
      }
    }
  },
  {
    id: 'santorini',
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic white buildings and breathtaking Mediterranean views',
    features: ['Cliff-top Venues', 'Sunset Views', 'Boutique Hotels'],
    venues: 120,
    planners: 35,
    featured: false,
    regions: [],
    statistics: {
      averageGuestCount: 60,
      averageBudget: 30000,
      popularSeasons: {
        spring: 30,
        summer: 45,
        fall: 20,
        winter: 5
      },
      venueTypes: {
        palaces: 0,
        resorts: 40,
        beaches: 20,
        historic: 40
      },
      guestOrigins: {
        europe: 60,
        middleEast: 15,
        asia: 10,
        americas: 15
      }
    }
  },
  {
    id: 'tuscany',
    name: 'Tuscany',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=800&q=80',
    description: 'Rolling hills and romantic countryside venues',
    features: ['Villa Weddings', 'Vineyard Ceremonies', 'Historic Castles'],
    venues: 200,
    planners: 60,
    featured: false,
    regions: [],
    statistics: {
      averageGuestCount: 100,
      averageBudget: 35000,
      popularSeasons: {
        spring: 35,
        summer: 40,
        fall: 20,
        winter: 5
      },
      venueTypes: {
        palaces: 20,
        resorts: 20,
        beaches: 0,
        historic: 60
      },
      guestOrigins: {
        europe: 50,
        middleEast: 10,
        asia: 15,
        americas: 25
      }
    }
  }
];
