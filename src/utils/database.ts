import type { Database } from '../types/database'

const categories = [
  'Abstract',
  'Animals',
  'Architecture',
  'Botanical',
  'Cityscape',
  'Fantasy',
  'Figurative',
  'Floral',
  'Landscape',
  'Marine',
  'Portrait',
  'Still Life',
  'Wildlife',
  'Street Art',
  'Surrealism',
  'Pop Art',
  'Minimalism',
  'Impressionism',
  'Cubism',
  'Realism',
  'Expressionism',
  'Modern',
  'Contemporary',
  'Romanticism',
  'Symbolism',
  'Art Deco',
  'Baroque',
  'Renaissance',
  'Gothic',
  'Ancient Art',
  'Folk Art',
  'Indigenous Art',
  'Digital Art',
  'Conceptual Art',
  'Installation Art',
  'Performance Art',
  'Textile Art',
  'Ceramic Art',
  'Glass Art',
  'Metal Art',
  'Wood Art',
  'Paper Art',
  'Mixed Media',
  'Collage',
  'Graffiti',
  'Calligraphy',
  'Photography',
  'Illustration',
  'Printmaking',
  'Sculpture'
]

const styles = [
  'Abstract',
  'Realism',
  'Impressionism',
  'Expressionism',
  'Surrealism',
  'Minimalism',
  'Pop Art',
  'Cubism',
  'Fauvism',
  'Art Nouveau',
  'Baroque',
  'Rococo',
  'Neoclassicism',
  'Romanticism',
  'Symbolism',
  'Abstract Expressionism',
  'Post-Impressionism',
  'Modernism',
  'Contemporary',
  'Conceptual',
  'Figurative',
  'Street Art',
  'Graffiti',
  'Digital Art',
  'Photorealism',
  'Hyperrealism',
  'Op Art',
  'Folk Art',
  'Naïve Art',
  'Primitive Art',
  'Geometric Abstraction',
  'Kinetic Art',
  'Lyrical Abstraction',
  'Hard-Edge Painting',
  'Suprematism',
  'Constructivism',
  'Dada',
  'Surrealist Automatism',
  'Neo-Expressionism',
  'Postmodernism',
  'Land Art',
  'Environmental Art',
  'Installation Art',
  'Performance Art',
  'Sound Art',
  'Video Art',
  'Net Art'
]

const themes = [
  'Nature',
  'Cityscape',
  'Landscape',
  'Seascape',
  'Portrait',
  'Still Life',
  'Abstract',
  'Surreal',
  'Fantasy',
  'Sci-Fi',
  'Historical',
  'Mythological',
  'Religious',
  'Political',
  'Social',
  'Ethnic',
  'Cultural',
  'Urban',
  'Rural',
  'Industrial',
  'Futuristic',
  'Minimalistic',
  'Maximalistic',
  'Whimsical',
  'Ethereal',
  'Mystical',
  'Magical',
  'Dreamlike',
  'Romantic',
  'Gothic',
  'Baroque',
  'Renaissance',
  'Victorian',
  'Modern',
  'Contemporary',
  'Traditional',
  'Folk',
  'Street',
  'Graffiti',
  'Abstract Expressionism',
  'Cubism',
  'Impressionism',
  'Fauvism',
  'Pop Art',
  'Op Art',
  'Surrealism',
  'Dadaism',
  'Minimalism',
  'Post-Impressionism',
  'Art Nouveau',
  'Expressionism',
  'Symbolism',
  'Neo-Impressionism',
  'Pointillism',
  'Constructivism',
  'De Stijl',
  'Suprematism',
  'Abstract Art',
  'Environmental Art',
  'Land Art',
  'Performance Art',
  'Conceptual Art',
  'Digital Art',
  'Net Art',
  'Installation Art',
  'Sound Art',
  'Video Art',
  'Street Art'
]

