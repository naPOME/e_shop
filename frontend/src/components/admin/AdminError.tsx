'use client';

import React from 'react';

interface AdminErrorProps {
  onRetry?: () => void;
}

export default function AdminError({ onRetry }: AdminErrorProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Error loading products</h3>
          <p className="mt-2 text-sm text-gray-500">There was a problem loading the products. Please try again later.</p>
          {onRetry && (
            <div className="mt-6">
              <button
                onClick={onRetry}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
