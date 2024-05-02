import { useSelector } from 'react-redux'
import ProfileCard from './components/ProfileCard'
import styles from './styles.module.css'
import type { RootState } from '../../redux'
import ImageGallery from '../../components/ImageGallery'

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.auth)
  const { artworks } = useSelector((state: RootState) => state.artwork)

  const createdArtworks = user?.created_artworks?.map(
    (artworkId) => artworks.find((artwork) => artwork.id === artworkId)!
  )
  const soldArtworks = createdArtworks?.filter((artwork) => artwork?.is_sold)

  const boughtArtworks = user?.bought_artworks?.map(
    (artworkId) => artworks.find((artwork) => artwork.id === artworkId)!
  )

  return (
    <main className={styles.main}>
      <section className={styles.card}>
        {user && (
          <ProfileCard
            user={user}
            stats={{
              created: createdArtworks?.length ?? 0,
              sold: soldArtworks?.length ?? 0,
              bought: boughtArtworks?.length ?? 0
            }}
          />
        )}
      </section>
      <section className={styles.galleryContainer}>
        <div className={styles.gallery}>
          <h1 className={styles.galleryTitle}>
            <span>Published</span> Artworks
          </h1>
          {createdArtworks && createdArtworks.length !== 0 ? (
            <ImageGallery artworks={createdArtworks} />
          ) : (
            <p className={styles.empty}>
              Your creative journey starts here! Begin adding your unique artworks to see them
              showcased in your gallery.
            </p>
          )}
        </div>
        <div className={styles.gallery}>
          <h2 className={styles.galleryTitle}>
            <span>Bought</span> Artworks
          </h2>
          {boughtArtworks && boughtArtworks.length !== 0 ? (
            <ImageGallery artworks={boughtArtworks} />
          ) : (
            <p className={styles.empty}>
              Your art collection starts here! Purchase and collect unique artworks to see them
              displayed in your gallery.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
