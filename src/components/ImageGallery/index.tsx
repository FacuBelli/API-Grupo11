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
        <ArtworkCard artwork={artwork} key={i} />
      ))}
    </div>
  )
}
