import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import useAuth from '../../hooks/useAuth'
import { KeyboardArrowDown } from '@mui/icons-material'

export default function Navbar() {
  const { isLogged } = useAuth()

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}><img src="/assets/img/Logoo.png" alt="" className={styles.logo}/></Link>

      <nav>
        <ul className={styles.links}>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/search">SEARCH</Link>
          </li>
          <li>
            <Link to="/studio">STUDIO</Link>
          </li>
        </ul>
      </nav>

      {isLogged ? <Profile /> : <Link to="/auth/login">LOGIN</Link>}
    </header>
  )
}

function Profile() {
  const { user } = useAuth()
  return (
    <div className={styles.profile}>
      <Link to="/profile" className={styles.name}>MR. {user?.first_name}<KeyboardArrowDown /></Link>
      <div className={styles.menu}>
        <ul>
          <Link to="/profile">PROFILE</Link>
        </ul>
        <ul>
          <Link to="/favorites">FAVORITES</Link>
        </ul>
        <ul>
          <Link to="/cart">CART</Link>
        </ul>
        <ul>
          <Link to="/profile/edit">BECOME A CREATOR</Link>
        </ul>
        <ul>
          <Link to="/settings">SETTINGS</Link>
        </ul>
        <ul>
          <Link to="">LOG OUT</Link>
        </ul>
      </div>
    </div>
  )
}
