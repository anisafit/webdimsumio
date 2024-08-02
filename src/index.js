import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Pastikan path ini sesuai dengan lokasi file App.js
import './index.css';     // Import stylesheet jika ada

// Render komponen App ke dalam elemen dengan id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
