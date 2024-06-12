import React from 'react';
import Sidebar from '../Components/Sidebar';

function Dashboard () {
  // Sample data for the table
  const sampleData = [
    { itemName: "Item 1", rentedOn: "2024-06-10", enteredTill: "2024-06-15", rentedBy: "User A", rentPerDay: "$10" },
    { itemName: "Item 2", rentedOn: "2024-06-08", enteredTill: "2024-06-12", rentedBy: "User B", rentPerDay: "$15" },
    // Add more sample data as needed
  ];

  return (
    <div style={{ display: 'flex',flex_direction:'row' }}>
      <Sidebar name="John Doe" location="New York, USA" />
     
      {/* Main content */}
      <div style={{ }}>
        {/* Your main content here */}
      </div>

      {/* Sidebar with table */}
      <div style={{ padding: '10px' }}>
        <table style={{ width: '230%', borderCollapse: 'collapse',margin:'0 0 0 20px' }}>
          <thead>
            <tr>
              <th style={{ border: '5px solid black', padding: '8px' }}>Item Name</th>
              <th style={{ border: '5px solid black', padding: '8px' }}>Rented On</th>
              <th style={{ border: '5px solid black', padding: '8px' }}>Entered Till</th>
              <th style={{ border: '5px solid black', padding: '8px' }}>Rented By</th>
              <th style={{ border: '5px solid black', padding: '8px' }}>Rent Per Day</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, index) => (
              <tr key={index}>
                <td style={{ border: '5px solid black', padding: '8px' }}>{item.itemName}</td>
                <td style={{ border: '5px solid black', padding: '8px' }}>{item.rentedOn}</td>
                <td style={{ border: '5px solid black', padding: '8px' }}>{item.enteredTill}</td>
                <td style={{ border: '5px solid black', padding: '8px' }}>{item.rentedBy}</td>
                <td style={{ border: '5px solid black', padding: '8px' }}>{item.rentPerDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
