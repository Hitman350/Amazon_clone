import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import MiniCart from './MiniCart';
import { useSearch } from '../context/SearchContext';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-indigo-600">ShopHub</h1>
          </div>

          <div className="hidden sm:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="relative p-2"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-5 w-5 text-xs bg-indigo-600 text-white rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            {isCartOpen && <MiniCart onClose={() => setIsCartOpen(false)} />}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </header>
  );
}