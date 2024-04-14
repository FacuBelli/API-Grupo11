import styles from './styles.module.css'

interface Props {
  title: string
  url: string
}

export default function ItemCard({title, url}: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={url}/>
        <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
