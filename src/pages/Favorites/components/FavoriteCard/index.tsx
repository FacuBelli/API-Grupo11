import { useMemo } from 'react'
import FavoriteButton from '../../../../components/FavoriteButton'
import type { Favorite } from '../../../../types/database'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../../redux'
import { Link } from 'react-router-dom'

interface Props {
  favorite: Favorite
}

export default function FavoriteCard({ favorite }: Props) {
  const artworks = useSelector((state: RootState) => state.artwork.artworks)

  const artwork = useMemo(() => {
    return artworks.find((artwork) => artwork.id === favorite.artwork_id)
  }, [artworks, favorite])

  return (
    <Link to={`/gallery/${artwork?.id}`} className={styles.card}>
      <img className={styles.image} src={artwork?.image} alt={'Picture of ' + artwork?.title} />
      <div className={styles.container}>
        <div className={styles.data}>
          <h2 className={styles.title}>{artwork?.title}</h2>
          <p className={styles.description}>{artwork?.description}</p>
          <h3 className={styles.price}>${artwork?.price}</h3>
        </div>
        <FavoriteButton id={favorite.artwork_id!} />
      </div>
    </Link>
  )
}
