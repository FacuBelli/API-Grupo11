import SearchIcon from '@mui/icons-material/Search'
import Input from '../../components/Input'
import styles from './styles.module.css'
import Filter from '../../components/Filter'
import ImageGallery from '../../components/ImageGallery'
import { useEffect, useState } from 'react'

export default function Search() {
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

  const getRandImg = () =>
    [
      '/assets/img/example-horizontal.png',
      '/assets/img/example-square.png',
      '/assets/img/example-vertical.png'
    ][Math.floor(Math.random() * 3)]

  const [data, setData] = useState<{ id: string; image: string; price: number; title: string }[]>(
    []
  )

  useEffect(() => {
    setData(
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map((_, i) => {
        return { id: i.toString(), title: `Producto ${i + 1}`, price: 200 * i, image: getRandImg() }
      })
    )
  }, [])

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
        <ImageGallery data={[]} />
      </section>
    </main>
  )
}
