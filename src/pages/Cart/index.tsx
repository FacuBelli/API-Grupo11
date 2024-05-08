import styles from './styles.module.css'
import { formatPrice } from '../../utils/format'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import type { Artwork } from '../../types/database'
import { cartItemDecrease, cartItemRemove, cartItemIncrease } from '../../redux/actions/cartActions'
import { useMemo } from 'react'
import Counter from '../../components/Counter'
import { artworkEdit } from '../../redux/actions/artworkActions'

export default function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state: RootState) => state.cart.cartItems)
  const artworks = useSelector((state: RootState) => state.artwork.artworks)

  const totalItems = useMemo(
    () => cart.reduce((total, item) => total + (item.quantity ?? 0), 0),
    [cart]
  )
  const subtotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        const artwork = artworks.find((artwork) => artwork.id === item.artwork_id)
        return total + (artwork?.price ?? 0) * (item.quantity ?? 1)
      }, 0),
    [cart, artworks]
  )

  const cartArtworks = artworks.filter((artwork) =>
    cart.some((cartItem) => cartItem.artwork_id === artwork.id)
  )

  const removeFromCart = (artworkId: Artwork['id']) => {
    const cartItem = cart.find((cartItem) => cartItem.artwork_id === artworkId)!
    dispatch(cartItemRemove(cartItem.id))
  }

  const removeAllItems = () => {
    cart.forEach((cartItem) => {
      dispatch(cartItemRemove(cartItem.id))
    })
  }

  const decreaseQuantity = (artworkId: Artwork['id']) => {
    const cartItem = cart.find((cartItem) => cartItem.artwork_id === artworkId)!
    dispatch(cartItemDecrease(cartItem.id))
  }

  const increaseQuantity = (artworkId: Artwork['id']) => {
    const cartItem = cart.find((cartItem) => cartItem.artwork_id === artworkId)!
    dispatch(cartItemIncrease(cartItem.id))
  }

  const comprar = () => {
    cartArtworks.forEach((artwork) => {
      const cartItem = cart.find((cartItem) => cartItem.artwork_id === artwork.id)!
      dispatch(artworkEdit(artwork.id, { stock: artwork.stock! - cartItem.quantity! }))
    }) 
    if (cart.length >= 1) {
      alert('Compra exitosa, se lo redirigira al inicio.')
      removeAllItems()
      navigate('/gallery')
    } else {
      alert('Carrito vacio.')
    }
  }

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
            {cartArtworks.map((artwork, i) => (
              <>
                <div className={styles.container} key={i}>
                  <img className={styles.image} src={artwork.image} alt="" />
                  <div className={styles.productInfo}>
                    <p className={styles.title}>{artwork.title}</p>
                    <p className={styles.description}>{artwork.description}</p>
                    <p className={styles.price}>{formatPrice(artwork.price!)}</p>
                  </div>
                  <div className={styles.productAcomodo}>
                    <Counter
                      initialValue={1}
                      limit={artwork.stock}
                      onDecrease={() => decreaseQuantity(artwork.id)}
                      onIncrease={() => increaseQuantity(artwork.id)}
                      onDelete={() => removeFromCart(artwork.id)}
                    />
                    <Button className={styles.button} onClick={() => removeFromCart(artwork.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
                {i !== cartArtworks.length && <div className={styles.separator} />}
              </>
            ))}
            {cart.length != 0 && <Button onClick={removeAllItems}>Remove All Items</Button>}
          </div>
        </div>
        <div className={styles.cartSummary}>
          <h3 className={styles.summaryTitle}>Cart Summary</h3>
          <div className={styles.separator}></div>
          <div className={styles.items}>
            <div className={styles.cartContainer}>
              <p className={styles.cartInfo}>Number of items: {totalItems}</p>
              <p className={styles.cartInfo}>Subtotal: {formatPrice(subtotal)}</p>
            </div>
          </div>
          <div className={styles.botonComprarContainer}>
            <Button onClick={comprar}>Comprar</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
