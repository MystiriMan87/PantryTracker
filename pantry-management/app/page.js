// app/page.js
"use client";

import { useState } from 'react';
import AddItemForm from '../components/AddItemForm';
import PantryList from '../components/PantryList';
import SearchBar from '../components/SearchBar';
import './styles.css';


export default function Home() {
  const [editItem, setEditItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    
    <div className="container">
      
      <h1 className="title">Pantry Management</h1>
      <div className="search-bar">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <AddItemForm editItem={editItem} />
      <PantryList setEditItem={setEditItem} searchQuery={searchQuery} />
    </div>
  );
}