"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function Lend_items() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        setError('No JWT token found. Please log in.');
        return;
      }

      const response = await fetch('https://swiftly-p2p-rental.onrender.com/swiftly/my-products/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred');
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">All Items</h1>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <div className="flex items-center mb-2">
                <span className="text-gray-500 mr-2">Rent per day:</span>
                <span className="font-medium">${item.per_day_rent}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-500 mr-2">Status:</span>
                <span className={`font-medium ${item.renter ? 'text-red-500' : 'text-green-500'}`}>
                  {item.renter ? 'Rented' : 'Available'}
                </span>
              </div>
              {item.renter && (
                <>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-500 mr-2">Rented by:</span>
                    <span className="font-medium">{item.renter.username}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-500 mr-2">Rented from:</span>
                    <span className="font-medium">{item.rented_on}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-500 mr-2">Rented till:</span>
                    <span className="font-medium">{item.returned_on}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-500 mr-2">Renter&apos;s mobile:</span>
                    <span className="font-medium">{item.renter.mobile}</span>
                  </div>
                </>
              )}
              <div className="mt-4">
                <Button className="w-full">Chat with Renter</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
