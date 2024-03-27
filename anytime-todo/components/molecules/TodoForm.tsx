"use client";

import React, { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Todo Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Görevin başlığı..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Todo Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          placeholder="Görevin detaylı açıklaması..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className='d-flex justify-content-end'>
      <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;



