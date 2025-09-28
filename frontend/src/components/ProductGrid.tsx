import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  filteredProductsCount: number;
  onClearFilters: () => void;
}

export default function ProductGrid({
  products,
  isLoading,
  filteredProductsCount,
  onClearFilters
}: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden animate-pulse">
            <div className="bg-gray-200 h-48 w-full"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
        <div className="mt-6">
          <button
            onClick={onClearFilters}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Clear Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
          <div className="relative">
            {product.image_url ? (
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="bg-gray-100 w-full h-48 flex items-center justify-center text-gray-400 border-b border-gray-200">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            {product.stock === 0 && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Sold Out
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-bold text-gray-900 line-clamp-1">{product.name}</h3>
              {product.category && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 ml-2 flex-shrink-0">
                  {product.category}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
              {product.description || 'No description available for this product.'}
            </p>
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                <span className={`inline-flex items-center text-xs ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? (
                    <>
                      <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {product.stock} in stock
                    </>
                  ) : (
                    <>
                      <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Out of stock
                    </>
                  )}
                </span>
              </div>
              <Link 
                href={`/products/${product.id}`}
                className="block w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center text-sm transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
