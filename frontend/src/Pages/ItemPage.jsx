import React, { useState } from 'react';
import './ItemPage.css';

const sampleItems = [
  { id: 1, name: 'Item 1', price: 29.99, category: 'Category 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Item 2', price: 39.99, category: 'Category 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Item 3', price: 19.99, category: 'Category 1', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Item 4', price: 49.99, category: 'Category 3', image: 'https://via.placeholder.com/150' },
  // Add more items as needed
];

const ItemPage = () => {
  const [items, setItems] = useState(sampleItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = items.filter(item => {
    return (
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
    );
  });

  return (
    <div className="item-page">
      <div className="filters">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-filter">
          <option value="All">All Categories</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
      </div>
      <div className="item-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
