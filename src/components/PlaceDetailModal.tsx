import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, Star, Heart, Phone, Camera } from 'lucide-react';
import { Place } from '@/data/itineraries';

interface PlaceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  place: Place;
  onBook: () => void;
}

const PlaceDetailModal = ({ isOpen, onClose, place, onBook }: PlaceDetailModalProps) => {
  if (!place) return null;

  const handleBookNow = () => {
    onBook();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{place.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(place.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {place.rating} ({Math.floor(Math.random() * 1000) + 100} reviews)
                  </span>
                </div>
                <Badge variant="secondary">{place.type}</Badge>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{place.description}</p>
            </div>

            {place.duration && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Duration
                  </h3>
                  <p className="text-muted-foreground">{place.duration}</p>
                </div>
              </>
            )}

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Location & Directions</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-medium">Contact Information</span>
              </div>
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-primary" />
                <span className="font-medium">Photo Gallery</span>
              </div>
            </div>

            <Separator />

            <div className="flex gap-3">
              <Button onClick={handleBookNow} className="flex-1">
                Book Now
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        </DialogContent>
      </Dialog>
    );
  };

  export default PlaceDetailModal;