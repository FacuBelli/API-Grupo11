export interface DatabaseTable {
  id: number
  created_at?: Date,
  updated_at?: Date,
  deleted_at?: Date
}

export interface User extends DatabaseTable {
  biography?: string
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  isArtist?: boolean
  boughtArtworks?: Artwork[]
}

export interface Artwork extends DatabaseTable {
  artist_id?: number
  category?: Category[]
  description?: string
  image?: string
  orientation?: Orientation
  price?: number
  style?: Style[]
  theme?: Theme[]
  title?: string
  stock?: number
  hidden?: boolean
}

export interface Category extends DatabaseTable {
  name?: string
}

export interface Style extends DatabaseTable {
  name?: string
}

export interface Theme extends DatabaseTable {
  name?: string
}

export interface Orientation extends DatabaseTable {
  name?: string
}

export interface Favorite extends DatabaseTable {
  user_id?: number
  artwork_id?: number
}

export interface CartItem extends DatabaseTable {
  user_id?: number
  artwork_id?: number
  quantity?: number
}

export interface Database {
  users: User[]
  artworks: Artwork[]
  categories: Category[]
  styles: Style[]
  themes: Theme[]
  orientations: Orientation[]
  favorites: Favorite[]
  cart: CartItem[]
}
