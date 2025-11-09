const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
});

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  address: String,
  cuisine: String,
  image: String,
  menu: [menuItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
