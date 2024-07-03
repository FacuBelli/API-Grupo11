import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../redux'
import useAuthUserUpdate from '../../../../hooks/useAuthUserUpdate'
import { authLogin } from '../../../../redux/actions/authActions'

export default function BecomeAnArtist() {
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth.auth)
  useAuthUserUpdate()

  const handleBecomeArtist = () => {
    if (auth.user === null) return
    fetch('http://localhost/user/' + auth.user.id, {
      method: 'PUT',
      body: JSON.stringify({ ...auth.user, isArtist: true })
    })
      .then((res) => res.json())
      .then((user) =>
        dispatch(
          authLogin({
            user,
            token: auth.token
          })
        )
      )
  }

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            <span>UNLEASH YOUR INNER ARTIST!</span>
          </h2>
          <p className={styles.text}>Turn your ideas into stunning artwork.</p>
        </div>
        <ul className={styles.benefits}>
          <li>Unlock the ability to showcase and sell your artwork to a global audience.</li>
          <li>Gain recognition and build a following for your unique artistic style.</li>
          <li>Access tools and resources to enhance your art and expand your skills.</li>
          <li>
            Connect with fellow artists and art enthusiasts for inspiration and collaboration.
          </li>
          <li>Earn income from your passion by selling your artwork online.</li>
          <li>
            Join a vibrant community of artists and art lovers sharing their love for creativity.
          </li>
        </ul>
        <div className={styles.foot}>
          <Button onClick={handleBecomeArtist}>BECOME AN ARTIST</Button>
          <Link to="" className={styles.terms}>
            TERMS AND CONDITIONS
          </Link>
        </div>
      </div>
    </section>
  )
}
