import styles from './styles.module.css'

interface Props {
  title: string
  price: number
  url: string
}

export default function PerfilArtist({title, price, url}: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={url}/>
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  )
}
