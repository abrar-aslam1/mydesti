import React from 'react';
import { MapPin, Users, Star } from 'lucide-react';
import { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
}

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={venue.images[0]} 
          alt={venue.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{venue.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{venue.location}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{venue.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">Up to {venue.maxCapacity} guests</span>
          </div>
          <span className="text-rose-600 font-semibold">
            From ${venue.priceRange.min.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {venue.amenities.slice(0, 3).map((amenity) => (
            <span 
              key={amenity}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
          {venue.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              +{venue.amenities.length - 3} more
            </span>
          )}
        </div>
        <a 
          href={`/venues/${venue.id}`}
          className="block w-full text-center bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  );
}