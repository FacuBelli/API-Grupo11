import { useMemo } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from './styles.module.css'
import type { Artwork } from '../../types/database'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import { favoriteAdd, favoriteRemove } from '../../redux/actions/favoriteActions'

interface Props {
  id: Artwork['id'] | undefined
  isFav?: boolean
}

export default function FavoriteButton({ id }: Props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    isLogged,
    auth: { user }
  } = useSelector((state: RootState) => state.auth)
  const favorites = useSelector((state: RootState) => state.favorite.favorites)
  const favorite = useMemo(() => {
    if (!isLogged) return
    return favorites.find((favorite) => favorite.user_id === user!.id && favorite.artwork_id === id)
  }, [favorites, isLogged, user, id])

  const handleFav = async () => {
    if (id === undefined) return
    dispatch(favoriteAdd({ user_id: user!.id, artwork_id: id }))
  }

  const handleUnFav = async () => {
    if (favorite === undefined) return

    dispatch(favoriteRemove(favorite.id))
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!isLogged) {
      navigate('/auth/login')
      return
    }

    if (favorite !== undefined) {
      handleUnFav()
    } else {
      handleFav()
    }
  }

  return (
    <button className={styles.button} onClick={(e) => handleClick(e)}>
      {favorite ? (
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
