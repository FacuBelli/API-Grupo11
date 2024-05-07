import { useSelector } from 'react-redux'
import ProfileCard from './components/ProfileCard'
import styles from './styles.module.css'
import type { RootState } from '../../redux'
import ImageGallery from '../../components/ImageGallery'
import Button from '../../components/Button'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

export default function Profile() {
  const { userId: userIdParam } = useParams()
  const userId = userIdParam ? parseInt(userIdParam) : undefined

  const { user: authUser } = useSelector((state: RootState) => state.auth)
  const isAuthUser = userId === undefined || userId === authUser?.id

  const { users } = useSelector((state: RootState) => state.user)
  const user = isAuthUser ? authUser : users.find((user) => user.id === userId)

  const { artworks } = useSelector((state: RootState) => state.artwork)

  const createdArtworks = useMemo(
    () => artworks.filter((artwork) => artwork.artist_id === user?.id),
    [user, artworks]
  )

  const soldArtworks = useMemo(
    () => createdArtworks?.filter((artwork) => artwork?.stock === 0),
    [createdArtworks]
  )

  const boughtArtworks = useMemo(
    () =>
      user?.bought_artworks?.map(
        (artworkId) => artworks.find((artwork) => artwork.id === artworkId)!
      ),
    [user, artworks]
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
      {user && (
        <section className={styles.galleryContainer}>
          {user?.is_artist && (
            <div className={styles.gallery}>
              <h1 className={styles.galleryTitle}>
                <span>Published</span> Artworks
              </h1>
              {createdArtworks && createdArtworks.length !== 0 ? (
                <ImageGallery artworks={createdArtworks} />
              ) : isAuthUser ? (
                <>
                  <p className={styles.empty}>
                    Your creative journey starts here! Begin adding your unique artworks to see them
                    showcased in your gallery.
                  </p>
                  <Button to="/studio">TRY STUDIO</Button>
                </>
              ) : (
                <p className={styles.empty}>
                  This gallery is waiting to be filled with artworks. Explore more of{' '}
                  {`${user.first_name} ${user.last_name}`}'s profile or check back later for
                  updates.
                </p>
              )}
            </div>
          )}
          <div className={styles.gallery}>
            <h2 className={styles.galleryTitle}>
              <span>Bought</span> Artworks
            </h2>
            {boughtArtworks && boughtArtworks.length !== 0 ? (
              <ImageGallery artworks={boughtArtworks} />
            ) : isAuthUser ? (
              <>
                <p className={styles.empty}>
                  Your art collection starts here! Purchase and collect unique artworks to see them
                  displayed in your gallery.
                </p>
                <Button to="/gallery">EXPLORE GALLERY</Button>
              </>
            ) : (
              <p className={styles.empty}>
                Gallery is empty. Stay tuned for {`${user.first_name} ${user.last_name}`}'s latest
                acquisitions!
              </p>
            )}
          </div>
        </section>
      )}
    </main>
  )
}
