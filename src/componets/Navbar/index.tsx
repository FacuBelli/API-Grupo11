import styles from './styles.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>(LOGO)</a>

      <ul className={styles.links}>
        <li><a href="/galery">GALERY</a></li>
        <li><a href="/search">SEARCH</a></li>
        <li><a href="/studio">STUDIO</a></li>
      </ul>

      <p>LOGIN</p>
    </nav>
  )
}
