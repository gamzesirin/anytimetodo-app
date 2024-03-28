"use client";

import React, { useEffect, useState } from 'react';

import TodoForm from '@/components/molecules/TodoForm';
import { useRouter } from 'next/navigation';

const UpdateTodoPage = () => {
  const [initialData, setInitialData] = useState({ title: '', description: '' });
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;

      setInitialData({ title: "Existing Todo Title", description: "Existing Todo Description" });
    }
  }, [router.isReady, router.query]);

  const handleFormSubmit = (data) => {
    console.log("Updated Todo:", data);

    router.push('/');
  };

  return (
    <div className='container p-5'>
      <h2 className='py-2'>Görev Güncelle</h2>
      <TodoForm onSubmit={handleFormSubmit}  buttonLabel="Güncelle" />
    </div>
  );
};

export default UpdateTodoPage;

