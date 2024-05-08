import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import FavoriteButton from '../FavoriteButton'
import type { Artwork } from '../../types/database'
import { formatPrice } from '../../utils/format'

interface Props {
  artwork: Artwork
}

export default function ArtworkCard({ artwork }: Props) {
  return (
    <Link
      to={`/gallery/${artwork.id}`}
      className={artwork.stock === 0 ? `${styles.card} ${styles.disabled}` : styles.card}
    >
      <div className={styles.favorite}>
        {artwork.stock !== 0 && <FavoriteButton id={artwork.id} />}
      </div>
      <img className={styles.image} src={artwork.image} />
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>{artwork.title}</h3>
        <p className={styles.price} style={artwork.stock === 0 ? { textDecoration: 'line-through' } : {}}>{formatPrice(artwork.price ?? 0)}</p>
      </div>
      {artwork.stock === 0 && <span className={styles.outOfStock}>OUT OF STOCK</span>}
    </Link>
  )
}
