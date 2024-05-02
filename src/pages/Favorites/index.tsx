import { useSelector } from 'react-redux'
import FavoriteCard from './components/FavoriteCard'
import styles from './styles.module.css'
import type { RootState } from '../../redux'
import { useMemo } from 'react'

export default function Favorites() {
  const { user, isLogged } = useSelector((state: RootState) => state.auth)
  const { favorites } = useSelector((state: RootState) => state.favorite)
  const userFavorites = useMemo(() => {
    if (!isLogged) return []
    return favorites.filter((favorite) => favorite.user_id === user!.id)}
  , [user, isLogged, favorites])

  return (
    <main>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          YOUR <span>FAVORITES</span>
        </h1>
        <p>
          You currently have <span>{userFavorites.length} artworks</span> in your favorites list.
        </p>
      </div>
      <section className={styles.section}>
        {userFavorites.map((favorite, i) => (
          <FavoriteCard favorite={favorite} key={i} />
        ))}
      </section>
    </main>
  )
}
