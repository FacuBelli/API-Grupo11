import db from '../../utils/database'
import styles from './styles.module.css'

export default function Cart() {
  const userId = 1

  const cart = db.cart.filter((cartItem) => cartItem.user_id === userId)
  
  const artworks = db.artworks.filter((artwork) => cart.some((cartItem) => cartItem.artwork_id === artwork.id))
  console.log(artworks)
  
  return (
    <main>
        <section>
        
          

          
        <section className={styles.pepito}>
          <h2 className={styles.titles}>Your Shopping Cart</h2>
          <p className={styles.description}>Welcome to your shopping cart! Here you can review and manage all the items you've added.</p>
        </section>

        <section className={styles.rumba}>
          <h2>Manage your Cart "aca van los items"</h2>

      </section>
    </section>
    </main>
  )
}
