'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
            </svg>
            <h3 className="mt-4 text-2xl font-medium text-gray-900">Your cart is empty</h3>
            <p className="mt-2 text-gray-500">Looks like you haven't added any items to your cart yet.</p>
            <div className="mt-8">
              <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart ({getTotalItems()} items)</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.product.id} className="p-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                        {item.product.image_url ? (
                          <img
                            src={item.product.image_url}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link href={`/products/${item.product.id}`} className="hover:text-blue-600">
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            ${item.product.price} each
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm mt-4">
                          <div className="flex items-center">
                            <label htmlFor={`quantity-${item.product.id}`} className="mr-2 text-gray-500">Qty</label>
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="px-3 py-1 text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none"
                                disabled={item.quantity >= item.product.stock}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                              className="font-medium text-red-600 hover:text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${getTotalPrice().toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Shipping</p>
                  <p className="text-sm text-gray-600">Free</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Taxes</p>
                  <p className="text-sm text-gray-600">Calculated at checkout</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>${getTotalPrice().toFixed(2)}</p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Proceed to Checkout
                </button>
              </div>
              <div className="mt-4 text-center">
                <Link href="/" className="text-blue-600 hover:text-blue-500 font-medium">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
