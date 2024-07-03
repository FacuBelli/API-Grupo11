import { useState, type ReactNode } from 'react'
import styles from './styles.module.css'
import { Close as CloseIcon } from '@mui/icons-material'
import Button from '../../../../components/Button'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../../redux'
import type { Artwork } from '../../../../types/database'

interface Props {
  children?: ReactNode
}

export default function HeroGallery({ children }: Props) {
  const { artworks, isLoaded } = useSelector((state: RootState) => state.artwork)
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

  const imageHeight = (artwork: Artwork, column: (typeof columns)[0]) => {
    switch (artwork?.orientation?.name) {
      case 'Vertical':
        return (column.width / 2) * 3
      case 'Horizontal':
        return (column.width / 3) * 2
      default:
        return column.width
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {columns.map((column, i) => {
          const images = []

          for (let j = 0; j < column.rows; j++) {
            const src = isLoaded
              ? `http://localhost:8080/artwork/${artworks[i * column.rows + j].id}/image`
              : ''
            images.push(
              <img
                src={src}
                width={column.width}
                height={imageHeight(artworks[i * column.rows + j], column)}
                key={i * column.rows + j}
              />
            )
          }

          return (
            <div className={styles.column} key={i}>
              {images}
            </div>
          )
        })}
        {isOpen && (
          <div className={styles.shadow}>
            <div className={styles.center}>
              <CloseIcon onClick={handleClose} />
              {children}
            </div>
          </div>
        )}
      </div>
      {!isOpen && <Button to="/gallery">VIEW MORE</Button>}
    </div>
  )
}
