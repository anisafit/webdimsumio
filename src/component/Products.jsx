// src/components/Products.jsx
import React from 'react';
import './Products.css'; // Import CSS untuk styling produk

const products = [
  { id: 1, image: '/images/dimsumoriginal.jpeg', name: 'Dimsum Original', description: 'Dimsum dengan isian daging ayam. cita rasa ayam yang lebih menonjol, membuat dimsum.io dapat dinikmati lebih lezat' },
  { id: 2, image: '/images/dimsumkomplit.jpeg', name: 'Dimsum Komplit', description: 'Dimsum ayam dengan toping yang lebih komplit, mulai dari kuah, isian yang lebih banyak dan lebih nampolenaknya.' },
  { id: 3, image: '/images/SukiSmall.jpeg', name: 'Suki Small', description: 'Dimsum ayam 2pcs dengan tambahan toping Tomyam, Twister, chikuwa, crabstick, dan cikur kering' },
  { id: 4, image: '/images/SukiMedium.jpeg', name: 'Suki Medium', description: 'Dimsum ayam 1pcs dengan tambahan toping Tomyum, Twister, chikuwa, crabstick, cikur kering, dan bihun jagung' },
  { id: 5, image: '/images/SukiLarge.jpeg', name: 'Suki Large', description: 'Dimsum ayam 2pcs dengan toping Tomyam, jamur enoki, bihun jagung, siomay kering, twister, chikuwa, crabstick, dan cikur kering.' },
  { id: 6, image: '/images/PaketFrozen.jpeg', name: 'Paket Frozen', description: 'Varian dimsum dan suki frozen, yang dapat dinikmati kapan saja.' }
];

const Products = () => {
  const chunkSize = 3;
  const chunks = Array.from({ length: Math.ceil(products.length / chunkSize) }, (v, i) => products.slice(i * chunkSize, i * chunkSize + chunkSize));

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      {chunks.map((chunk, index) => (
        <div className="products-row" key={index}>
          {chunk.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Products;
