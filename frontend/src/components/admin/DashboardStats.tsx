import React from 'react';

interface DashboardStatsProps {
  totalProducts: number;
  inStockProducts: number;
  outOfStockProducts: number;
  totalCategories: number;
}

export default function DashboardStats({
  totalProducts,
  inStockProducts,
  outOfStockProducts,
  totalCategories
}: DashboardStatsProps) {
  const stats = [
    {
      name: 'Total Products',
      value: totalProducts,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: 'bg-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'In Stock',
      value: inStockProducts,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      color: 'bg-green-500',
      bgColor: 'bg-green-100',
    },
    {
      name: 'Out of Stock',
      value: outOfStockProducts,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-100',
    },
    {
      name: 'Categories',
      value: totalCategories,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      color: 'bg-purple-500',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your products and inventory</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={stat.name}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-200 hover:shadow-md"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
