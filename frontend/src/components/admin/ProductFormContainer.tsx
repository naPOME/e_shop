'use client';

import React, { useState, useEffect } from 'react';
import { Product, Category } from '@/types/product';
import ProductForm from '@/components/admin/ProductForm';

interface ProductFormContainerProps {
  showAddForm: boolean;
  editingProduct: Product | null;
  categories: Category[];
  onSuccess: (productData: any) => void;
  onCancel: () => void;
}

export default function ProductFormContainer({
  showAddForm,
  editingProduct,
  categories,
  onSuccess,
  onCancel
}: ProductFormContainerProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image_url: '',
    category: '',
  });
  
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
      // Prepare the product data with the correct format
      const categoryId = categories.find(category => category.name === formData.category)?.id || null;
      const productData: any = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        category: categoryId, // Send category ID instead of category name
      };
      
      // Remove the category field as we're sending category ID instead
      delete productData.category;
      
      // Call the onSuccess callback with the product data
      onSuccess(productData);
    } catch (error) {
      console.error('Error saving product:', error);
      setErrors({ general: 'Failed to save product. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!showAddForm) return null;
  
  return (
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
  );
}
