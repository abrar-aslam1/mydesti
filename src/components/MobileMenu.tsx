import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

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
              <Link 
                to="/destinations" 
                className="block text-gray-600 hover:text-rose-600 transition"
                onClick={handleLinkClick}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link 
                to="/venues" 
                className="block text-gray-600 hover:text-rose-600 transition"
                onClick={handleLinkClick}
              >
                Venues
              </Link>
            </li>
            <li>
              <Link 
                to="/planners" 
                className="block text-gray-600 hover:text-rose-600 transition"
                onClick={handleLinkClick}
              >
                Planners
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="block text-gray-600 hover:text-rose-600 transition"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
