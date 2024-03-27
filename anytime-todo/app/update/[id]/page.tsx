"use client";

import React, { useEffect, useState } from 'react';

import TodoForm from '@/components/molecules/TodoForm';
import { useRouter } from 'next/navigation'; // Ensure this is supported in your Next.js version

const UpdateTodoPage = () => {
  const [initialData, setInitialData] = useState({ title: '', description: '' });
  const router = useRouter(); // This is now placed outside to be accessible by the entire component

  // Ensure router is ready before attempting to access router.query
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query; // Now 'id' is defined within the scope it's used

      // Fetch the todo data using 'id'
      // Example: Fetching data from an API or local state
      // Here you would replace the below line with actual data fetching logic
      // For demonstration, using placeholder values
      setInitialData({ title: "Existing Todo Title", description: "Existing Todo Description" });

      // Dependency array now correctly includes 'router', ensuring effect runs when router.query is available
    }
  }, [router.isReady, router.query]);

  const handleFormSubmit = (data) => {
    console.log("Updated Todo:", data);
    // Here you would implement the update logic, for example, calling an API to update the todo

    // Navigate back to the home page after update
    router.push('/'); // Ensure this navigation is intended and works as expected in your app structure
  };

  return (
    <div>
      <h2>Update Task</h2>
      <TodoForm onSubmit={handleFormSubmit} initialData={initialData} />
    </div>
  );
};

export default UpdateTodoPage;
