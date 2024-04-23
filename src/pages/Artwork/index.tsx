import styles from './styles.module.css'
import Button from '../../components/Button'
import useArtwork from '../../hooks/useArtwork'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'


export default function Artwork() {
  const { artworkId } = useParams()
  const id = artworkId ? parseInt(artworkId) : 0

  const artwork = useArtwork(id)!

  const artist = useUser(artwork.artist_id)!

  return (
    <main>
    <section className={styles.imagePresentation}>
      <div className={styles.imageDiv}>
        <img className={styles.image}src={artwork.image} alt="" />
      </div>
      <div className={styles.description}>
        <h1 className={styles.titles}>{artwork.title}</h1>
        <p className={styles.aboutPrice}>u$s {artwork.price}</p>
        <div className={styles.aboutDescription}>
          <p className={styles.about}>{artwork.description}</p>
        </div>
        
        
        {/* <p className={styles.about}>{artwork.category}</p> */}
        <Button to="/Cart">Add to cart</Button>
      </div>
     
    </section>
    <section className={styles.artistPresentation}>
      <p className={styles.aboutPresentation}>{artist.first_name + ' ' + artist.last_name}</p>
      <p className={styles.aboutPresentation}>{artist.biography}</p>
      <Button to="/Profile">Meet the Artist</Button>
    </section>

    </main>
  )
}
