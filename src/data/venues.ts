import { Venue } from '../types';

export const venues: Venue[] = [
  {
    id: 'villa-infinity-bali',
    name: 'Villa Infinity Bali',
    location: 'Uluwatu, Bali',
    description: 'Luxurious clifftop villa with panoramic ocean views and infinity pool',
    images: [
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.9,
    maxCapacity: 150,
    priceRange: {
      min: 5000,
      max: 15000,
    },
    amenities: [
      'Ocean View',
      'Infinity Pool',
      'Private Beach Access',
      'Helipad',
      'Spa',
      'Wedding Chapel',
    ],
  },
  {
    id: 'santorini-gem',
    name: 'Santorini Gem',
    location: 'Pyrgos, Santorini',
    description: 'Exclusive venue with breathtaking caldera views and sunset vistas',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544124065-c3d56c0f0508?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    maxCapacity: 120,
    priceRange: {
      min: 4000,
      max: 12000,
    },
    amenities: [
      'Caldera View',
      'Sunset View',
      'Private Terrace',
      'Wine Cellar',
      'Gourmet Kitchen',
    ],
  },
  {
    id: 'tuscany-villa',
    name: 'Villa Medicea',
    location: 'Florence, Tuscany',
    description: 'Historic 16th-century villa surrounded by vineyards and olive groves',
    images: [
      'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541991338-b61f1858bf89?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    maxCapacity: 200,
    priceRange: {
      min: 6000,
      max: 18000,
    },
    amenities: [
      'Vineyard',
      'Historic Chapel',
      'Gardens',
      'Wine Cellar',
      'Courtyard',
      'Accommodation',
    ],
  },
];