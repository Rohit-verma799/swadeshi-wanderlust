import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Users, Mountain, Check, X, Calendar, MapPin, Heart, Info, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import keralbackwatersImg from '@/assets/kerala-backwaters.jpg';
import tajMahalImg from '@/assets/taj-mahal-sunrise.jpg';
import jaipurImg from '@/assets/jaipur-hawa-mahal.jpg';
import goaImg from '@/assets/goa-beach.jpg';
import himachalImg from '@/assets/himachal-mountains.jpg';

// --- MOCK DATA FOR TOUR PACKAGES ---
const tourPackages = [
  {
    id: 1,
    title: 'Golden Triangle Odyssey',
    destination: 'Delhi, Agra, Jaipur',
    duration: 5,
    price: 28000,
    rating: 4.8,
    imageUrl: tajMahalImg,
    description: 'Experience the cultural heart of India by visiting the iconic cities of Delhi, Agra, and Jaipur.',
    highlights: ['Taj Mahal at sunrise', 'Red Fort exploration', 'Amber Fort visit', 'Local cuisine tasting'],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', details: 'Arrive at Delhi airport and transfer to your hotel. Later, visit India Gate and explore the local markets.' },
      { day: 2, title: 'Delhi Sightseeing & Drive to Agra', details: 'Visit Humayun\'s Tomb and Qutub Minar. In the afternoon, drive to Agra and check into your hotel.' },
      { day: 3, title: 'Taj Mahal at Sunrise & Jaipur', details: 'Witness the breathtaking beauty of the Taj Mahal at sunrise. Later, drive to Jaipur, the Pink City.' },
      { day: 4, title: 'Jaipur - The Pink City', details: 'Explore Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar.' },
      { day: 5, title: 'Departure from Jaipur', details: 'After breakfast, you will be transferred to Jaipur airport for your onward journey.' },
    ],
    inclusions: ['Accommodation in 4-star hotels', 'Daily breakfast', 'Private AC car for all transfers', 'All sightseeing tours'],
    exclusions: ['Flights', 'Lunch and Dinner', 'Entrance fees to monuments'],
  },
  {
    id: 2,
    title: 'Kerala Backwaters Bliss',
    destination: 'Kochi, Munnar, Alleppey',
    duration: 7,
    price: 35000,
    rating: 4.9,
    imageUrl: keralbackwatersImg,
    description: 'Relax and rejuvenate in God\'s Own Country with serene backwaters, lush tea gardens, and vibrant culture.',
    highlights: ['Houseboat experience', 'Tea plantation tour', 'Backwater cruise', 'Ayurvedic spa treatment'],
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', details: 'Arrive in Kochi, check into your hotel. Explore Fort Kochi and the Chinese Fishing Nets in the evening.' },
      { day: 2, title: 'Kochi to Munnar', details: 'Drive to the beautiful hill station of Munnar, famous for its tea plantations. Check into your resort.' },
      { day: 3, title: 'Munnar Sightseeing', details: 'Visit Mattupetty Dam, Echo Point, and the Tea Museum. Enjoy the scenic beauty of the rolling hills.' },
      { day: 4, title: 'Munnar to Thekkady', details: 'Drive to Thekkady (Periyar) and enjoy a boat ride on Periyar Lake to spot wildlife.' },
      { day: 5, title: 'Thekkady to Alleppey (Houseboat)', details: 'Drive to Alleppey to board your private houseboat. Cruise through the serene backwaters.' },
      { day: 6, title: 'Alleppey to Kochi', details: 'After breakfast on the houseboat, disembark and drive back to Kochi for some last-minute shopping.' },
      { day: 7, title: 'Departure', details: 'Transfer to Kochi airport for your flight back home.' },
    ],
    inclusions: ['1 night in a deluxe houseboat with all meals', 'Accommodation in 3/4-star hotels', 'Daily breakfast', 'All transfers by AC car'],
    exclusions: ['Airfare', 'Personal expenses', 'Activity charges'],
  },
  {
    id: 3,
    title: 'Rajasthan Royal Heritage',
    destination: 'Jaipur & Jodhpur',
    duration: 6,
    price: 32000,
    rating: 4.7,
    imageUrl: jaipurImg,
    description: 'Explore the royal heritage of Rajasthan with magnificent palaces, historic forts, and vibrant culture.',
    highlights: ['Palace stays', 'Desert safari', 'Cultural shows', 'Local handicraft shopping'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', details: 'Arrive at Jaipur airport, transfer to hotel. In the evening, visit local markets and enjoy traditional dinner.' },
      { day: 2, title: 'Jaipur City Tour', details: 'Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar.' },
      { day: 3, title: 'Jaipur to Jodhpur', details: 'Drive to Jodhpur, the Blue City. Check into your heritage hotel and explore the old city.' },
      { day: 4, title: 'Jodhpur Exploration', details: 'Visit Mehrangarh Fort, Jaswant Thada, and enjoy sunset views from the fort.' },
      { day: 5, title: 'Desert Experience', details: 'Day trip to nearby desert areas with camel safari and cultural performances.' },
      { day: 6, title: 'Departure', details: 'After breakfast, drive to Jodhpur airport for your departure.' },
    ],
    inclusions: ['Heritage hotel stays', 'All meals', 'Desert safari with camel ride', 'All transfers and sightseeing'],
    exclusions: ['Flights', 'Personal expenses', 'Shopping'],
  },
  {
    id: 4,
    title: 'Goa Beach Paradise',
    destination: 'North & South Goa',
    duration: 5,
    price: 25000,
    rating: 4.6,
    imageUrl: goaImg,
    description: 'Relax on pristine beaches, enjoy water sports, and experience the vibrant nightlife of Goa.',
    highlights: ['Beach hopping', 'Water sports', 'Portuguese architecture', 'Sunset cruises'],
    itinerary: [
      { day: 1, title: 'Arrival in Goa', details: 'Arrive at Goa airport, check into beach resort. Evening at leisure on the beach.' },
      { day: 2, title: 'North Goa Tour', details: 'Visit Calangute, Baga, and Anjuna beaches. Explore Fort Aguada and enjoy water sports.' },
      { day: 3, title: 'South Goa Exploration', details: 'Visit Colva, Benaulim beaches and explore Old Goa churches and Portuguese architecture.' },
      { day: 4, title: 'Spice Plantation & River Cruise', details: 'Visit spice plantation and enjoy sunset river cruise with traditional Goan dinner.' },
      { day: 5, title: 'Departure', details: 'Last-minute shopping at local markets before departure to airport.' },
    ],
    inclusions: ['Beach resort accommodation', 'Daily breakfast', 'Airport transfers', 'Sightseeing tours'],
    exclusions: ['Flights', 'Water sports charges', 'Personal expenses'],
  },
  {
    id: 5,
    title: 'Himalayan Adventure',
    destination: 'Himachal Pradesh',
    duration: 8,
    price: 40000,
    rating: 4.8,
    imageUrl: himachalImg,
    description: 'Experience the majestic Himalayas with adventure activities, scenic valleys, and mountain culture.',
    highlights: ['Paragliding', 'Trekking trails', 'Snow-capped peaks', 'Local mountain culture'],
    itinerary: [
      { day: 1, title: 'Arrival in Shimla', details: 'Arrive in Shimla, check into hotel. Evening walk on Mall Road.' },
      { day: 2, title: 'Shimla Sightseeing', details: 'Visit Kufri, Jakhu Temple, and enjoy toy train ride.' },
      { day: 3, title: 'Shimla to Manali', details: 'Scenic drive to Manali through beautiful valleys and rivers.' },
      { day: 4, title: 'Manali Local Sightseeing', details: 'Visit Hadimba Temple, Vashisht Hot Springs, and Old Manali.' },
      { day: 5, title: 'Solang Valley Adventure', details: 'Visit Solang Valley for paragliding, zorbing, and cable car rides.' },
      { day: 6, title: 'Rohtang Pass Excursion', details: 'Day trip to Rohtang Pass (subject to weather conditions) and snow activities.' },
      { day: 7, title: 'Kasol & Tosh Valley', details: 'Explore the beautiful Parvati Valley, visit Kasol and Tosh.' },
      { day: 8, title: 'Departure', details: 'Drive back to Chandigarh/Delhi for departure.' },
    ],
    inclusions: ['Mountain resort stays', 'All transfers', 'Adventure activities', 'Daily breakfast'],
    exclusions: ['Flights', 'Rohtang Pass permits', 'Personal gear'],
  },
];

