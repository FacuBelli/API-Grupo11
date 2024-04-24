import Button from '../../components/Button'
import HeroGallery from './components/HeroGallery'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
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
      </section>
      <section className={styles.aiArtStepsSection}>
        <h2 className={styles.aiArtStepsTitle}><span>CREATE</span> YOUR OWN AI ART</h2>
        <div className={styles.aiArtStepsDataContainer}>
          <div className={styles.aiArtStepsData}>
            <ol className={styles.aiArtStepsList}>
              <li><span>1. Choose Your Base Image:</span> Select an image from our library as the base for your creation.</li>
              <li><span>2. Customize Your Art:</span> Use our intuitive tools to tweak parameters such as colors, styles, patterns, and more to personalize your art piece.</li>
              <li><span>3. Preview and Adjust:</span> Preview your creation in real-time and make adjustments until you're satisfied with the result.</li>
              <li><span>4. Sell Your Art:</span> Once you're happy with your creation, you can choose to sell it in our marketplace and earn from your artistry</li>
            </ol>
            <p>Create an account today and start expressing your creativity with AI-generated art!</p>
            <Button to='/auth/login'>GET STARTED</Button>
          </div>
          <div className={styles.aiArtStepsVideoContainer}>

            {/* video */}
          </div>
        </div>
      </section>
    </main>
  )
}
