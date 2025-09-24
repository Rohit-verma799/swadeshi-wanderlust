import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Heart, Camera, ChevronLeft, ChevronRight, Share, Bookmark, Users, Calendar, Star, MapPin, Wifi, Car, Utensils, Coffee, Shield, Phone, Award, Clock3, BadgeCheck, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Complete destinations data with all images and details
const destinationsData = [
  {
    id: 'jaipur',
    title: 'Trip to Jaipur',
    subtitle: 'The Pink City Heritage Experience',
    location: 'Jaipur, Rajasthan, India',
    rating: 4.3,
    reviewCount: 3352,
    author: 'Priya Sharma',
    duration: '5 Days',
    description: 'Embark on a royal 5-day journey through the Pink City. Explore magnificent palaces, vibrant markets, and rich heritage of Rajasthan.',
    longDescription: 'Jaipur, the capital city of Rajasthan, is a treasure trove of architectural marvels, rich history, and vibrant culture. Our carefully designed tour takes you through the most iconic landmarks including the majestic Amber Fort, the intricate Hawa Mahal, and the opulent City Palace.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    totalPhotos: 2497,
    discount: '30% OFF',
    originalPrice: '₹15,000',
    discountedPrice: '₹10,500',
    pricing: { price: '₹10,500', originalPrice: '₹15,000', discount: '30% OFF', duration: '5 Days', perPerson: 'per person' },
    highlights: [
      'Stay in authentic heritage hotels with royal treatment',
      'Private guided tours of Amber Fort with elephant ride experience',
      'Exclusive access to Hawa Mahal during golden hour',
      'Traditional Rajasthani cooking class with local families',
      'Shopping expedition to famous Johari and Bapu Bazaars',
      'Evening cultural program with folk dance and music'
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'AC Transportation' },
      { icon: Utensils, name: 'Traditional Meals' },
      { icon: Coffee, name: 'Welcome Drinks' },
      { icon: Shield, name: 'Travel Insurance' },
      { icon: Phone, name: '24/7 Support' }
    ]
  },
  {
    id: 'kerala',
    title: 'Trip to Kerala',
    subtitle: 'God\'s Own Country Experience',
    location: 'Kerala, India',
    rating: 4.5,
    reviewCount: 2847,
    author: 'Rajesh Kumar',
    duration: '6 Days',
    description: 'Experience Gods Own Country in just 6 days! Cruise through backwaters, explore spice gardens, and relax on pristine beaches.',
    longDescription: 'Kerala offers a perfect blend of serene backwaters, lush hill stations, exotic wildlife, and pristine beaches. Experience the unique culture, Ayurvedic treatments, and delicious cuisine that makes Kerala truly God\'s Own Country.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    totalPhotos: 1876,
    discount: '25% OFF',
    originalPrice: '₹18,000',
    discountedPrice: '₹13,500',
    pricing: { price: '₹13,500', originalPrice: '₹18,000', discount: '25% OFF', duration: '6 Days', perPerson: 'per person' },
    highlights: [
      'Houseboat cruise through Alleppey backwaters',
      'Spice plantation tours in Munnar hills',
      'Ayurvedic spa treatments and wellness',
      'Traditional Kathakali dance performances',
      'Beach relaxation at Kovalam and Varkala',
      'Wildlife safari at Periyar National Park'
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'AC Transportation' },
      { icon: Utensils, name: 'Local Cuisine' },
      { icon: Coffee, name: 'Spice Tours' },
      { icon: Shield, name: 'Travel Insurance' },
      { icon: Phone, name: '24/7 Support' }
    ]
  },
  {
    id: 'goa',
    title: 'Trip to Goa',
    subtitle: 'Beach Paradise & Portuguese Heritage',
    location: 'Goa, India',
    rating: 4.2,
    reviewCount: 4156,
    author: 'Maria Fernandes',
    duration: '4 Days',
    description: 'Join us for a thrilling 4-day adventure in Goa, where we\'ll explore beautiful beaches, historic churches, and vibrant nightlife.',
    longDescription: 'Goa offers the perfect blend of Portuguese colonial heritage, pristine beaches, vibrant nightlife, and delicious seafood. From historic Old Goa to the bustling beaches of North Goa, experience the unique charm of this coastal paradise.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571115764595-644d447282a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    totalPhotos: 3245,
    discount: '35% OFF',
    originalPrice: '₹12,000',
    discountedPrice: '₹7,800',
    pricing: { price: '₹7,800', originalPrice: '₹12,000', discount: '35% OFF', duration: '4 Days', perPerson: 'per person' },
    highlights: [
      'Beach hopping across North and South Goa',
      'Portuguese colonial architecture tours',
      'Water sports and adventure activities',
      'Sunset cruise with live music',
      'Local Goan cuisine and feni tasting',
      'Vibrant nightlife and beach parties'
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'Beach Transfers' },
      { icon: Utensils, name: 'Seafood Meals' },
      { icon: Coffee, name: 'Beach Cafes' },
      { icon: Shield, name: 'Water Sports' },
      { icon: Phone, name: '24/7 Support' }
    ]
  },
  {
    id: 'kashmir',
    title: 'Trip to Kashmir',
    subtitle: 'Paradise on Earth Experience',
    location: 'Kashmir, India',
    rating: 4.6,
    reviewCount: 1923,
    author: 'Arjun Singh',
    duration: '7 Days',
    description: 'Discover Paradise on Earth with our 7-day Kashmir tour. Experience Dal Lake, snow-capped mountains, and Mughal gardens.',
    longDescription: 'Kashmir, rightfully called Paradise on Earth, offers breathtaking valleys, crystal-clear lakes, snow-capped peaks, and beautiful gardens. Experience the unique culture, stay in houseboats, and witness the stunning natural beauty of this Himalayan region.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571115764595-644d447282a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    totalPhotos: 1654,
    discount: '20% OFF',
    originalPrice: '₹22,000',
    discountedPrice: '₹17,600',
    pricing: { price: '₹17,600', originalPrice: '₹22,000', discount: '20% OFF', duration: '7 Days', perPerson: 'per person' },
    highlights: [
      'Houseboat stay on Dal Lake',
      'Shikara rides through floating gardens',
      'Visit to Mughal Gardens - Shalimar, Nishat',
      'Gondola ride in Gulmarg',
      'Pahalgam valley exploration',
      'Traditional Kashmiri handicrafts shopping'
    ],
    amenities: [
      { icon: Wifi, name: 'Limited WiFi' },
      { icon: Car, name: 'Mountain Transport' },
      { icon: Utensils, name: 'Kashmiri Cuisine' },
      { icon: Coffee, name: 'Kahwa Tea' },
      { icon: Shield, name: 'Winter Gear' },
      { icon: Phone, name: '24/7 Support' }
    ]
  },
  {
    id: 'agra',
    title: 'Trip to Agra',
    subtitle: 'Eternal Love Story Experience',
    location: 'Agra, India',
    rating: 4.4,
    reviewCount: 5821,
    author: 'Vikram Gupta',
    duration: '3 Days',
    description: 'Experience the eternal love story with our 3-day Agra tour. Visit the iconic Taj Mahal, Agra Fort, and Fatehpur Sikri.',
    longDescription: 'Agra, home to the magnificent Taj Mahal, represents the pinnacle of Mughal architecture and the eternal symbol of love. Explore the rich history, intricate marble work, and romantic tales that make Agra a UNESCO World Heritage destination.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    totalPhotos: 4567,
    discount: '40% OFF',
    originalPrice: '₹8,000',
    discountedPrice: '₹4,800',
    pricing: { price: '₹4,800', originalPrice: '₹8,000', discount: '40% OFF', duration: '3 Days', perPerson: 'per person' },
    highlights: [
      'Sunrise and sunset visits to Taj Mahal',
      'Agra Fort with Mughal history',
      'Fatehpur Sikri ghost city exploration',
      'Marble inlay work demonstrations',
      'Local Agra cuisine and sweets',
      'Professional photography sessions'
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'AC Transportation' },
      { icon: Utensils, name: 'Mughlai Meals' },
      { icon: Coffee, name: 'Heritage Cafes' },
      { icon: Shield, name: 'Monument Fees' },
      { icon: Phone, name: '24/7 Support' }
    ]
  },
  {
    id: 'rishikesh',
    title: 'Trip to Rishikesh',
    subtitle: 'Yoga Capital Spiritual Experience',
    location: 'Rishikesh, India',
    rating: 4.5,
    reviewCount: 2134,
    author: 'Ananya Patel',
    duration: '5 Days',
    description: 'Find spiritual bliss in the Yoga Capital of the World. 5-day spiritual journey with river rafting, meditation, and ashram visits.',
    longDescription: 'Rishikesh, nestled in the foothills of the Himalayas along the sacred Ganges, is the global capital of Yoga and spirituality. Experience ancient wisdom, adventure sports, and spiritual awakening in this holy city.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571115764595-644d447282a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    totalPhotos: 1876,
    discount: '28% OFF',
    originalPrice: '₹14,000',
    discountedPrice: '₹10,080',
    pricing: { price: '₹10,080', originalPrice: '₹14,000', discount: '28% OFF', duration: '5 Days', perPerson: 'per person' },
    highlights: [
      'Yoga and meditation sessions at ashrams',
      'White water rafting on river Ganges',
      'Evening Ganga Aarti at Triveni Ghat',
      'Himalayan trekking and nature walks',
      'Beatles Ashram exploration',
      'Ayurvedic treatments and detox'
    ],
    amenities: [
      { icon: Wifi, name: 'Basic WiFi' },
      { icon: Car, name: 'Local Transport' },
      { icon: Utensils, name: 'Satvik Meals' },
      { icon: Coffee, name: 'Herbal Teas' },
      { icon: Shield, name: 'Safety Gear' },
      { icon: Phone, name: 'Emergency Support' }
    ]
  }
];

