import React from 'react';
import { ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(128 reviews)</span>
            </div>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-indigo-600">
              {formatPrice(product.price)}
            </span>
            <span className="ml-2 text-green-600">In Stock</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="font-medium">
                Quantity:
              </label>
              <select
                id="quantity"
                className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>

            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" />
              Share Product
            </button>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold text-lg mb-4">Product Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-indigo-600 rounded-full" />
                Premium build quality
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-indigo-600 rounded-full" />
                1-year warranty
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-indigo-600 rounded-full" />
                Free shipping
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-indigo-600 rounded-full" />
                30-day money-back guarantee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}