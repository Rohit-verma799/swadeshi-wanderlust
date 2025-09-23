import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Calendar, Users, MapPin, Star, CheckCircle } from 'lucide-react';
import { Hotel, Place } from '@/data/itineraries';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Hotel | Place | null;
  type: 'hotel' | 'place';
  destination: string;
}

const BookingModal = ({ isOpen, onClose, item, type, destination }: BookingModalProps) => {
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    checkIn: '',
    checkOut: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 'details') setStep('payment');
    else if (step === 'payment') {
      // Simulate payment processing
      setTimeout(() => setStep('success'), 1500);
    }
  };

  const resetAndClose = () => {
    setStep('details');
    setBookingData({
      name: '', email: '', phone: '', guests: '2', checkIn: '', checkOut: '',
      cardNumber: '', expiryDate: '', cvv: '', cardName: ''
    });
    onClose();
  };

  if (!item) return null;

  const isHotel = type === 'hotel';
  const hotel = item as Hotel;
  const place = item as Place;

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            {isHotel ? <CreditCard className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
            <span>Book {isHotel ? 'Hotel' : 'Experience'}</span>
          </DialogTitle>
        </DialogHeader>

        {step === 'details' && (
          <div className="space-y-6">
            {/* Item Details */}
            <Card>
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">{destination}</p>
                    {isHotel && (
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm ml-1">{hotel.rating}</span>
                        </div>
                        <Badge variant="outline">{hotel.type}</Badge>
                        <span className="text-lg font-bold text-primary">{hotel.price}</span>
                      </div>
                    )}
                    {!isHotel && (
                      <Badge variant="outline" className="mt-1">{place.type}</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Select value={bookingData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num} Guest{num > 1 ? 's' : ''}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {isHotel && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="checkIn">Check-in Date</Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkOut">Check-out Date</Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>

            <Button 
              onClick={handleNext} 
              className="w-full"
              disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
            >
              Continue to Payment
            </Button>
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Payment Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    value={bookingData.cardName}
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                    placeholder="Enter cardholder name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={bookingData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={bookingData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={bookingData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{isHotel ? hotel.price : '₹2,500/person'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests: {bookingData.guests}</span>
                    <span>Service Fee: ₹500</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{isHotel ? '8,500' : '5,500'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setStep('details')} className="flex-1">
                Back
              </Button>
              <Button 
                onClick={handleNext} 
                className="flex-1"
                disabled={!bookingData.cardName || !bookingData.cardNumber || !bookingData.expiryDate || !bookingData.cvv}
              >
                Pay Now
              </Button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-green-600">Booking Confirmed!</h3>
            <p className="text-muted-foreground">
              Your booking for <strong>{item.name}</strong> has been confirmed.
            </p>
            <p className="text-sm text-muted-foreground">
              Confirmation details have been sent to {bookingData.email}
            </p>
            <Button onClick={resetAndClose} className="mt-6">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;