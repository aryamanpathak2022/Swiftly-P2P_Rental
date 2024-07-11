"use client"
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Rented_items() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    async function fetchRentals() {
      try {
        const response = await fetch('https://swiftly-p2p-rental.onrender.com/swiftly/rented-products/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Replace with your actual token retrieval logic
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch rentals');
        }
        const data = await response.json();
        setRentals(data);
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }
    }

    fetchRentals();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">My Rentals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentals.map((rental) => (
          <Card key={rental.id}>
            <CardHeader>
              <CardTitle>{rental.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Rented On</p>
                  <p>{rental.rented_on}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Due On</p>
                  <p></p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time Remaining</p>
                  <p></p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rent Per Day</p>
                  <p>{rental.per_day_rent}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button size="sm">Chat with Owner</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
