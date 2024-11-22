import React from 'react';
import { SEO } from '../components/SEO';
import { DestinationCard } from '../components/DestinationCard';
import { destinations } from '../data/destinations';
import { MapPin, Users, Star } from 'lucide-react';

export function DestinationsPage() {
  const featuredDestination = destinations.find(d => d.featured);
  const otherDestinations = destinations.filter(d => !d.featured);

  return (
    <>
      <SEO 
        title="Wedding Destinations - DestinationWed"
        description="Explore beautiful wedding destinations worldwide. Find your perfect location for a dream destination wedding."
      />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Featured Destination */}
          {featuredDestination && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Featured Destination
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <img 
                    src={featuredDestination.image}
                    alt={featuredDestination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-4xl font-bold mb-4">{featuredDestination.name}</h3>
                    <p className="text-xl mb-4">{featuredDestination.description}</p>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{featuredDestination.regions.length} Regions</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        <span>{featuredDestination.venues} Venues</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        <span>{featuredDestination.planners} Planners</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featuredDestination.features.map((feature) => (
                      <div 
                        key={feature}
                        className="bg-rose-50 text-rose-700 px-4 py-2 rounded-lg text-center"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Destinations */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              More Amazing Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherDestinations.map((destination) => (
                <div 
                  key={destination.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{destination.venues} Venues</span>
                      <span>{destination.planners} Planners</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
