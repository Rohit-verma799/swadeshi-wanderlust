import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Clock, Hotel, Car, Filter, Search, Star, BookOpen } from 'lucide-react';
import { sampleItineraries, Itinerary, Hotel as HotelType, Place } from '@/data/itineraries';
import BookingModal from '@/components/BookingModal';

const ItineraryPage = () => {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: ''
  });
  const [generatedItinerary, setGeneratedItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    placeType: 'all',
    hotelType: 'all',
    searchTerm: ''
  });
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    item: HotelType | Place | null;
    type: 'hotel' | 'place';
  }>({
    isOpen: false,
    item: null,
    type: 'hotel'
  });

  const destinations = Object.keys(sampleItineraries);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.destination || !formData.days || !formData.budget) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const destinationItineraries = sampleItineraries[formData.destination] || [];
      const matchingItinerary = destinationItineraries.find(
        itinerary => itinerary.budget === formData.budget
      ) || destinationItineraries[0];
      
      if (matchingItinerary) {
        const selectedDays = parseInt(formData.days);
        const adjustedItinerary = {
          ...matchingItinerary,
          days: selectedDays,
          itinerary: matchingItinerary.itinerary.slice(0, selectedDays)
        };
        setGeneratedItinerary(adjustedItinerary);
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const openBookingModal = (item: HotelType | Place, type: 'hotel' | 'place') => {
    setBookingModal({ isOpen: true, item, type });
  };

  const filteredItinerary = generatedItinerary ? {
    ...generatedItinerary,
    itinerary: generatedItinerary.itinerary.map(day => ({
      ...day,
      places: day.places.filter(place => {
        const matchesType = filters.placeType === 'all' || place.type === filters.placeType;
        const matchesSearch = filters.searchTerm === '' || 
          place.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
        return matchesType && matchesSearch;
      }),
      hotels: day.hotels.filter(hotel => {
        const matchesType = filters.hotelType === 'all' || hotel.type === filters.hotelType;
        const matchesSearch = filters.searchTerm === '' || 
          hotel.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
        return matchesType && matchesSearch;
      })
    }))
  } : null;

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Itinerary Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let our AI create the perfect travel plan tailored to your preferences and budget
          </p>
        </div>

        {/* Form */}
        <Card className="max-w-2xl mx-auto mb-12 shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Plan Your Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Select onValueChange={(value) => handleInputChange('destination', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((destination) => (
                      <SelectItem key={destination} value={destination}>
                        {destination}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="days">Number of Days</Label>
                <Input
                  id="days"
                  type="number"
                  min="1"
                  max="30"
                  placeholder="Enter number of days"
                  value={formData.days}
                  onChange={(e) => handleInputChange('days', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low (₹5,000 - ₹15,000)</SelectItem>
                    <SelectItem value="Medium">Medium (₹15,000 - ₹35,000)</SelectItem>
                    <SelectItem value="High">High (₹35,000+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full text-lg py-6 shadow-soft hover:shadow-card" 
                disabled={isLoading}
              >
                {isLoading ? 'Generating Your Perfect Trip...' : 'Generate Itinerary'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* AI-Powered Filters */}
        {generatedItinerary && (
          <Card className="max-w-4xl mx-auto mb-8 shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>AI Smart Filters</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search places, hotels..."
                    value={filters.searchTerm}
                    onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filters.placeType} onValueChange={(value) => handleFilterChange('placeType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter Places" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Place Types</SelectItem>
                    <SelectItem value="cultural">Cultural Sites</SelectItem>
                    <SelectItem value="historical">Historical Places</SelectItem>
                    <SelectItem value="natural">Natural Attractions</SelectItem>
                    <SelectItem value="religious">Religious Sites</SelectItem>
                    <SelectItem value="adventure">Adventure Spots</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filters.hotelType} onValueChange={(value) => handleFilterChange('hotelType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter Hotels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Hotel Types</SelectItem>
                    <SelectItem value="luxury">Luxury Hotels</SelectItem>
                    <SelectItem value="heritage">Heritage Hotels</SelectItem>
                    <SelectItem value="boutique">Boutique Hotels</SelectItem>
                    <SelectItem value="budget">Budget Hotels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {(filters.searchTerm || filters.placeType !== 'all' || filters.hotelType !== 'all') && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {filters.searchTerm && (
                    <Badge variant="outline" className="bg-primary/5">
                      Search: "{filters.searchTerm}"
                      <button onClick={() => handleFilterChange('searchTerm', '')} className="ml-2">×</button>
                    </Badge>
                  )}
                  {filters.placeType !== 'all' && (
                    <Badge variant="outline" className="bg-accent/5">
                      Places: {filters.placeType}
                      <button onClick={() => handleFilterChange('placeType', 'all')} className="ml-2">×</button>
                    </Badge>
                  )}
                  {filters.hotelType !== 'all' && (
                    <Badge variant="outline" className="bg-secondary/5">
                      Hotels: {filters.hotelType}
                      <button onClick={() => handleFilterChange('hotelType', 'all')} className="ml-2">×</button>
                    </Badge>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setFilters({ placeType: 'all', hotelType: 'all', searchTerm: '' })}
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Generated Itinerary */}
        {filteredItinerary && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Your Perfect {filteredItinerary.destination} Journey</h2>
              <p className="text-lg text-muted-foreground">
                {filteredItinerary.days} days • {filteredItinerary.budget} Budget • AI Personalized
              </p>
            </div>

            <div className="grid gap-6">
              {filteredItinerary.itinerary.map((day, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">Day {day.day}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{day.title}</CardTitle>
                        <p className="text-muted-foreground">{day.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Places to Visit */}
                    <div>
                      <h4 className="font-semibold flex items-center mb-3">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        Places to Visit ({day.places.length})
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {day.places.map((place, idx) => (
                          <Card key={idx} className="p-3 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => openBookingModal(place, 'place')}>
                            <div className="flex space-x-3">
                              <img src={place.image} alt={place.name} className="w-12 h-12 object-cover rounded" />
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{place.name}</p>
                                <Badge variant="outline" className="text-xs mt-1">{place.type}</Badge>
                              </div>
                              <BookOpen className="w-4 h-4 text-primary mt-1" />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Hotels */}
                    <div>
                      <h4 className="font-semibold flex items-center mb-3">
                        <Hotel className="w-5 h-5 mr-2 text-accent" />
                        Recommended Hotels ({day.hotels.length})
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {day.hotels.map((hotel, idx) => (
                          <Card key={idx} className="p-3 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => openBookingModal(hotel, 'hotel')}>
                            <div className="flex space-x-3">
                              <img src={hotel.image} alt={hotel.name} className="w-12 h-12 object-cover rounded" />
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{hotel.name}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <div className="flex items-center">
                                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                    <span className="text-xs ml-1">{hotel.rating}</span>
                                  </div>
                                  <Badge variant="outline" className="text-xs">{hotel.type}</Badge>
                                </div>
                                <p className="text-xs text-primary font-medium mt-1">{hotel.price}</p>
                              </div>
                              <BookOpen className="w-4 h-4 text-accent mt-1" />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div>
                      <h4 className="font-semibold flex items-center mb-2">
                        <Clock className="w-5 h-5 mr-2 text-secondary" />
                        Activities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity, idx) => (
                          <Badge key={idx} variant="outline" className="bg-secondary/5">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">Ready to make this trip a reality?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-soft hover:shadow-card">
                  <Car className="mr-2 w-5 h-5" />
                  Book Transportation
                </Button>
                <Button size="lg" variant="outline" className="shadow-soft hover:shadow-card">
                  <Hotel className="mr-2 w-5 h-5" />
                  Reserve Hotels
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModal.isOpen}
          onClose={() => setBookingModal({ isOpen: false, item: null, type: 'hotel' })}
          item={bookingModal.item}
          type={bookingModal.type}
          destination={generatedItinerary?.destination || ''}
        />
      </div>
    </div>
  );
};

export default ItineraryPage;