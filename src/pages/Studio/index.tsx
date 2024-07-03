import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import styles from './styles.module.css'
import BecomeAnArtist from './components/BecomeAnArtist'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import { RocketOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import type { Category, Orientation, Style, Theme } from '../../types/database'
import { artworkAdd } from '../../redux/actions/artworkActions'

interface ArtworkPost {
  artistId: number
  description?: string
  price: number
  title: string
  stock: number
  isHidden?: boolean
  categories?: string[]
  styles?: string[]
  themes?: string[]
  orientation: string
  discount?: number
}

export default function Studio() {
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth.auth)
  const [isLoaded, setIsLoaded] = useState(false)
  const [category, setCategory] = useState<Category[]>([])
  const [style, setyStyle] = useState<Style[]>([])
  const [theme, setTheme] = useState<Theme[]>([])
  const [orientation, setOrientation] = useState<Orientation[]>([])

  const [body, setBody] = useState<Partial<ArtworkPost>>({
    artistId: auth.user!.id,
    stock: 1,
    orientation: 'Vertical'
  })

  useEffect(() => {
    fetch('http://localhost:8080/category')
      .then((res) => res.json())
      .then((data: Category[]) => {
        setCategory(data)
      })

    fetch('http://localhost:8080/style')
      .then((res) => res.json())
      .then((data: Style[]) => {
        setyStyle(data)
      })

    fetch('http://localhost:8080/theme')
      .then((res) => res.json())
      .then((data: Theme[]) => {
        setTheme(data)
      })

    fetch('http://localhost:8080/orientation')
      .then((res) => res.json())
      .then((data: Orientation[]) => {
        setOrientation(data)
      })
  }, [])

  const handleCreateImage = () => {
    if (auth.user === null) return
    fetch('http://localhost:8080/artwork', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token
      }
    })
      .then((res) => res.json())
      .then((artwork) => dispatch(artworkAdd(artwork)))
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <main>
      <h1 className={styles.title}>
        <span>STUDIO</span> CREATOR
      </h1>
      {auth.user?.isArtist ? (
        <section className={styles.section}>
          <div className={styles.imageContainer}>
            {isLoaded ? (
              <img src="/assets/img/example-horizontal.png" className={styles.image} />
            ) : (
              <div className={styles.subtitleContainer}>
                <h2>
                  <span>Explore endless possibilities!</span>
                </h2>
                <p>Enter your choices and see how AI transforms them into a unique artwork.</p>
              </div>
            )}
          </div>
          <div className={styles.inputsContainer}>
            <div className={styles.inputContainer}>
              <h3 className={styles.inputTitle}>
                <span>ARTWORK TITLE</span>
              </h3>
              <Input
                type="text"
                placeholder="NAME YOUR ARTWORK"
                onChange={(e) => {
                  setBody({ ...body, title: e.target.value })
                }}
              />
            </div>
            <div className={styles.inputContainer}>
              <h3 className={styles.inputTitle}>
                <span>DESCRIPTION</span>
              </h3>
              <Input
                type="text"
                placeholder="DESCRIBE YOUR VISION FOR THE AI-GENERATED ARTWORK..."
                onChange={(e) => {
                  setBody({ ...body, description: e.target.value })
                }}
              />
            </div>
            <div className={styles.inputContainer}>
              <h3 className={styles.inputTitle}>
                <span>ORIENTATION</span>
              </h3>
              <Select
                options={[...orientation.map((orientation) => orientation.name!)]}
                onChange={(e) => {
                  setBody({ ...body, orientation: e.target.value })
                }}
              />
            </div>
            <div className={styles.properties}>
              <div className={styles.inputContainer}>
                <h3 className={styles.inputTitle}>
                  <span>CATEGORY</span>
                </h3>
                <Select
                  options={['Any', ...category.map((category) => category.name!)]}
                  onChange={(e) => {
                    setBody({ ...body, categories: [e.target.value] })
                  }}
                />
              </div>
              <div className={styles.inputContainer}>
                <h3 className={styles.inputTitle}>
                  <span>STYLE</span>
                </h3>
                <Select
                  options={['Any', ...style.map((style) => style.name!)]}
                  onChange={(e) => {
                    setBody({ ...body, styles: [e.target.value] })
                  }}
                />
              </div>
              <div className={styles.inputContainer}>
                <h3 className={styles.inputTitle}>
                  <span>THEME</span>
                </h3>
                <Select
                  options={['Any', ...theme.map((theme) => theme.name!)]}
                  onChange={(e) => {
                    setBody({ ...body, themes: [e.target.value] })
                  }}
                />
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
            <Button onClick={handleCreateImage}>
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
