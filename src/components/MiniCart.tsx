import React from 'react';
import { X } from 'lucide-react';

export default function MiniCart({ onClose }: { onClose: () => void }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="absolute top-16 right-0 w-80 bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Shopping Cart (3)</h3>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="max-h-96 overflow-auto">
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-4 border-b flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80"
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-medium">Premium Headphones</h4>
              <p className="text-gray-500 text-sm">Quantity: 1</p>
              <p className="text-indigo-600 font-semibold">{formatPrice(24999)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-indigo-600">{formatPrice(74997)}</span>
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Checkout
        </button>
      </div>
    </div>
  );
}