import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar'; 
import './Lented_items.css'; // Adjust the import path as necessary

const LentedItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            const user = JSON.parse(localStorage.getItem('user')); 
            // Assuming user data is stored in localStorage
            const accessToken = localStorage.getItem('accessToken');
            if (user) {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/swiftly/my-products/', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}` // Adjust if your token is stored differently
                        }

                    });
                    console.log("hello");
                    setItems(response.data);
                    // print items vlaues
                    console.log(response.data);
                    
                    
                } catch (error) {
                    setError('Failed to fetch items');
                } finally {
                    setLoading(false);
                }
            } else {
                setError('User not found');
                setLoading(false);
            }
        };

        fetchItems();
    }, []);
    const baseURL = 'http://localhost:8000'; 
    return (
        <div className="lented-items-page">
            <Sidebar />
            <div className="content">
                <h1>Items You Have Lent</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="items-list">
                        {items.length > 0 ? (
                            items.map((item) => (
                                <div key={item.id} className="item-card">
                                     <img src={`${baseURL}${item.product_image}`} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    
                                    <p>Per Day Rent: ${item.per_day_rent}</p>
                                    {item.renter && <p>Rented to: {item.renter.username}</p>}
                                </div>
                            ))
                        ) : (
                            <p>No items lent out.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LentedItems;
