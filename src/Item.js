import React from 'react';
import './style.css';

export default function Item({ name, price }) {
  return (
    <div class="item">
      <h5>{name}</h5>
      <label>Price:{price} USD</label>
    </div>
  );
}
