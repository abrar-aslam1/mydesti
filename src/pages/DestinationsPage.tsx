import React from 'react';
import { SEO } from '../components/SEO';
import { DestinationCard } from '../components/DestinationCard';
import { destinations } from '../data/destinations';

export function DestinationsPage() {
  return (
    <>
      <SEO 
        title="Wedding Destinations - DestinationWed"
        description="Explore beautiful wedding destinations worldwide. Find your perfect location for a dream destination wedding."
      />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Wedding Destinations</h1>
            <p className="text-gray-600 max-w-3xl">
              Discover stunning locations around the world perfect for your destination wedding.
              From tropical beaches to historic palaces, find the ideal setting for your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
