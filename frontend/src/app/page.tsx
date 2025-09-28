'use client';

import { useState, useEffect } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { categoryApi } from '@/utils/api';
import HeroSection from '@/components/HeroSection';
import ProductFilter from '@/components/ProductFilter';
import ProductGrid from '@/components/ProductGrid';
import { Category } from '@/types/product';

export default function Home() {
  const { products, isLoading, isError } = useProducts();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryApi.getAllPublic();
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    
    fetchCategories();
  }, []);
  
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                          (product.category && 
                           product.category.toLowerCase() === selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Error loading products</h3>
          <p className="mt-2 text-sm text-gray-500">There was a problem loading the products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <ProductFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          filteredProductsCount={filteredProducts.length}
        />
        
        {/* Products Section */}
        <div id="products">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <ProductGrid 
            products={filteredProducts}
            isLoading={isLoading}
            filteredProductsCount={filteredProducts.length}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>
    </div>
  );
}
