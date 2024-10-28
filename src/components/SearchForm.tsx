import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { searchVenues } from '../api';
import { Venue } from '../types';

export function SearchForm() {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    guests: '',
  });
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Venue[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      const results = await searchVenues({
        destination: formData.destination,
        date: formData.date,
        guests: formData.guests ? parseInt(formData.guests) : undefined,
      });

      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="destination" className="block text-gray-700 mb-2 font-medium">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-rose-400" />
              <input
                type="text"
                id="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Where do you want to go?"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700 mb-2 font-medium">
              Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-rose-400" />
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="guests" className="block text-gray-700 mb-2 font-medium">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-3 text-rose-400" />
              <input
                type="number"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Number of guests"
                min="1"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSearching}
          className="w-full bg-rose-600 text-white py-3 rounded-md mt-6 hover:bg-rose-700 transition duration-300 font-medium flex items-center justify-center space-x-2"
        >
          <Search className="w-5 h-5" />
          <span>{isSearching ? 'Searching...' : 'Search'}</span>
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(venue => (
            <div
              key={venue.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={venue.images[0]}
                alt={venue.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{venue.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{venue.location}</p>
              <p className="text-rose-600 font-medium">
                From ${venue.priceRange.min.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}