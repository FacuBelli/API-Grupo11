import useAuth from '../../hooks/useAuth'
import FavoriteCard from './components/FavoriteCard'
import styles from './styles.module.css'

export default function Favorites() {
  const { user } = useAuth()

  // const favorites = useSelector
  // console.log(favorites)

  return (
    <main>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          YOUR <span>FAVORITES</span>
        </h1>
        {/* <p>
          You currently have <span>{favorites.length} artworks</span> in your favorites list.
        </p> */}
      </div>
      {/* <section className={styles.section}>
        {favorites.map((artwork, i) => (
          <FavoriteCard artwork={artwork} key={i} />
        ))}
      </section> */}
    </main>
  )
}
