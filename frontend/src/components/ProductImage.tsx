import React from 'react';
import { Product } from '@/types/product';

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="md:w-1/2 p-6">
      {product.image_url ? (
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full h-96 object-contain rounded-lg"
        />
      ) : (
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
    </div>
  );
}
