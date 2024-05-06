import SearchIcon from '@mui/icons-material/Search'
import Input from '../../components/Input'
import styles from './styles.module.css'
import Filter from '../../components/Filter'
import ImageGallery from '../../components/ImageGallery'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import { useMemo, useState } from 'react'
import { Tune } from '@mui/icons-material'
import { useSearchParams } from 'react-router-dom'

const filterOptions = [
  {
    value: 'category',
    options: ['Landscape', 'Nature', 'Abstract', 'Cityscape', 'Floral', 'Gardens', 'Seascape']
  },
  {
    value: 'style',
    options: [
      'Realism',
      'Abstract Expressionism',
      'Impressionism',
      'Surrealism',
      'Modernism',
      'Symbolism',
      'Cubism',
      'Futurism'
    ]
  },
  {
    value: 'theme',
    options: [
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
  },
  {
    value: 'price range',
    options: ['Under $50', '$50 - $100', '$100 - $200', '$200+']
  },
  {
    value: 'orientation',
    options: ['Horizontal', 'Vertical', 'Square']
  }
]

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const artworks = useSelector((state: RootState) => state.artwork.artworks)
  const [isFiltersOpen, setIsFilterOpen] = useState(searchParams.size !== 0)
  const filteredArtworks = useMemo(
    () =>
      artworks.filter((artwork) =>
        Array.from(searchParams.entries()).every(([selectedOption, selectedValue]) => {
          const propertyValue = artwork[selectedOption as keyof typeof artwork]

          if (Array.isArray(propertyValue)) {
            return propertyValue.some((prop) => prop.name === selectedValue)
          }

          if (
            typeof propertyValue === 'object' &&
            !(propertyValue instanceof Date) &&
            propertyValue?.name === selectedValue
          ) {
            return true
          }

          if (selectedOption === 'price range') {
            const price = artwork.price ?? 0
            switch (selectedValue) {
              case 'Under $50':
                return price < 50
              case '$50 - $100':
                return price >= 50 && price < 100
              case '$100 - $200':
                return price >= 100 && price < 200
              case '$200+':
                return price >= 200
              default:
                return false
            }
          }

          return propertyValue === selectedValue
        })
      ),
    [artworks, searchParams]
  )

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
          <div className={styles.filtersOptions}>
            <button
              className={styles.filtersToggleButton}
              onClick={() => setIsFilterOpen(!isFiltersOpen)}
            >
              <Tune />
              FILTERS
              {searchParams.size !== 0 && <span className={styles.dot} />}
            </button>
            <button
              className={styles.filtersClearButton}
              onClick={() => setSearchParams(new URLSearchParams())}
            >
              CLEAR
            </button>
          </div>
          <div
            className={
              isFiltersOpen ? `${styles.filtersWrapper} ${styles.isOpen}` : styles.filtersWrapper
            }
          >
            <div className={styles.filters}>
              {filterOptions.map((filter, i) => (
                <Filter title={filter.value} options={filter.options} key={i} />
              ))}
            </div>
          </div>
        </aside>
        <div className={styles.galleryContainer}>
          <ImageGallery artworks={filteredArtworks} />
        </div>
      </section>
    </main>
  )
}
