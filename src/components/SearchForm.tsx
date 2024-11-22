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

  const iconClasses = "w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-rose-600 group-hover:text-rose-500 transition-colors";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="destination" className="block text-gray-700 text-sm font-medium">
              Destination
            </label>
            <div className="relative group">
              <MapPin className={iconClasses} />
              <input
                type="text"
                id="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Where do you want to go?"
                className="w-full h-12 pl-10 pr-4 rounded-lg
                         bg-white
                         text-gray-800 placeholder-gray-500
                         border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent
                         hover:border-gray-300
                         transition-all duration-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="block text-gray-700 text-sm font-medium">
              Date
            </label>
            <div className="relative group">
              <Calendar className={iconClasses} />
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full h-12 pl-10 pr-4 rounded-lg
                         bg-white
                         text-gray-800
                         border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent
                         hover:border-gray-300
                         transition-all duration-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="guests" className="block text-gray-700 text-sm font-medium">
              Guests
            </label>
            <div className="relative group">
              <Users className={iconClasses} />
              <input
                type="number"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full h-12 pl-10 pr-4 rounded-lg
                         bg-white/90 backdrop-blur-sm
                         text-gray-800 placeholder-gray-500
                         border border-white/30
                         focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                         hover:border-white/50
                         transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSearching}
          className="w-full h-12 mt-6 
                   bg-rose-600 text-white rounded-lg
                   hover:bg-rose-500 active:bg-rose-700
                   transition-all duration-300 
                   flex items-center justify-center gap-2
                   border border-white/20 hover:border-white/30
                   shadow-lg hover:shadow-xl"
        >
          <Search className="w-5 h-5" />
          <span className="font-medium">{isSearching ? 'Searching...' : 'Search'}</span>
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(venue => (
            <div
              key={venue.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <img
                src={venue.images[0]}
                alt={venue.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{venue.name}</h3>
                <p className="text-gray-600 mb-3">{venue.location}</p>
                <p className="text-rose-600 font-semibold text-lg">
                  From ${venue.priceRange.min.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
