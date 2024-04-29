import SearchIcon from '@mui/icons-material/Search'
import Input from '../../components/Input'
import styles from './styles.module.css'
import Filter from '../../components/Filter'
import ImageGallery from '../../components/ImageGallery'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux'

export default function Search() {
  const artworks = useSelector((state: RootState) => state.artwork.artworks)

  const filterOptions = [
    {
      value: 'category',
      options: ['Abstract', 'Landscape', 'Portrait', 'Still Life']
    },
    {
      value: 'style',
      options: ['Realism', 'Impressionism', 'Abstract', 'Surrealism']
    },
    {
      value: 'color',
      options: ['Red', 'Blue', 'Green', 'Yellow']
    },
    {
      value: 'price range',
      options: ['Under $50', '$50 - $100', '$100 - $200', '$200+']
    },
    {
      value: 'theme',
      options: ['Nature', 'Cityscape', 'People', 'Abstract']
    },
    {
      value: 'orientation',
      options: ['Horizontal', 'Vertical', 'Square']
    }
  ]

  return (
    <main>
      <section className={styles.section}>
        <aside className={styles.aside}>
          <Input
            type="text"
            name="search"
            placeholder="SEARCH"
            icon={SearchIcon}
            iconPosition="end"
          />
          {filterOptions.map((filter, i) => (
            <Filter title={filter.value} options={filter.options} key={i} />
          ))}
        </aside>
        <ImageGallery artworks={artworks} />
      </section>
    </main>
  )
}
