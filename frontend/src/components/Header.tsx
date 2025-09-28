'use client'
import { useState } from "react";
import Link from "next/link";
import CartCounter from "./CartCounter";
import { ShoppingCartSimpleIcon, ListIcon } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">E-Shop</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-1">
            <Link 
              href="/" 
              className="text-gray-900 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/admin" 
              className="text-gray-600 hover:text-gray-900 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Admin
            </Link>
          </nav>
          
          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/cart" 
              className="p-2 text-gray-700 hover:text-blue-600 relative transition-all duration-200 rounded-lg hover:bg-gray-100"
            >
              <span className="sr-only">View cart</span>
              <div className="relative">
                <ShoppingCartSimpleIcon size={20} />
                <CartCounter />
              </div>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <ListIcon size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/admin" 
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}