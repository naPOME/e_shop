import React, { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Added ${quantity} ${product.name} to cart`);
  };
  
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="text-sm font-medium text-gray-700 mr-4">Quantity:</label>
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-4 py-1 text-gray-900">{quantity}</span>
          <button 
            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
      </div>
      
      <button
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className={`w-full py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${product.stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}
