import styles from './styles.module.css'


export default function Artwork() {
  const product = 
    {
      id: 1,
      title: "Sunset Dream",
      artist: "Jane Doe",
      description: "A beautiful sunset painting depicting the serene beauty of nature.",
      image: "https://picsum.photos/500/500",
      price: 200,
      category: "Painting",
    }


  return (
    <main>
    <h1>Artwork</h1>
    <section className={styles.imagePresentation}>
      <div className={styles.imageDiv}>
        <img className={styles.image}src={product.image} alt="" />
      </div>
      <div className={styles.description}>
        <h1 className={styles.titles}>{product.title}</h1>
        <p className={styles.aboutPrice}>u$s {product.price}</p>
        <p className={styles.about}>{product.description}</p>
        <p className={styles.about}>{product.artist}</p>
        

        <p className={styles.about}>{product.category}</p>
      </div>
     
    </section>

    </main>
  )
}
