import React from 'react';
import { Product } from '@/types/product';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      {product.category && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mt-2">
          {product.category}
        </span>
      )}
      
      <div className="mt-6 mb-6">
        <p className="text-3xl font-bold text-gray-900">${product.price}</p>
        <div className="mt-2 flex items-center">
          <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
        <p className="text-gray-600">
          {product.description || 'No description available for this product.'}
        </p>
      </div>
    </div>
  );
}
