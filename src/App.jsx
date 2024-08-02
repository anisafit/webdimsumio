// src/App.js
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  let content;
  if (currentPage === 'home') {
    content = <Home />;
  } else if (currentPage === 'products') {
    content = <Products />;
  } else if (currentPage === 'contact') {
    content = <Contact />;
  }

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {content}
      <footer>
        <p>&copy; Copyright 2024 © By Dimsum.io</p>
      </footer>
    </div>
  );
}

export default App;
