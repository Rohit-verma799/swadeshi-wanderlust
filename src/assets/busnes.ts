// src/data/businesses.ts
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
  // Rajasthan
  {
    id: '1',
    name: 'Rambagh Palace',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1598287517906-8c44e995e865?q=80&w=1770&auto=format&fit=crop',
    description: 'Experience authentic Rajasthani culture in a traditional haveli with modern amenities.',
    price: '₹25,000/night',
    rating: 4.8,
    location: 'Jaipur, Rajasthan',
    amenities: ['Spa', 'Pool', 'Fine Dining', 'Cultural shows', 'Free WiFi']
  },
  {
    id: '2',
    name: 'Hotel Pearl Palace',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1590497576202-613d964f7832?q=80&w=1770&auto=format&fit=crop',
    description: 'A popular mid-range hotel known for its charming, quirky decor and rooftop restaurant.',
    price: '₹3,500/night',
    rating: 4.5,
    location: 'Jaipur, Rajasthan',
    amenities: ['Rooftop restaurant', 'Air conditioning', 'Room service']
  },
  {
    id: '3',
    name: 'Umaid Bhawan Palace',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1588667366336-d446a6f67568?q=80&w=1770&auto=format&fit=crop',
    description: 'A magnificent palace-hotel showcasing the architectural grandeur of Jodhpur.',
    price: '₹35,000/night',
    rating: 4.9,
    location: 'Jodhpur, Rajasthan',
    amenities: ['Museum', 'Spa', 'Pool', 'Fine dining']
  },
  {
    id: '4',
    name: 'Ajit Bhawan',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1627068565155-b44e05b75a10?q=80&w=1770&auto=format&fit=crop',
    description: 'India\'s first heritage hotel, offering a blend of modern comfort and royal traditions.',
    price: '₹9,000/night',
    rating: 4.6,
    location: 'Jodhpur, Rajasthan',
    amenities: ['Heritage suites', 'Gardens', 'Camel rides']
  },
  {
    id: '5',
    name: 'Taj Lake Palace',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1582268153434-c2c2a05d8f6d?q=80&w=1770&auto=format&fit=crop',
    description: 'A beautiful floating palace on Lake Pichola, offering a truly romantic experience.',
    price: '₹28,000/night',
    rating: 4.9,
    location: 'Udaipur, Rajasthan',
    amenities: ['Boat transfers', 'Spa', 'Lake view rooms', 'Fine dining']
  },
  {
    id: '6',
    name: 'The Leela Palace Udaipur',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1616706059200-a33f3747d639?q=80&w=1770&auto=format&fit=crop',
    description: 'A modern luxury hotel with stunning views of the City Palace and Lake Pichola.',
    price: '₹22,000/night',
    rating: 4.7,
    location: 'Udaipur, Rajasthan',
    amenities: ['Infinity pool', 'Spa', 'Private dining', 'Butler service']
  },

  // Kerala
  {
    id: '7',
    name: 'Taj Malabar Resort & Spa',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1580281691361-12f716613c2c?q=80&w=1770&auto=format&fit=crop',
    description: 'A luxurious resort offering stunning views of the harbor and backwaters.',
    price: '₹14,000/night',
    rating: 4.7,
    location: 'Kochi, Kerala',
    amenities: ['Harbor view', 'Spa', 'Pool', 'Gym']
  },
  {
    id: '8',
    name: 'The Leela Kovalam, A Raviz Hotel',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1625907914436-b485d4520e5c?q=80&w=1770&auto=format&fit=crop',
    description: 'Perched on a cliff, this hotel offers panoramic views of the Kovalam coastline.',
    price: '₹12,000/night',
    rating: 4.6,
    location: 'Kovalam, Kerala',
    amenities: ['Cliffside pool', 'Ayurvedic spa', 'Private beach']
  },

  // Goa
  {
    id: '9',
    name: 'W Goa',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1581414457789-5c7a0d4c8853?q=80&w=1770&auto=format&fit=crop',
    description: 'A stylish and modern resort with a lively vibe, perfect for luxury and vibrant nightlife.',
    price: '₹18,000/night',
    rating: 4.6,
    location: 'North Goa',
    amenities: ['Nightclub', 'Water sports', 'Beach access', 'Spa']
  },
  {
    id: '10',
    name: 'Taj Exotica Resort & Spa',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1547035118-2895669b324d?q=80&w=1770&auto=format&fit=crop',
    description: 'Located on a beautiful beach, this resort offers Mediterranean-style villas and exceptional dining.',
    price: '₹15,000/night',
    rating: 4.7,
    location: 'South Goa',
    amenities: ['Private beach', 'Spa', 'Multiple restaurants', 'Golf course']
  },

  // Himachal Pradesh
  {
    id: '11',
    name: 'The Oberoi Cecil',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1620608552668-386f6d0f66e0?q=80&w=1770&auto=format&fit=crop',
    description: 'A luxurious colonial-era hotel that offers stunning views of the Himalayas.',
    price: '₹14,000/night',
    rating: 4.8,
    location: 'Shimla, Himachal Pradesh',
    amenities: ['Colonial decor', 'Indoor pool', 'Fine dining', 'Library']
  },
  {
    id: '12',
    name: 'The Himalayan',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1588806533038-f94d9346d042?q=80&w=1770&auto=format&fit=crop',
    description: 'A majestic Gothic-style castle-resort surrounded by apple orchards.',
    price: '₹11,000/night',
    rating: 4.5,
    location: 'Manali, Himachal Pradesh',
    amenities: ['Mountain views', 'Trekking guides', 'Bonfire evenings']
  },

  // Uttar Pradesh
  {
    id: '13',
    name: 'The Oberoi Amarvilas',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1596706059200-a33f3747d639?q=80&w=1770&auto=format&fit=crop',
    description: 'An ultra-luxurious hotel offering every room with an uninterrupted view of the Taj Mahal.',
    price: '₹40,000/night',
    rating: 4.9,
    location: 'Agra, Uttar Pradesh',
    amenities: ['Taj Mahal view', 'Spa', 'Pool', 'Gourmet dining']
  },
  {
    id: '14',
    name: 'BrijRama Palace',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1627068565155-b44e05b75a10?q=80&w=1770&auto=format&fit=crop',
    description: 'A historic palace-hotel located on the ghats of the Ganges, offering a unique spiritual experience.',
    price: '₹15,000/night',
    rating: 4.8,
    location: 'Varanasi, Uttar Pradesh',
    amenities: ['River views', 'Ganga Aarti', 'Yoga sessions']
  },
  
  // Madhya Pradesh
  {
    id: '15',
    name: 'Jehan Numa Palace Hotel',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1616782483582-74c158d60064?q=80&w=1770&auto=format&fit=crop',
    description: 'A beautiful heritage hotel that was once the residence of the Nawab of Bhopal.',
    price: '₹8,000/night',
    rating: 4.6,
    location: 'Bhopal, Madhya Pradesh',
    amenities: ['Heritage', 'Pool', 'Fine dining']
  },
  {
    id: '16',
    name: 'The Lalit Temple View Khajuraho',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1542318721-6f0223788a10?q=80&w=1770&auto=format&fit=crop',
    description: 'A luxury hotel with stunning views of the Western Group of Temples, a UNESCO World Heritage Site.',
    price: '₹7,500/night',
    rating: 4.5,
    location: 'Khajuraho, Madhya Pradesh',
    amenities: ['Temple view', 'Spa', 'Pool', 'Fitness center']
  },

  // Tamil Nadu
  {
    id: '17',
    name: 'ITC Grand Chola',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1596238865662-75210332824e?q=80&w=1770&auto=format&fit=crop',
    description: 'A grand hotel inspired by the Chola dynasty, offering luxury, art, and eco-friendly practices.',
    price: '₹16,000/night',
    rating: 4.7,
    location: 'Chennai, Tamil Nadu',
    amenities: ['Multiple pools', 'Spa', 'Gym', 'Gourmet dining']
  },
  {
    id: '18',
    name: 'Le Dupleix',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1599827014169-826c710f63b0?q=80&w=1770&auto=format&fit=crop',
    description: 'A heritage hotel in Pondicherry, offering a charming French colonial experience.',
    price: '₹7,000/night',
    rating: 4.5,
    location: 'Pondicherry, Tamil Nadu',
    amenities: ['French restaurant', 'Courtyard', 'Boutique stay']
  },

  // West Bengal
  {
    id: '19',
    name: 'The Oberoi Grand',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1599052069830-6b6f7091b65e?q=80&w=1770&auto=format&fit=crop',
    description: 'Known as the \'Grand Dame of Chowringhee\', this historic hotel offers luxury and colonial-era charm.',
    price: '₹11,000/night',
    rating: 4.6,
    location: 'Kolkata, West Bengal',
    amenities: ['Historic building', 'Pool', 'Fine dining', 'Ballroom']
  },
  {
    id: '20',
    name: 'Mayfair Darjeeling',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1596706059200-a33f3747d639?q=80&w=1770&auto=format&fit=crop',
    description: 'A heritage hotel that was once the summer house of a Maharaja, with breathtaking views of the mountains.',
    price: '₹9,500/night',
    rating: 4.5,
    location: 'Darjeeling, West Bengal',
    amenities: ['Mountain view', 'Tea gardens', 'Spa', 'Bonfire']
  },

  // Gujarat
  {
    id: '21',
    name: 'The House of MG',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1629864223297-c75269f8c679?q=80&w=1770&auto=format&fit=crop',
    description: 'A unique heritage hotel in a restored mansion, offering an authentic experience of old Ahmedabad.',
    price: '₹6,000/night',
    rating: 4.7,
    location: 'Ahmedabad, Gujarat',
    amenities: ['Heritage building', 'Pool', 'Terrace restaurant']
  },
  {
    id: '22',
    name: 'The Fern Gir Forest Resort',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1582268153434-c2c2a05d8f6d?q=80&w=1770&auto=format&fit=crop',
    description: 'An eco-friendly resort offering a comfortable and immersive stay near the home of the Asiatic Lion.',
    price: '₹8,500/night',
    rating: 4.4,
    location: 'Gir National Park, Gujarat',
    amenities: ['Safari tours', 'Pool', 'Nature walks']
  },

  // Punjab
  {
    id: '23',
    name: 'Hyatt Regency Amritsar',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1596706059200-a33f3747d639?q=80&w=1770&auto=format&fit=crop',
    description: 'A modern hotel offering luxurious amenities and a convenient location close to the Golden Temple.',
    price: '₹10,000/night',
    rating: 4.5,
    location: 'Amritsar, Punjab',
    amenities: ['Pool', 'Spa', 'Gym', 'Restaurant']
  },
  {
    id: '24',
    name: 'Taj Chandigarh',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1616782483582-74c158d60064?q=80&w=1770&auto=format&fit=crop',
    description: 'A contemporary luxury hotel in the heart of Chandigarh, known for its impeccable service.',
    price: '₹12,000/night',
    rating: 4.6,
    location: 'Chandigarh, Punjab',
    amenities: ['Pool', 'Spa', 'Fine dining', '24/7 room service']
  },
  
  // And a few other business types to demonstrate the card
  {
    id: '25',
    name: 'Coastal Curry Kitchen',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1629864223297-c75269f8c679?q=80&w=1770&auto=format&fit=crop',
    description: 'Fresh seafood and coastal delicacies with ocean views and beach-side dining.',
    price: '₹1,200/person',
    rating: 4.5,
    location: 'Goa',
    amenities: ['Ocean views', 'Fresh seafood', 'Beach dining', 'Live music']
  },
  {
    id: '26',
    name: 'Kashmiri Carpet Artisan',
    category: 'artisan',
    image: 'https://images.unsplash.com/photo-1616782483582-74c158d60064?q=80&w=1770&auto=format&fit=crop',
    description: 'Handwoven Kashmiri carpets made with traditional techniques.',
    price: '₹15,000 - ₹2,50,000',
    rating: 4.9,
    location: 'Srinagar, Kashmir',
    amenities: ['Authentic craftsmanship', 'Custom designs', 'Export quality']
  },
];