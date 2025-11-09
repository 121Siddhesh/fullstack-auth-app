const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurantModel"); 
// ✅ Seed sample data
router.get("/seed", async (req, res) => {
  try {
    await Restaurant.deleteMany();

    const restaurants = await Restaurant.insertMany([
      {
        name: "Spice Corner",
        description: "Tasty Indian meals",
        address: "MG Road",
        cuisine: "Indian",
        image: "https://images.unsplash.com/photo-1600628422011-7c93b30d1d5a",
        menu: [
          { name: "Paneer Butter Masala", description: "Creamy paneer curry", price: 200 },
          { name: "Veg Biryani", description: "Aromatic rice with spices", price: 150 }
        ],
      },
      {
        name: "Green Eats",
        description: "Healthy vegetarian bowls",
        address: "Food Street",
        cuisine: "Healthy",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        menu: [
          { name: "Quinoa Bowl", description: "Quinoa and veggies", price: 180 },
          { name: "Smoothie", description: "Fresh fruit smoothie", price: 100 }
        ],
      },
      {
        name: "Pizza Palace",
        description: "Delicious cheesy pizzas",
        address: "Central Avenue",
        cuisine: "Italian",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be49",
        menu: [
          { name: "Margherita Pizza", description: "Classic tomato and cheese", price: 250 },
          { name: "Pepperoni Pizza", description: "Loaded with pepperoni", price: 300 }
        ],
      },
      {
        name: "Sushi World",
        description: "Authentic Japanese flavors",
        address: "East Street",
        cuisine: "Japanese",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
        menu: [
          { name: "Salmon Sushi", description: "Fresh salmon rolls", price: 400 },
          { name: "Miso Soup", description: "Traditional soup", price: 120 }
        ],
      },
      {
        name: "Burger Hub",
        description: "Juicy burgers and fries",
        address: "Main Square",
        cuisine: "American",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        menu: [
          { name: "Classic Burger", description: "Cheese and lettuce", price: 180 },
          { name: "Veggie Burger", description: "Healthy and tasty", price: 160 }
        ],
      },
    ]);

    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error seeding restaurants" });
  }
});

// ✅ Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching restaurants" });
  }
});

// ✅ Get restaurant by ID
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching restaurant" });
  }
});

module.exports = router;
