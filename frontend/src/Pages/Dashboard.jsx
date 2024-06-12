import React from 'react';
import Sidebar from '../Components/Sidebar';

function Dashboard () {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar name="John Doe" location="New York, USA" />
      <div style={{ flex: 1 }}>
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default Dashboard;
