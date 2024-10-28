import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 animate-fade-in">
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg animate-fade-in">
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-bold text-rose-600">Menu</span>
          <button onClick={onClose} className="text-gray-600 hover:text-rose-600 transition">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="/destinations" className="block text-gray-600 hover:text-rose-600 transition">
                Destinations
              </a>
            </li>
            <li>
              <a href="/venues" className="block text-gray-600 hover:text-rose-600 transition">
                Venues
              </a>
            </li>
            <li>
              <a href="/planners" className="block text-gray-600 hover:text-rose-600 transition">
                Planners
              </a>
            </li>
            <li>
              <a href="/blog" className="block text-gray-600 hover:text-rose-600 transition">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}