const db: Database = {
  users: [
    {
      id: 1,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user1@example.com',
      password: 'password1',
      first_name: 'John',
      last_name: 'Doe',
      is_artist: false,
      bought_artworks: [3, 6]
    },
    {
      id: 2,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user2@example.com',
      password: 'password2',
      first_name: 'Jane',
      last_name: 'Smith',
      is_artist: false,
      bought_artworks: [8]
    },
    {
      id: 3,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist1@example.com',
      password: 'password1',
      first_name: 'Alice',
      last_name: 'Johnson',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 4,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist2@example.com',
      password: 'password2',
      first_name: 'Bob',
      last_name: 'Williams',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 5,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user3@example.com',
      password: 'password3',
      first_name: 'Emily',
      last_name: 'Brown',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 6,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user4@example.com',
      password: 'password4',
      first_name: 'Michael',
      last_name: 'Jones',
      is_artist: false,
      bought_artworks: []
    },
    {
      id: 7,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist3@example.com',
      password: 'password3',
      first_name: 'Sophia',
      last_name: 'Lee',
      is_artist: true,
      bought_artworks: [11]
    },
    {
      id: 8,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist4@example.com',
      password: 'password4',
      first_name: 'William',
      last_name: 'Davis',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 9,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user5@example.com',
      password: 'password5',
      first_name: 'Olivia',
      last_name: 'Martinez',
      is_artist: false,
      bought_artworks: []
    },
    {
      id: 10,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'user6@example.com',
      password: 'password6',
      first_name: 'Liam',
      last_name: 'Garcia',
      is_artist: false,
      bought_artworks: []
    },
    {
      id: 11,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      email: 'artist5@example.com',
      password: 'password5',
      first_name: 'Emma',
      last_name: 'Rodriguez',
      is_artist: true,
      bought_artworks: []
    },
    {
      id: 12,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
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
      description:
        'A realistic painting capturing the beauty of a sunset reflecting on a tranquil lake.',
      category: [
        { id: 1, name: 'Landscape' },
        { id: 2, name: 'Nature' }
      ],
      style: [{ id: 1, name: 'Realism' }],
      theme: [{ id: 1, name: 'Sunsets' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/94f5d624-db8c-4828-89b5-7db6ec8baf12.png',
      price: 250,
      is_sold: false,
      artist_id: 3
    },
    {
      id: 2,
      title: 'Abstract Harmony',
      description:
        'An abstract expressionist artwork that explores the concept of harmony through vibrant colors and dynamic shapes.',
      category: [{ id: 3, name: 'Abstract' }],
      style: [{ id: 2, name: 'Abstract Expressionism' }],
      theme: [{ id: 2, name: 'Harmony' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/83ac23d1-984b-40cd-ba6c-f24ee835d8d7.png',
      price: 180,
      is_sold: false,
      artist_id: 3
    },
    {
      id: 3,
      title: 'Cityscape Rhythms',
      description:
        'An impressionist cityscape painting that captures the dynamic rhythms of urban life.',
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 3, name: 'Impressionism' }],
      theme: [{ id: 3, name: 'Urban Life' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/artworks/67958afc-ba37-4285-94cd-f403b8f80031.png',
      price: 300,
      is_sold: true,
      artist_id: 4
    },
    {
      id: 4,
      title: 'Floral Serenity',
      description:
        'A realistic depiction of a serene floral arrangement, showcasing the beauty of nature.',
      category: [{ id: 5, name: 'Floral' }],
      style: [{ id: 4, name: 'Realism' }],
      theme: [{ id: 4, name: 'Nature' }],
      orientation: { id: 3, name: 'Square' },
      image: '/assets/artworks/0ad80f70-bf05-4099-ada1-5b369c57a21e.png',
      price: 150,
      is_sold: false,
      artist_id: 4
    },
    {
      id: 5,
      title: 'The Power Within',
      description:
        'A surrealistic artwork that symbolizes the inner power and strength within every individual.',
      category: [{ id: 6, name: 'Abstract' }],
      style: [{ id: 5, name: 'Surrealism' }],
      theme: [{ id: 5, name: 'Inner Power' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/artworks/5d91dc0a-c67f-40b6-aba2-454bf740fc7a.png',
      price: 200,
      is_sold: false,
      artist_id: 5
    },
    {
      id: 6,
      title: 'Wilderness Escape',
      description:
        'A realistic landscape painting depicting a peaceful wilderness scene, perfect for nature lovers.',
      category: [{ id: 7, name: 'Landscape' }],
      style: [{ id: 1, name: 'Realism' }],
      theme: [{ id: 6, name: 'Wilderness' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/56ed1a22-bf19-4a88-a074-4488c731bd8c.png',
      price: 280,
      is_sold: true,
      artist_id: 5
    },
    {
      id: 7,
      title: 'Industrial Elegance',
      description:
        'A modernist painting showcasing the elegance of urban architecture in an industrial setting.',
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 6, name: 'Modernism' }],
      theme: [{ id: 7, name: 'Urban Architecture' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/24061b4e-b66d-43d6-8783-224dc0b08cc4.png',
      price: 320,
      is_sold: false,
      artist_id: 5
    },
    {
      id: 8,
      title: 'Dreamy Waters',
      description:
        'An impressionist artwork capturing the dreamy and harmonious qualities of water in nature.',
      category: [{ id: 1, name: 'Landscape' }],
      style: [{ id: 7, name: 'Impressionism' }],
      theme: [{ id: 2, name: 'Harmony' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/artworks/76952603-243c-48cf-a958-7c3f79ea0580.png',
      price: 180,
      is_sold: true,
      artist_id: 7
    },
    {
      id: 9,
      title: 'Ethereal Beauty',
      description:
        'A symbolic floral painting that explores the ethereal beauty and ephemeral nature of flowers.',
      category: [{ id: 5, name: 'Floral' }],
      style: [{ id: 8, name: 'Symbolism' }],
      theme: [{ id: 4, name: 'Nature' }],
      orientation: { id: 3, name: 'Square' },
      image: '/assets/artworks/b8b2f041-f4bf-4297-902f-3dae46b6e83a.png',
      price: 200,
      is_sold: false,
      artist_id: 7
    },
    {
      id: 10,
      title: 'Urban Reflections',
      description:
        'An impressionist cityscape painting reflecting the vibrancy and reflections of urban life.',
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 3, name: 'Impressionism' }],
      theme: [{ id: 3, name: 'Urban Life' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/8feebdbc-3b3a-4102-8670-7e1a50e64468.png',
      price: 300,
      is_sold: false,
      artist_id: 7
    },
    {
      id: 11,
      title: 'Celestial Symphony',
      description:
        'A cubist abstract artwork inspired by the symphony of celestial bodies and cosmic harmony.',
      category: [{ id: 8, name: 'Abstract' }],
      style: [{ id: 9, name: 'Cubism' }],
      theme: [{ id: 8, name: 'Celestial' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/d2aa970b-e48a-4bee-84e9-c93617ae2e77.png',
      price: 350,
      is_sold: true,
      artist_id: 8
    },
    {
      id: 12,
      title: 'Tranquil Gardens',
      description:
        'A realistic painting capturing the tranquility and beauty of a peaceful garden setting.',
      category: [{ id: 9, name: 'Gardens' }],
      style: [{ id: 4, name: 'Realism' }],
      theme: [{ id: 9, name: 'Tranquility' }],
      orientation: { id: 2, name: 'Vertical' },
      image: '/assets/artworks/4973f6ad-f18b-4b4e-8368-55ee1e6ff9d3.png',
      price: 180,
      is_sold: false,
      artist_id: 8
    },
    {
      id: 13,
      title: 'Mindscapes',
      description:
        'A surrealistic abstract artwork that explores the landscapes of the mind and dreams.',
      category: [{ id: 3, name: 'Abstract' }],
      style: [{ id: 5, name: 'Surrealism' }],
      theme: [{ id: 10, name: 'Dreams' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/0a94c42c-9d40-496d-9269-a52826dde7dd.png',
      price: 220,
      is_sold: false,
      artist_id: 11
    },
    {
      id: 14,
      title: 'Urban Jungle',
      description:
        'A futuristic painting depicting an urban landscape transformed into a vibrant jungle-like environment.',
      category: [{ id: 4, name: 'Cityscape' }],
      style: [{ id: 10, name: 'Futurism' }],
      theme: [{ id: 11, name: 'Urban Jungle' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/889cdb7c-3bb5-4127-a6ad-4cb1a206d827.png',
      price: 400,
      is_sold: false,
      artist_id: 11
    },
    {
      id: 15,
      title: 'Ocean Serenity',
      description:
        'A realistic seascape painting capturing the serene beauty and vastness of the ocean.',
      category: [{ id: 10, name: 'Seascape' }],
      style: [{ id: 1, name: 'Realism' }],
      theme: [{ id: 12, name: 'Ocean' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/262b4933-6d0a-4a90-940b-6f67b2fbc993.png',
      price: 280,
      is_sold: false,
      artist_id: 12
    },
    {
      id: 16,
      title: 'Abstract Cityscape - Urban Dreams',
      description:
        'Urban dreams come alive in this abstract cityscape, where the bustling city takes on a vibrant, energetic form.',
      category: [{ id: 10, name: 'Cityscape' }],
      style: [{ id: 1, name: 'Abstract' }],
      theme: [{ id: 21, name: 'Urban' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/e857a7d5-2c9a-4e41-aca7-4f657f01d5b7.png',
      price: 250,
      is_sold: false,
      artist_id: 3
    },
    {
      id: 17,
      title: 'Impressionistic Seascape - Waves of Serenity',
      description:
        'Waves of serenity wash over in this impressionistic seascape, capturing the tranquil beauty of the sea at sunset.',
      category: [
        { id: 9, name: 'Landscape' },
        { id: 10, name: 'Seascape' }
      ],
      style: [{ id: 4, name: 'Impressionism' }],
      theme: [{ id: 1, name: 'Nature' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/4c3f7e04-7b8a-4802-9a67-b6c4b97f5145.png',
      price: 350,
      is_sold: false,
      artist_id: 5
    },
    {
      id: 18,
      title: 'Abstract Floral - Blooming Reverie',
      description:
        'Blooming reverie unfolds in this abstract floral, where colors and shapes dance in harmony like a floral symphony.',
      category: [{ id: 8, name: 'Floral' }],
      style: [{ id: 1, name: 'Abstract' }],
      theme: [{ id: 17, name: 'Whimsical' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/b545ccf5-28b6-4547-820e-907eb7e77e1e.png',
      price: 200,
      is_sold: false,
      artist_id: 4
    },
    {
      id: 19,
      title: 'Realistic Still Life - Timeless Elegance',
      description:
        'Timeless elegance is captured in this realistic still life, where everyday objects become symbols of beauty and grace.',
      category: [{ id: 12, name: 'Still Life' }],
      style: [{ id: 3, name: 'Realism' }],
      theme: [{ id: 15, name: 'Traditional' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/e27129b8-595a-4254-9140-e96190a2f596.png',
      price: 300,
      is_sold: false,
      artist_id: 2
    },
    {
      id: 20,
      title: 'Abstract Wildlife - Jungle Symphony',
      description:
        'Jungle symphony comes alive in this abstract wildlife painting, where the vibrant colors and dynamic shapes mimic the energy of the jungle.',
      category: [{ id: 13, name: 'Wildlife' }],
      style: [{ id: 1, name: 'Abstract' }],
      theme: [{ id: 18, name: 'Urban' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/57ca43cd-2647-4410-8ed3-274e554af458.png',
      price: 400,
      is_sold: false,
      artist_id: 1
    },
    {
      id: 21,
      title: 'Expressionistic Street Art - Urban Poetry',
      description:
        'Urban poetry unfolds in this expressionistic street art, where the city streets become a canvas for raw emotion and bold expression.',
      category: [{ id: 10, name: 'Cityscape' }],
      style: [{ id: 4, name: 'Expressionism' }],
      theme: [
        { id: 21, name: 'Urban' },
        { id: 32, name: 'Street Art' }
      ],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/3e447dbd-aa74-463d-ab71-3f51ee4cc770.png',
      price: 280,
      is_sold: false,
      artist_id: 3
    },
    {
      id: 22,
      title: 'Surrealistic Landscape - Dreamy Meadows',
      description:
        'Dreamy meadows stretch into the horizon in this surrealistic landscape, where reality and fantasy blend into a harmonious scene.',
      category: [{ id: 9, name: 'Landscape' }],
      style: [{ id: 5, name: 'Surrealism' }],
      theme: [{ id: 24, name: 'Dreamlike' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/fdd5f215-c9f1-4b1e-b58f-fa07fc57e61c.png',
      price: 320,
      is_sold: false,
      artist_id: 5
    },
    {
      id: 23,
      title: 'Minimalistic Abstract - Serene Simplicity',
      description:
        'Serene simplicity is captured in this minimalistic abstract, where a few bold strokes create a powerful visual statement.',
      category: [{ id: 1, name: 'Abstract' }],
      style: [{ id: 6, name: 'Minimalism' }],
      theme: [{ id: 17, name: 'Whimsical' }],
      orientation: { id: 1, name: 'Square' },
      image: '/assets/artworks/0d25d55d-1dee-42cb-8b65-e1760ef228e3.png',
      price: 180,
      is_sold: false,
      artist_id: 4
    },
    {
      id: 24,
      title: 'Pop Art Portrait - Iconic Expression',
      description:
        'Iconic expression shines through in this pop art portrait, where bold colors and graphic elements create a striking visual impact.',
      category: [{ id: 11, name: 'Portrait' }],
      style: [{ id: 7, name: 'Pop Art' }],
      theme: [{ id: 33, name: 'Pop Art' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/ad181335-92ab-4a66-a554-613ab9b93ff7.png',
      price: 260,
      is_sold: false,
      artist_id: 2
    },
    {
      id: 25,
      title: 'Cubist Still Life - Geometric Harmony',
      description:
        'Geometric harmony unfolds in this cubist still life, where objects are deconstructed and reassembled in a dynamic composition.',
      category: [{ id: 12, name: 'Still Life' }],
      style: [{ id: 8, name: 'Cubism' }],
      theme: [{ id: 17, name: 'Whimsical' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/c48057cd-a16a-4f78-bf7c-a7b20d9c0c98.png',
      price: 290,
      is_sold: false,
      artist_id: 1
    },
    {
      id: 26,
      title: 'Fauvist Landscape - Vibrant Meadows',
      description:
        "Vibrant meadows come alive in this fauvist landscape, where colors are bold and expressive, capturing the essence of nature's beauty.",
      category: [{ id: 9, name: 'Landscape' }],
      style: [{ id: 2, name: 'Fauvism' }],
      theme: [{ id: 1, name: 'Nature' }],
      orientation: { id: 1, name: 'Vertical' },
      image: '/assets/artworks/1dc94558-abc5-466c-964b-e70daa8544f0.png',
      price: 270,
      is_sold: false,
      artist_id: 3
    },
    {
      id: 27,
      title: 'Abstract Architecture - Urban Illusions',
      description:
        'Urban illusions unfold in this abstract architecture, where buildings and structures take on a surreal, dreamlike quality.',
      category: [{ id: 10, name: 'Cityscape' }],
      style: [{ id: 1, name: 'Abstract' }],
      theme: [{ id: 21, name: 'Urban' }],
      orientation: { id: 1, name: 'Square' },
      image: '/assets/artworks/cede437f-bf5d-47df-b116-bac2516b7a5b.png',
      price: 320,
      is_sold: false,
      artist_id: 5
    },
    {
      id: 28,
      title: 'Realistic Wildlife - Majestic Elephants',
      description:
        'Majestic elephants are portrayed in this realistic wildlife painting, capturing the beauty and grace of these magnificent creatures.',
      category: [{ id: 13, name: 'Wildlife' }],
      style: [{ id: 3, name: 'Realism' }],
      theme: [{ id: 1, name: 'Nature' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/680b2603-81b9-487c-a37e-453f2792ee7f.png',
      price: 380,
      is_sold: false,
      artist_id: 4
    },
    {
      id: 29,
      title: 'Abstract Seascape - Oceanic Rhythms',
      description:
        'Oceanic rhythms come alive in this abstract seascape, where the ebb and flow of the sea are captured in a dynamic, fluid composition.',
      category: [{ id: 10, name: 'Seascape' }],
      style: [{ id: 1, name: 'Abstract' }],
      theme: [{ id: 34, name: 'Ocean' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/1cbb13a9-fc5b-4127-809b-73c02ff8a90e.png',
      price: 300,
      is_sold: false,
      artist_id: 2
    },
    {
      id: 30,
      title: 'Surrealistic Wildlife - Enchanted Forest',
      description:
        'Enchanted forest comes alive in this surrealistic wildlife painting, where animals and nature blend into a mystical, dreamlike scene.',
      category: [{ id: 13, name: 'Wildlife' }],
      style: [{ id: 5, name: 'Surrealism' }],
      theme: [{ id: 24, name: 'Dreamlike' }],
      orientation: { id: 1, name: 'Vertical' },
      image: '/assets/artworks/c10d65f6-677e-42bb-a95c-766519386400.png',
      price: 350,
      is_sold: false,
      artist_id: 1
    },
    {
      id: 31,
      title: 'Pop Art Still Life - Modern Icons',
      description:
        'Modern icons are portrayed in this pop art still life, where everyday objects become symbols of contemporary culture.',
      category: [{ id: 12, name: 'Still Life' }],
      style: [{ id: 7, name: 'Pop Art' }],
      theme: [{ id: 35, name: 'Modern' }],
      orientation: { id: 1, name: 'Vertical' },
      image: '/assets/artworks/0fb224ca-c987-49aa-81aa-40edd055272e.png',
      price: 270,
      is_sold: false,
      artist_id: 3
    },
    {
      id: 32,
      title: 'Abstract Portrait - Inner Reflections',
      description:
        'Inner reflections are captured in this abstract portrait, where emotions and thoughts are expressed through color and form.',
      category: [{ id: 11, name: 'Portrait' }],
      style: [{ id: 1, name: 'Abstract' }],
      theme: [{ id: 36, name: 'Emotions' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/7c6d3ca6-6b34-4331-9fca-c100e01c57bb.png',
      price: 230,
      is_sold: false,
      artist_id: 5
    },
    {
      id: 33,
      title: 'Cubist Landscape - Geometric Nature',
      description:
        'Geometric nature is portrayed in this cubist landscape, where the natural world is reimagined through a prism of shapes and angles.',
      category: [{ id: 9, name: 'Landscape' }],
      style: [{ id: 8, name: 'Cubism' }],
      theme: [{ id: 1, name: 'Nature' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/f04ea099-0ff9-4826-b048-046f84f62504.png',
      price: 290,
      is_sold: false,
      artist_id: 2
    },
    {
      id: 34,
      title: 'Abstract Wildlife - Jungle Rhythms',
      description:
        'Jungle rhythms come alive in this abstract wildlife painting, where the energy and movement of the jungle are captured in a dynamic composition.',
      category: [{ id: 13, name: 'Wildlife' }],
      style: [{ id: 1, name: 'Abstract' }],
      theme: [{ id: 18, name: 'Urban' }],
      orientation: { id: 1, name: 'Horizontal' },
      image: '/assets/artworks/4942bc75-2b92-427a-89c8-16dd883dc0ba.png',
      price: 380,
      is_sold: false,
      artist_id: 4
    },
    {
      id: 35,
      title: 'Realistic Portrait - Timeless Beauty',
      description:
        "Timeless beauty is captured in this realistic portrait, where the subject's features are portrayed with remarkable detail and precision.",
      category: [{ id: 11, name: 'Portrait' }],
      style: [{ id: 3, name: 'Realism' }],
      theme: [{ id: 36, name: 'Emotions' }],
      orientation: { id: 1, name: 'Square' },
      image: '/assets/artworks/f8379614-2323-452a-8708-146fe38bd591.png',
      price: 320,
      is_sold: false,
      artist_id: 1
    }
  ],
  categories: categories.map((name, i) => ({ id: i + 1, name })),
  styles: styles.map((name, i) => ({ id: i + 1, name })),
  themes: themes.map((name, i) => ({ id: i + 1, name })),
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
