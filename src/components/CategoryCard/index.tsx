import { ArrowOutward } from '@mui/icons-material'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  url: string
}

export default function ItemCard({title, url}: Props) {
  return (
    <Link to="" className={styles.card}>
      <img className={styles.image} src={url}/>
      <div className={styles.div}>
        <h3 className={styles.title}>{title}</h3>
        <ArrowOutward className={styles.arrow} />
      </div>
    </Link>
  )
}
