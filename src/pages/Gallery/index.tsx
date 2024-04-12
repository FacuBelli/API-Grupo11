import ArtworkCard from '../../components/ArtworkCard'
import Slider from '../../components/Slider'

export default function Gallery() {
  const products = [
    {
      id: '0',
      title: 'Producto 1',
      price: 100,
      url: '/assets/img/herogallery-horizontal.png'
    },
    {
      id: '1',
      title: 'Producto 2',
      price: 12,
      url: '/assets/img/herogallery-horizontal.png'
    },
    {
      id: '2',
      title: 'Producto 3',
      price: 140,
      url: '/assets/img/herogallery-horizontal.png'
    },
    {
      id: '3',
      title: 'Producto 4',
      price: 20,
      url: '/assets/img/herogallery-horizontal.png'
    }
  ]

  return (
    <main>
      <h1>Gallery</h1>
      <Slider>
        {products.map((item, i) => (
          <ArtworkCard
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.url}
            key={i}
          />
        ))}
      </Slider>
    </main>
  )
}
