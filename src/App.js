import React from 'react';
import './style.css';
import Item from './Item';
import OrderForm from './OrderForm';
export default function App() {
  return (
    <div>
      <Item name={'iPhone 14'} price={500} />
      <Item name={'iPhone 13'} price={400} />
      <Item name={'iPhone 12'} price={400} />
      <h4>Order Form</h4>
      <OrderForm />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
