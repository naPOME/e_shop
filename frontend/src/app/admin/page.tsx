'use client';

import { useState, useEffect } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { productApi, categoryApi } from '@/utils/api';
import { Product, Category } from '@/types/product';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardStats from '@/components/admin/DashboardStats';
import ProductList from '@/components/admin/ProductList';
import ProductForm from '@/components/admin/ProductForm';
import CategoryList from '@/components/admin/CategoryList';
import CategoryForm from '@/components/admin/CategoryForm';

export default function AdminDashboard() {
  const { products, isLoading, isError, mutate } = useProducts();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image_url: '',
    category: '',
  });
  
  const [categoryFormError, setCategoryFormError] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (!showAddForm && !editingProduct) {
      setFormData({
        name: '',
        description: '',
        price: '',
        stock: '',
        image_url: '',
        category: '',
      });
      setErrors({});
    } else if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        description: editingProduct.description || '',
        price: editingProduct.price.toString(),
        stock: editingProduct.stock.toString(),
        image_url: editingProduct.image_url || '',
        category: editingProduct.category || '',
      });
    }
  }, [showAddForm, editingProduct]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryApi.getAll();
        setCategories(response.data);
      } catch (error: any) {
        if (error.response) {
          setCategoryFormError(`Failed to fetch categories: ${error.response.status}`);
        } else if (error.request) {
          setCategoryFormError('Network error. Please check your connection.');
        } else {
          setCategoryFormError('Failed to fetch categories. Please try again.');
        }
      }
    };
    
    fetchCategories();
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    
    if (!formData.stock || isNaN(Number(formData.stock)) || Number(formData.stock) < 0) {
      newErrors.stock = 'Valid stock quantity is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Find the category ID based on the selected category name
      let categoryId = null;
      if (formData.category) {
        const selectedCategory = categories.find(cat => cat.name === formData.category);
        categoryId = selectedCategory ? selectedCategory.id : null;
      }
      
      // Prepare the product data with the correct format
      const productData: any = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        category: categoryId,
      };
      
      // Remove the category field as we're sending category ID instead
      delete productData.category;
      
      if (editingProduct) {
        await productApi.update(editingProduct.id, productData);
        toast.success('Product updated successfully!');
      } else {
        await productApi.create(productData);
        toast.success('Product created successfully!');
      }
      
      // Refresh products list
      mutate();
      
      // Reset form and close
      setShowAddForm(false);
      setEditingProduct(null);
    } catch (error) {
      toast.error('Failed to save product. Please try again.');
      setErrors({ general: 'Failed to save product. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      await productApi.delete(id);
      toast.success('Product deleted successfully!');
      mutate(); // Refresh products list
    } catch (error) {
      toast.error('Failed to delete product. Please try again.');
    }
  };
  
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowAddForm(true);
  };
  
  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCategoryName.trim()) {
      setCategoryFormError('Category name is required');
      return;
    }
    
    try {
      await categoryApi.create(newCategoryName.trim());
      const response = await categoryApi.getAll();
      setCategories(response.data);
      setNewCategoryName('');
      setCategoryFormError('');
      setShowCategoryForm(false);
      toast.success('Category added successfully!');
    } catch (error: any) {
      toast.error('Failed to add category. Please try again.');
      if (error.response) {
        if (error.response.status === 401) {
          setCategoryFormError('Unauthorized. Please check your admin credentials.');
        } else if (error.response.status === 400) {
          setCategoryFormError('Invalid category name. Please try again.');
        } else if (error.response.status === 409) {
          setCategoryFormError('Category already exists. Please use a different name.');
        } else {
          setCategoryFormError(`Failed to add category: ${error.response.data?.message || 'Please try again.'}`);
        }
      } else if (error.request) {
        setCategoryFormError('Network error. Please check your connection and CORS settings.');
      } else {
        setCategoryFormError(`Failed to add category: ${error.message || 'Please try again.'}`);
      }
    }
  };
  
  if (isError) {
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
          </div>
        </div>
      </div>
    );
  }
  
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.stock > 0).length;
  const outOfStockProducts = products.filter(p => p.stock === 0).length;
  const totalCategories = categories.length;
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ToastContainer position="top-right" autoClose={3000} />
        <DashboardStats 
          totalProducts={totalProducts}
          inStockProducts={inStockProducts}
          outOfStockProducts={outOfStockProducts}
          totalCategories={totalCategories}
        />
        
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Products</h2>
            <p className="mt-1 text-sm text-gray-500">Manage your product inventory</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowCategoryForm(!showCategoryForm)}
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
            >
              <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {showCategoryForm ? 'Cancel' : 'Manage Categories'}
            </button>
            <button
              onClick={() => {
                setEditingProduct(null);
                setShowAddForm(!showAddForm);
              }}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
            >
              <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              {showAddForm ? 'Cancel' : 'Add Product'}
            </button>
          </div>
        </div>
        
        {showCategoryForm && (
          <CategoryForm 
            newCategoryName={newCategoryName}
            setNewCategoryName={setNewCategoryName}
            categoryFormError={categoryFormError}
            setCategoryFormError={setCategoryFormError}
            handleAddCategory={handleAddCategory}
          />
        )}
        
        {showAddForm && (
          <ProductForm 
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            categories={categories}
            editingProduct={editingProduct}
          />
        )}
        
        <ProductList 
          products={products}
          isLoading={isLoading}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