const NavigationApp = () => {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' or 'details'
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date(2025, 9, 5));
  const [checkOut, setCheckOut] = useState(new Date(2025, 9, 6));
  const [guests, setGuests] = useState(2);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Navigation handlers
  const goToDetails = (destinationId) => {
    const destination = destinationsData.find(d => d.id === destinationId);
    setSelectedDestination(destination);
    setCurrentPage('details');
    setActiveImageIndex(0);
    window.scrollTo(0, 0);
  };

  const goToLanding = () => {
    setCurrentPage('landing');
    setSelectedDestination(null);
    window.scrollTo(0, 0);
  };

  // Utility functions
  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]}`;
  };

  const renderRatingStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <div key={i} className={`w-4 h-4 rounded-full mr-1 ${i < Math.floor(rating) ? 'bg-[#ff6600]' : 'bg-gray-300'}`}></div>
    ));
  };

  if (currentPage === 'details' && selectedDestination) {
    const data = selectedDestination;
    const reviews = [
      { name: 'Priya Sharma', rating: 5, date: '2 weeks ago', text: 'Absolutely magical experience! The heritage was stunning and the guides were incredibly knowledgeable.' },
      { name: 'Rajesh Kumar', rating: 5, date: '1 month ago', text: 'Perfect organization from start to finish. Great value for money and excellent service throughout.' },
      { name: 'Sarah Johnson', rating: 4, date: '3 weeks ago', text: 'Beautiful tour with excellent accommodations. Will definitely book again!' }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#ff6600] to-[#ff6600] text-white p-4 sticky top-0 z-50 shadow-lg">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <button onClick={goToLanding} className="text-white hover:text-gray-200 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-lg font-semibold truncate">{data.title.toUpperCase()}</h1>
                <p className="text-sm text-green-100">swadeshi-travel.in</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {/* Share and Bookmark icons removed */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Title Section */}
          <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.title}</h1>
                <p className="text-xl text-gray-600 mb-3">{data.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="bg-green-100 text-[#ff6600] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  <Award className="w-4 h-4 inline mr-1" />
                  Bestseller
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900 mr-3">{data.rating}</span>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {renderRatingStars(data.rating)}
                  </div>
                  <span className="text-gray-600">({data.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center text-[#ff6600]">
                <MapPin className="w-5 h-5 mr-2 text-[#ff6600]" />
                <span className="font-medium">{data.location}</span>
              </div>
              
              <div className="flex items-center text-[#ff6600]">
                <Clock3 className="w-5 h-5 mr-2 text-[#ff6600]" />
                <span className="font-medium">{data.duration}</span>
              </div>
              
              <div className="flex items-center text-[#ff6600]">
                <BadgeCheck className="w-5 h-5 mr-2 text-[#ff6600]" />
                <span className="font-medium">Created by {data.author}</span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative mb-8">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={data.images[activeImageIndex]} 
                alt={data.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <div className="bg-[#ff6600] text-white px-4 py-3 rounded-xl text-sm font-bold flex items-center shadow-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#ff6600]text-sm font-bold">★</span>
                  </div>
                  <div>
                    <div className="text-xs opacity-90">Travellers' Choice</div>
                    <div className="text-lg leading-none">2025</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm text-white px-4 py-3 rounded-xl flex items-center shadow-lg">
                <Camera className="w-5 h-5 mr-2" />
                <span className="font-semibold">{data.totalPhotos} Photos</span>
              </div>

              <button 
                onClick={() => setActiveImageIndex(prev => prev === 0 ? data.images.length - 1 : prev - 1)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setActiveImageIndex(prev => (prev + 1) % data.images.length)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex space-x-3 mt-6 overflow-x-auto pb-2">
              {data.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-3 transition-all duration-300 ${
                    activeImageIndex === index 
                      ? 'border-[#ff6600] scale-105 shadow-lg' 
                      : 'border-[#ff6600] hover:border-gray-400 hover:scale-102'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="shadow-sm border-0 bg-white rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-1 h-8 bg-[#ff6600] rounded-full mr-4"></div>
                    About this experience
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {data.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {data.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Experience Highlights */}
              <Card className="shadow-sm border-0 bg-white rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#ff6600]  mb-6 flex items-center">
                    <div className="w-1 h-8 bg-[#ff6600]  rounded-full mr-4"></div>
                    Experience highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start p-5 border border-gray-200 rounded-xl hover:border-[#ff6600]  hover:shadow-md transition-all group">
                        <div className="w-3 h-3 bg-[#ff6600]  rounded-full mt-1.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-[#ff6600]  leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card className="shadow-sm border-0 bg-white rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-1 h-8 bg-[#ff6600]  rounded-full mr-4"></div>
                    What's included
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {data.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors">
                        <amenity.icon className="w-6 h-6 text-[#ff6600] mr-3" />
                        <span className="text-[#ff6600]  font-medium">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="shadow-sm border-0 bg-white rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-1 h-8 bg-[#ff6600]  rounded-full mr-4"></div>
                    Recent reviews
                  </h2>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {review.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-[#ff6600]  text-lg">{review.name}</h4>
                              <span className="text-[#ff6600] ">•</span>
                              <span className="text-[#ff6600]  text-sm">{review.date}</span>
                            </div>
                            <div className="flex mb-3">
                              {renderRatingStars(review.rating)}
                            </div>
                            <p className="text-[#ff6600]  leading-relaxed">{review.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-6 border-[#ff6600]  text-[#ff6600]  hover:bg-green-50 px-6 py-3">
                    Read all {data.reviewCount} reviews
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="border-0 rounded-2xl sticky top-28 shadow-xl bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#ff6600]  to-[#ff6600]  text-white p-6">
                    <div className="flex items-baseline space-x-3 mb-2">
                      <span className="text-4xl font-bold">{data.pricing.price}</span>
                      <span className="text-xl text-green-200 line-through">{data.pricing.originalPrice}</span>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {data.pricing.discount}
                      </span>
                      <span className="text-green-100">{data.pricing.perPerson}</span>
                    </div>
                    <div className="text-green-100 text-sm font-medium">{data.pricing.duration}</div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="border-2 border-[#ff6600]  rounded-xl p-4 hover:border-[#ff6600] transition-colors cursor-pointer">
                        <div className="text-sm text-gray-900 font-medium">Check In</div>
                        <div className="font-semibold text-gray-900">{formatDate(checkIn)}</div>
                      </div>
                      <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#ff6600]  transition-colors cursor-pointer">
                        <div className="text-sm text-gray-900 font-medium">Check Out</div>
                        <div className="font-semibold text-gray-900">{formatDate(checkOut)}</div>
                      </div>
                    </div>

                    <div className="border-2 border-gray-200 rounded-xl p-4 mb-6 hover:border-green-300 transition-colors cursor-pointer">
                      <div className="text-sm text-gray-900 font-medium">Guests</div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-gray-900" />
                        <span className="font-semibold text-gray-900">{guests}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#ff6600]  to-[#ff6600]  hover:from-[#ff6600]  hover:to-[#ff6600]  text-white font-semibold py-4 rounded-xl mb-4 transition-all transform hover:scale-105 shadow-lg">
                      Check availability
                    </Button>

                    <Button variant="outline" className="w-full border-2 border-[#ff6600]  text-white hover:bg-[#ff6600]  font-semibold py-4 rounded-xl mb-6 transition-all">
                      <Heart className="w-5 h-5 mr-2" />
                      Save to wishlist
                    </Button>

                    <div className="space-y-3 text-center">
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                        Free cancellation up to 24 hours before departure
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Shield className="w-4 h-4 mr-2 text-green-600" />
                        Reserve now, pay later available
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-2 text-green-600" />
                        Best price guarantee
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Landing Page
  const features = [
    {
      icon: Calendar,
      title: 'AI-Powered Itineraries',
      description: 'Get personalized travel plans crafted by AI based on your preferences and budget.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Local Experiences',
      description: 'Connect with authentic local businesses, artisans, and cultural experiences.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Curated Destinations',
      description: 'Discover hidden gems and popular destinations across incredible India.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Trusted Partners',
      description: 'Book with confidence through our network of verified hotels and services.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      title: 'Travel Blogger',
      text: 'Swadeshi Travel ने मेरी राजस्थान यात्रा को अविस्मरणीय बनाया! AI-powered itinerary बिल्कुल perfect था।',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1-5c?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Rajesh Kumar',
      title: 'Software Engineer',
      text: 'केरल trip के लिए मिले suggestions amazing थे। Local experiences और authentic food के लिए best platform है।',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Anita Desai',
      title: 'Business Owner',
      text: 'Family vacation planning कभी इतना easy नहीं था। हमारी Goa trip absolutely perfect रही, thanks to Swadeshi Travel!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 animate-fade-in">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              Discover
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Incredible India
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Experience authentic Indian culture with AI-powered itineraries and local connections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border-0">
                Plan Your Trip
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-20 animate-on-scroll ${visibleSections.has('features-title') ? 'animate-fade-in-up' : 'opacity-0'}`} id="features-title">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Choose Swadeshi Travel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We blend technology with authentic local experiences to create unforgettable journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${visibleSections.has(`feature-${index}`) ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
                id={`feature-${index}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 animate-on-scroll ${visibleSections.has('destinations-title') ? 'animate-fade-in-up' : 'opacity-0'}`} id="destinations-title">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Customized <span className="italic font-black">Itineraries</span> for Every Travel Dream
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trip Planner AI is your ultimate companion for any travel scenario. Whether it's a solo adventure, 
              a family vacation, or a group expedition, our app tailors every aspect of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {destinationsData.map((destination, index) => (
              <div
                key={index}
                className={`animate-on-scroll transform transition-all duration-700 hover:scale-105 ${
                  visibleSections.has(`destination-${index}`) 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-20 rotate-1'
                }`}
                id={`destination-${index}`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: visibleSections.has(`destination-${index}`) 
                    ? 'translateY(0) rotate(0deg) scale(1)' 
                    : `translateY(50px) rotate(${index % 2 === 0 ? '2deg' : '-2deg'}) scale(0.95)`
                }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg overflow-hidden rounded-3xl relative">
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      {destination.discount}
                    </div>
                  </div>
                  
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{destination.author.charAt(0)}</span>
                        </div>
                        {destination.author}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">{destination.discountedPrice}</span>
                        <span className="text-lg text-gray-400 line-through">{destination.originalPrice}</span>
                      </div>
                      <Button 
                        onClick={() => goToDetails(destination.id)}
                        className="bg-[#ff6600]  hover:bg-[#ff6600]  text-white px-6 py-2 transition-all transform hover:scale-105"
                      >
                        Explore Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 animate-on-scroll ${visibleSections.has('testimonials-title') ? 'animate-fade-in-up' : 'opacity-0'}`} id="testimonials-title">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">What Our Indian Travelers Say</h2>
            <p className="text-xl text-[#ff6600]  max-w-3xl mx-auto">
              हमारे satisfied customers के experiences देखें जिन्होंने Swadeshi Travel के साथ incredible India को explore किया है
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`animate-on-scroll transform transition-all duration-700 ${
                  visibleSections.has(`testimonial-${index}`) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-16 scale-95'
                }`}
                id={`testimonial-${index}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md rounded-2xl h-full transform hover:-translate-y-2 hover:shadow-purple-100">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-purple-200"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-purple-600 font-medium">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`animate-on-scroll ${visibleSections.has('cta') ? 'animate-fade-in-up' : 'opacity-0'}`} id="cta">
            <h2 className="text-5xl font-bold mb-8">Ready to Explore India?</h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Start your incredible journey today with our AI-powered travel planner
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-4 bg-white text-purple-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl font-semibold">
                Create Itinerary
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Explore Businesses
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NavigationApp;