import { useState, type ReactNode } from 'react'
import styles from './styles.module.css'
import { Close as CloseIcon } from '@mui/icons-material'
import Button from '../../../../components/Button'

interface Props {
  children?: ReactNode
}

export default function HeroGallery({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true)

  const columns = [
    { width: 200, rows: 5 },
    { width: 200, rows: 6 },
    { width: 250, rows: 4 },
    { width: 200, rows: 5 },
    { width: 200, rows: 6 }
  ]

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {columns.map((column, i) => {
          const images = []

          for (let j = 0; j < column.rows; j++) {
            const src = Math.round(Math.random()) ? '/assets/img/example-horizontal.png' : '/assets/img/example-vertical.png'
            images.push(<img src={src} width={column.width} key={i + j + 1}/>)
          }

          return <div className={styles.column} key={i}>{images}</div>
        })}
        {
          isOpen &&
          <div className={styles.shadow}>
            <div className={styles.center}>
              <CloseIcon onClick={handleClose}/>
              {children}
            </div>
          </div>
        }
      </div>
      {
        !isOpen &&
        <Button to='/gallery'>VIEW MORE</Button>
      }
    </div>
  )
}
