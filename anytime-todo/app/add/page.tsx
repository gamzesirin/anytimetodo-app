'use client'

import React from 'react';
import TodoForm from '@/components/molecules/TodoForm';
import { useRouter } from 'next/navigation';

const AddTodoPage = () => {
  const handleFormSubmit = (data) => {
    console.log(data);
    router.push('/');
  };

  const router = useRouter();
  return (
    <div className='container p-5'>
      <h2 className='py-2'>Görev Ekle</h2>
      <TodoForm onSubmit={handleFormSubmit} buttonLabel="Ekle" />
    </div>
  );
};

export default AddTodoPage;
