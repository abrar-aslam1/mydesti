import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { VenueCard } from '../components/VenueCard';
import { venues } from '../data/venues';
import { Filter } from 'lucide-react';

export function VenuesPage() {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    guests: '',
    location: '',
  });

  const filteredVenues = venues.filter(venue => {
    const matchesPrice = (!filters.minPrice || venue.priceRange.min >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || venue.priceRange.max <= parseInt(filters.maxPrice));
    const matchesGuests = !filters.guests || venue.maxCapacity >= parseInt(filters.guests);
    const matchesLocation = !filters.location || 
      venue.location.toLowerCase().includes(filters.location.toLowerCase());

    return matchesPrice && matchesGuests && matchesLocation;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Wedding Venues - DestinationWed"
        description="Discover stunning wedding venues worldwide. Find the perfect location for your dream destination wedding."
      />
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Wedding Venues</h1>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">Filters</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={filters.location}
                      onChange={handleFilterChange}
                      placeholder="Enter location"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Min Price ($)
                    </label>
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      placeholder="Minimum price"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max Price ($)
                    </label>
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      placeholder="Maximum price"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Guest Capacity
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={filters.guests}
                      onChange={handleFilterChange}
                      placeholder="Number of guests"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredVenues.map(venue => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
              {filteredVenues.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">No venues match your current filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}