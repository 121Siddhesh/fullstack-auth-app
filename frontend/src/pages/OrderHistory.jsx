import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get('/orders').then(res => setOrders(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 && <div>No orders</div>}
      {orders.map(o => (
        <div className="card" key={o._id}>
          <div><strong>Status: </strong>{o.status}</div>
          <div><strong>Total: </strong>₹{o.total}</div>
          <div><strong>Address: </strong>{o.address}</div>
          <div>
            <strong>Items:</strong>
            <ul>
              {o.items.map((it, idx) => <li key={idx}>{it.name} x {it.qty} — ₹{it.price}</li>)}
            </ul>
          </div>
          <div><small>{new Date(o.createdAt).toLocaleString()}</small></div>
        </div>
      ))}
    </div>
  );
}
