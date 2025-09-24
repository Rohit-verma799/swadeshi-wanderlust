export interface Business {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
  rating: number;
  location: string;
  amenities: string[];
}

export const businesses: Business[] = [
  // --- Hotels (10) ---
  {
    id: '1',
    name: 'Shanti Guest House',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1601924582975-9c1a92f1f6c0?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Cozy local guest house with basic amenities and friendly staff.',
    price: '₹1,200/night',
    rating: 4.0,
    location: 'Chirawa, Rajasthan',
    amenities: ['Free WiFi', 'Parking', 'AC rooms']
  },
  {
    id: '2',
    name: 'Green Leaf Inn',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1576671081535-c676d94d2ff6?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Small eco-friendly hotel with garden view rooms.',
    price: '₹1,500/night',
    rating: 4.2,
    location: 'Sikar, Rajasthan',
    amenities: ['Garden', 'Free breakfast', 'Parking']
  },
  {
    id: '3',
    name: 'Lotus Residency',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1551907234-3c13ebdd46c6?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Budget hotel with clean rooms and supportive staff.',
    price: '₹1,000/night',
    rating: 4.1,
    location: 'Jhunjhunu, Rajasthan',
    amenities: ['AC rooms', 'Free WiFi', '24/7 reception']
  },
  {
    id: '4',
    name: 'Sunny Stay',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Family-run small hotel near city center.',
    price: '₹900/night',
    rating: 4.0,
    location: 'Jaipur, Rajasthan',
    amenities: ['Parking', 'Breakfast included', 'Fan rooms']
  },
  {
    id: '5',
    name: 'Seaside Comfort',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2100d?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Budget hotel with sea view in Goa.',
    price: '₹1,800/night',
    rating: 4.3,
    location: 'Goa',
    amenities: ['Sea view', 'Free WiFi', 'Breakfast included']
  },
  {
    id: '6',
    name: 'City Lodge',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Comfortable budget hotel near main market.',
    price: '₹1,200/night',
    rating: 4.0,
    location: 'Mumbai, Maharashtra',
    amenities: ['AC rooms', 'Parking', 'Breakfast included']
  },
  {
    id: '7',
    name: 'Heritage Inn',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Small hotel with traditional architecture style.',
    price: '₹1,500/night',
    rating: 4.2,
    location: 'Udaipur, Rajasthan',
    amenities: ['Cultural experience', 'Free WiFi', 'Parking']
  },
  {
    id: '8',
    name: 'Morning Star Hotel',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1609947017136-52d5f1e7f4d4?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Budget hotel with clean rooms and home-like feel.',
    price: '₹1,000/night',
    rating: 4.1,
    location: 'Jodhpur, Rajasthan',
    amenities: ['Free WiFi', 'Breakfast included', 'AC rooms']
  },
  {
    id: '9',
    name: 'Blue Sky Inn',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Small hotel with rooftop view and family-friendly rooms.',
    price: '₹1,300/night',
    rating: 4.2,
    location: 'Delhi',
    amenities: ['Rooftop', 'Free WiFi', 'AC rooms']
  },
  {
    id: '10',
    name: 'Peaceful Stay',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1609946921295-4f3a6c7c29b0?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Quiet local hotel with simple comforts.',
    price: '₹1,100/night',
    rating: 4.0,
    location: 'Ajmer, Rajasthan',
    amenities: ['Parking', 'Free breakfast', 'Fan rooms']
  },

  // --- Restaurants (10) ---
  {
    id: '11',
    name: 'Chai Adda',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1542736667-069246bdbc75?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Local tea cafe serving snacks and beverages.',
    price: '₹200 for two',
    rating: 4.1,
    location: 'Chirawa, Rajasthan',
    amenities: ['Outdoor seating', 'Fast service']
  },
  {
    id: '12',
    name: 'Tandoori Tales',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4fd566?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Small local eatery specializing in tandoori dishes.',
    price: '₹500 for two',
    rating: 4.2,
    location: 'Sikar, Rajasthan',
    amenities: ['Takeaway', 'Home delivery']
  },
  {
    id: '13',
    name: 'Green Bowl',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1542736667-067246bdbc75?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Healthy vegetarian dishes and fresh juices.',
    price: '₹400 for two',
    rating: 4.3,
    location: 'Mumbai, Maharashtra',
    amenities: ['Healthy options', 'Takeaway', 'Outdoor seating']
  },
  {
    id: '14',
    name: 'Spice Junction',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1543353071-087092ec3933?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Local eatery serving Indian street food.',
    price: '₹300 for two',
    rating: 4.0,
    location: 'Delhi',
    amenities: ['Street food', 'Takeaway', 'Outdoor seating']
  },
  {
    id: '15',
    name: 'Sea Breeze Cafe',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c3d3f8d?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Cafe by the beach serving snacks and drinks.',
    price: '₹600 for two',
    rating: 4.3,
    location: 'Goa',
    amenities: ['Beach view', 'Outdoor seating', 'Fast service']
  },
  {
    id: '16',
    name: 'Rajasthani Rasoi',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1541542684-34803e5a053e?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Authentic Rajasthani thali in local setup.',
    price: '₹450 for two',
    rating: 4.2,
    location: 'Jaipur, Rajasthan',
    amenities: ['Traditional food', 'Cultural ambiance']
  },
  {
    id: '17',
    name: 'Veggie Delight',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1543353071-087092ec3934?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Vegetarian food, healthy and tasty.',
    price: '₹350 for two',
    rating: 4.1,
    location: 'Jhunjhunu, Rajasthan',
    amenities: ['Veg-friendly', 'Takeaway', 'Outdoor seating']
  },
  {
    id: '18',
    name: 'Quick Bite',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1541542684-34803e5a053f?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Fast food joint with burgers and snacks.',
    price: '₹300 for two',
    rating: 4.0,
    location: 'Jodhpur, Rajasthan',
    amenities: ['Fast food', 'Takeaway', 'Delivery']
  },
  {
    id: '19',
    name: 'Coffee Corner',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1541542684-34803e5a053g?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Local coffee shop with snacks and desserts.',
    price: '₹250 for two',
    rating: 4.2,
    location: 'Udaipur, Rajasthan',
    amenities: ['Coffee', 'Snacks', 'Free WiFi']
  },
  {
    id: '20',
    name: 'Street Tadka',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1541542684-34803e5a053h?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Authentic local street food in open-air setup.',
    price: '₹200 for two',
    rating: 4.0,
    location: 'Ajmer, Rajasthan',
    amenities: ['Street food', 'Outdoor seating', 'Takeaway']
  },

  // --- Shops (10) ---
  {
    id: '21',
    name: 'Chirawa Handicrafts',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1582268750697-3932a392cece?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Local handicrafts and souvenirs.',
    price: 'N/A',
    rating: 4.2,
    location: 'Chirawa, Rajasthan',
    amenities: ['Handicrafts', 'Souvenirs', 'Ethnic products']
  },
  {
    id: '22',
    name: 'Sikar Textiles',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1518342416972-748443916295?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Textiles and fabrics from local artisans.',
    price: 'N/A',
    rating: 4.3,
    location: 'Sikar, Rajasthan',
    amenities: ['Fabrics', 'Home decor', 'Clothing']
  },
  {
    id: '23',
    name: 'Jhunjhunu Crafts',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1512496035049-5555c328de8e?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Local crafts and handmade goods.',
    price: 'N/A',
    rating: 4.1,
    location: 'Jhunjhunu, Rajasthan',
    amenities: ['Crafts', 'Souvenirs', 'Handmade']
  },
  {
    id: '24',
    name: 'Jaipur Emporium',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1601724584281-22485559c5d1?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Small local store selling traditional Rajasthani items.',
    price: 'N/A',
    rating: 4.4,
    location: 'Jaipur, Rajasthan',
    amenities: ['Handicrafts', 'Jewelry', 'Textiles']
  },
  {
    id: '25',
    name: 'Goa Souvenirs',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1582268750697-3932a392cecf?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Souvenir shop near beach selling local art.',
    price: 'N/A',
    rating: 4.3,
    location: 'Goa',
    amenities: ['Souvenirs', 'Handicrafts', 'Beach items']
  },
  {
    id: '26',
    name: 'Delhi Market',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1601724584281-22485559c5d2?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Small shop selling local clothes and accessories.',
    price: 'N/A',
    rating: 4.2,
    location: 'Delhi',
    amenities: ['Clothing', 'Accessories', 'Local products']
  },
  {
    id: '27',
    name: 'Udaipur Handlooms',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1582268750697-3932a392cecg?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Handloom and textile shop from local artisans.',
    price: 'N/A',
    rating: 4.3,
    location: 'Udaipur, Rajasthan',
    amenities: ['Textiles', 'Clothing', 'Handicrafts']
  },
  {
    id: '28',
    name: 'Jodhpur Art House',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1512496035049-5555c328de8f?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Local artwork and decorative items.',
    price: 'N/A',
    rating: 4.2,
    location: 'Jodhpur, Rajasthan',
    amenities: ['Art', 'Decor', 'Handmade']
  },
  {
    id: '29',
    name: 'Ajmer Bazaar',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1601724584281-22485559c5d3?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Local market shop selling handicrafts and souvenirs.',
    price: 'N/A',
    rating: 4.1,
    location: 'Ajmer, Rajasthan',
    amenities: ['Handicrafts', 'Souvenirs', 'Ethnic products']
  },
  {
    id: '30',
    name: 'Mumbai Local Crafts',
    category: 'shop',
    image: 'https://images.unsplash.com/photo-1582268750697-3932a392ceci?w=1080&h=720&fit=crop&auto=format&q=80',
    description: 'Small shop selling local Mumbai handicrafts and products.',
    price: 'N/A',
    rating: 4.3,
    location: 'Mumbai, Maharashtra',
    amenities: ['Handicrafts', 'Decor', 'Clothing']
  }
];
