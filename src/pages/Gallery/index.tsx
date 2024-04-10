import ItemCard from "../../componets/ItemCard"
import Slider from "../../componets/Slider"

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
    }
  ]

  return (
    <main>
      <h1>Gallery</h1>
      <Slider>
        {
          products.map((item, i) => {
            return <ItemCard item={item} key={i} />
          })
        }
      </Slider>
    </main>
  )
}
