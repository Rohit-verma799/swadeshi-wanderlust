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
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1555529733-0e670de601c4?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    description: 'Small shop selling local Mumbai handicrafts and products.',
    price: 'N/A',
    rating: 4.3,
    location: 'Mumbai, Maharashtra',
    amenities: ['Handicrafts', 'Decor', 'Clothing']
  }
];