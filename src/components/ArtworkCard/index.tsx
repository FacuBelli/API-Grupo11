import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import FavoriteButton from '../FavoriteButton'

interface Props {
  id: string
  image: string
  price: number
  title: string
}

export default function ArtworkCard({ id, image, price, title }: Props) {
  return (
    <Link to={`/gallery/${id}`} className={styles.card}>
      <div className={styles.favorite}>
        <FavoriteButton artworkId={id} />
      </div>
      <img className={styles.image} src={image} />
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
      </div>
    </Link>
  )
}
