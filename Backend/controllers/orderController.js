const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { items, total, address } = req.body;
    if (!items || items.length === 0) return res.status(400).json({ message: 'No items in order' });

    const order = await Order.create({
      user: req.user._id,
      items,
      total,
      address
    });

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
