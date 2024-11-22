import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import { Region } from '../types';
import { MapPin, Thermometer, Plane, Bus, Hotel, Sun, CloudRain } from 'lucide-react';

const turkeyRegions = destinations[0].regions;

export function LocationComparison() {
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);

  const handleRegionSelect = (region: Region) => {
    if (selectedRegions.find(r => r.name === region.name)) {
      setSelectedRegions(selectedRegions.filter(r => r.name !== region.name));
    } else if (selectedRegions.length < 3) {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const renderWeatherIcon = (temp: string) => {
    const avgTemp = parseInt(temp.split('-')[1].replace('°C', ''));
    return avgTemp > 25 ? '🌞' : avgTemp > 15 ? '⛅' : '❄️';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Location Comparison</h2>

      {/* Region Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Select up to 3 locations to compare:</h3>
        <div className="flex flex-wrap gap-3">
          {turkeyRegions.map((region) => (
            <button
              key={region.name}
              onClick={() => handleRegionSelect(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedRegions.find(r => r.name === region.name)
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
                ${selectedRegions.length >= 3 && !selectedRegions.find(r => r.name === region.name)
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
                }`}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedRegions.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 bg-gray-50 rounded-tl-lg">Feature</th>
                {selectedRegions.map((region) => (
                  <th key={region.name} className="text-left py-4 px-4 bg-gray-50 last:rounded-tr-lg">
                    {region.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  <MapPin className="w-5 h-5 mr-2 text-rose-600" />
                  Description
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">{region.description}</td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  <Thermometer className="w-5 h-5 mr-2 text-rose-600" />
                  Summer Weather
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">
                    {renderWeatherIcon(region.weatherInfo.summerTemp)} {region.weatherInfo.summerTemp}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  <CloudRain className="w-5 h-5 mr-2 text-rose-600" />
                  Rain Frequency
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">{region.weatherInfo.rainyDays}</td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  <Sun className="w-5 h-5 mr-2 text-rose-600" />
                  Best Months
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">{region.popularMonths.join(', ')}</td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  <MapPin className="w-5 h-5 mr-2 text-rose-600" />
                  Venue Count
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">{region.venueCount} venues</td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  💰 Average Cost
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">${region.averageCost.toLocaleString()}</td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  ✨ Key Features
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">
                    <ul className="list-disc list-inside">
                      {region.features.map((feature) => (
                        <li key={feature} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  <Plane className="w-5 h-5 mr-2 text-rose-600" />
                  Airport Access
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">
                    {region.accessibility.internationalAirport ? '✅ International Airport' : '🛬 Regional Airport'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium">
                  <Bus className="w-5 h-5 mr-2 text-rose-600" />
                  Local Transport
                </td>
                {selectedRegions.map((region) => (
                  <td key={region.name} className="py-4 px-4">{region.accessibility.publicTransport}</td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 flex items-center font-medium rounded-bl-lg">
                  <Hotel className="w-5 h-5 mr-2 text-rose-600" />
                  Accommodation
                </td>
                {selectedRegions.map((region, index) => (
                  <td key={region.name} className={`py-4 px-4 ${index === selectedRegions.length - 1 ? 'rounded-br-lg' : ''}`}>
                    {region.accessibility.nearbyAccommodation}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {selectedRegions.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Select locations above to start comparing
        </div>
      )}
    </div>
  );
}
