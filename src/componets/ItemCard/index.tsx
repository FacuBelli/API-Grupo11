import { CardItem } from '../../types/item'
import styles from './styles.module.css'

interface Props {
  item: CardItem
}

export default function ItemCard({item}: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.url}/>
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price}</p>
      </div>
    </div>
  )
}
