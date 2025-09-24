import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { moredetail } from "@/data/moredetail";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PlaceDetailModal from "@/components/PlaceDetailModal";
import BookingModal from "@/components/BookingModal";
import { 
  Clock, 
  MapPin, 
  Utensils, 
  BedDouble, 
  ShoppingBag, 
  Wallet, 
  Info,
  ArrowLeft,
  ArrowUp,
  Heart,
  Star
} from "lucide-react";

interface DetailItem {
  name: string;
  description?: string;
  specialty?: string;
  category?: string;
  priceRange?: string;
  approxCost?: string;
  images?: string[];
  rating?: number;
  mapLink?: string;
}

const DetailedItinerary = () => {
  const { destination, budget, days } = useParams<{
    destination: string;
    budget: string;
    days: string;
  }>();
  
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<DetailItem | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Get itinerary data
  const destinationKey = destination?.toLowerCase() as keyof typeof moredetail;
  const budgetKey = budget?.toLowerCase() as "low" | "mid" | "luxury";
  const itineraryData = moredetail[destinationKey]?.[budgetKey];

  if (!itineraryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Itinerary Not Found</h1>
          <Button onClick={() => navigate("/itinerary")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Itineraries
          </Button>
        </div>
      </div>
    );
  }

  const selectedDays = parseInt(days || "7");
  const filteredItinerary = itineraryData.itinerary.slice(0, selectedDays);

  const getCategoryColor = (category: string) => {
    const colors = {
      culture: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      food: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      adventure: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      shopping: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      relaxation: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    };
    return colors[category.toLowerCase() as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const handleItemClick = (item: any, type: "place" | "food" | "hotel") => {
    const detailItem: DetailItem = {
      name: type === "food" ? item.restaurant : item.name || item.placeName,
      description: item.description,
      specialty: item.specialty,
      category: item.category,
      priceRange: item.priceRange,
      approxCost: item.approxCost || item.costEstimate,
      images: ["/taj.jpg", "/taj2.jpg"], // Demo images
      rating: 4.2 + Math.random() * 0.8,
      mapLink: item.mapLink
    };
    setSelectedItem(detailItem);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for scroll to show back-to-top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowBackToTop(window.scrollY > 500);
    });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navbar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/itinerary")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="text-center">
              <h1 className="text-xl font-bold">{itineraryData.destination}</h1>
              <p className="text-sm text-muted-foreground">{selectedDays} Days</p>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              {itineraryData.budget} Budget
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {filteredItinerary.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">
                      Day {day.day} - {day.title}
                    </CardTitle>
                    <Badge variant="outline" className="px-3 py-1">
                      {day.theme}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Activities Timeline */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Activities Timeline
                    </h3>
                    <div className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                          onClick={() => handleItemClick(activity, "place")}
                        >
                          <div className="text-sm font-medium text-primary min-w-[80px]">
                            {activity.time}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{activity.placeName}</div>
                            <div className="text-sm text-muted-foreground">{activity.description}</div>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge className={getCategoryColor(activity.category)}>
                                {activity.category}
                              </Badge>
                              <span className="text-sm font-medium">{activity.costEstimate}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(activity.mapLink, '_blank');
                                }}
                              >
                                <MapPin className="w-3 h-3 mr-1" />
                                Map
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Food Recommendations */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-primary" />
                      Food Recommendations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {day.food.map((food, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                          onClick={() => handleItemClick(food, "food")}
                        >
                          <div className="font-medium">{food.restaurant}</div>
                          <div className="text-sm text-muted-foreground">{food.specialty}</div>
                          <div className="text-sm font-medium text-primary mt-1">{food.approxCost}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Stay Recommendation */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <BedDouble className="w-5 h-5 text-primary" />
                      Stay Recommendation
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                      onClick={() => handleItemClick(day.stay, "hotel")}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium">{day.stay.name}</div>
                          <div className="text-sm text-muted-foreground">{day.stay.category}</div>
                          <div className="text-sm font-medium text-primary mt-1">{day.stay.priceRange}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">4.2</span>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(day.stay.mapLink, '_blank');
                            }}
                          >
                            <MapPin className="w-3 h-3 mr-1" />
                            Map
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <Separator />

                  {/* Local Businesses */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-primary" />
                      Local Businesses & Artisans
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {day.localBusiness.map((business, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                          onClick={() => handleItemClick(business, "place")}
                        >
                          <div className="font-medium">{business.name}</div>
                          <div className="text-sm text-muted-foreground">{business.description}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Budget Summary */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-primary" />
                      Budget Summary
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {day.budgetSummary.estimatedCost}
                      </span>
                      <Badge variant="secondary">
                        {day.budgetSummary.category} Budget
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  {/* Tips */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      Tips
                    </h3>
                    <ul className="space-y-2">
                      {day.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="flex-1"
                      onClick={() => setShowBooking(true)}
                    >
                      Book Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Modals */}
      {selectedItem && (
        <PlaceDetailModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          place={{
            name: selectedItem.name,
            description: selectedItem.description || "",
            image: selectedItem.images?.[0] || "/taj.jpg",
            rating: selectedItem.rating || 4.2,
            type: selectedItem.category || "Attraction"
          }}
          onBook={() => {
            setSelectedItem(null);
            setShowBooking(true);
          }}
        />
      )}

      {showBooking && (
        <BookingModal
          isOpen={showBooking}
          onClose={() => setShowBooking(false)}
          destination={itineraryData.destination}
          days={selectedDays}
          budget={itineraryData.budget}
        />
      )}
    </div>
  );
};

export default DetailedItinerary;