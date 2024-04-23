import type { Database } from '../types/database'

const db: Database = {
  users: [
    { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1', first_name: 'Name', last_name: 'Lastname' },
    { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2', first_name: 'Name', last_name: 'Lastname' },
    { id: 3, username: 'artist1', email: 'artist1@example.com', password: 'password1', first_name: 'Name', last_name: 'Lastname' },
    { id: 4, username: 'artist2', email: 'artist2@example.com', password: 'password2', first_name: 'Name', last_name: 'Lastname' }
  ],
  artworks: [
    { id: 1, name: 'Artwork 1', artist_id: 3, image: '/assets/img/example-horizontal.png', price: 100, category_id: 1, style_id: 1, theme_id: 1, orientation_id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Artwork 2', artist_id: 4, image: '/assets/img/example-horizontal.png', price: 150, category_id: 2, style_id: 2, theme_id: 2, orientation_id: 1, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, name: 'Artwork 3', artist_id: 3, image: '/assets/img/example-vertical.png', price: 120, category_id: 1, style_id: 1, theme_id: 1, orientation_id: 2, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, name: 'Artwork 4', artist_id: 4, image: '/assets/img/example-vertical.png', price: 200, category_id: 2, style_id: 2, theme_id: 2, orientation_id: 2, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, name: 'Artwork 5', artist_id: 3, image: '/assets/img/example-square.png', price: 80, category_id: 1, style_id: 1, theme_id: 1, orientation_id: 3, description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, name: 'Artwork 6', artist_id: 4, image: '/assets/img/example-square.png', price: 300, category_id: 2, style_id: 2, theme_id: 2, orientation_id: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ],
  categories: [
    { id: 1, name: 'Abstract' },
    { id: 2, name: 'Landscape' }
  ],
  styles: [
    { id: 1, name: 'Realism' },
    { id: 2, name: 'Impressionism' }
  ],
  themes: [
    { id: 1, name: 'Nature' },
    { id: 2, name: 'Cityscape' }
  ],
  orientations: [
    { id: 1, name: 'Horizontal' },
    { id: 2, name: 'Vertical' },
    { id: 3, name: 'Square' }
  ],
  favorites: [
    { user_id: 1, artwork_id: 1 },
    { user_id: 1, artwork_id: 2 },
    { user_id: 2, artwork_id: 2 }
  ],
  cart: [
    { user_id: 1, artwork_id: 1, quantity: 1 },
    { user_id: 1, artwork_id: 2, quantity: 2 },
    { user_id: 2, artwork_id: 2, quantity: 1 }
  ]
}

export default db