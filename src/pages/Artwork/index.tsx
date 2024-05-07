import styles from './styles.module.css'
import Button from '../../components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import { formatPrice } from '../../utils/format'
import { CartItemAdd } from '../../redux/actions/cartActions'
import FavoriteButton from '../../components/FavoriteButton'
import Slider from '../../components/Slider'
import ArtworkCard from '../../components/ArtworkCard'

export default function Artwork() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLogged } = useSelector((state: RootState) => state.auth)

  const { artworkId } = useParams()
  const id = artworkId ? parseInt(artworkId) : 0

  const artworks = useSelector((state: RootState) => state.artwork.artworks)
  const artwork = artworks.find((artwork) => artwork.id === id)

  const users = useSelector((state: RootState) => state.user.users)
  const artist = users.find((user) => user.id === artwork?.artist_id)
  const userArtworks = artworks.filter((artwork) => artwork.artist_id === artist?.id)

  const handleAddToCart = () => {
    if (artwork === undefined) return
    if (!isLogged) {
      navigate('/auth/login')
      return
    }

    dispatch(
      CartItemAdd({
        artwork_id: artwork.id,
        user_id: user!.id,
        quantity: 1
      })
    )
  }

  return (
    <main>
      <section className={styles.artworkSection}>
        <img
          className={styles.image}
          src={artwork?.image}
          alt={`Image of artwork "${artwork?.title}"`}
        />
        <div className={styles.dataContainer}>
          <div className={styles.dataHeader}>
            <h1 className={styles.title}>{artwork?.title}</h1>
            <FavoriteButton id={artwork?.id} />
          </div>
          <p className={styles.price}>{formatPrice(artwork?.price ?? 0)}</p>
          <p className={styles.description}>{artwork?.description}</p>
          <div className={styles.categoryContainer}>
            {artwork?.category?.map((category, i) => (
              <Link to={`/search?category=${category.name}`} className={styles.category} key={i}>
                {category.name}
              </Link>
            ))}
          </div>
          <h4><span>UNITS LEFT:</span> {artwork?.stock}</h4>
          {artwork && artwork.stock !== 0 ? <Button onClick={handleAddToCart}>Add to cart</Button> : <Button disabled>SOLD OUT</Button>}
        </div>
      </section>
      <section className={styles.artistSection}>
        <h2 className={styles.artistTitle}>ARTIST</h2>
        <p className={styles.artistName}>{artist?.first_name + ' ' + artist?.last_name}</p>
        <h3 className={styles.artistTitle}>ABOUT THE ARTIST</h3>
        <p className={styles.artistBiography}>{artist?.biography}</p>
        <h4 className={styles.artistTitle}>MORE ABOUT THE ARTIST</h4>
        <Slider>
          {userArtworks.map((artwork, i) => (
            <ArtworkCard artwork={artwork} key={i} />
          ))}
        </Slider>
        {artist && <Button to={`/profile/${artist?.id}`}>Meet the Artist</Button>}
      </section>
    </main>
  )
}
