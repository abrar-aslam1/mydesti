import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'bali',
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Tropical paradise with stunning beaches and rich culture',
    features: ['Beach Ceremonies', 'Luxury Resorts', 'Cultural Venues'],
    venues: 150,
    planners: 45
  },
  {
    id: 'santorini',
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic white buildings and breathtaking Mediterranean views',
    features: ['Cliff-top Venues', 'Sunset Views', 'Boutique Hotels'],
    venues: 120,
    planners: 35
  },
  {
    id: 'tuscany',
    name: 'Tuscany',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=800&q=80',
    description: 'Rolling hills and romantic countryside venues',
    features: ['Villa Weddings', 'Vineyard Ceremonies', 'Historic Castles'],
    venues: 200,
    planners: 60
  },
  {
    id: 'turkey',
    name: 'Turkey',
    location: 'Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
    description: 'A magical blend of ancient history and modern luxury with stunning Mediterranean coastline',
    features: ['Historic Palaces', 'Coastal Ceremonies', 'Luxury Hotels', 'Traditional Venues'],
    venues: 180,
    planners: 50
  }
];
