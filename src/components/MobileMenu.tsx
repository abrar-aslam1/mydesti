import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-4">
          <Link
            to="/destinations"
            onClick={onClose}
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Destinations
          </Link>
          <Link
            to="/venues"
            onClick={onClose}
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Venues
          </Link>
          <Link
            to="/planners"
            onClick={onClose}
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Planners
          </Link>
          <Link
            to="/compare"
            onClick={onClose}
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Compare
          </Link>
          <Link
            to="/blog"
            onClick={onClose}
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
