import type { User } from '../types/database'
import db from '../utils/database'

const useFavorites = (userId: User['id']) => {
  const favorites = db.favorites.filter((fav) => fav.user_id === userId)

  return db.artworks.filter((artwork) => favorites.some((fav) => fav.artwork_id === artwork.id))
}

export default useFavorites
