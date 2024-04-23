import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import FavoriteButton from '../FavoriteButton'
import type { Artwork } from '../../types/database'

export default function ArtworkCard({ id, image, price, title }: Pick<Artwork, 'id' | 'image' | 'price' | 'title' >) {
  return (
    <Link to={`/gallery/${id}`} className={styles.card}>
      <div className={styles.favorite}>
        <FavoriteButton id={id} />
      </div>
      <img className={styles.image} src={image} />
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
      </div>
    </Link>
  )
}
