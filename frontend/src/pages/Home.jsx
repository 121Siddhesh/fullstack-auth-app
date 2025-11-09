// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Spice Corner",
      description: "Tasty Indian meals",
      cuisine: "Indian",
    },
    {
      id: 2,
      name: "Green Eats",
      description: "Healthy vegetarian bowls",
      cuisine: "Healthy",
    },
  ]);

  return (
    <div className="page-wrapper">
      <div className="home-container">
        <h1>Restaurants</h1>
        <div className="restaurants-grid">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>
                <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                <Link className="view-menu-btn" to={`/restaurant/${restaurant.id}`}>
                  View Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