type Package = typeof tourPackages[0];

const TourPackagesPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const PackageCard: React.FC<{ pkg: Package }> = ({ pkg }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
      onClick={() => setSelectedPackage(pkg)}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
        <div className="relative overflow-hidden">
          <img 
            src={pkg.imageUrl} 
            alt={pkg.title} 
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/90 text-white border-0 backdrop-blur-sm">
              <Clock className="w-3 h-3 mr-1" />
              {pkg.duration} Days
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{pkg.rating}</span>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {pkg.title}
              </h3>
              <div className="flex items-center text-muted-foreground mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{pkg.destination}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {pkg.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1">
              {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>

            <Separator />

            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold text-primary">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </p>
                <span className="text-sm text-muted-foreground">per person</span>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
  
  const PackageDetailView: React.FC<{ pkg: Package }> = ({ pkg }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <Button 
        variant="ghost"
        onClick={() => setSelectedPackage(null)} 
        className="mb-8 hover:bg-muted"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all packages
      </Button>

      <div className="space-y-8">
        {/* Hero Section */}
        <Card className="overflow-hidden border-0 shadow-2xl">
          <div className="relative h-80">
            <img 
              src={pkg.imageUrl} 
              alt={pkg.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{pkg.title}</h1>
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-1" />
                  {pkg.destination}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  {pkg.duration} Days
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-1 fill-yellow-400 text-yellow-400" />
                  {pkg.rating}
                </div>
              </div>
            </div>
            <div className="absolute top-8 right-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="text-3xl font-bold text-primary">₹{pkg.price.toLocaleString('en-IN')}</p>
                <p className="text-sm text-muted-foreground">per person</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Package Overview */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  About This Package
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Package Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-3">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Day-by-Day Itinerary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-6">
                  {pkg.itinerary.map(day => (
                    <div key={day.day} className="flex items-start space-x-4">
                      <div className="bg-primary text-white font-bold rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{day.title}</h4>
                        <p className="text-muted-foreground">{day.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="p-6 sticky top-4">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-3xl font-bold text-primary">₹{pkg.price.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Book This Package
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Heart className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Navigation className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>

            {/* Package Details */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle>Package Details</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{pkg.duration} Days / {pkg.duration - 1} Nights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Group Size</span>
                  <span className="font-medium">2-15 People</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{pkg.rating}/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-green-700 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Inclusions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-red-700 flex items-center gap-2">
                <X className="w-5 h-5" />
                Exclusions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2">
                {pkg.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-12">
        {selectedPackage ? (
          <PackageDetailView pkg={selectedPackage} />
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              >
                Explore Our Premium Tour Packages
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Curated experiences by local experts to help you discover the incredible beauty and culture of India.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center items-center space-x-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Premium Stays</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </div>

            {/* Package Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tourPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <PackageCard pkg={pkg} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TourPackagesPage;