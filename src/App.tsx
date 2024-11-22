import React from 'react';
import { MapPin, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchForm } from './components/SearchForm';
import { DestinationCard } from './components/DestinationCard';
import { FeatureCard } from './components/FeatureCard';
import { SEO } from './components/SEO';
import { destinations } from './data/destinations';
import { Feature } from './types';
import { generateOrganizationSchema } from './utils/seo';

const features: Feature[] = [
  { 
    icon: MapPin, 
    title: 'Handpicked Venues', 
    description: 'We curate the best wedding venues from around the world.' 
  },
  { 
    icon: Heart, 
    title: 'Expert Planners', 
    description: 'Connect with experienced destination wedding planners.' 
  },
  { 
    icon: Calendar, 
    title: 'Stress-Free Planning', 
    description: 'We handle the details so you can enjoy your special day.' 
  },
];

function App() {
  return (
    <>
      <SEO jsonLd={generateOrganizationSchema()} />

      <section className="relative bg-gradient-to-r from-rose-600 to-pink-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Find Your Dream Destination Wedding
          </h1>
          <p className="text-xl mb-8 text-center">
            Discover beautiful venues and expert planners for your special day
          </p>
          <SearchForm />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Why Choose DestinationWed?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-500 text-white relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Planning?</h2>
          <p className="text-xl mb-8">
            Let us help you create the destination wedding of your dreams.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-rose-600 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default App;
