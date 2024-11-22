import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DestinationDetail } from '../components/DestinationDetail';
import { SEO } from '../components/SEO';
import { destinations } from '../data/destinations';
import { venues } from '../data/venues';
import { generateDestinationSchema } from '../utils/seo';

export function DestinationPage() {
  const { destinationId } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === destinationId);
  const destinationVenues = venues.filter(v => v.location.includes(destination?.name || ''));

  if (!destination) {
    return (
      <main className="flex-grow flex items-center justify-center">
        <SEO 
          title="Destination Not Found - DestinationWed"
          description="The requested destination could not be found."
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="inline-block bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition duration-300"
          >
            Return Home
          </button>
        </div>
      </main>
    );
  }

  const seoTitle = `${destination.name}, ${destination.location} Wedding Venues & Planning`;
  const seoDescription = `Plan your dream wedding in ${destination.name}. Discover ${destination.venues}+ stunning venues and connect with ${destination.planners} expert wedding planners.`;
  const canonicalUrl = `https://destinationwed.com/destinations/${destination.id}`;

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        imageUrl={destination.image}
        jsonLd={generateDestinationSchema(destination)}
      />
      <DestinationDetail destination={destination} venues={destinationVenues} />
    </>
  );
}
