import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { destinations } from '../data/destinations';
import { MapPin, Sun, CloudRain, Users, DollarSign, Plane, Hotel } from 'lucide-react';

export function ComparisonPage() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

  const handleDestinationSelect = (destinationId: string) => {
    if (selectedDestinations.includes(destinationId)) {
      setSelectedDestinations(selectedDestinations.filter(id => id !== destinationId));
    } else if (selectedDestinations.length < 5) {
      setSelectedDestinations([...selectedDestinations, destinationId]);
    }
  };

  const selectedDestinationData = destinations.filter(d => 
    selectedDestinations.includes(d.id)
  );

  const compareMetric = (value: number, metric: 'venues' | 'planners' | 'averageGuestCount' | 'averageBudget') => {
    const values = selectedDestinationData.map(d => 
      metric === 'averageGuestCount' || metric === 'averageBudget' 
        ? d.statistics[metric]
        : d[metric]
    );
    const max = Math.max(...values);
    return (value / max) * 100;
  };

  return (
    <>
      <SEO 
        title="Compare Wedding Destinations - DestinationWed"
        description="Compare different wedding destinations side by side to find your perfect location."
      />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Compare Wedding Destinations
          </h1>

          {/* Destination Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Select up to 5 destinations to compare:
            </h2>
            <div className="flex flex-wrap gap-3">
              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => handleDestinationSelect(destination.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedDestinations.includes(destination.id)
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                    ${selectedDestinations.length >= 5 && !selectedDestinations.includes(destination.id)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                    }`}
                >
                  {destination.name}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedDestinationData.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-600">Feature</th>
                      {selectedDestinationData.map((destination) => (
                        <th key={destination.id} className="text-left p-4 font-semibold text-gray-600">
                          {destination.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Location */}
                    <tr>
                      <td className="p-4 flex items-center font-medium text-gray-700">
                        <MapPin className="w-5 h-5 mr-2 text-rose-600" />
                        Location
                      </td>
                      {selectedDestinationData.map((destination) => (
                        <td key={destination.id} className="p-4 text-gray-600">
                          {destination.location}
                        </td>
                      ))}
                    </tr>

                    {/* Venues */}
                    <tr>
                      <td className="p-4 flex items-center font-medium text-gray-700">
                        <Hotel className="w-5 h-5 mr-2 text-rose-600" />
                        Venues
                      </td>
                      {selectedDestinationData.map((destination) => (
                        <td key={destination.id} className="p-4">
                          <div className="flex items-center">
                            <div className="mr-3 text-gray-600">{destination.venues}</div>
                            <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-rose-600 rounded-full"
                                style={{ width: `${compareMetric(destination.venues, 'venues')}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Average Budget */}
                    <tr>
                      <td className="p-4 flex items-center font-medium text-gray-700">
                        <DollarSign className="w-5 h-5 mr-2 text-rose-600" />
                        Average Budget
                      </td>
                      {selectedDestinationData.map((destination) => (
                        <td key={destination.id} className="p-4">
                          <div className="flex items-center">
                            <div className="mr-3 text-gray-600">
                              ${destination.statistics.averageBudget.toLocaleString()}
                            </div>
                            <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-rose-600 rounded-full"
                                style={{ width: `${compareMetric(destination.statistics.averageBudget, 'averageBudget')}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Average Guest Count */}
                    <tr>
                      <td className="p-4 flex items-center font-medium text-gray-700">
                        <Users className="w-5 h-5 mr-2 text-rose-600" />
                        Average Guest Count
                      </td>
                      {selectedDestinationData.map((destination) => (
                        <td key={destination.id} className="p-4">
                          <div className="flex items-center">
                            <div className="mr-3 text-gray-600">
                              {destination.statistics.averageGuestCount}
                            </div>
                            <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-rose-600 rounded-full"
                                style={{ width: `${compareMetric(destination.statistics.averageGuestCount, 'averageGuestCount')}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Popular Seasons */}
                    <tr>
                      <td className="p-4 flex items-center font-medium text-gray-700">
                        <Sun className="w-5 h-5 mr-2 text-rose-600" />
                        Popular Seasons
                      </td>
                      {selectedDestinationData.map((destination) => (
                        <td key={destination.id} className="p-4">
                          <div className="space-y-2">
                            {Object.entries(destination.statistics.popularSeasons)
                              .sort(([,a], [,b]) => b - a)
                              .map(([season, percentage]) => (
                                <div key={season} className="flex items-center">
                                  <div className="w-20 text-sm text-gray-600 capitalize">
                                    {season}
                                  </div>
                                  <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-rose-600 rounded-full"
                                      style={{ width: `${percentage}%` }}
                                    />
                                  </div>
                                  <div className="ml-2 text-sm text-gray-600">
                                    {percentage}%
                                  </div>
                                </div>
                              ))}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Features */}
                    <tr>
                      <td className="p-4 font-medium text-gray-700">
                        Key Features
                      </td>
                      {selectedDestinationData.map((destination) => (
                        <td key={destination.id} className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {destination.features.map((feature) => (
                              <span 
                                key={feature}
                                className="px-2 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty State */}
          {selectedDestinationData.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Select destinations above to start comparing
            </div>
          )}
        </div>
      </main>
    </>
  );
}
