import ArtworkCard from '../../components/ArtworkCard'
import Slider from '../../components/Slider'
import CategoryCard from '../../components/CategoryCard'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux'

export default function Gallery() {
  const artworks = useSelector((state: RootState) => state.artwork.artworks.filter((artwork) => !artwork.hidden))

  const category = [
    {
      title: 'Landscape',
      url: 'https://learn.ncartmuseum.org/wp-content/uploads/2017/06/COLE-Romantic-Landscape-52_9_7-1024x743.jpg'
    },
    {
      title: 'Portrait',
      url: 'https://i.pinimg.com/736x/15/69/f8/1569f89a84f73ed2b5648a127c5e9c86.jpg'
    },
    {
      title: 'Abstract',
      url: 'https://artsandyou.net/cdn/shop/articles/el-arte-abstracto-lo-puede-hacer-cualquiera-467550.jpg?v=1701795623'
    },
    {
      title: 'Nature',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2n8eSIaDliaScSaEHYAaRv7tKXiumjuSz85dBptoaSQ&s'
    },
    {
      title: 'Urban',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSht0ZTJFkGryniuyMkSeSNTZcm6nzv-tiiKhId-Lqw8Q&s'
    },
    {
      title: 'Abstract',
      url: 'https://concepto.de/wp-content/uploads/2018/02/surrealismo-obra-min-e1519327827783.jpg'
    }
  ]

  return (
    <main>
      <section className={styles.category}>
        <h1 className={styles.categoryTitle}>
          EXPLORE UNIQUE AI ART <span>IN EVERY CATEGORY</span>
        </h1>
        <Slider>
          {category.map((item, i) => (
            <CategoryCard title={item.title} url={item.url} key={i} />
          ))}
        </Slider>
      </section>
      <section className={styles.popular}>
        <h2 className={styles.popularTitle}>
          <span>MOST</span> POPULAR
        </h2>
        <Slider>
          {artworks.map((item, i) => (
            <ArtworkCard artwork={item} key={i} />
          ))}
        </Slider>
      </section>
      <section className={styles.popular}>
        <h2 className={styles.popularTitle}>
          <span>MOST</span> RECENT
        </h2>
        <Slider>
          {artworks.map((item, i) => (
            <ArtworkCard artwork={item} key={i} />
          ))}
        </Slider>
      </section>
    </main>
  )
}
