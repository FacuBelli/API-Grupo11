import React, { useState } from 'react';
import './QuantitySelector.css'; 

const QuantitySelector = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="QuantitySelector">
      <button className="decrement-button" onClick={handleDecrement}>-</button>
      <span className="quantity">{quantity}</span>
      <button className="increment-button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default QuantitySelector;
