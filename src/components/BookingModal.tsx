import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Users, CreditCard, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
  days?: number;
  budget?: string;
}

const BookingModal = ({ isOpen, onClose, destination, days, budget }: BookingModalProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookingStep, setBookingStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    specialRequests: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (bookingStep === 1) {
      if (!bookingData.name || !bookingData.email || !checkIn) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }
      setBookingStep(2);
    } else if (bookingStep === 2) {
      setBookingStep(3);
    }
  };

  const handleBookingSubmit = () => {
    toast({
      title: "Booking Confirmed! 🎉",
      description: "Your trip has been booked successfully. Check your email for details.",
    });
    
    setTimeout(() => {
      onClose();
      navigate("/booking");
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      {/* Trip Summary */}
      <div className="bg-muted/50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Trip Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Destination:</span>
            <span className="font-medium">{destination}</span>
          </div>
          {days && (
            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="font-medium">{days} days</span>
            </div>
          )}
          {budget && (
            <div className="flex justify-between">
              <span>Budget Category:</span>
              <span className="font-medium">{budget}</span>
            </div>
          )}
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="font-semibold">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={bookingData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={bookingData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={bookingData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          
          <div>
            <Label htmlFor="travelers">Number of Travelers</Label>
            <Select value={bookingData.travelers} onValueChange={(value) => handleInputChange("travelers", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1,2,3,4,5,6,7,8].map(num => (
                  <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Person' : 'People'}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Travel Dates */}
      <div className="space-y-4">
        <h3 className="font-semibold">Travel Dates</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Check-in Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label>Check-out Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Booking Summary</h3>
        <p className="text-muted-foreground">Review your trip details</p>
      </div>

      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
        <div className="flex justify-between">
          <span>Trip to {destination}</span>
          <span className="font-medium">₹{days ? days * 5000 : 15000}</span>
        </div>
        <div className="flex justify-between">
          <span>Accommodation ({days || 3} nights)</span>
          <span className="font-medium">₹{days ? days * 2500 : 7500}</span>
        </div>
        <div className="flex justify-between">
          <span>Activities & Tours</span>
          <span className="font-medium">₹{days ? days * 1500 : 4500}</span>
        </div>
        <div className="flex justify-between">
          <span>Meals</span>
          <span className="font-medium">₹{days ? days * 1000 : 3000}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{days ? days * 10000 : 30000}</span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Special Offer Applied!</span>
        </div>
        <p className="text-sm text-green-600 dark:text-green-300 mt-1">
          Early bird discount: Save 15% on this booking
        </p>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Payment Successful! 🎉</h3>
        <p className="text-muted-foreground">Your booking has been confirmed</p>
      </div>

      <div className="bg-muted/50 p-6 rounded-lg">
        <h4 className="font-semibold mb-3">Booking Details</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Booking ID:</span>
            <span className="font-medium">TR{Math.floor(Math.random() * 10000)}</span>
          </div>
          <div className="flex justify-between">
            <span>Traveler:</span>
            <span className="font-medium">{bookingData.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Email:</span>
            <span className="font-medium">{bookingData.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Destination:</span>
            <span className="font-medium">{destination}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        A confirmation email has been sent to {bookingData.email}
      </p>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {bookingStep === 1 && "Complete Your Booking"}
            {bookingStep === 2 && "Payment & Confirmation"}
            {bookingStep === 3 && "Booking Confirmed"}
          </DialogTitle>
          <DialogDescription>
            {bookingStep === 1 && `Book your trip to ${destination}`}
            {bookingStep === 2 && "Review and confirm your booking"}
            {bookingStep === 3 && "Your adventure awaits!"}
          </DialogDescription>
        </DialogHeader>

        {bookingStep === 1 && renderStep1()}
        {bookingStep === 2 && renderStep2()}
        {bookingStep === 3 && renderStep3()}

        <div className="flex gap-3 pt-6">
          {bookingStep > 1 && bookingStep < 3 && (
            <Button variant="outline" onClick={() => setBookingStep(bookingStep - 1)}>
              Back
            </Button>
          )}
          
          {bookingStep < 3 && (
            <Button 
              className="flex-1" 
              onClick={bookingStep === 2 ? handleBookingSubmit : handleContinue}
            >
              {bookingStep === 1 && "Continue"}
              {bookingStep === 2 && (
                <>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay ₹{days ? days * 10000 : 30000}
                </>
              )}
            </Button>
          )}
          
          {bookingStep === 3 && (
            <Button className="flex-1" onClick={() => navigate("/booking")}>
              View My Bookings
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { BookingModal };
export default BookingModal;