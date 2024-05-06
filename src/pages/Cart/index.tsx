import React, { useState } from 'react';
import db from '../../utils/database';
import styles from './styles.module.css';
import { formatPrice } from '../../utils/format';


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
      if (item.artwork_id === artworkId && item.quantity > 2) {
        return { ...item, quantity: item.quantity - 1 };

      }

      return item;
    })
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
      <section className={styles.pepito}>
        <h2 className={styles.titles}>Your Shopping Cart</h2>
        <p>
          Welcome to your shopping cart! Here you can review and manage all the items you've added.
        </p>
        <h2>Manage your Cart</h2>
      </section>
      <section className={styles.greatContainer}>


        <div className={styles.rumba}>

          <div className={styles.productView}>
            {artworks.map((artwork, i) => (
              <div className={styles.container} key={i}>
                <img className={styles.image} src={artwork.image} alt="" />
                <div className={styles.productInfo}>
                  <p className={styles.title}>{artwork.title}</p>
                  <p className={styles.description}>{artwork.description}</p>
                  <p className={styles.price}>{formatPrice(artwork.price!)}</p>
                  <div className={styles.border}></div>
                </div>

                <div className={styles.productAcomodo}>
                  <div className={styles.buttonContainer}>

                    <button className={styles.button} onClick={() => decreaseQuantity(artwork.id)}>-</button>
                    <span>{cart.find((item) => item.artwork_id === artwork.id)?.quantity || 1}</span>
                    <button className={styles.button} onClick={() => increaseQuantity(artwork.id)}>+</button>

                  </div>
                  <button className={styles.button} onClick={() => removeFromCart(artwork.id)}>Remove</button>
                </div>



              </div>



            ))}
          </div>

          <button className={styles.remove} onClick={removeAllItems}>Remove All Items</button>
        </div>
        <div className={styles.cartSummary}>
          <h3 className={styles.summaryTitle}>Cart Summary</h3>
          <div className={styles.border}></div>
          <p className={styles.items}>Number of items</p>
        </div>

      </section>

    </main>
  );
}
