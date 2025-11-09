import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import RestaurantDetails from './pages/RestaurantDetails';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


export default function App() {
  const { user, logout } = useAuth();

  return (
    <>
      <nav>
        <div>
          <Link to="/">FoodDelivery</Link>
        </div>
        <div>
          {user ? (
            <>
              <span style={{marginRight:12}}>Hi, {user.name}</span>
              <Link to="/orders" style={{marginRight:12}}>Orders</Link>
              <Link to="/cart" style={{marginRight:12}}>Cart</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{marginRight:12}}>Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={
            <ProtectedRoute><Cart /></ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute><OrderHistory /></ProtectedRoute>
          } />
        </Routes>
      </div>
    </>
  );
}
