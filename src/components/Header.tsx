import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-rose-600 hover:text-rose-700 transition">
            DestinationWed
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/destinations" className="text-gray-600 hover:text-rose-600 transition">
              Destinations
            </Link>
            <Link to="/venues" className="text-gray-600 hover:text-rose-600 transition">
              Venues
            </Link>
            <Link to="/planners" className="text-gray-600 hover:text-rose-600 transition">
              Planners
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-rose-600 transition">
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600 hover:text-rose-600 transition p-2 rounded-full hover:bg-gray-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-600 hover:text-rose-600 transition p-2 rounded-full hover:bg-gray-100"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
