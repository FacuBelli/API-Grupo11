// src/pages/Cart.tsx

import React, { Fragment, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import styles from './styles.module.css'
import { formatPrice } from '../../utils/format'
import Button from '../../components/Button'
import Counter from '../../components/Counter'
import PaymentTabs from '../../components/PaymentTabs' // Corregido el nombre del componente importado
import { orderDecrease, orderRemove, orderIncrease } from '../../redux/actions/cartActions'
import type { RootState } from '../../redux'
import type { Artwork } from '../../types/database'

Modal.setAppElement('#root')

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state: RootState) => state.cart.cartItems)
  const artworks = useSelector((state: RootState) => state.artwork.artworks)

  const [discountCode, setDiscountCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false)
  const [shippingAddress, setShippingAddress] = useState({ address: '', city: '' })
  const [isAddressValid, setIsAddressValid] = useState(false)

  const validDiscountCode = 'DISCOUNT10'

  const applyDiscount = () => {
    if (discountCode === validDiscountCode) {
      setDiscount(0.1) // 10% discount
    } else {
      alert('Invalid discount code')
      setDiscount(0)
    }
  }

  const totalItems = useMemo(
    () => cart.reduce((total, item) => total + (item.quantity ?? 0), 0),
    [cart]
  )
  const subtotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        const artwork = artworks.find((art: Artwork) => art.id === item.id)
        const price = artwork ? artwork.price ?? 0 : 0
        return total + (item.quantity ?? 0) * price
      }, 0),
    [cart, artworks]
  )

  const totalWithDiscount = subtotal - subtotal * discount

  const cartArtworks = useMemo(
    () =>
      cart.map((item) => ({
        ...artworks.find((art) => art.id === item.id),
        quantity: item.quantity
      })) as (Artwork & { quantity: number })[],
    [cart, artworks]
  )

  const decreaseQuantity = (id: number) => {
    dispatch(orderDecrease(id))
  }

  const increaseQuantity = (id: number) => {
    dispatch(orderIncrease(id))
  }

  const removeFromCart = (id: number) => {
    dispatch(orderRemove(id))
  }

  const removeAllItems = () => {
    cart.forEach((item) => {
      dispatch(orderRemove(item.id))
    })
  }

  const comprar = () => {
    if (isAddressValid && isPaymentMethodSelected) {
      navigate('/checkout')
    } else {
      alert('Please complete all required fields.')
    }
  }

  const handlePaymentSubmit = (formData: FormData) => {
    console.log('Payment data submitted:', formData)
    // Actualiza la dirección de envío y valida
    setShippingAddress(formData)
    setIsAddressValid(true)
  }

  const handleMethodChange = (method: string) => {
    setPaymentMethod(method)
    setIsPaymentMethodSelected(true)
    // No cerrar el modal automáticamente al cambiar el método de pago
  }

  const handleAddressChange = (info: { address: string, city: string }) => {
    setShippingAddress(info)
    setIsAddressValid(info.address.trim().length > 0 && info.city.trim().length > 0)
  }

  return (
    <main>
      <section className={styles.cartTitle}>
        <h1 className={styles.heading}>
          Your <span>Shopping Cart</span>
        </h1>
        <p>
          Welcome to your shopping cart! Here you can review and manage all the items you've added.
        </p>
      </section>
      <section className={styles.greatContainer}>
        <div className={styles.manageCartContainer}>
          <h2 className={styles.manageCart}>
            MANAGE <span>YOUR CART</span> ({cart.length} ITEMS)
          </h2>
          <div className={styles.rumba}>
            <div className={styles.productView}>
              {cartArtworks.map((artwork, i) => (
                <Fragment key={i}>
                  <div className={styles.container} key={i}>
                    <img className={styles.image} src={`http://localhost:8080/artwork/${artwork.id}/image`} alt="" />
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
                  {i !== cartArtworks.length - 1 && <div className={styles.separator} />}
                </Fragment>
              ))}
              {cart.length !== 0 && <Button onClick={removeAllItems}>Remove All Items</Button>}
            </div>
          </div>
        </div>
        <div className={styles.cartSummary}>
          <h3 className={styles.summaryTitle}>Cart Summary</h3>
          <div className={styles.separator}></div>
          <div className={styles.items}>
            <div className={styles.cartContainer}>
              <p className={styles.cartInfo}>Number of items: {totalItems}</p>
              <p className={styles.cartInfo}>Subtotal: {formatPrice(subtotal)}</p>
              {discount > 0 && (
                <>
                  <p className={styles.cartInfo}>Discount Applied: {discount * 100}%</p>
                  <p className={styles.cartInfo}>
                    Total with Discount: {formatPrice(totalWithDiscount)}
                  </p>
                </>
              )}
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Discount Code"
                className={styles.discountInput}
              />
              <Button onClick={applyDiscount}>Apply Discount</Button>
              <Button onClick={() => setModalIsOpen(true)}>Choose Payment Method</Button>
              <div className={styles.botonComprarContainer}>
                <Button onClick={comprar} disabled={!isAddressValid || !isPaymentMethodSelected}>
                  Buy
                </Button>
              </div>
              {/* Mostrar la dirección de envío y método de pago seleccionado */}
              {isAddressValid && isPaymentMethodSelected && (
                <div className={styles.addressAndPayment}>
                  <p>
                    Shipping Address: {shippingAddress.address}, {shippingAddress.city}
                  </p>
                  <p>Payment Method: {paymentMethod}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h2>Complete Your Purchase</h2>
        <PaymentTabs
          onSubmit={handlePaymentSubmit}
          onMethodChange={handleMethodChange}
          paymentMethod={paymentMethod}
          onAddressChange={handleAddressChange}
          shippingAddress={shippingAddress}
        />
        <div className={styles.botonComprarContainer}>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
        </div>
      </Modal>
    </main>
  )
}

export default Cart
