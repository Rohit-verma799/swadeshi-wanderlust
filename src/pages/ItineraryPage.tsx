"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import {
  MapPin,
  Calendar,
  Clock,
  Hotel,
  Star,
  Info,
  Sparkles,
  TrendingUp,
  Wallet,
  Crown,
  Camera,
  Coffee,
  ShoppingBag,
  Settings,
  Eye,
} from "lucide-react"
import { sampleItineraries, type Itinerary, type Hotel as HotelType, type Place } from "@/data/itineraries"
import PlaceDetailModal from "@/components/PlaceDetailModal"

const ItineraryPage = () => {
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: 20000,
  })
  const [generatedItinerary, setGeneratedItinerary] = useState<Itinerary | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [maxDaysAllowed, setMaxDaysAllowed] = useState(15)
  const [showBudgetAnimation, setShowBudgetAnimation] = useState(false)
  const [detailModal, setDetailModal] = useState<{
    isOpen: boolean
    item: HotelType | Place | null
    type: "hotel" | "place"
  }>({
    isOpen: false,
    item: null,
    type: "hotel",
  })

  const destinations = Object.keys(sampleItineraries)

  // Calculate max days based on budget
  useEffect(() => {
    const calculateMaxDays = (budget: number) => {
      if (budget <= 10000) return 3
      if (budget <= 20000) return 7
      if (budget <= 30000) return 10
      if (budget <= 40000) return 12
      return 15
    }

    const newMaxDays = calculateMaxDays(formData.budget)
    setMaxDaysAllowed(newMaxDays)

    if (formData.days && Number.parseInt(formData.days) > newMaxDays) {
      setFormData((prev) => ({ ...prev, days: newMaxDays.toString() }))
    }

    setShowBudgetAnimation(true)
    setTimeout(() => setShowBudgetAnimation(false), 1000)
  }, [formData.budget])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.destination || !formData.days || !formData.budget) return

    setIsLoading(true)

    setTimeout(() => {
      const destinationItineraries = sampleItineraries[formData.destination] || []
      const matchingItinerary =
        destinationItineraries.find((itinerary) => Math.abs(itinerary.budget - formData.budget) <= 10000) ||
        destinationItineraries[0]

      if (matchingItinerary) {
        const selectedDays = Number.parseInt(formData.days)
        const adjustedItinerary = {
          ...matchingItinerary,
          days: selectedDays,
          itinerary: matchingItinerary.itinerary.slice(0, selectedDays),
        }
        setGeneratedItinerary(adjustedItinerary)
      }
      setIsLoading(false)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "budget" ? Number.parseInt(value) : value,
    }))
  }

  const openDetailModal = (item: HotelType | Place, type: "hotel" | "place") => {
    setDetailModal({ isOpen: true, item, type })
  }

  const handleViewFullItinerary = () => {
    console.log("View full itinerary and customize")
  }

  const getBudgetTier = (budget: number) => {
    if (budget <= 15000) return { Icon: Wallet, text: "Budget Travel", color: "text-blue-600" }
    if (budget <= 30000) return { Icon: Hotel, text: "Comfort Stay", color: "text-green-600" }
    return { Icon: Crown, text: "Luxury Experience", color: "text-purple-600" }
  }

  const budgetTier = getBudgetTier(formData.budget)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Smart Itinerary Generator
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect journey with Smart travel planning tailored to your preferences and budget
          </p>
          <div className="flex justify-center items-center space-x-8 mt-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Smart Recommendations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Budget Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Instant Results</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <Card className="max-w-5xl mx-auto mb-12 shadow-2xl bg-white border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 opacity-30"></div>
          <CardHeader className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardTitle className="text-3xl text-center flex items-center justify-center space-x-3">
              {/* <MapPin className="w-8 h-8" /> */}
              <span>Plan Your Perfect Journey</span>
              {/* <Calendar className="w-8 h-8" /> */}
            </CardTitle>
            <p className="text-center text-orange-100 mt-2">
              Tell us your preferences and let AI create your dream itinerary
            </p>
          </CardHeader>
          <CardContent className="relative p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Destination Selection */}
              <div className="space-y-3">
                <Label
                  htmlFor="destination"
                  className="text-lg font-semibold flex items-center space-x-2 text-gray-700"
                >
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Choose Your Destination</span>
                </Label>
                <Select onValueChange={(value) => handleInputChange("destination", value)}>
                  <SelectTrigger className="h-14 text-lg border-2 border-orange-200 focus:border-orange-500 transition-all duration-300 hover:shadow-md">
                    <SelectValue placeholder="Select your dream destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((destination) => (
                      <SelectItem key={destination} value={destination} className="text-lg py-3 hover:bg-orange-50">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span>{destination}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Slider */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold flex items-center space-x-2 text-gray-700">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span>Budget: ₹{formData.budget.toLocaleString()}+</span>
                  <div className={`transition-all duration-500 ${showBudgetAnimation ? "animate-bounce" : ""}`}>
                    <Badge
                      className={`${budgetTier.color} bg-orange-100 border-orange-300 flex items-center gap-2 px-3 py-1`}
                    >
                      {budgetTier.text}
                    </Badge>
                  </div>
                </Label>
                <div className="px-4 py-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                  <Slider
                    value={[formData.budget]}
                    onValueChange={(value) => handleInputChange("budget", value[0].toString())}
                    max={100000}
                    min={5000}
                    step={2500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span className="font-medium">₹5,000</span>
                    <span className="font-medium">₹25,000</span>
                    <span className="font-medium">₹1,00,000+</span>
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-center space-x-2 text-blue-700">
                    <Info className="w-5 h-5" />
                    <span className="font-semibold text-lg">
                      Recommended: Up to {maxDaysAllowed} days for this budget
                    </span>
                  </div>
                </div>
              </div>

              {/* Days Input */}
              <div className="space-y-3">
                <Label htmlFor="days" className="text-lg font-semibold flex items-center space-x-2 text-gray-700">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span>Duration (1-{maxDaysAllowed} days)</span>
                </Label>
                <Input
                  id="days"
                  type="number"
                  min="1"
                  max={maxDaysAllowed}
                  placeholder={`Enter number of days (maximum ${maxDaysAllowed})`}
                  value={formData.days}
                  onChange={(e) => handleInputChange("days", e.target.value)}
                  className="h-14 text-lg border-2 border-orange-200 focus:border-orange-500 transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-16 text-xl font-bold shadow-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-500 transform hover:scale-105 border-0"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Your Perfect Journey...</span>
                  </div>
                ) : (
                  <span>Generate My Itinerary</span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Generated Itinerary */}
        {generatedItinerary && (
          <>
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 rounded-2xl shadow-2xl">
                <h2 className="text-4xl font-bold mb-4">Your Perfect {generatedItinerary.destination} Adventure</h2>
                <div className="flex justify-center items-center space-x-8 text-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{generatedItinerary.days} Days</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wallet className="w-5 h-5" />
                    <span>₹{formData.budget.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span> Optimized</span>
                  </div>
                </div>
              </div>

              {/* Generated Itinerary with Enhanced Animations */}
              <div className="space-y-8">
                <div className="text-center animate-fade-in">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Your Perfect {generatedItinerary.destination} Journey
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {generatedItinerary.days} days • ₹
                    {formData.budget.toLocaleString()} Budget •  Personalized
                  </p>
                </div>

                <div className="grid gap-6">
                  {generatedItinerary.itinerary.slice(0, 1).map((day, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-card transition-all duration-500 bg-gradient-card animate-slide-up hover:scale-[1.02] border-0 overflow-hidden relative group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardHeader className="relative">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <span className="text-white font-bold">
                              Day {day.day}
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                              {day.title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                              {day.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 relative">
                        {/* Places to Visit - Enhanced */}
                        <div
                          className="animate-fade-in"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <h4 className="font-semibold flex items-center mb-3">
                            <MapPin className="w-5 h-5 mr-2 text-primary animate-pulse" />
                            Places to Visit ({day.places.length})
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {day.places.map((place, idx) => (
                              <Card
                                key={idx}
                                className="p-3 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in bg-gradient-to-br from-background to-muted/20 border-primary/10 group/card"
                                onClick={() => openDetailModal(place, "place")}
                              >
                                <div className="flex space-x-3">
                                  <div className="relative overflow-hidden rounded-lg">
                                    <img
                                      src={place.image}
                                      alt={place.name}
                                      className="w-16 h-16 object-cover shadow-soft group-hover/card:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm truncate group-hover/card:text-primary transition-colors duration-300">
                                      {place.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground truncate mb-1">
                                      {place.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <Badge
                                        variant="outline"
                                        className="text-xs bg-primary/5 group-hover/card:bg-primary/10 transition-colors duration-300"
                                      >
                                        {place.type}
                                      </Badge>
                                      <div className="flex items-center text-xs text-muted-foreground">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {place.duration}
                                      </div>
                                    </div>
                                  </div>
                                  <Info className="w-4 h-4 text-primary mt-1 opacity-60 group-hover/card:opacity-100 transition-opacity duration-300" />
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {/* Hotels - Enhanced */}
                        <div
                          className="animate-fade-in"
                          style={{ animationDelay: "0.4s" }}
                        >
                          <h4 className="font-semibold flex items-center mb-3">
                            <Hotel className="w-5 h-5 mr-2 text-accent animate-pulse" />
                            Recommended Hotels ({day.hotels.length})
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {day.hotels.map((hotel, idx) => (
                              <Card
                                key={idx}
                                className="p-3 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in bg-gradient-to-br from-background to-muted/20 border-accent/10 group/card"
                                onClick={() => openDetailModal(hotel, "hotel")}
                              >
                                <div className="flex space-x-3">
                                  <div className="relative overflow-hidden rounded-lg">
                                    <img
                                      src={hotel.image}
                                      alt={hotel.name}
                                      className="w-16 h-16 object-cover shadow-soft group-hover/card:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm truncate group-hover/card:text-accent transition-colors duration-300">
                                      {hotel.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground truncate mb-1">
                                      {hotel.description}
                                    </p>
                                    <div className="flex items-center space-x-2 mt-1">
                                      <div className="flex items-center">
                                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                        <span className="text-xs ml-1">
                                          {hotel.rating}
                                        </span>
                                      </div>
                                      <Badge
                                        variant="outline"
                                        className="text-xs bg-accent/5 group-hover/card:bg-accent/10 transition-colors duration-300"
                                      >
                                        {hotel.type}
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-primary font-medium mt-1">
                                      {hotel.price}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {hotel.amenities
                                        .slice(0, 2)
                                        .map((amenity, i) => (
                                          <Badge
                                            key={i}
                                            variant="secondary"
                                            className="text-xs px-1 py-0 bg-secondary/10 group-hover/card:bg-secondary/20 transition-colors duration-300"
                                          >
                                            {amenity}
                                          </Badge>
                                        ))}
                                      {hotel.amenities.length > 2 && (
                                        <Badge
                                          variant="secondary"
                                          className="text-xs px-1 py-0 bg-secondary/10 group-hover/card:bg-secondary/20 transition-colors duration-300"
                                        >
                                          +{hotel.amenities.length - 2}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  <Info className="w-4 h-4 text-accent mt-1 opacity-60 group-hover/card:opacity-100 transition-opacity duration-300" />
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {/* Activities - Enhanced */}
                        <div
                          className="animate-fade-in"
                          style={{ animationDelay: "0.6s" }}
                        >
                          <h4 className="font-semibold flex items-center mb-2">
                            <Clock className="w-5 h-5 mr-2 text-secondary animate-pulse" />
                            Activities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {day.activities.map((activity, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="bg-secondary/5 hover:bg-secondary/10 transition-colors duration-300 cursor-default"
                              >
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Enhanced View Full Itinerary Button */}
                {parseInt(formData.days) >= 1 && (
                  <div
                    className="text-center animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <Button
                      onClick={handleViewFullItinerary}
                      size="lg"
                      className="shadow-soft hover:shadow-card px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-110 group border-0"
                    >
                      <Eye className="mr-3 w-5 h-5 group-hover:animate-pulse" />
                      View Full Itinerary & Customize
                      <Settings className="ml-3 w-5 h-5 group-hover:animate-spin" />
                    </Button>
                  </div>
                )}

                {/* Action Section - Simplified */}
                <div
                  className="text-center space-y-4 animate-fade-in"
                  style={{ animationDelay: "1s" }}
                >
                  <p className="text-lg text-muted-foreground">
                    Ready to explore more options?
                  </p>
                </div>
              </div>
            

            {/* Detail Modal */}
            <PlaceDetailModal
              isOpen={detailModal.isOpen}
              onClose={() => setDetailModal({ isOpen: false, item: null, type: "hotel" })}
              item={detailModal.item}
              type={detailModal.type}
              destination={generatedItinerary?.destination || ""} />
            </div>

            <style>{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes slide-up {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes scale-in {
                from {
                  opacity: 0;
                  transform: scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              .animate-fade-in {
                animation: fade-in 0.6s ease-out forwards;
              }

              .animate-slide-up {
                animation: slide-up 0.8s ease-out forwards;
              }

              .animate-scale-in {
                animation: scale-in 0.5s ease-out forwards;
              }
            `}</style>
          </>
        )}
      </div>
    </div>
  );
};

export default ItineraryPage;
