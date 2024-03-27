"use client"

import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from 'react';

import SearchBar from "@/components/molecules/SearchBar";
import TodoTabs from '../components/organisms/TodoTabs';

const HomePage = () => {


  return (
    <div className="container mt-5">
    <div className="d-flex gap-5 justify-content-between pb-5">
        <h1>Todo Listesi</h1>
        <SearchBar/>
    </div>
    <TodoTabs />
</div>

  );
};

export default HomePage;


