import React, { useState } from 'react';
import './App.css';

const products = [
  { name: 'Wireless Headphones', price: '$129.99', category: 'electronics' },
  { name: 'Cotton T-Shirt', price: '$24.99', category: 'clothing' },
  { name: 'Bluetooth Speaker', price: '$89.99', category: 'electronics' },
  { name: 'Denim Jeans', price: '$59.99', category: 'clothing' },
];

function App() {
  const [filteredCategory, setFilteredCategory] = useState('All Products');

  const handleFilterChange = (event) => {
    setFilteredCategory(event.target.value);
  };

  const filteredProducts = filteredCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === filteredCategory);

  return (
    <div className="App">
      <h1>Product Filter</h1>
      <div className="filter-bar">
        <label htmlFor="product-filter">Filter by: </label>
        <select 
          id="product-filter" 
          value={filteredCategory} 
          onChange={handleFilterChange}
        >
          <option value="All Products">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      <div className="product-cards">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <span className={`category ${product.category}`}>{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
