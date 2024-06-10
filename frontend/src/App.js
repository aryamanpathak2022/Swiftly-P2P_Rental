import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
// import Show from './pages/Show';
// import Account from './pages/Account';
// import Product from './pages/Product';
// import Chat from './pages/Chat';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/show" element={<Show />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product" element={<Product />} />
            <Route path="/chat" element={<Chat />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
