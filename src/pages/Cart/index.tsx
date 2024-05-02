import React, { useState } from 'react';
import db from '../../utils/database';
import styles from './styles.module.css';

export default function Cart() {
  const userId = 1;

  const [cart, setCart] = useState(db.cart.filter((cartItem) => cartItem.user_id === userId));
  const artworks = db.artworks.filter((artwork) => cart.some((cartItem) => cartItem.artwork_id === artwork.id));

  const removeFromCart = (artworkId) => {
    const newCart = cart.filter((item) => item.artwork_id !== artworkId);
    setCart(newCart);
  };

  const updateQuantity = (artworkId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.artwork_id === artworkId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeAllItems = () => {
    setCart([]);
  };

  const decreaseQuantity = (artworkId) => {
    const updatedCart = cart.map((item) => {
      if (item.artwork_id === artworkId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (artworkId) => {
    const updatedCart = cart.map((item) => {
      if (item.artwork_id === artworkId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <main>
      <section className={styles.greatContainer}>
        <section className={styles.pepito}>
          <h2 className={styles.titles}>Your Shopping Cart</h2>
          <p className={styles.description}>
            Welcome to your shopping cart! Here you can review and manage all the items you've added.
          </p>
        </section>

        <section className={styles.rumba}>
          <h2>Manage your Cart</h2>
          {artworks.map((artwork, i) => (
            <div className={styles.container} key={i}>
              <img src={artwork.image} alt="" />
              <div className={styles.Acomodador}>
                <p className={styles.title}>{artwork.title}</p>
                <p className={styles.description}>{artwork.description}</p>
                <p>{artwork.price}</p>
                <div className={styles.border}></div>
              </div>
              <div className={styles.buttonContainer}>
                {/* <button className={styles.button} onClick={() => removeFromCart(artwork.id)}>Remove</button> */}
                <button className={styles.button} onClick={() => decreaseQuantity(artwork.id)}>-</button>
                <span>{cart.find((item) => item.artwork_id === artwork.id)?.quantity || 1}</span>
                <button className={styles.button} onClick={() => increaseQuantity(artwork.id)}>+</button>
              </div>
            </div>
          ))}
          <button onClick={removeAllItems}>Remove All Items</button>
        </section>
      </section>
    </main>
  );
}
