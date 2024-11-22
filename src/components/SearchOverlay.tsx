import React from 'react';
import { Search } from 'lucide-react';

export interface SearchOverlayProps {
  onClose: () => void;
}

export function SearchOverlay({ onClose }: SearchOverlayProps) {
  return (
    <div className="bg-black/95 w-full h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search destinations, venues, or planners..."
            className="w-full bg-white/10 text-white placeholder-gray-400 py-4 pl-14 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            autoFocus
          />
        </div>
        <div className="mt-8">
          <h3 className="text-white/60 text-sm font-medium mb-4">Popular Searches</h3>
          <div className="space-y-4">
            <button className="block w-full text-left text-white hover:text-rose-400 transition-colors">
              Wedding venues in Turkey
            </button>
            <button className="block w-full text-left text-white hover:text-rose-400 transition-colors">
              Beach wedding destinations
            </button>
            <button className="block w-full text-left text-white hover:text-rose-400 transition-colors">
              Destination wedding planners
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
