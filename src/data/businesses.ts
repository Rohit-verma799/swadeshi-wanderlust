export interface Business {
  id: string;
  name: string;
  category: 'hotel' | 'homestay' | 'restaurant' | 'artisan';
  image: string;
  description: string;
  price: string;
  rating: number;
  location: string;
  amenities: string[];
}

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Heritage Haveli Homestay',
    category: 'homestay',
    image: '/api/placeholder/300/200',
    description: 'Experience authentic Rajasthani culture in a traditional haveli with modern amenities.',
    price: '₹3,500/night',
    rating: 4.8,
    location: 'Jaipur, Rajasthan',
    amenities: ['Traditional decor', 'Home-cooked meals', 'Cultural activities', 'Free WiFi']
  },
  {
    id: '2',
    name: 'Spice Garden Resort',
    category: 'hotel',
    image: '/api/placeholder/300/200',
    description: 'Luxury resort nestled in spice plantations with ayurvedic spa and organic cuisine.',
    price: '₹8,500/night',
    rating: 4.9,
    location: 'Thekkady, Kerala',
    amenities: ['Spa services', 'Organic restaurant', 'Nature walks', 'Pool']
  },
  {
    id: '3',
    name: 'Royal Thali House',
    category: 'restaurant',
    image: '/api/placeholder/300/200',
    description: 'Authentic Rajasthani cuisine served in royal style with traditional ambiance.',
    price: '₹800/person',
    rating: 4.7,
    location: 'Udaipur, Rajasthan',
    amenities: ['Traditional music', 'Royal ambiance', 'Vegetarian', 'Cultural show']
  },
  {
    id: '4',
    name: 'Kashmiri Carpet Artisan',
    category: 'artisan',
    image: '/api/placeholder/300/200',
    description: 'Handwoven Kashmiri carpets made with traditional techniques passed down generations.',
    price: '₹15,000 - ₹2,50,000',
    rating: 4.9,
    location: 'Srinagar, Kashmir',
    amenities: ['Authentic craftsmanship', 'Custom designs', 'Export quality', 'Certificate of authenticity']
  },
  {
    id: '5',
    name: 'Backwater Villa',
    category: 'homestay',
    image: '/api/placeholder/300/200',
    description: 'Peaceful villa on the backwaters with traditional Kerala architecture and modern comfort.',
    price: '₹4,200/night',
    rating: 4.6,
    location: 'Alleppey, Kerala',
    amenities: ['Backwater view', 'Traditional cuisine', 'Kayaking', 'Fishing']
  },
  {
    id: '6',
    name: 'Himalayan Boutique Hotel',
    category: 'hotel',
    image: '/api/placeholder/300/200',
    description: 'Cozy mountain hotel with stunning Himalayan views and local Himachali hospitality.',
    price: '₹6,500/night',
    rating: 4.8,
    location: 'Manali, Himachal Pradesh',
    amenities: ['Mountain views', 'Trekking guides', 'Bonfire evenings', 'Local cuisine']
  },
  {
    id: '7',
    name: 'Coastal Curry Kitchen',
    category: 'restaurant',
    image: '/api/placeholder/300/200',
    description: 'Fresh seafood and coastal delicacies with ocean views and beach-side dining.',
    price: '₹1,200/person',
    rating: 4.5,
    location: 'Goa',
    amenities: ['Ocean views', 'Fresh seafood', 'Beach dining', 'Live music']
  },
  {
    id: '8',
    name: 'Madhubani Art Studio',
    category: 'artisan',
    image: '/api/placeholder/300/200',
    description: 'Traditional Madhubani paintings created by local artists using natural colors.',
    price: '₹500 - ₹25,000',
    rating: 4.7,
    location: 'Bihar',
    amenities: ['Natural colors', 'Traditional techniques', 'Custom artwork', 'Art workshops']
  }
];