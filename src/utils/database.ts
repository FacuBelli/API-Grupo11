import type { Database } from '../types/database'

const db: Database = {
  users: [
    {
      id: 1,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user1@example.com',
      password: 'password1',
      first_name: 'John',
      last_name: 'Doe',
      is_artist: false
    },
    {
      id: 2,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user2@example.com',
      password: 'password2',
      first_name: 'Jane',
      last_name: 'Smith',
      is_artist: false
    },
    {
      id: 3,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist1@example.com',
      password: 'password1',
      first_name: 'Alice',
      last_name: 'Johnson',
      is_artist: true
    },
    {
      id: 4,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist2@example.com',
      password: 'password2',
      first_name: 'Bob',
      last_name: 'Williams',
      is_artist: true
    },
    {
      id: 5,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user3@example.com',
      password: 'password3',
      first_name: 'Emily',
      last_name: 'Brown',
      is_artist: false
    },
    {
      id: 6,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user4@example.com',
      password: 'password4',
      first_name: 'Michael',
      last_name: 'Jones',
      is_artist: false
    },
    {
      id: 7,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist3@example.com',
      password: 'password3',
      first_name: 'Sophia',
      last_name: 'Lee',
      is_artist: true
    },
    {
      id: 8,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist4@example.com',
      password: 'password4',
      first_name: 'William',
      last_name: 'Davis',
      is_artist: true
    },
    {
      id: 9,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user5@example.com',
      password: 'password5',
      first_name: 'Olivia',
      last_name: 'Martinez',
      is_artist: false
    },
    {
      id: 10,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user6@example.com',
      password: 'password6',
      first_name: 'Liam',
      last_name: 'Garcia',
      is_artist: false
    },
    {
      id: 11,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist5@example.com',
      password: 'password5',
      first_name: 'Emma',
      last_name: 'Rodriguez',
      is_artist: true
    },
    {
      id: 12,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist6@example.com',
      password: 'password6',
      first_name: 'Noah',
      last_name: 'Hernandez',
      is_artist: true
    }
  ],
  artworks: [
    { id: 1, title: 'Artwork 1', artist_id: 3, image: '/assets/img/example-horizontal.png', price: 100, category_id: 1, style_id: 1, theme_id: 1, orientation_id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Artwork 2', artist_id: 4, image: '/assets/img/example-horizontal.png', price: 150, category_id: 2, style_id: 2, theme_id: 2, orientation_id: 1, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Artwork 3', artist_id: 3, image: '/assets/img/example-vertical.png', price: 120, category_id: 1, style_id: 1, theme_id: 1, orientation_id: 2, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: 'Artwork 4', artist_id: 4, image: '/assets/img/example-vertical.png', price: 200, category_id: 2, style_id: 2, theme_id: 2, orientation_id: 2, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: 'Artwork 5', artist_id: 3, image: '/assets/img/example-square.png', price: 80, category_id: 1, style_id: 1, theme_id: 1, orientation_id: 3, description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, title: 'Artwork 6', artist_id: 4, image: '/assets/img/example-square.png', price: 300, category_id: 2, style_id: 2, theme_id: 2, orientation_id: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
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
    { user_id: 2, artwork_id: 2 },
    { user_id: 3, artwork_id: 3 },
    { user_id: 3, artwork_id: 4 },
    { user_id: 4, artwork_id: 5 },
    { user_id: 4, artwork_id: 6 },
    { user_id: 5, artwork_id: 1 },
    { user_id: 5, artwork_id: 3 },
    { user_id: 6, artwork_id: 2 },
    { user_id: 6, artwork_id: 4 },
    { user_id: 7, artwork_id: 5 },
    { user_id: 7, artwork_id: 5 },
    { user_id: 8, artwork_id: 3 },
    { user_id: 8, artwork_id: 6 },
    { user_id: 9, artwork_id: 5 },
    { user_id: 9, artwork_id: 2 },
    { user_id: 10, artwork_id: 2 },
    { user_id: 10, artwork_id: 3 },
    { user_id: 11, artwork_id: 4 },
    { user_id: 11, artwork_id: 5 },
    { user_id: 12, artwork_id: 6 },
    { user_id: 12, artwork_id: 1 }
  ],
  cart: [
    { user_id: 1, artwork_id: 1, quantity: 1 },
    { user_id: 1, artwork_id: 2, quantity: 2 },
    { user_id: 2, artwork_id: 2, quantity: 1 }
  ]
}

export default db