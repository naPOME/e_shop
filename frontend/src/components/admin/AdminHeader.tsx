'use client';

import React from 'react';

interface AdminHeaderProps {
  showCategoryForm: boolean;
  showAddForm: boolean;
  onToggleCategoryForm: () => void;
  onToggleAddForm: () => void;
}

export default function AdminHeader({
  showCategoryForm,
  showAddForm,
  onToggleCategoryForm,
  onToggleAddForm
}: AdminHeaderProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your product inventory</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onToggleCategoryForm}
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
        >
          <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          {showCategoryForm ? 'Cancel' : 'Manage Categories'}
        </button>
        <button
          onClick={onToggleAddForm}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
        >
          <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          {showAddForm ? 'Cancel' : 'Add Product'}
        </button>
      </div>
    </div>
  );
}
