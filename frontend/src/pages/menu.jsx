// src/pages/Menu.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Menu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/restaurants/${id}`)
      .then(res => res.json())
      .then(data => setRestaurant(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!restaurant) return <p>Loading menu...</p>;

  return (
    <div style={{ padding: '40px' }}>
      <h1>{restaurant.name} Menu</h1>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {restaurant.menu.map((item, index) => (
          <div key={index} style={{ 
            background: 'rgba(255,255,255,0.15)', 
            padding: '15px', 
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>₹{item.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
