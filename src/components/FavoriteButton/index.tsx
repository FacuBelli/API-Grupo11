import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from './styles.module.css'
import type { Artwork } from '../../types/database'

export default function FavoriteButton({ id }: Pick<Artwork, 'id'>) {
  const [isSelected, setIsSelected] = useState(false)

  const handleFav = async () => {}

  const handleUnfav = async () => {}

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isSelected) {
      handleUnfav().then(() => {
        setIsSelected(false)
      })
    } else {
      handleFav().then(() => {
        setIsSelected(true)
      })
    }
  }

  return (
    <button className={styles.button} onClick={(e) => handleClick(e)}>
      {isSelected ? <FavoriteIcon sx={{
        stroke: 'white',
        strokeWidth: 1
      }} /> : <FavoriteBorderIcon sx={{
        stroke: 'white',
        strokeWidth: 1
      }}/>}
    </button>
  )
}
