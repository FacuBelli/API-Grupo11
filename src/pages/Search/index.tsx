export default function Search() {
  return (
    <main>
      <h1>Search</h1>
    </main>
  )
}

import PerfilArtist from '../../components/PerfilArtist'

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
      <h1>Search</h1>
        {products.map((item, i) => (
          <PerfilArtist
            title={item.title}
            price={item.price}
            url={item.url}
            key={i}
          />
        ))}
    </main>
  )
}
