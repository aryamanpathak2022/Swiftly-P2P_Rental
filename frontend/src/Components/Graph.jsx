import React from 'react';
import { Line } from 'react-chartjs-2';
import './Graph.css'; // Import CSS file

const Graph = () => {
  // Sample data for demonstration
  const sampleData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30'],
    rentals: [20, 15, 30, 5, 40, 45, 10, 55, 60, 65, 70, 25, 80, 15, 90, 95, 100, 105, 110, 15, 120, 125, 10, 235, 140, 145, 150, 155, 160, 165],
    earnings: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650]
  };

  // Calculate total earnings
  const totalEarnings = sampleData.earnings.reduce((acc, curr) => acc + curr, 0);
  var options = {
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }   
        }]
    }
}
  
  const data = {
    labels: sampleData.labels,
    datasets: [
      {
        label: 'Number of Rentals',
        data: sampleData.rentals,
        borderColor: 'black',
        fill: false,
      }, 
    ]
  };

  return (
    <div className="graph-container">
      <h2>Rentals and Earnings Graph</h2>
      <div className="graph-wrapper">
        <div className="chart-container">
          <Line data={data} options={options}/>
        </div>
        <div className="earnings-info">
          <p>Total Earnings This Month:</p>
          <p>Rs {totalEarnings}</p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
