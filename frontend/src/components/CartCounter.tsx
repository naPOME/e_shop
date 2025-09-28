'use client';

import { useCart } from '@/context/CartContext';

export default function CartCounter() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  
  if (totalItems === 0) return null;
  
  return (
    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
      {totalItems}
    </span>
  );
}
