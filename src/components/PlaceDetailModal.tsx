import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Clock, MapPin, Star, Heart, Navigation, Camera, ArrowLeft, Calendar, Phone, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
// Import new images
import keralbackwatersImg from '@/assets/kerala-backwaters.jpg';
import tajMahalImg from '@/assets/taj-mahal-sunrise.jpg';
import jaipurImg from '@/assets/jaipur-hawa-mahal.jpg';
import goaImg from '@/assets/goa-beach.jpg';
import himachalImg from '@/assets/himachal-mountains.jpg';
// Extending the Place type to include additional properties needed by the modal
interface ExtendedPlace {
  name: string;
  image: string;
  type: string;
  description: string;
  duration?: string;
  rating?: number;
  timing?: string;
  mapLink?: string;
  gallery?: string[];
}

interface PlaceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  place: ExtendedPlace;
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
          {/* Photo Gallery */}
          <div className="relative">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-black/50 text-white border-0">
                <Camera className="w-3 h-3 mr-1" />
                Photo Gallery
              </Badge>
            </div>
          </div>

          {/* Additional Gallery Images */}
          <div className="grid grid-cols-3 gap-2">
            {[place.image, keralbackwatersImg, tajMahalImg, jaipurImg, goaImg, himachalImg].map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`${place.name} ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mt-2">
                {place.rating && (
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(place.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {place.rating} ({Math.floor(Math.random() * 1000) + 100} reviews)
                    </span>
                  </div>
                )}
                <Badge variant="secondary">{place.type}</Badge>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{place.description}</p>
            </div>

            {/* Timing and Duration */}
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Duration
                </h3>
                <p className="text-muted-foreground">{place.duration || "2-3 hours"}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Best Time
                </h3>
                <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <Separator />

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2" 
                onClick={() => {
                  // Create a search query for the place name
                  const searchQuery = encodeURIComponent(place.name);
                  window.open(`https://www.openstreetmap.org/search?query=${searchQuery}`, '_blank');
                }}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.open(`tel:+91-141-2345678`, '_blank')}
              >
                <Phone className="w-4 h-4" />
                Contact
              </Button>
            </div>

            {/* Additional Information */}
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                Quick Info
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Entry Fee:</span>
                  <p className="text-muted-foreground">₹200 (Indians), ₹500 (Foreigners)</p>
                </div>
                <div>
                  <span className="font-medium">Parking:</span>
                  <p className="text-muted-foreground">Available (₹20)</p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex gap-3">
              <Button onClick={handleBookNow} className="flex-1 bg-primary hover:bg-primary/90">
                Book Experience Now
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-red-50 hover:text-red-600">
                <Heart className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => {
                  // Create a search query for the place name  
                  const searchQuery = encodeURIComponent(place.name);
                  window.open(`https://www.openstreetmap.org/search?query=${searchQuery}`, '_blank');
                }}
                className="hover:bg-blue-50 hover:text-blue-600"
              >
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        </DialogContent>
      </Dialog>
    );
  };

  export default PlaceDetailModal;