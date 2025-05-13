// src/components/Pages/CartPage.js
import React, { useState, useEffect } from 'react';
import '../../Styles/CartPage.css';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored);
  }, []);

  const removeFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.discountPrice || item.price), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, i) => (
              <div key={i} className="cart-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>₹{item.discountPrice || item.price}</p>
                  <button onClick={() => removeFromCart(i)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default CartPage;
