import React, { useEffect, useRef } from 'react';
import { products } from '../data/mockData';
import ProductDetails from '../components/ProductDetails';
import { useSearch } from '../context/SearchContext';

export default function ProductListingPage() {
  const { searchQuery } = useSearch();
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (searchQuery && filteredProducts.length > 0) {
      const firstMatchId = filteredProducts[0].id;
      const element = productRefs.current[firstMatchId];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [searchQuery, filteredProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">
        {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        {searchQuery && (
          <span className="text-gray-500 text-lg ml-2">
            ({filteredProducts.length} items)
          </span>
        )}
      </h1>
      {filteredProducts.length === 0 && searchQuery ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found matching "{searchQuery}"
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[product.id] = el)}
            >
              <ProductDetails product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}