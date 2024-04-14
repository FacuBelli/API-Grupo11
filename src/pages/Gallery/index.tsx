import ItemCard from '../../components/ItemCard'
import CategoryCard from '../../components/CategoryCard'
import Slider from '../../components/Slider'

export default function Gallery() {
  const products = [
    {
      title: 'Producto 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      price: 100,
      url: 'https://picsum.photos/300/200'
    },
    {
      title: 'Producto 2',
      price: 12,
      url: 'https://picsum.photos/300/200'
    },
    {
      title: 'Producto 3',
      price: 140,
      url: 'https://picsum.photos/300/200'
    },
    {
      title: 'Producto 4',
      price: 20,
      url: 'https://picsum.photos/300/200'
    },
  ]
  const category = [
  {
    title: 'LANDSCAPES',
    url: 'https://learn.ncartmuseum.org/wp-content/uploads/2017/06/COLE-Romantic-Landscape-52_9_7-1024x743.jpg'
  },
  {
    title: 'PORTRAITS',
    url: 'https://i.pinimg.com/736x/15/69/f8/1569f89a84f73ed2b5648a127c5e9c86.jpg'
  },
  {
    title: 'ABSTRACT',
    url: 'https://artsandyou.net/cdn/shop/articles/el-arte-abstracto-lo-puede-hacer-cualquiera-467550.jpg?v=1701795623'
  },
  {
    title: 'NATURE',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2n8eSIaDliaScSaEHYAaRv7tKXiumjuSz85dBptoaSQ&s'
  },
  {
    title: 'URBAN',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSht0ZTJFkGryniuyMkSeSNTZcm6nzv-tiiKhId-Lqw8Q&s'
  },
  {
    title: 'SURREAL',
    url: 'https://concepto.de/wp-content/uploads/2018/02/surrealismo-obra-min-e1519327827783.jpg'
  },
]

  return (
    <main>
      <h1>Gallery</h1>
      <Slider>
        {products.map((item, i) => (
          <ItemCard
            title={item.title}
            price={item.price}
            url={item.url}
            key={i}
          />
        ))}
      </Slider>
      <Slider>
        {category.map((item, i) => (
          <CategoryCard
            title={item.title}
            url={item.url}
            key={i}
          />
        ))}
      </Slider>
    </main>
  )
}
