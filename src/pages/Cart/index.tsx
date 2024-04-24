import db from '../../utils/database'
import styles from './styles.module.css'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import CategoryCard from '../../components/CategoryCard'


export default function Cart() {
  const userId = 1

  const cart = db.cart.filter((cartItem) => cartItem.user_id === userId)
  
  const artworks = db.artworks.filter((artwork) => cart.some((cartItem) => cartItem.artwork_id === artwork.id))
  console.log(artworks)
  
  return (
    <main>
      <section className={styles.greatContainer}>
          <section className={styles.pepito}>
            <h2 className={styles.titles}>Your Shopping Cart</h2>
            <p className={styles.description}>Welcome to your shopping cart! Here you can review and manage all the items you've added.</p>
          </section>

          <section className={styles.rumba}>
            <h2>Manage your Cart "aca van los items"</h2>
            {artworks.map((artwork, i) => (
              <div>
                <img src={artwork.image} alt="" />
                <p>{artwork.title}</p>title=  key={i}
              </div>
            
          ))}
        </section>
      </section>
    
    </main>
  )
}
