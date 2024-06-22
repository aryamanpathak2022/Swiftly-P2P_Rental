import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from '../Components/Sidebar';
import './Dashboard.css';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('http://127.0.0.1:8000/swiftly/transaction/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setTransactions(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className='outerdiv'>
      <Sidebar />
      <TableContainer className='table' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="transactions table">
          <TableHead>
            <TableRow>
              <TableCell>Owner</TableCell>
              <TableCell>Renter</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Transaction Date</TableCell>
              <TableCell>Transaction Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.owner}</TableCell>
                <TableCell>{transaction.renter ? transaction.renter : 'N/A'}</TableCell>
                <TableCell>{transaction.product.name}</TableCell>
                <TableCell>{new Date(transaction.transaction_date).toLocaleString()}</TableCell>
                <TableCell>{transaction.transaction_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
