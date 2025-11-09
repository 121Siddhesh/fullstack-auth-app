const Restaurant = require('../models/Restaurant');

exports.getAll = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const rest = await Restaurant.findById(req.params.id);
    if (!rest) return res.status(404).json({ message: 'Restaurant not found' });
    res.json(rest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Optional: seed route (admin) - not protected here for starter simplicity
exports.seedSample = async (req, res) => {
  try {
    await Restaurant.deleteMany({});
    const sample = [
      {
        name: 'Spice Corner',
        description: 'Tasty Indian meals',
        address: 'MG Road',
        cuisine: 'Indian',
        menu: [
          { name: 'Paneer Butter Masala', description: 'Creamy paneer', price: 200 },
          { name: 'Veg Biryani', description: 'Aromatic rice', price: 150 }
        ]
      },
      {
        name: 'Green Eats',
        description: 'Healthy vegetarian bowls',
        address: 'Food Street',
        cuisine: 'Healthy',
        menu: [
          { name: 'Quinoa Bowl', description: 'Quinoa and veggies', price: 180 },
          { name: 'Smoothie', description: 'Fresh fruit smoothie', price: 100 }
        ]
      }
    ];
    const created = await Restaurant.insertMany(sample);
    res.json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
