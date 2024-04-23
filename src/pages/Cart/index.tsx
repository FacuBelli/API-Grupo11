import db from '../../utils/database'

export default function Cart() {
  const userId = 1

  const cart = db.cart.filter((cartItem) => cartItem.user_id === userId)
  
  const artworks = db.artworks.filter((artwork) => cart.some((cartItem) => cartItem.artwork_id === artwork.id))
  console.log(artworks)
  
  return (
    <main>
    <h1>Cart</h1>
    </main>
  )
}
