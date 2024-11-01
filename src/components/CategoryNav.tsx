import React from 'react';
import { categories } from '../data/mockData';

export default function CategoryNav() {
  return (
    <nav className="bg-gray-100 py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium rounded-full bg-white shadow-sm hover:bg-indigo-500 hover:text-white transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}