import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // import the CSS

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={onSubmit}>
          <input 
            required 
            placeholder="Name" 
            value={form.name} 
            onChange={e=>setForm({...form, name:e.target.value})} 
          />
          <input 
            required 
            type="email" 
            placeholder="Email" 
            value={form.email} 
            onChange={e=>setForm({...form, email:e.target.value})} 
          />
          <input 
            required 
            type="password" 
            placeholder="Password" 
            value={form.password} 
            onChange={e=>setForm({...form, password:e.target.value})} 
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}
