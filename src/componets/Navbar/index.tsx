import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>(LOGO)</a>

      <ul className={styles.links}>
        <li><Link to='/gallery'>GALERY</Link></li>
        <li><Link to='/search'>SEARCH</Link></li>
        <li><Link to='/studio'>STUDIO</Link></li>
      </ul>

      <p>LOGIN</p>
    </nav>
  )
}
