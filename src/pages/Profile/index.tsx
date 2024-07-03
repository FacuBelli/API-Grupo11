import { useSelector } from 'react-redux'
import ProfileCard from './components/ProfileCard'
import styles from './styles.module.css'
import type { RootState } from '../../redux'
import ImageGallery from '../../components/ImageGallery'
import Button from '../../components/Button'
import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import type { Artwork, Order, User } from '../../types/database'

export default function Profile() {
  const { userId: userIdParam } = useParams()
  const userId = userIdParam ? parseInt(userIdParam) : undefined

  const {
    isLogged,
    auth: { user: authUser }
  } = useSelector((state: RootState) => state.auth)
  const isAuthUser = userId === undefined || userId === authUser?.id

  const [user, setUser] = useState<User>()
  const createdArtworks = useMemo(() => user?.created, [user])

  const soldArtworks = useMemo(
    () => createdArtworks?.filter((artwork) => artwork?.stock === 0),
    [createdArtworks]
  )
  const [boughtArtworks, setBoughtArtworks] = useState<Artwork[]>([])

  useEffect(() => {
    if (isLogged && isAuthUser) {
      setUser(authUser!)
      return
    }

    fetch(`http://localhost:8080/user/${userId}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user)
      })
  }, [isLogged, authUser, isAuthUser, userId])

  useEffect(() => {
    if (user === undefined) return

    fetch(`http://localhost:8080/order/${userId}/bought`)
      .then((res) => res.json())
      .then((data: Order[]) => {
        setBoughtArtworks(data.map((order) => order.artwork!))
      })
  })

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
          {user?.isArtist && (
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
                  {`${user.firstName} ${user.lastName}`}'s profile or check back later for updates.
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
                Gallery is empty. Stay tuned for {`${user.firstName} ${user.lastName}`}'s latest
                acquisitions!
              </p>
            )}
          </div>
        </section>
      )}
    </main>
  )
}
