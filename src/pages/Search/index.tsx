import SearchIcon from '@mui/icons-material/Search'
import Input from '../../components/Input'
import styles from './styles.module.css'
import Filter from '../../components/Filter'
import ImageGallery from '../../components/ImageGallery'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import { type ChangeEvent, useMemo, useState, useEffect } from 'react'
import { Tune } from '@mui/icons-material'
import { useSearchParams } from 'react-router-dom'
import type { Category, Orientation, Style, Theme } from '../../types/database'

export default function Search() {
  const [filterOptions, setFilterOptions] = useState<
    {
      value: string
      options: string[]
    }[]
  >([
    {
      value: 'price range',
      options: ['Under $50', '$50 - $100', '$100 - $200', '$200+']
    }
  ])

  useEffect(() => {
    fetch('http://localhost:8080/category')
      .then((res) => res.json())
      .then((data: Category[]) => {
        setFilterOptions((filterOptions) => [
          { value: 'category', options: data.map((category) => category.name!) },
          ...filterOptions
        ])
      })

    fetch('http://localhost:8080/style')
      .then((res) => res.json())
      .then((data: Style[]) => {
        setFilterOptions((filterOptions) => [
          { value: 'style', options: data.map((style) => style.name!) },
          ...filterOptions
        ])
      })

    fetch('http://localhost:8080/theme')
      .then((res) => res.json())
      .then((data: Theme[]) => {
        setFilterOptions((filterOptions) => [
          { value: 'theme', options: data.map((theme) => theme.name!) },
          ...filterOptions
        ])
      })

    fetch('http://localhost:8080/orientation')
      .then((res) => res.json())
      .then((data: Orientation[]) => {
        setFilterOptions((filterOptions) => [
          { value: 'orientation', options: data.map((orientation) => orientation.name!) },
          ...filterOptions
        ])
      })
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const artworks = useSelector((state: RootState) =>
    state.artwork.artworks.filter((artwork) => !artwork.hidden)
  )
  const [isFiltersOpen, setIsFilterOpen] = useState(searchParams.size !== 0)
  const [searchInput, setSearchInput] = useState('')

  const filterArtworks = useMemo(
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
            (propertyValue as Orientation).name === selectedValue
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

  const searchFilterArtworks = useMemo(() => {
    if (searchInput.length === 0) return filterArtworks

    return filterArtworks.sort((artworkA, artworkB) => {
      const regex = new RegExp(searchInput, 'i')
      const a = artworkA.title?.search(regex) ?? Number.MIN_VALUE
      const b = artworkB.title?.search(regex) ?? Number.MIN_VALUE
      return b - a
    })
  }, [filterArtworks, searchInput])

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

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
            onChange={(e) => handleSearchInputChange(e)}
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
          <ImageGallery artworks={searchFilterArtworks} />
        </div>
      </section>
    </main>
  )
}
