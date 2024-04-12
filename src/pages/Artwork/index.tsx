import styles from './styles.css'


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
    <section id="imagePresentation">
      <div className="description">
        <h1 className={styles.}>{product.title}</h1>
        <p>{product.artist}</p>
        <p>{product.description}</p>
        <p>u$s {product.price}</p>
        <p>{product.category}</p>
      </div>
      <div className="imagen">
        <img src={product.image} alt="" />
      </div>

    </section>

    </main>
  )
}
