'use client';

import React from 'react';
import { useProduct } from '@/hooks/useProducts';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProductImage from '@/components/ProductImage';
import ProductInfo from '@/components/ProductInfo';
import ProductActions from '@/components/ProductActions';
import ProductError from '@/components/ProductError';
import ProductLoading from '@/components/ProductLoading';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const router = useRouter();
  const { product, isLoading, isError } = useProduct(parseInt(unwrappedParams.id));
  
  if (isError) {
    return <ProductError />;
  }
  
  if (isLoading) {
    return <ProductLoading />;
  }
  
  if (!product) {
    return <ProductError />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to products
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="md:flex">
            <ProductImage product={product} />
            <div className="md:w-1/2 p-6">
              <ProductInfo product={product} />
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
