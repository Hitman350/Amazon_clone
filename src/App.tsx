import React from 'react';
import Header from './components/Header';
import PromotionSlider from './components/PromotionSlider';
import CategoryNav from './components/CategoryNav';
import ProductListingPage from './pages/ProductListingPage';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <PromotionSlider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CategoryNav />
            <ProductListingPage />
          </div>
        </main>
      </div>
    </SearchProvider>
  );
}

export default App;