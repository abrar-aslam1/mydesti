import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { venues } from '../data/venues';
import { MapPin, Users, Star } from 'lucide-react';

export function VenuePage() {
  const { venueId } = useParams();
  const navigate = useNavigate();
  const venue = venues.find(v => v.id === venueId);

  if (!venue) {
    return (
      <main className="flex-grow flex items-center justify-center">
        <SEO 
          title="Venue Not Found - DestinationWed"
          description="The requested venue could not be found."
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Venue Not Found</h1>
          <p className="text-gray-600 mb-6">The venue you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate(-1)}
            className="inline-block bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO 
        title={`${venue.name} - Wedding Venue in ${venue.location}`}
        description={venue.description}
        imageUrl={venue.images[0]}
      />
      
      <main className="flex-grow">
        <div className="relative h-[60vh]">
          <div className="absolute inset-0 grid grid-cols-2">
            {venue.images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative">
                <img 
                  src={image} 
                  alt={`${venue.name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="container mx-auto text-white">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg">{venue.rating} rating</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{venue.name}</h1>
              <div className="flex items-center text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{venue.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">About the Venue</h2>
                <p className="text-gray-600 leading-relaxed">{venue.description}</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {venue.amenities.map((amenity) => (
                    <div 
                      key={amenity}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-rose-600 rounded-full" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Capacity</h3>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>Up to {venue.maxCapacity} guests</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Price Range</h3>
                  <div className="text-gray-600">
                    <p>Starting from</p>
                    <p className="text-2xl font-bold text-rose-600">
                      ${venue.priceRange.min.toLocaleString()}
                    </p>
                    <p className="text-sm">to ${venue.priceRange.max.toLocaleString()}</p>
                  </div>
                </div>

                <button 
                  className="w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition duration-300"
                >
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
