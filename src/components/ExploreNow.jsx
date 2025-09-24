import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Heart, Camera, ChevronLeft, ChevronRight, Share, Bookmark, Users, Calendar, Star, MapPin, Wifi, Car, Utensils, Coffee, Shield, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const DestinationDetails = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date(2025, 9, 5)); // Oct 5, 2025
  const [checkOut, setCheckOut] = useState(new Date(2025, 9, 6)); // Oct 6, 2025
  const [guests, setGuests] = useState(2);
  const [currentDestination, setCurrentDestination] = useState('Trip to Jaipur');
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Comprehensive destination data
  const destinationData = {
    'Trip to Jaipur': {
      title: 'The Pink City Heritage Experience',
      subtitle: 'Luxury Rajasthani Cultural Tour',
      location: 'Jaipur, Rajasthan, India',
      rating: 4.3,
      reviewCount: 3352,
      images: [
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      totalPhotos: 2497,
      description: 'Experience the royal heritage of Jaipur with our expertly curated 5-day tour. Stay in authentic heritage hotels, explore magnificent palaces, witness traditional craftsmanship, and immerse yourself in the vibrant culture of the Pink City.',
      longDescription: 'Jaipur, the capital city of Rajasthan, is a treasure trove of architectural marvels, rich history, and vibrant culture. Our carefully designed itinerary takes you through the most iconic landmarks including the majestic Amber Fort, the intricate Hawa Mahal, and the opulent City Palace. Experience authentic Rajasthani hospitality, savor traditional cuisine, and witness age-old crafts that have been passed down through generations.',
      highlights: [
        'Stay in authentic heritage hotels with royal treatment',
        'Private guided tours of Amber Fort with elephant ride experience',
        'Exclusive access to Hawa Mahal during golden hour',
        'Traditional Rajasthani cooking class with local families',
        'Shopping expedition to famous Johari and Bapu Bazaars',
        'Evening cultural program with folk dance and music',
        'Professional photography sessions at iconic locations',
        'Visit to local artisan workshops for handicrafts'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Royal Welcome & City Palace',
          activities: [
            'Airport/station pickup in luxury vehicle',
            'Check-in at heritage hotel with welcome drink',
            'Visit to magnificent City Palace complex',
            'Explore Jantar Mantar astronomical observatory',
            'Evening stroll through local markets',
            'Welcome dinner with traditional Rajasthani thali'
          ]
        },
        {
          day: 'Day 2',
          title: 'Amber Fort & Hawa Mahal',
          activities: [
            'Early morning visit to Amber Fort',
            'Royal elephant ride experience',
            'Explore palace chambers and mirror work',
            'Visit iconic Hawa Mahal (Palace of Winds)',
            'Photo session at Jal Mahal (Water Palace)',
            'Evening folk dance performance with dinner'
          ]
        },
        {
          day: 'Day 3',
          title: 'Art, Craft & Culture',
          activities: [
            'Visit to traditional block printing workshops',
            'Gem cutting and jewelry making demonstration',
            'Cooking class with local Rajasthani family',
            'Shopping at famous Johari Bazaar',
            'Visit to Albert Hall Museum',
            'Sunset at Nahargarh Fort with panoramic views'
          ]
        },
        {
          day: 'Day 4',
          title: 'Forts & Gardens',
          activities: [
            'Explore mighty Jaigarh Fort',
            'Visit to Sisodia Rani Garden',
            'Traditional puppet show demonstration',
            'Free time for personal exploration',
            'Farewell dinner at rooftop restaurant',
            'Cultural program with live music'
          ]
        },
        {
          day: 'Day 5',
          title: 'Departure',
          activities: [
            'Leisurely breakfast at hotel',
            'Last-minute shopping assistance',
            'Check-out and luggage assistance',
            'Comfortable transfer to airport/station',
            'Departure with beautiful memories and souvenirs'
          ]
        }
      ],
      inclusions: [
        '4 nights in luxury heritage hotels',
        'Daily breakfast and 3 traditional dinners',
        'All transfers in AC vehicles with driver',
        'Professional English-speaking guide',
        'Elephant ride at Amber Fort',
        'All monument entry tickets',
        'Traditional cooking class experience',
        'Folk dance and cultural programs',
        'Shopping assistance and recommendations',
        'Photography sessions at key locations'
      ],
      exclusions: [
        'Flight/train tickets to Jaipur',
        'Lunch (except cooking class)',
        'Personal expenses and shopping',
        'Tips and gratuities',
        'Travel insurance',
        'Camera fees at monuments',
        'Any items not mentioned in inclusions'
      ],
      amenities: [
        { icon: Wifi, name: 'Free WiFi' },
        { icon: Car, name: 'AC Transportation' },
        { icon: Utensils, name: 'Traditional Meals' },
        { icon: Coffee, name: 'Welcome Drinks' },
        { icon: Shield, name: 'Travel Insurance' },
        { icon: Phone, name: '24/7 Support' }
      ],
      pricing: {
        price: '₹10,500',
        originalPrice: '₹15,000',
        discount: '30% OFF',
        duration: '5 Days, 4 Nights',
        perPerson: 'per person'
      },
      reviews: [
        { 
          name: 'Priya Sharma', 
          rating: 5, 
          date: '2 weeks ago',
          text: 'Absolutely magical experience! The heritage hotels were stunning and the guides were incredibly knowledgeable. The cooking class was a highlight - learned to make authentic dal baati churma. Highly recommend this tour!' 
        },
        { 
          name: 'Rajesh Kumar', 
          rating: 5, 
          date: '1 month ago',
          text: 'Perfect organization from start to finish. The elephant ride at Amber Fort was unforgettable, and shopping at Johari Bazaar was amazing. Great value for money and excellent service throughout.' 
        },
        {
          name: 'Sarah Johnson',
          rating: 4,
          date: '3 weeks ago', 
          text: 'Beautiful tour with excellent accommodations. The Pink City is truly mesmerizing. Only minor issue was the crowd at Hawa Mahal, but our guide managed it well. Will definitely book again!'
        }
      ],
      nearbyAttractions: [
        'Pushkar (2.5 hours drive)',
        'Ajmer Sharif Dargah (2 hours)',
        'Ranthambore National Park (3 hours)',
        'Mandawa (Shekhawati region)'
      ]
    }
  };

  const data = destinationData[currentDestination];

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]}`;
  };

  const generateCalendarDays = () => {
    const year = 2025;
    const month = 9; // October (0-indexed)
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const renderRatingStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <div key={i} className={`w-4 h-4 rounded-full mr-1 ${i < Math.floor(rating) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - TripAdvisor style */}
      <div className="bg-gray-800 text-white p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-lg font-semibold truncate">{data.title.toUpperCase()}</h1>
              <p className="text-sm text-gray-300">swadeshi-travel.in</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Share className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <Bookmark className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <div className="w-6 h-6 grid grid-cols-2 gap-0.5 cursor-pointer">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <button className="hover:text-green-600 underline flex items-center">
              <ChevronLeft className="w-4 h-4 mr-1" />
              See all destinations in India
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Title and Rating */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
          <p className="text-lg text-gray-600 mb-3">{data.subtitle}</p>
          <div className="flex items-center space-x-4 mb-3">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-900 mr-2">{data.rating}</span>
              <div className="flex">
                {renderRatingStars(data.rating)}
              </div>
              <span className="ml-2 text-gray-600">({data.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {data.location}
            </div>
          </div>
          <button className="text-gray-700 text-sm hover:text-green-600 flex items-center">
            <Star className="w-4 h-4 mr-1" />
            AI Reviews Summary
          </button>
        </div>

        {/* Main Image Gallery */}
        <div className="relative mb-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src={data.images[activeImageIndex]} 
              alt={data.title}
              className="w-full h-full object-cover"
            />
            
            {/* Travellers' Choice 2025 Badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2">
                  <span className="text-green-600 text-xs font-bold">★</span>
                </div>
                2025
              </div>
            </div>
            
            {/* Photo count badge */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg flex items-center">
              <Camera className="w-4 h-4 mr-2" />
              {data.totalPhotos}
            </div>

            {/* Image navigation arrows */}
            <button 
              onClick={() => setActiveImageIndex(prev => prev === 0 ? data.images.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveImageIndex(prev => (prev + 1) % data.images.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Image thumbnails */}
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {data.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 transition-all ${
                  activeImageIndex === index ? 'border-green-500 scale-105' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this experience</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {data.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {data.longDescription}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What's included</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {data.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <amenity.icon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700 text-sm">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed itinerary</h2>
              <div className="space-y-6">
                {data.itinerary.map((day, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 md:w-64 flex-shrink-0">
                          <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                          <h4 className="text-lg font-semibold">{day.title}</h4>
                        </div>
                        <div className="p-6 flex-1">
                          <ul className="space-y-3">
                            {day.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent reviews</h2>
              <div className="space-y-6">
                {data.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <span className="text-gray-500 text-sm">•</span>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <div className="flex mb-2">
                          {renderRatingStars(review.rating)}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4">
                Read all reviews
              </Button>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="border border-gray-200 rounded-lg sticky top-24">
              <CardContent className="p-6">
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{data.pricing.price}</span>
                    <span className="text-lg text-gray-500 line-through">{data.pricing.originalPrice}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      {data.pricing.discount}
                    </span>
                    <span className="text-gray-600">{data.pricing.perPerson}</span>
                  </div>
                  <div className="text-gray-600 text-sm">{data.pricing.duration}</div>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="border border-gray-300 rounded-lg p-3 hover:border-green-300 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-600">Check In</div>
                    <div className="font-semibold">{formatDate(checkIn)}</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3 hover:border-green-300 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-600">Check Out</div>
                    <div className="font-semibold">{formatDate(checkOut)}</div>
                  </div>
                </div>

                {/* Guests */}
                <div className="border border-gray-300 rounded-lg p-3 mb-6 hover:border-green-300 transition-colors cursor-pointer">
                  <div className="text-sm text-gray-600">Guests</div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="font-semibold">{guests}</span>
                  </div>
                </div>

                {/* Date Picker Toggle */}
                <button 
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Select dates to find the best prices for your trip
                    <button className="ml-auto">
                      <ChevronRight className={`w-4 h-4 transition-transform ${showDatePicker ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </button>

                {/* Date Picker */}
                {showDatePicker && (
                  <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-1 hover:bg-white rounded">
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="font-semibold">October 2025</h3>
                      <button className="p-1 hover:bg-white rounded">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                        <div key={day} className="p-2 text-gray-600 font-medium">{day}</div>
                      ))}
                      {generateCalendarDays().map((day, index) => (
                        <div key={index} className="p-2">
                          {day && (
                            <button 
                              className={`w-8 h-8 rounded-full transition-all ${
                                day === 5 || day === 6 
                                  ? 'bg-green-600 text-white font-semibold' 
                                  : 'hover:bg-white hover:shadow-sm'
                              }`}
                            >
                              {day}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-3 transition-all transform hover:scale-105">
                  Check availability
                </Button>

                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-lg mb-4 transition-all">
                  <Heart className="w-4 h-4 mr-2" />
                  Save to wishlist
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">
                    Free cancellation up to 24 hours before departure
                  </p>
                  <p className="text-xs text-gray-500">
                    Reserve now, pay later available
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="border border-gray-200 rounded-lg mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need help planning?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our travel experts are here to help you customize your perfect Jaipur experience.
                </p>
                <Button variant="outline" className="w-full mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Call us now
                </Button>
                <Button variant="outline" className="w-full">
                  Send message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;