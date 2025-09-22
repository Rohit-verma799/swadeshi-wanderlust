import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Clock, Hotel, Car } from 'lucide-react';
import { sampleItineraries, Itinerary } from '@/data/itineraries';

const ItineraryPage = () => {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: ''
  });
  const [generatedItinerary, setGeneratedItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
        setGeneratedItinerary({
          ...matchingItinerary,
          days: parseInt(formData.days)
        });
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

        {/* Generated Itinerary */}
        {generatedItinerary && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Your Perfect {generatedItinerary.destination} Journey</h2>
              <p className="text-lg text-muted-foreground">
                {generatedItinerary.days} days • {generatedItinerary.budget} Budget
              </p>
            </div>

            <div className="grid gap-6">
              {generatedItinerary.itinerary.map((day, index) => (
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
                      <h4 className="font-semibold flex items-center mb-2">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        Places to Visit
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {day.places.map((place, idx) => (
                          <Badge key={idx} variant="outline" className="bg-primary/5">
                            {place}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Hotels */}
                    <div>
                      <h4 className="font-semibold flex items-center mb-2">
                        <Hotel className="w-5 h-5 mr-2 text-accent" />
                        Recommended Hotels
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {day.hotels.map((hotel, idx) => (
                          <Badge key={idx} variant="outline" className="bg-accent/5">
                            {hotel}
                          </Badge>
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
      </div>
    </div>
  );
};

export default ItineraryPage;