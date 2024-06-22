import React, { useState, useEffect } from 'react';
import './ItemPage.css';
import axios from 'axios';

const ItemPage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch items from the API
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/swiftly/product/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleRentProduct = async (productId) => {
    const token = localStorage.getItem('accessToken'); // Assuming the JWT token is stored in local storage
    if (!token) {
      alert('User not logged in');
      return;
    }

    try {
      await axios.post(
        `http://127.0.0.1:8000/swiftly/rent-product/${productId}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Product rented successfully');
      // Refresh items
      const response = await axios.get('http://127.0.0.1:8000/swiftly/product/');
      setItems(response.data);
    } catch (error) {
      console.error('Error renting product:', error);
      alert('Error renting product');
    }
  };

  const filteredItems = items.filter(item => {
    return (
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
    );
  });

  const baseURL = 'http://localhost:8000'; 

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
            <img src={`${baseURL}${item.product_image}`} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">${item.per_day_rent}</p>
              <button onClick={() => handleRentProduct(item.id)} className="rent-button">
                Rent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
