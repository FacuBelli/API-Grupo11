import ArtworkCard from '../ArtworkCard'
import styles from './styles.module.css'

interface Props {
  data: {
    id: string
    image: string
    price: number
    title: string
  }[]
}

export default function ImageGallery({ data }: Props) {
  console.log(data)
  return (
    <div className={styles.gallery}>
      {data.map((prod, i) => (
        <ArtworkCard
          id={prod.id}
          image={prod.image}
          price={prod.price}
          title={prod.title}
          key={i}
        />
      ))}
    </div>
  )
}
