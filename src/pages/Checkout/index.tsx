import Button from "../../components/Button";
import HeroGallery from "../Home/components/HeroGallery";
import styles from "./styles.module.css"
export default function Checkout() {
  return (
    <main>
          <section className={styles.heroSection}>
        <HeroGallery>
          <h1 className={styles.heroTitle}>
             THANKS YOU <span> SO MUCH </span> FOR YOUR BUY
          </h1>
          <p className={styles.heroText}>
          Please feel free to take a journey into this amazing world.
          </p>
          <Button to="/gallery">EXPLORE GALLERY</Button>
        </HeroGallery>
      </section>
    </main>
  )
}
