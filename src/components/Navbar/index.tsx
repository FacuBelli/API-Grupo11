import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux'

export default function Navbar() {
  const { isLogged } = useSelector((state: RootState) => state.auth)

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/assets/img/logo.png" alt="" />
      </Link>

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
  const { user } = useSelector((state: RootState) => state.auth)
  return (
    <div className={styles.profile}>
      <Link to="/profile" className={styles.name}>
        MR. {user?.first_name}
        <KeyboardArrowDown />
      </Link>
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
        {/* <ul>
          <Link to="/settings">SETTINGS</Link>
        </ul> */}
        <ul>
          <Link to="/auth/logout">LOG OUT</Link>
        </ul>
      </div>
    </div>
  )
}
