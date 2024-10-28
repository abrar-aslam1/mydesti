import React, { useState } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { destinations } from '../data/destinations';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  if (!isOpen) return null;

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 animate-fade-in">
      <div className="fixed inset-x-0 top-0 bg-white shadow-lg animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative flex-1 max-w-2xl">
              <SearchIcon className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="ml-4 text-gray-600 hover:text-rose-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {searchTerm && (
            <div className="max-h-96 overflow-y-auto">
              {filteredDestinations.length > 0 ? (
                <ul className="divide-y">
                  {filteredDestinations.map((destination) => (
                    <li key={destination.id} className="py-3">
                      <a
                        href={`/destinations/${destination.id}`}
                        className="flex items-center hover:bg-gray-50 p-2 rounded-md transition"
                      >
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-800">
                            {destination.name}, {destination.location}
                          </h3>
                          <p className="text-sm text-gray-600">{destination.description}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-600 py-4">
                  No destinations found matching "{searchTerm}"
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}