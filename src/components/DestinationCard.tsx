import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 group">
      <div className="relative">
        <img 
          src={destination.image} 
          alt={`${destination.name}, ${destination.location}`} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold mb-1">{destination.name}, {destination.location}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{destination.venues} Venues</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{destination.planners} Planners</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.features.map((feature) => (
            <span 
              key={feature}
              className="px-2 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
        <a 
          href={`/destinations/${destination.id}`} 
          className="inline-block w-full text-center bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition duration-300 font-medium"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}