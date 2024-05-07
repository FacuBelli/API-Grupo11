import React, { useState } from 'react';
import db from '../../utils/database';
import styles from './styles.module.css';
import { formatPrice } from '../../utils/format';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';


export default function Cart() {
  const userId = 1;
  const navigate = useNavigate()


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

  const compra = () =>{
    if (cart.length >= 1) {
      alert("Compra exitosa, se lo redirigira al inicio.");
      navigate('/gallery');

    }else{
      alert("Carrito vacio.");
    }

  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


  const subtotal = cart.reduce((total, item) => {
    const artwork = artworks.find((artwork) => artwork.id === item.artwork_id);
    return total + (artwork.price * item.quantity);
  }, 0);

  return (
    <main>
      <section className={styles.pepito}>
        <h2 className={styles.titles}>Your Shopping Cart</h2>
        <p>
          Welcome to your shopping cart! Here you can review and manage all the items you've added.
        </p>
        <h2 className={styles.manageCart}>Your Cart {cart.length} items</h2>
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

                  <Button className={styles.button} onClick={() => decreaseQuantity(artwork.id)}>-</Button>
                    <span>{cart.find((item) => item.artwork_id === artwork.id)?.quantity || 1}</span>
                    <Button className={styles.button} onClick={() => increaseQuantity(artwork.id)}>+</Button>
 
                  </div>
                  <Button className={styles.button} onClick={() => removeFromCart(artwork.id)}>Remove</Button>
                </div>
 
 
 
              </div>
 
 
 
            ))}
          </div>
 
          {cart.length != 0 && <button className={styles.remove} onClick={removeAllItems}>Remove All Items</button>}
        </div>
        <div className={styles.cartSummary}>
          <h3 className={styles.summaryTitle}>Cart Summary</h3>
          <div className={styles.border}></div>
          <div className={styles.items}>
     
              <div className={styles.cartContainer}>
              <p className={styles.cartInfo}>Number of items: {totalItems}</p>
              <p className={styles.cartInfo}>Subtotal: {formatPrice(subtotal)}</p>
              </div>
 
 
          </div>
          <div className={styles.botonComprarContainer}>
            <Button  onClick={compra}>Comprar</Button>
 
          </div>
 
        </div>
 
      </section>
 
    </main>
  );
}