const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant.menu' },
  name: String,
  qty: Number,
  price: Number
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [orderItemSchema],
  total: Number,
  status: { type: String, default: 'pending' }, // pending / preparing / on-the-way / delivered
  address: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
