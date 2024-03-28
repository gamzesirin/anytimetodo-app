"use client";

import React, { useState } from 'react';

const TodoForm = ({ onSubmit, buttonLabel = "Ekle" }) => {
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
        <label htmlFor="title" className="form-label">Görev Başlığı</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Görevin başlığını giriniz..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Açıklama</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          placeholder="Görevin detaylı açıklamasını giriniz..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className='d-flex justify-content-end'>
       
        <button type="submit" className="btn btn-primary">{buttonLabel}</button>
      </div>
    </form>
  );
};

export default TodoForm;
