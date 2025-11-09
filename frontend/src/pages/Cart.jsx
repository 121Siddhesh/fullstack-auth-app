import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const remove = (i) => {
    const arr = cart.slice();
    arr.splice(i, 1);
    setCart(arr);
  };

  const updateQty = (i, delta) => {
    const arr = cart.slice();
    arr[i].qty = Math.max(1, (arr[i].qty || 1) + delta);
    setCart(arr);
  };

  const placeOrder = async () => {
    try {
      setLoading(true);
      const items = cart.map(c => ({ name: c.name, qty: c.qty || 1, price: c.price }));
      const total = items.reduce((s, it) => s + (it.price * it.qty), 0);
      await API.post('/orders', { items, total, address });
      localStorage.removeItem('cart');
      setCart([]);
      alert('Order placed');
      navigate('/orders');
    } catch (err) {
      alert(err.response?.data?.message || 'Order failed');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return <div>No items in cart</div>;

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((c, i) => (
        <div key={i} className="card flex">
          <div style={{flex:1}}>
            <h4>{c.name}</h4>
            <p>₹{c.price}</p>
          </div>
          <div>
            <button onClick={()=>updateQty(i,-1)}>-</button>
            <span style={{padding:'0 8px'}}>{c.qty || 1}</span>
            <button onClick={()=>updateQty(i,1)}>+</button>
            <div style={{marginTop:8}}>
              <button onClick={() => remove(i)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div style={{marginTop:12}}>
        <input placeholder="Delivery address" value={address} onChange={e=>setAddress(e.target.value)} style={{width:'100%', padding:8}} />
      </div>
      <div style={{marginTop:12}}>
        <button onClick={placeOrder} disabled={loading}>Place order</button>
      </div>
    </div>
  );
}
