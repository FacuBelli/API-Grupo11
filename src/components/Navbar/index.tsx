import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>(LOGO)</Link>

      <nav>
        <ul className={styles.links}>
          <li><Link to='/gallery'>GALLERY</Link></li>
          <li><Link to='/search'>SEARCH</Link></li>
          <li><Link to='/studio'>STUDIO</Link></li>
        </ul>
      </nav>

      <p>LOGIN</p>
    </header>
  )
}
