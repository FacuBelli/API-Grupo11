import styles from './styles.module.css'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'


export default function Artwork() {
  const product = 
    {
      id: 1,
      title: "Sunset Dream",
      artist: "Jane Doe",
      bio: "Born in Jose Marmol, he studies in UADE where met some cool guys that help him to make this page",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis reprehenderit tenetur sint provident, quia nostrum possimus voluptatibus est qui quam magni omnis assumenda libero vitae perspiciatis sunt sit consequuntur!",
      image: "https://picsum.photos/500/500",
      price: 200,
      category: "Painting",
    }

  return (
    <main>
    <section className={styles.imagePresentation}>
      <div className={styles.imageDiv}>
        <img className={styles.image}src={product.image} alt="" />
      </div>
      <div className={styles.description}>
        <h1 className={styles.titles}>{product.title}</h1>
        <p className={styles.aboutPrice}>u$s {product.price}</p>
        <div className={styles.aboutDescription}>
          <p className={styles.about}>{product.description}</p>
        </div>
        
        
        <p className={styles.about}>{product.category}</p>
        <Button to="/Cart">Add to cart</Button>
      </div>
     
    </section>
    <section className={styles.artistPresentation}>
      <p className={styles.aboutPresentation}>{product.artist}</p>
      <p className={styles.aboutPresentation}>{product.artist}</p>
      <p className={styles.aboutPresentation}>{product.bio}</p>
      <p className={styles.aboutPresentation}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, est omnis. Consequatur dolorem eum ducimus hic numquam quisquam sunt ad vero, velit unde impedit, voluptatibus repellendus nemo quis laboriosam vel.</p>
      <Button to="/Profile">Meet the Artist</Button>
    </section>

    </main>
  )
}
