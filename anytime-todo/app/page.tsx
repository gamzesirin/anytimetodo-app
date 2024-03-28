"use client"

import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import SearchBar from "@/components/molecules/SearchBar";
import TodoTabs from '../components/organisms/TodoTabs';

const HomePage = () => {
  return (
    <div className="container mt-5">
      
      <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5 justify-content-between pb-5">
          <h1>Yapılacaklar Listesi</h1>
          <SearchBar />
      </div>
      <TodoTabs />
    </div>
  );
};

export default HomePage;
