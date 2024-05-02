
import React, { useState } from 'react';
import styles from './styles.module.css'

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
    <div className={styles.quantity-selector}>
      <button className={styles.decrement-button} onClick={handleDecrement}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.increment-button} onClick={handleIncrement}>+</button>
    </div>
  );
}

export default QuantitySelector;

