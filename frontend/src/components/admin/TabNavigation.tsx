import React from 'react';

interface TabNavigationProps {
  activeTab: 'dashboard' | 'products' | 'categories';
  setActiveTab: (tab: 'dashboard' | 'products' | 'categories') => void;
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <div className="mb-6 border-b border-gray-200">
      <nav className="flex space-x-8">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'dashboard' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'products' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('categories')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'categories' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
        >
          Categories
        </button>
      </nav>
    </div>
  );
}
