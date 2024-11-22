import React from 'react';
import { MapPin, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchForm } from './components/SearchForm';
import { DestinationCard } from './components/DestinationCard';
import { FeatureCard } from './components/FeatureCard';
import { TurkeyStats } from './components/TurkeyStats';
import { LocationComparison } from './components/LocationComparison';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { destinations } from './data/destinations';
import { Feature } from './types';
import { generateOrganizationSchema } from './utils/seo';

const features: Feature[] = [
  { 
    icon: MapPin, 
    title: 'Iconic Venues', 
    description: 'From historic Ottoman palaces to Mediterranean beach resorts.' 
  },
  { 
    icon: Heart, 
    title: 'Local Expertise', 
    description: 'Connect with experienced Turkish wedding planners.' 
  },
  { 
    icon: Calendar, 
    title: 'Perfect Timing', 
    description: 'Enjoy ideal weather from spring through fall.' 
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
            Your Dream Wedding in Turkey
          </h1>
          <p className="text-xl mb-8 text-center">
            Discover the perfect blend of ancient history, modern luxury, and Mediterranean beauty
          </p>
          <SearchForm />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Featured Regions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations[0].regions.map((region) => (
              <div key={region.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{region.name}</h3>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{region.venueCount} Venues</span>
                    <span>From ${region.averageCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Why Choose Turkey?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Compare Wedding Locations
          </h2>
          <LocationComparison />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Wedding Statistics & Insights
          </h2>
          <TurkeyStats />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-500 text-white relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Planning?</h2>
          <p className="text-xl mb-8">
            Let us help you create your perfect Turkish wedding experience
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
