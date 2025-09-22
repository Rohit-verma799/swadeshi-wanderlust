import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';
import { Business } from '@/data/businesses';
import { Link } from 'react-router-dom';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hotel':
        return 'bg-primary/10 text-primary';
      case 'homestay':
        return 'bg-accent/10 text-accent-foreground';
      case 'restaurant':
        return 'bg-secondary/10 text-secondary';
      case 'artisan':
        return 'bg-gradient-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg h-48">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className={getCategoryColor(business.category)}>
              {business.category.charAt(0).toUpperCase() + business.category.slice(1)}
            </Badge>
          </div>
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{business.rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {business.name}
        </h3>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {business.location}
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {business.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {business.amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {business.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{business.amenities.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-lg font-bold text-primary">
          {business.price}
        </div>
        <Link to="/booking" state={{ business }}>
          <Button className="shadow-soft hover:shadow-card transition-shadow">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;