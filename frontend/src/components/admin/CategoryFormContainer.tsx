'use client';

import React, { useState } from 'react';
import CategoryForm from '@/components/admin/CategoryForm';

interface CategoryFormContainerProps {
  showCategoryForm: boolean;
  onSuccess: (newCategoryName: string) => void;
  onCancel: () => void;
}

export default function CategoryFormContainer({
  showCategoryForm,
  onSuccess,
  onCancel
}: CategoryFormContainerProps) {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryFormError, setCategoryFormError] = useState('');
  
  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCategoryName.trim()) {
      setCategoryFormError('Category name is required');
      return;
    }
    
    try {
      // Pass the category name to the parent component for handling
      onSuccess(newCategoryName.trim());
      setNewCategoryName('');
      setCategoryFormError('');
    } catch (error: any) {
      console.error('Error adding category:', error);
      if (error.response) {
        // Server responded with error status
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
        // Request was made but no response received
        setCategoryFormError('Network error. Please check your connection and CORS settings.');
      } else {
        // Something else happened
        setCategoryFormError(`Failed to add category: ${error.message || 'Please try again.'}`);
      }
    }
  };
  
  if (!showCategoryForm) return null;
  
  return (
    <CategoryForm 
      newCategoryName={newCategoryName}
      setNewCategoryName={setNewCategoryName}
      categoryFormError={categoryFormError}
      setCategoryFormError={setCategoryFormError}
      handleAddCategory={handleAddCategory}
    />
  );
}
