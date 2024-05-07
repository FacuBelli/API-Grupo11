import { useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import styles from './styles.module.css'
import BecomeAnArtist from './components/BecomeAnArtist'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import { RocketOutlined } from '@mui/icons-material'
import { useState } from 'react'

const CATEGORIES = ['Landscape', 'Nature', 'Abstract', 'Cityscape', 'Floral', 'Gardens', 'Seascape']
const STYLES = [
  'Realism',
  'Abstract Expressionism',
  'Impressionism',
  'Surrealism',
  'Modernism',
  'Symbolism',
  'Cubism',
  'Futurism'
]
const THEMES = [
  'Sunsets',
  'Harmony',
  'Urban Life',
  'Nature',
  'Inner Power',
  'Wilderness',
  'Urban Architecture',
  'Celestial',
  'Tranquility',
  'Dreams',
  'Urban Jungle',
  'Ocean'
]
const ORIENTATIONS = ['Horizontal', 'Vertical', 'Square']

export default function Studio() {
  const user = useSelector((state: RootState) => state.auth.user)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <main>
      <h1 className={styles.title}>
        <span>STUDIO</span> CREATOR
      </h1>
      {user?.is_artist ? (
        <section className={styles.section}>
          <div className={styles.imageContainer}>
            {isLoaded ? (
              <img src="/assets/img/example-horizontal.png" className={styles.image} />
            ) : (
              <div className={styles.subtitleContainer}>
                <h2><span>Explore endless possibilities!</span></h2>
                <p>Enter your choices and see how AI transforms them into a unique artwork.</p>
              </div>
            )}
          </div>
          <div className={styles.inputsContainer}>
            <div className={styles.inputContainer}>
              <h3 className={styles.inputTitle}>
                <span>ARTWORK TITLE</span>
              </h3>
              <Input type="text" placeholder="NAME YOUR ARTWORK" />
            </div>
            <div className={styles.inputContainer}>
              <h3 className={styles.inputTitle}>
                <span>DESCRIPTION</span>
              </h3>
              <Input
                type="text"
                placeholder="DESCRIBE YOUR VISION FOR THE AI-GENERATED ARTWORK..."
              />
            </div>
            <div className={styles.inputContainer}>
              <h3 className={styles.inputTitle}>
                <span>ORIENTATION</span>
              </h3>
              <Select options={ORIENTATIONS} />
            </div>
            <div className={styles.properties}>
              <div className={styles.inputContainer}>
                <h3 className={styles.inputTitle}>
                  <span>CATEGORY</span>
                </h3>
                <Select options={['none', ...CATEGORIES]} />
              </div>
              <div className={styles.inputContainer}>
                <h3 className={styles.inputTitle}>
                  <span>STYLE</span>
                </h3>
                <Select options={['none', ...STYLES]} />
              </div>
              <div className={styles.inputContainer}>
                <h3 className={styles.inputTitle}>
                  <span>THEME</span>
                </h3>
                <Select options={['none', ...THEMES]} />
              </div>
            </div>
            <span className={styles.separator} />
            <div className={styles.info}>
              <p>
                Please note that all input data, including the title, description, selected
                category, style, and theme,{' '}
                <span>will influence the generation of your artwork.</span>
              </p>
              <p>
                Provide as detailed and specific information as possible to help create the image
                that best matches your vision.
              </p>
            </div>
            <Button>
              GENERATE ARTWORK <RocketOutlined />
            </Button>
          </div>
        </section>
      ) : (
        <BecomeAnArtist />
      )}
    </main>
  )
}
