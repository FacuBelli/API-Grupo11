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
              <div className={styles.container}>
                <img src={artwork.image} alt=""/>
                <div className={styles.Acomodador}>
                <p className={styles.title}>{artwork.title}</p> 
                <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, amet quia dolorum blanditiis deserunt assumenda, rerum rem natus earum molestiae aut neque maiores quos nihil odio incidunt, vitae tempora asperiores.</p> 
                <p>{artwork.price}</p>
                </div>
                <div><Button>Cantidad</Button></div>  

              </div>
             
            
          ))}
        </section>
      </section>
    
    </main>
  )
}
