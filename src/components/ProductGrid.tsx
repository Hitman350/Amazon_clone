import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { products } from '../data/mockData';

export default function ProductGrid() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-64">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-600">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}