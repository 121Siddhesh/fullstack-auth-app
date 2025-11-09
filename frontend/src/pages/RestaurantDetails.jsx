// src/pages/RestaurantDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUtensils, FaRupeeSign } from "react-icons/fa";
import "./RestaurantDetails.css"; // optional, for extra styling

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!restaurant) return <p>Loading restaurant details...</p>;

  return (
    <div className="restaurant-details-container">
      <div className="restaurant-header">
        <img src={restaurant.image} alt={restaurant.name} />
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
          <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
          <p><FaUtensils /> {restaurant.menu.length} items</p>
        </div>
      </div>

      <h2>Menu</h2>
      <div className="menu-grid">
        {restaurant.menu.map((item, index) => (
          <div key={index} className="menu-card">
            {item.image && <img src={item.image} alt={item.name} />}
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><FaRupeeSign /> {item.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
