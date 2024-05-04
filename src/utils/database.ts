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
      is_artist: false,
      bought_artworks: [3, 6]
    },
    {
      id: 2,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user2@example.com',
      password: 'password2',
      first_name: 'Jane',
      last_name: 'Smith',
      is_artist: false,
      bought_artworks: [8]
    },
    {
      id: 3,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist1@example.com',
      password: 'password1',
      first_name: 'Alice',
      last_name: 'Johnson',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 4,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist2@example.com',
      password: 'password2',
      first_name: 'Bob',
      last_name: 'Williams',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 5,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user3@example.com',
      password: 'password3',
      first_name: 'Emily',
      last_name: 'Brown',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 6,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user4@example.com',
      password: 'password4',
      first_name: 'Michael',
      last_name: 'Jones',
      is_artist: false,
      bought_artworks: []
    },
    {
      id: 7,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist3@example.com',
      password: 'password3',
      first_name: 'Sophia',
      last_name: 'Lee',
      is_artist: true,
      bought_artworks: [11]
    },
    {
      id: 8,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist4@example.com',
      password: 'password4',
      first_name: 'William',
      last_name: 'Davis',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 9,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user5@example.com',
      password: 'password5',
      first_name: 'Olivia',
      last_name: 'Martinez',
      is_artist: false,
      bought_artworks: []
    },
    {
      id: 10,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user6@example.com',
      password: 'password6',
      first_name: 'Liam',
      last_name: 'Garcia',
      is_artist: false,
      bought_artworks: []
    },
    {
      id: 11,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist5@example.com',
      password: 'password5',
      first_name: 'Emma',
      last_name: 'Rodriguez',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 12,
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist6@example.com',
      password: 'password6',
      first_name: 'Noah',
      last_name: 'Hernandez',
      is_artist: true,
      bought_artworks: []
    }
  ],
  artworks: [
    {
      id: 1,
      title: 'Sunset Reflections',
      artist_id: 3,
      category: [{ id: 1, name: 'Landscape' }, { id: 2, name: 'Nature' }],
      style: [{ id: 1, name: 'Realism' }],
      theme: [{ id: 1, name: 'Sunsets' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'A realistic painting capturing the beauty of a sunset reflecting on a tranquil lake.',
      price: 250,
      is_sold: false
    },
    {
      id: 2,
      title: 'Abstract Harmony',
      artist_id: 3,
      category: [{ id: 3, name: 'Abstract' }],
      style: [{ id: 2, name: 'Abstract Expressionism' }],
      theme: [{ id: 2, name: 'Harmony' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'An abstract expressionist artwork that explores the concept of harmony through vibrant colors and dynamic shapes.',
      price: 180,
      is_sold: false
    },
    {
      id: 3,
      title: 'Cityscape Rhythms',
      artist_id: 4,
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 3, name: 'Impressionism' }],
      theme: [{ id: 3, name: 'Urban Life' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/img/example-vertical.png',
      description: 'An impressionist cityscape painting that captures the dynamic rhythms of urban life.',
      price: 300,
      is_sold: true
    },
    {
      id: 4,
      title: 'Floral Serenity',
      artist_id: 4,
      category: [{ id: 5, name: 'Floral' }],
      style: [{ id: 4, name: 'Realism' }],
      theme: [{ id: 4, name: 'Nature' }],
      orientation: { id: 3, name: 'Square' },
      image: '/assets/img/example-square.png',
      description: 'A realistic depiction of a serene floral arrangement, showcasing the beauty of nature.',
      price: 150,
      is_sold: false
    },
    {
      id: 5,
      title: 'The Power Within',
      artist_id: 5,
      category: [{ id: 6, name: 'Abstract' }],
      style: [{ id: 5, name: 'Surrealism' }],
      theme: [{ id: 5, name: 'Inner Power' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/img/example-vertical.png',
      description: 'A surrealistic artwork that symbolizes the inner power and strength within every individual.',
      price: 200,
      is_sold: false
    },
    {
      id: 6,
      title: 'Wilderness Escape',
      artist_id: 5,
      category: [{ id: 7, name: 'Landscape' }],
      style: [{ id: 1, name: 'Realism' }],
      theme: [{ id: 6, name: 'Wilderness' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'A realistic landscape painting depicting a peaceful wilderness scene, perfect for nature lovers.',
      price: 280,
      is_sold: true
    },
    {
      id: 7,
      title: 'Industrial Elegance',
      artist_id: 5,
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 6, name: 'Modernism' }],
      theme: [{ id: 7, name: 'Urban Architecture' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'A modernist painting showcasing the elegance of urban architecture in an industrial setting.',
      price: 320,
      is_sold: false
    },
    {
      id: 8,
      title: 'Dreamy Waters',
      artist_id: 7,
      category: [{ id: 1, name: 'Landscape' }],
      style: [{ id: 7, name: 'Impressionism' }],
      theme: [{ id: 2, name: 'Harmony' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/img/example-vertical.png',
      description: 'An impressionist artwork capturing the dreamy and harmonious qualities of water in nature.',
      price: 180,
      is_sold: true
    },
    {
      id: 9,
      title: 'Ethereal Beauty',
      artist_id: 7,
      category: [{ id: 5, name: 'Floral' }],
      style: [{ id: 8, name: 'Symbolism' }],
      theme: [{ id: 4, name: 'Nature' }],
      orientation: { id: 3, name: 'Square' },
      image: '/assets/img/example-square.png',
      description: 'A symbolic floral painting that explores the ethereal beauty and ephemeral nature of flowers.',
      price: 200,
      is_sold: false
    },
    {
      id: 10,
      title: 'Urban Reflections',
      artist_id: 7,
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 3, name: 'Impressionism' }],
      theme: [{ id: 3, name: 'Urban Life' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'An impressionist cityscape painting reflecting the vibrancy and reflections of urban life.',
      price: 300,
      is_sold: false
    },
    {
      id: 11,
      title: 'Celestial Symphony',
      artist_id: 8,
      category: [{ id: 8, name: 'Abstract' }],
      style: [{ id: 9, name: 'Cubism' }],
      theme: [{ id: 8, name: 'Celestial' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'A cubist abstract artwork inspired by the symphony of celestial bodies and cosmic harmony.',
      price: 350,
      is_sold: true
    },
    {
      id: 12,
      title: 'Tranquil Gardens',
      artist_id: 8,
      category: [{ id: 9, name: 'Gardens' }],
      style: [{ id: 4, name: 'Realism' }],
      theme: [{ id: 9, name: 'Tranquility' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/img/example-vertical.png',
      description: 'A realistic painting capturing the tranquility and beauty of a peaceful garden setting.',
      price: 180,
      is_sold: false
    },
    {
      id: 13,
      title: 'Mindscapes',
      artist_id: 11,
      category: [{ id: 3, name: 'Abstract' }],
      style: [{ id: 5, name: 'Surrealism' }],
      theme: [{ id: 10, name: 'Dreams' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'A surrealistic abstract artwork that explores the landscapes of the mind and dreams.',
      price: 220,
      is_sold: false
    },
    {
      id: 14,
      title: 'Urban Jungle',
      artist_id: 11,
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 10, name: 'Futurism' }],
      theme: [{ id: 11, name: 'Urban Jungle' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'A futuristic painting depicting an urban landscape transformed into a vibrant jungle-like environment.',
      price: 400,
      is_sold: false
    },
    {
      id: 15,
      title: 'Ocean Serenity',
      artist_id: 12,
      category: [{ id: 10, name: 'Seascape' }],
      style: [{ id: 1, name: 'Realism' }],
      theme: [{ id: 12, name: 'Ocean' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/img/example-horizontal.png',
      description: 'A realistic seascape painting capturing the serene beauty and vastness of the ocean.',
      price: 280,
      is_sold: false
    }
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
    { id: 1, user_id: 1, artwork_id: 1 },
    { id: 2, user_id: 1, artwork_id: 2 },
    { id: 3, user_id: 2, artwork_id: 2 },
    { id: 4, user_id: 3, artwork_id: 3 },
    { id: 5, user_id: 3, artwork_id: 4 },
    { id: 6, user_id: 4, artwork_id: 5 },
    { id: 7, user_id: 4, artwork_id: 6 },
    { id: 8, user_id: 5, artwork_id: 1 },
    { id: 9, user_id: 5, artwork_id: 3 },
    { id: 10, user_id: 6, artwork_id: 2 },
    { id: 11, user_id: 6, artwork_id: 4 },
    { id: 12, user_id: 7, artwork_id: 5 },
    { id: 13, user_id: 7, artwork_id: 5 },
    { id: 14, user_id: 8, artwork_id: 3 },
    { id: 15, user_id: 8, artwork_id: 6 },
    { id: 16, user_id: 9, artwork_id: 5 },
    { id: 17, user_id: 9, artwork_id: 2 },
    { id: 18, user_id: 10, artwork_id: 2 },
    { id: 19, user_id: 10, artwork_id: 3 },
    { id: 20, user_id: 11, artwork_id: 4 },
    { id: 21, user_id: 11, artwork_id: 5 },
    { id: 22, user_id: 12, artwork_id: 6 },
    { id: 23, user_id: 12, artwork_id: 1 }
  ],
  cart: [
    { id: 1, user_id: 1, artwork_id: 1, quantity: 1 },
    { id: 2, user_id: 1, artwork_id: 2, quantity: 2 },
    { id: 3, user_id: 2, artwork_id: 2, quantity: 1 }
  ]
}

export default db