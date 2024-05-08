import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { CloseOutlined, KeyboardArrowDown, LoginOutlined, LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import { useState } from 'react'

export default function Navbar() {
  const { isLogged } = useSelector((state: RootState) => state.auth)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/assets/img/logo.png" alt="" />
      </Link>

      <nav className={styles.nav}>
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

      <div className={styles.right}>
        {isLogged ? <Profile /> : <Link to="/auth/login">LOGIN</Link>}
      </div>
      <div className={styles.rightMobile}>
        {isOpen ? (
          <button onClick={() => setIsOpen(false)}>
            <CloseOutlined />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <MenuOutlined />
          </button>
        )}
      </div>
      <nav className={isOpen ? `${styles.navMobile} ${styles.isOpen}` : styles.navMobile}>
        <ul className={styles.linksMobile}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/search" onClick={() => setIsOpen(false)}>
              SEARCH
            </Link>
          </li>
          <li>
            <Link to="/studio" onClick={() => setIsOpen(false)}>
              STUDIO
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => setIsOpen(false)}>
              PROFILE
            </Link>
          </li>
          <li>
            <Link to="/studio" onClick={() => setIsOpen(false)}>
              BECOME A CREATOR
            </Link>
          </li>
          <li>
            <Link to="/favorites" onClick={() => setIsOpen(false)}>
              FAVORITES
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              CART
            </Link>
          </li>
          <li>
            {isLogged ? (
              <Link to="/auth/logout" onClick={() => setIsOpen(false)}>
                LOG OUT<LogoutOutlined />
              </Link>
            ) : (
              <Link to="/auth/login" onClick={() => setIsOpen(false)}>
                LOG IN<LoginOutlined />
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
          <Link to="/studio">BECOME A CREATOR</Link>
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
