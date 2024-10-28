import React from 'react';
import { MapPin, Users, Calendar, Camera, Utensils, Music } from 'lucide-react';
import { Destination, Venue } from '../types';
import { VenueCard } from './VenueCard';

interface DestinationDetailProps {
  destination: Destination;
  venues: Venue[];
}

export function DestinationDetail({ destination, venues }: DestinationDetailProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.location}`}
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {destination.name}, {destination.location}
            </h1>
            <p className="text-xl mb-6 max-w-2xl">{destination.description}</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{destination.venues} Wedding Venues</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{destination.planners} Wedding Planners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Popular Wedding Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {venues.map((venue) => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Wedding Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Camera, title: 'Photography & Video', count: 45 },
                { icon: Utensils, title: 'Catering Services', count: 32 },
                { icon: Music, title: 'Entertainment', count: 28 },
              ].map((service) => (
                <div 
                  key={service.title}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <service.icon className="w-8 h-8 text-rose-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.count} vendors available</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Best Time to Visit</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Peak Season</h3>
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-5 h-5 text-rose-600 mt-1" />
                    <div>
                      <p className="text-gray-600 mb-2">
                        June to September offers the best weather conditions with minimal rainfall
                        and comfortable temperatures.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Average temperature: 25°C (77°F)</li>
                        <li>Minimal rainfall</li>
                        <li>Long daylight hours</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Off Season</h3>
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-5 h-5 text-rose-600 mt-1" />
                    <div>
                      <p className="text-gray-600 mb-2">
                        October to March sees fewer tourists and lower prices, but weather can
                        be unpredictable.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Better venue availability</li>
                        <li>Lower prices</li>
                        <li>Less crowded</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}