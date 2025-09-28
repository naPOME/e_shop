import { Category } from '@/types/product';

interface ProductFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Category[];
  filteredProductsCount: number;
}

export default function ProductFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredProductsCount
}: ProductFilterProps) {
  return (
    <div className="mb-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Find Your Perfect Product</h2>
        <p className="text-gray-600 mt-2 md:mt-0">{filteredProductsCount} products found</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search Input */}
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm hover:shadow-md"
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="md:col-span-4">
          <div className="relative">
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white shadow-sm hover:shadow-md"
            >
              <option value="all">All Categories</option>
              {categories.map((category: Category) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Clear Filters Button */}
        <div className="md:col-span-3">
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-xl hover:from-gray-100 hover:to-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 font-medium shadow-sm hover:shadow-md border border-gray-200"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset Filters
          </button>
        </div>
      </div>
      
      {/* Category Chips */}
      <div className="mt-6 flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory.toLowerCase() === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          All Products
        </button>
        {categories.map((category: Category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory.toLowerCase() === category.name.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
