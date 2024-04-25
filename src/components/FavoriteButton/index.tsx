import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from './styles.module.css'
import type { Artwork } from '../../types/database'
import db from '../../utils/database'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

interface Props {
  id: Artwork['id']
  isFav?: boolean
}

export default function FavoriteButton({ id, isFav = false }: Props) {
  const { isLogged, user } = useAuth()
  const navigate = useNavigate()

  const [isSelected, setIsSelected] = useState(isFav)

  const handleFav = async () => {
    db.favorites.push({ user_id: user!.id, artwork_id: id })
  }

  const handleUnFav = async () => {
    db.favorites = db.favorites.filter((fav) => !(fav.user_id === user!.id && fav.artwork_id === id))
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!isLogged) {
      navigate('/auth/login')
      return
    }

    if (isSelected) {
      handleUnFav().then(() => {
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
      {isSelected ? (
        <FavoriteIcon
          sx={{
            stroke: 'white',
            strokeWidth: 1
          }}
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            stroke: 'white',
            strokeWidth: 1
          }}
        />
      )}
    </button>
  )
}
