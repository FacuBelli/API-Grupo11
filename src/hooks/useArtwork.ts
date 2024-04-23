import type { Artwork } from '../types/database'
import db from '../utils/database'

const useArtwork = (id: Artwork['id']): Artwork | undefined => {
  return db.artworks.find((artwork) => artwork.id === id)
}

export default useArtwork
