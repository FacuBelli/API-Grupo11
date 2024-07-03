import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import FavoriteButton from '../FavoriteButton'
import type { Artwork } from '../../types/database'
import { formatPrice } from '../../utils/format'

interface Props {
  artwork: Artwork
}

export default function ArtworkCard({ artwork }: Props) {
  const isDisabled = artwork.stock === 0 || artwork.hidden
  return (
    <Link
      to={`/gallery/${artwork.id}`}
      className={isDisabled ? `${styles.card} ${styles.disabled}` : styles.card}
    >
      <div className={styles.favorite}>
        {!isDisabled && <FavoriteButton id={artwork.id} />}
      </div>
      <img className={styles.image} src={`http://localhost:8080/artwork/${artwork.id}/image`} />
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>{artwork.title}</h3>
        <p className={styles.price} style={artwork.stock === 0 ? { textDecoration: 'line-through' } : {}}>{formatPrice(artwork.price ?? 0)}</p>
      </div>
      {artwork.stock === 0 && <span className={styles.outOfStock}>OUT OF STOCK</span>}
      {artwork.hidden && <span className={styles.outOfStock}>HIDDEN BY ARTIST</span>}
    </Link>
  )
}
