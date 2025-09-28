import React from 'react';

interface CategoryFormProps {
  newCategoryName: string;
  setNewCategoryName: (name: string) => void;
  categoryFormError: string;
  setCategoryFormError: (error: string) => void;
  handleAddCategory: (e: React.FormEvent) => void;
}

export default function CategoryForm({
  newCategoryName,
  setNewCategoryName,
  categoryFormError,
  setCategoryFormError,
  handleAddCategory
}: CategoryFormProps) {
  return (
    <div className="mb-8 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50">
        <h3 className="text-lg font-medium text-gray-900">Add New Category</h3>
      </div>
      <div className="px-6 py-6">
        <form onSubmit={handleAddCategory}>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-3">
            <div className="flex-1">
              <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 mb-1">
                Category Name *
              </label>
              <input
                type="text"
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => {
                  setNewCategoryName(e.target.value);
                  if (categoryFormError) setCategoryFormError('');
                }}
                placeholder="Enter new category name"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150"
              >
                <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Category
              </button>
            </div>
          </div>
          {categoryFormError && (
            <div className="mt-2 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md text-sm">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-2">
                  <p>{categoryFormError}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
