import FavoriteButton from '../../../../components/FavoriteButton'
import type { Artwork } from '../../../../types/database'
import styles from './styles.module.css'

interface Props {
  artwork: Artwork
}

export default function FavoriteCard({ artwork }: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={artwork.image} alt={'Picture of ' + artwork.title} />
      <div className={styles.container}>
        <div className={styles.data}>
          <h2 className={styles.title}>{artwork.title}</h2>
          <p className={styles.description}>{artwork.description}</p>
          <h3 className={styles.price}>${artwork.price}</h3>
        </div>
        <FavoriteButton id={artwork.id} isFav />
      </div>
    </div>
  )
}
