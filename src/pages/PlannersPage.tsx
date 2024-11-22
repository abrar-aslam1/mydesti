import React from 'react';
import { SEO } from '../components/SEO';
import { MapPin, Star, Calendar } from 'lucide-react';

interface Planner {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  eventsPlanned: number;
  specialties: string[];
}

const planners: Planner[] = [
  {
    id: 'elegant-events',
    name: 'Elegant Events Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury wedding planning specialists with over 10 years of experience in Turkey.',
    eventsPlanned: 250,
    specialties: ['Luxury Weddings', 'Cultural Ceremonies', 'Destination Management']
  },
  {
    id: 'mediterranean-magic',
    name: 'Mediterranean Magic',
    location: 'Antalya, Turkey',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80',
    description: 'Creating unforgettable beach and resort weddings along the Turkish Riviera.',
    eventsPlanned: 180,
    specialties: ['Beach Weddings', 'Resort Events', 'Outdoor Ceremonies']
  },
  {
    id: 'cappadocia-celebrations',
    name: 'Cappadocia Celebrations',
    location: 'Cappadocia, Turkey',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&w=800&q=80',
    description: 'Specialists in unique cave venue weddings and hot air balloon ceremonies.',
    eventsPlanned: 120,
    specialties: ['Cave Venues', 'Balloon Ceremonies', 'Traditional Events']
  }
];

export function PlannersPage() {
  return (
    <>
      <SEO 
        title="Wedding Planners - DestinationWed"
        description="Connect with experienced destination wedding planners who will help create your perfect day."
      />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Wedding Planners</h1>
            <p className="text-gray-600 max-w-3xl">
              Our carefully selected wedding planners bring years of experience and local expertise
              to help create your perfect destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planners.map(planner => (
              <div 
                key={planner.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img 
                    src={planner.image}
                    alt={planner.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{planner.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{planner.name}</h2>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{planner.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{planner.description}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{planner.eventsPlanned} weddings planned</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {planner.specialties.map(specialty => (
                      <span 
                        key={specialty}
                        className="px-2 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition duration-300"
                  >
                    Contact Planner
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
