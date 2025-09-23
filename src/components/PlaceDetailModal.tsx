import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, Calendar, Users, Info } from 'lucide-react';
import { Hotel, Place } from '@/data/itineraries';
import BookingModal from './BookingModal';

interface PlaceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Hotel | Place | null;
  type: 'hotel' | 'place';
  destination: string;
}

const PlaceDetailModal = ({ isOpen, onClose, item, type, destination }: PlaceDetailModalProps) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!item) return null;

  const isHotel = type === 'hotel';
  const hotel = item as Hotel;
  const place = item as Place;

  const handleBookNow = () => {
    setBookingModalOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-2xl">
              {isHotel ? <Star className="w-6 h-6 text-yellow-500" /> : <MapPin className="w-6 h-6 text-primary" />}
              <span>{item.name}</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Hero Image and Basic Info */}
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg shadow-soft"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-gradient-hero text-white border-0">
                  {isHotel ? hotel.type : place.type}
                </Badge>
              </div>
            </div>

            {/* Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Description and Details */}
              <div className="space-y-4">
                <Card className="bg-gradient-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Info className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-lg">About</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {isHotel ? hotel.description : place.description}
                    </p>
                    
                    {!isHotel && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>Duration: {place.duration}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Hotel Amenities or Place Info */}
                {isHotel && (
                  <Card className="bg-gradient-card">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, index) => (
                          <Badge key={index} variant="outline" className="bg-primary/5">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column - Booking Info */}
              <div className="space-y-4">
                <Card className="bg-gradient-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">
                        {isHotel ? 'Hotel Details' : 'Visit Information'}
                      </h3>
                      {isHotel && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{hotel.rating}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{destination}</span>
                      </div>

                      {isHotel && (
                        <div className="text-2xl font-bold text-primary">
                          {hotel.price}
                        </div>
                      )}

                      {!isHotel && (
                        <div className="text-lg font-semibold text-primary">
                          Entry: ₹150/person
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="bg-gradient-card">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-3">Quick Info</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>Open Daily</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>All Ages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{isHotel ? '24/7 Service' : place.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>Easy Access</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Book Now Button */}
                <Button 
                  onClick={handleBookNow}
                  className="w-full text-lg py-6 shadow-soft hover:shadow-card hover-scale"
                  size="lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  {isHotel ? 'Book Hotel' : 'Book Experience'}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        item={item}
        type={type}
        destination={destination}
      />
    </>
  );
};

export default PlaceDetailModal;