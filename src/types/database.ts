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
  first_name?: string
  last_name?: string
  is_artist?: boolean
}

export interface Artwork extends DatabaseTable {
  artist_id?: number
  category_id?: number
  description?: string
  image?: string
  orientation_id?: number
  price?: number
  style_id?: number
  theme_id?: number
  title?: string
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
