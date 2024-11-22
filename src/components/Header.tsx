import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { SearchOverlay } from './SearchOverlay';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-rose-600">
            DestinationWed
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/destinations" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Destinations
            </Link>
            <Link 
              to="/venues" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Venues
            </Link>
            <Link 
              to="/planners" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Planners
            </Link>
            <Link 
              to="/compare" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Compare
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsSearchOpen(false)} />
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-200 transition-colors"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
            <SearchOverlay onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
