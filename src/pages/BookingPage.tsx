import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft, Calendar, Users, Star, MapPin } from 'lucide-react';
import { Business } from '@/data/businesses';

const BookingPage = () => {
  const location = useLocation();
  const business = location.state?.business as Business;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    specialRequests: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  // If no business data, show generic booking form
  if (!business) {
    return (
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Book Your Experience</h1>
            <p className="text-xl text-muted-foreground">
              Ready to embark on your Indian adventure?
            </p>
          </div>
          
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">General Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Select a specific business from our{' '}
                <Link to="/businesses" className="text-primary hover:underline">
                  businesses page
                </Link>{' '}
                to make a booking.
              </p>
              <div className="text-center">
                <Link to="/businesses">
                  <Button size="lg" className="shadow-soft hover:shadow-card">
                    Browse Businesses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-muted/30 py-8 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 shadow-floating bg-gradient-card">
          <CardContent className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">
              Your booking at <strong>{business.name}</strong> has been confirmed. 
              We'll send you a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <Link to="/businesses">
                <Button variant="outline" className="w-full">
                  Browse More Businesses
                </Button>
              </Link>
              <Link to="/">
                <Button className="w-full shadow-soft">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/businesses">
            <Button variant="ghost" className="hover:bg-muted">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Businesses
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Business Details */}
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{business.name}</CardTitle>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {business.location}
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                    <span className="font-medium">{business.rating}</span>
                    <Badge className="ml-2 capitalize">
                      {business.category}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {business.price}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <p className="text-muted-foreground mb-4">
                {business.description}
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Amenities & Features</h4>
                <div className="flex flex-wrap gap-2">
                  {business.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl">Complete Your Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>

                {(business.category === 'hotel' || business.category === 'homestay') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn">Check-in Date</Label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="checkOut">Check-out Date</Label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any special requirements or requests..."
                    rows={3}
                  />
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Total Price:</span>
                    <span className="text-2xl font-bold text-primary">
                      {business.price}
                    </span>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full text-lg py-6 shadow-soft hover:shadow-card"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Confirm Booking'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;