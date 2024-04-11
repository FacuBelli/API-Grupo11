import Button from '../../components/Button'
import HeroGallery from './components/HeroGallery'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main>
      <HeroGallery>
        <h1 className={styles.heroTitle}>
          DISCOVER STUNNING <span>AI-GENERATED</span> IMAGES
        </h1>
        <p className={styles.heroText}>
          Unlock a world of creativity with our unique collection of
          AI-generated images. Each image is crafted with precision and
          creativity, offering a fresh perspective on digital art.
        </p>
        <Button to="/gallery">EXPLORE GALLERY</Button>
      </HeroGallery>
    </main>
  )
}
