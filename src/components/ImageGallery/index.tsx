import type { Artwork } from '../../types/database'
import ArtworkCard from '../ArtworkCard'
import styles from './styles.module.css'

interface Props {
  artworks: Artwork[]
}

export default function ImageGallery({ artworks }: Props) {
  return (
    <div className={styles.gallery}>
      {artworks.map((artwork, i) => (
        <ArtworkCard
          id={artwork.id}
          image={artwork.image}
          price={artwork.price}
          title={artwork.title}
          key={i}
        />
      ))}
    </div>
  )
}
