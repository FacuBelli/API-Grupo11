import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import FavoriteButton from '../FavoriteButton'
import type { Artwork } from '../../types/database'

interface Props {
  artwork: Artwork
}

export default function ArtworkCard({ artwork }: Props) {
  return (
    <Link to={`/gallery/${artwork.id}`} className={artwork.is_sold ? `${styles.card} ${styles.disabled}` : styles.card}>
      <div className={styles.favorite}>
        <FavoriteButton id={artwork.id} />
      </div>
      <img className={styles.image} src={artwork.image} />
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>{artwork.title}</h3>
        <p className={styles.price}>${artwork.price}</p>
      </div>
    </Link>
  )
}
