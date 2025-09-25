interface Activity {
  time: string;
  placeName: string;
  description: string;
  category: string;
  costEstimate: string;
  mapLink: string;
}

interface Food {
  restaurant: string;
  specialty: string;
  approxCost: string;
}

interface Stay {
  name: string;
  category: string;
  priceRange: string;
  mapLink: string;
}

interface LocalBusiness {
  name: string;
  description: string;
}

interface BudgetSummary {
  estimatedCost: string;
  category: string;
}

interface CTA {
  bookNowUrl: string;
  addToFavorites: boolean;
}

interface DayItinerary {
  day: number;
  title: string;
  theme: string;
  activities: Activity[];
  food: Food[];
  stay: Stay;
  localBusiness: LocalBusiness[];
  budgetSummary: BudgetSummary;
  tips: string[];
  cta: CTA;
}

interface BudgetItinerary {
  destination: string;
  duration: number;
  budget: string;
  itinerary: DayItinerary[];
}

interface TravelData {
  rajasthan: {
    low: BudgetItinerary;
    mid: BudgetItinerary;
    luxury: BudgetItinerary;
  };
}

// Global replace for Google Maps URLs - replace with OpenStreetMap
// Pattern: https://maps.google.com/?q= -> https://www.openstreetmap.org/search?query=

export const moredetail: TravelData = {
  "rajasthan": {
    "low": {
      "destination": "Rajasthan",
      "duration": 7,
      "budget": "Low",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Jaipur - Pink City Welcome",
          "theme": "Culture + Heritage",
          "activities": [
            {
              "time": "10:00 AM",
              "placeName": "Hawa Mahal",
              "description": "Explore the iconic Palace of Winds from outside",
              "category": "Culture",
              "costEstimate": "₹30",
              "mapLink": "https://www.openstreetmap.org/search?query=Hawa+Mahal+Jaipur"
            },
            {
              "time": "12:00 PM",
              "placeName": "City Palace Complex",
              "description": "Visit the royal palace and museums",
              "category": "Culture",
              "costEstimate": "₹500",
              "mapLink": "https://www.openstreetmap.org/search?query=City+Palace+Jaipur"
            },
            {
              "time": "3:00 PM",
              "placeName": "Jantar Mantar",
              "description": "Ancient astronomical observatory",
              "category": "Culture",
              "costEstimate": "₹200",
              "mapLink": "https://www.openstreetmap.org/search?query=Jantar+Mantar+Jaipur"
            },
            {
              "time": "5:00 PM",
              "placeName": "Johari Bazaar",
              "description": "Explore local markets for handicrafts",
              "category": "Shopping",
              "costEstimate": "₹200",
              "mapLink": "https://www.openstreetmap.org/search?query=Johari+Bazaar+Jaipur"
            }
          ],
          "food": [
            {
              "restaurant": "Rawat Mishthan Bhandar",
              "specialty": "Pyaaz Kachori",
              "approxCost": "₹80"
            },
            {
              "restaurant": "Peacock Rooftop Restaurant",
              "specialty": "Dal Baati Churma",
              "approxCost": "₹300"
            }
          ],
          "stay": {
            "name": "Hotel Pearl Palace",
            "category": "Budget Hotel",
            "priceRange": "₹800/night",
            "mapLink": "https://www.openstreetmap.org/search?query=Hotel+Pearl+Palace+Jaipur"
          },
          "localBusiness": [
            {
              "name": "Rajasthali Handicrafts",
              "description": "Authentic block prints and blue pottery"
            },
            {
              "name": "Gem Palace",
              "description": "Traditional jewelry and precious stones"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹1210",
            "category": "Low"
          },
          "tips": [
            "Visit early morning to avoid crowds",
            "Bargain at local markets",
            "Try street food at Johari Bazaar"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 2,
          "title": "Amber Fort and Jaipur Heritage",
          "theme": "Heritage + Adventure",
          "activities": [
            {
              "time": "9:00 AM",
              "placeName": "Amber Fort",
              "description": "Majestic hilltop fort with mirror palace",
              "category": "Culture",
              "costEstimate": "₹500",
              "mapLink": "https://maps.google.com/?q=Amber+Fort+Jaipur"
            },
            {
              "time": "12:00 PM",
              "placeName": "Panna Meena Ka Kund",
              "description": "Ancient stepwell with geometric architecture",
              "category": "Culture",
              "costEstimate": "Free",
              "mapLink": "https://maps.google.com/?q=Panna+Meena+Ka+Kund"
            },
            {
              "time": "2:00 PM",
              "placeName": "Sanganer Village",
              "description": "Traditional block printing workshops",
              "category": "Culture",
              "costEstimate": "₹100",
              "mapLink": "https://maps.google.com/?q=Sanganer+Jaipur"
            },
            {
              "time": "5:00 PM",
              "placeName": "Nahargarh Fort",
              "description": "Sunset views over Pink City",
              "category": "Adventure",
              "costEstimate": "₹200",
              "mapLink": "https://maps.google.com/?q=Nahargarh+Fort+Jaipur"
            }
          ],
          "food": [
            {
              "restaurant": "1135 AD Restaurant",
              "specialty": "Rajasthani Thali",
              "approxCost": "₹400"
            },
            {
              "restaurant": "Hanuman Temple Prasad",
              "specialty": "Besan Ladoo",
              "approxCost": "₹50"
            }
          ],
          "stay": {
            "name": "Hotel Pearl Palace",
            "category": "Budget Hotel",
            "priceRange": "₹800/night",
            "mapLink": "https://maps.google.com/?q=Hotel+Pearl+Palace+Jaipur"
          },
          "localBusiness": [
            {
              "name": "Anokhi Sanganer",
              "description": "Hand-block printed textiles and clothing"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹1250",
            "category": "Low"
          },
          "tips": [
            "Take shared auto to Amber Fort (₹50)",
            "Visit block printing factories for direct prices",
            "Early morning visit to forts to avoid crowds"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 3,
          "title": "Journey to Pushkar - Sacred City",
          "theme": "Spirituality + Culture",
          "activities": [
            {
              "time": "7:00 AM",
              "placeName": "Travel to Pushkar",
              "description": "Bus journey from Jaipur to Pushkar",
              "category": "Adventure",
              "costEstimate": "₹150",
              "mapLink": "https://maps.google.com/?q=Pushkar+Rajasthan"
            },
            {
              "time": "11:00 AM",
              "placeName": "Pushkar Lake",
              "description": "Sacred lake surrounded by 52 ghats",
              "category": "Culture",
              "costEstimate": "Free",
              "mapLink": "https://maps.google.com/?q=Pushkar+Lake"
            },
            {
              "time": "1:00 PM",
              "placeName": "Brahma Temple",
              "description": "One of the few Brahma temples in the world",
              "category": "Culture",
              "costEstimate": "₹20",
              "mapLink": "https://maps.google.com/?q=Brahma+Temple+Pushkar"
            },
            {
              "time": "4:00 PM",
              "placeName": "Pushkar Bazaar",
              "description": "Shopping for silver jewelry and handicrafts",
              "category": "Shopping",
              "costEstimate": "₹300",
              "mapLink": "https://maps.google.com/?q=Pushkar+Main+Bazaar"
            },
            {
              "time": "6:00 PM",
              "placeName": "Savitri Temple Trek",
              "description": "Sunset trek to hilltop temple",
              "category": "Adventure",
              "costEstimate": "Free",
              "mapLink": "https://maps.google.com/?q=Savitri+Temple+Pushkar"
            }
          ],
          "food": [
            {
              "restaurant": "Out of the Blue",
              "specialty": "Israeli Cuisine",
              "approxCost": "₹250"
            },
            {
              "restaurant": "Honey & Spice",
              "specialty": "Rajasthani Vegetarian Thali",
              "approxCost": "₹180"
            }
          ],
          "stay": {
            "name": "Zostel Pushkar",
            "category": "Hostel",
            "priceRange": "₹600/night",
            "mapLink": "https://maps.google.com/?q=Zostel+Pushkar"
          },
          "localBusiness": [
            {
              "name": "Pushkar Silver Market",
              "description": "Handcrafted silver jewelry and artifacts"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹1100",
            "category": "Low"
          },
          "tips": [
            "Remove shoes and leather items at temples",
            "Pushkar is vegetarian and alcohol-free city",
            "Bargain hard in local markets"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 4,
          "title": "Jodhpur - The Blue City Adventure",
          "theme": "Heritage + Adventure",
          "activities": [
            {
              "time": "7:00 AM",
              "placeName": "Travel to Jodhpur",
              "description": "Bus journey from Pushkar to Jodhpur",
              "category": "Adventure",
              "costEstimate": "₹200",
              "mapLink": "https://maps.google.com/?q=Jodhpur+Rajasthan"
            },
            {
              "time": "11:00 AM",
              "placeName": "Mehrangarh Fort",
              "description": "Magnificent fort with panoramic city views",
              "category": "Culture",
              "costEstimate": "₹600",
              "mapLink": "https://maps.google.com/?q=Mehrangarh+Fort+Jodhpur"
            },
            {
              "time": "3:00 PM",
              "placeName": "Blue City Walking Tour",
              "description": "Explore the blue painted old city",
              "category": "Culture",
              "costEstimate": "₹100",
              "mapLink": "https://maps.google.com/?q=Blue+City+Jodhpur"
            },
            {
              "time": "5:00 PM",
              "placeName": "Clock Tower Market",
              "description": "Local spice and textile market",
              "category": "Shopping",
              "costEstimate": "₹200",
              "mapLink": "https://maps.google.com/?q=Clock+Tower+Jodhpur"
            }
          ],
          "food": [
            {
              "restaurant": "Mishrilal Hotel",
              "specialty": "Makhaniya Lassi",
              "approxCost": "₹80"
            },
            {
              "restaurant": "Gypsy Restaurant",
              "specialty": "Laal Maas",
              "approxCost": "₹350"
            }
          ],
          "stay": {
            "name": "Shahi Guest House",
            "category": "Heritage Homestay",
            "priceRange": "₹900/night",
            "mapLink": "https://maps.google.com/?q=Shahi+Guest+House+Jodhpur"
          },
          "localBusiness": [
            {
              "name": "Maharaja Handicrafts",
              "description": "Traditional Rajasthani puppets and textiles"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹1530",
            "category": "Low"
          },
          "tips": [
            "Audio guide at Mehrangarh is worth it",
            "Blue city houses charge ₹20-50 for rooftop visits",
            "Try the famous Makhaniya Lassi"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 5,
          "title": "Jaisalmer - Golden City Arrival",
          "theme": "Desert + Culture",
          "activities": [
            {
              "time": "6:00 AM",
              "placeName": "Travel to Jaisalmer",
              "description": "Overnight bus journey to Golden City",
              "category": "Adventure",
              "costEstimate": "₹300",
              "mapLink": "https://maps.google.com/?q=Jaisalmer+Rajasthan"
            },
            {
              "time": "2:00 PM",
              "placeName": "Jaisalmer Fort",
              "description": "Living fort with shops and restaurants",
              "category": "Culture",
              "costEstimate": "₹250",
              "mapLink": "https://maps.google.com/?q=Jaisalmer+Fort"
            },
            {
              "time": "4:00 PM",
              "placeName": "Patwon Ki Haveli",
              "description": "Intricate sandstone carved mansion",
              "category": "Culture",
              "costEstimate": "₹100",
              "mapLink": "https://maps.google.com/?q=Patwon+Ki+Haveli+Jaisalmer"
            },
            {
              "time": "6:00 PM",
              "placeName": "Gadisar Lake",
              "description": "Sunset at the historical water reservoir",
              "category": "Relaxation",
              "costEstimate": "₹50",
              "mapLink": "https://maps.google.com/?q=Gadisar+Lake+Jaisalmer"
            }
          ],
          "food": [
            {
              "restaurant": "Bhang Lassi Shop",
              "specialty": "Traditional Lassi",
              "approxCost": "₹60"
            },
            {
              "restaurant": "Desert Boy Dhani",
              "specialty": "Rajasthani Folk Dinner",
              "approxCost": "₹400"
            }
          ],
          "stay": {
            "name": "Zostel Jaisalmer",
            "category": "Hostel",
            "priceRange": "₹700/night",
            "mapLink": "https://maps.google.com/?q=Zostel+Jaisalmer"
          },
          "localBusiness": [
            {
              "name": "Light of the East",
              "description": "Authentic Rajasthani textiles and mirror work"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹1360",
            "category": "Low"
          },
          "tips": [
            "Book desert safari in advance for better rates",
            "Carry sunglasses and cap for desert sun",
            "Try local bhang lassi (ask for mild version)"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 6,
          "title": "Thar Desert Safari Experience",
          "theme": "Adventure + Culture",
          "activities": [
            {
              "time": "9:00 AM",
              "placeName": "Kuldhara Abandoned Village",
              "description": "Mysterious ghost village of Rajasthan",
              "category": "Culture",
              "costEstimate": "₹100",
              "mapLink": "https://maps.google.com/?q=Kuldhara+Village+Jaisalmer"
            },
            {
              "time": "2:00 PM",
              "placeName": "Sam Sand Dunes",
              "description": "Camel safari and desert activities",
              "category": "Adventure",
              "costEstimate": "₹800",
              "mapLink": "https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer"
            },
            {
              "time": "6:00 PM",
              "placeName": "Desert Camp",
              "description": "Folk music and dance performance",
              "category": "Culture",
              "costEstimate": "₹500",
              "mapLink": "https://maps.google.com/?q=Desert+Camp+Sam+Jaisalmer"
            }
          ],
          "food": [
            {
              "restaurant": "Desert Camp Kitchen",
              "specialty": "Rajasthani BBQ",
              "approxCost": "₹300"
            },
            {
              "restaurant": "Chai Stall",
              "specialty": "Masala Chai",
              "approxCost": "₹20"
            }
          ],
          "stay": {
            "name": "Desert Camp Accommodation",
            "category": "Tent Stay",
            "priceRange": "₹1000/night",
            "mapLink": "https://maps.google.com/?q=Sam+Desert+Camp+Jaisalmer"
          },
          "localBusiness": [
            {
              "name": "Desert Handicrafts",
              "description": "Camel leather products and desert souvenirs"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹1720",
            "category": "Low"
          },
          "tips": [
            "Carry extra water for desert trip",
            "Wear comfortable shoes for sand walking",
            "Negotiate group rates for camel safari"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 7,
          "title": "Return Journey via Bikaner",
          "theme": "Culture + Food",
          "activities": [
            {
              "time": "7:00 AM",
              "placeName": "Travel to Bikaner",
              "description": "Bus journey to Bikaner",
              "category": "Adventure",
              "costEstimate": "₹250",
              "mapLink": "https://maps.google.com/?q=Bikaner+Rajasthan"
            },
            {
              "time": "12:00 PM",
              "placeName": "Junagarh Fort",
              "description": "Well-preserved fort with beautiful architecture",
              "category": "Culture",
              "costEstimate": "₹300",
              "mapLink": "https://maps.google.com/?q=Junagarh+Fort+Bikaner"
            },
            {
              "time": "3:00 PM",
              "placeName": "Bhandasar Jain Temple",
              "description": "Ancient Jain temple with intricate carvings",
              "category": "Culture",
              "costEstimate": "Free",
              "mapLink": "https://maps.google.com/?q=Bhandasar+Jain+Temple+Bikaner"
            },
            {
              "time": "5:00 PM",
              "placeName": "Evening departure",
              "description": "Train/bus to next destination",
              "category": "Adventure",
              "costEstimate": "₹400",
              "mapLink": "https://maps.google.com/?q=Bikaner+Railway+Station"
            }
          ],
          "food": [
            {
              "restaurant": "Chhotu Motu Joshi Sweet Shop",
              "specialty": "Bikaneri Bhujia",
              "approxCost": "₹150"
            },
            {
              "restaurant": "Hotel Jaswant Bhawan",
              "specialty": "Rajasthani Thali",
              "approxCost": "₹200"
            }
          ],
          "stay": {
            "name": "Hotel Jaswant Bhawan",
            "category": "Budget Hotel",
            "priceRange": "₹800/night",
            "mapLink": "https://maps.google.com/?q=Hotel+Jaswant+Bhawan+Bikaner"
          },
          "localBusiness": [
            {
              "name": "Haldiram's Bikaner",
              "description": "Famous for Bikaneri Bhujia and sweets"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹1300",
            "category": "Low"
          },
          "tips": [
            "Buy authentic Bikaneri Bhujia as souvenirs",
            "Check train schedules in advance",
            "Junagarh Fort has good audio guide"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        }
      ]
    },
     "luxury": {
      "destination": "Rajasthan",
      "duration": 7,
      "budget": "Luxury",
      "itinerary": [
        {
          "day": 1,
          "title": "Royal Welcome to the Pink City",
          "theme": "Luxury + Heritage",
          "activities": [
            {
              "time": "9:00 AM",
              "placeName": "Private Airport Transfer",
              "description": "Luxury car pickup with welcome kit",
              "category": "Travel",
              "costEstimate": "₹3000",
              "mapLink": "https://maps.google.com/?q=Jaipur+International+Airport"
            },
            {
              "time": "11:00 AM",
              "placeName": "City Palace Private Tour",
              "description": "Exclusive royal quarters access",
              "category": "Culture",
              "costEstimate": "₹2500",
              "mapLink": "https://maps.google.com/?q=City+Palace+Jaipur"
            },
            {
              "time": "2:00 PM",
              "placeName": "Royal Vintage Car Museum",
              "description": "Private collection viewing",
              "category": "Culture",
              "costEstimate": "₹1000",
              "mapLink": "https://maps.google.com/?q=Vintage+Car+Museum+Jaipur"
            },
            {
              "time": "4:00 PM",
              "placeName": "Private Shopping Tour",
              "description": "Curated jewelry and textile shopping",
              "category": "Shopping",
              "costEstimate": "₹5000",
              "mapLink": "https://maps.google.com/?q=Johari+Bazaar+Jaipur"
            },
            {
              "time": "7:00 PM",
              "placeName": "Rooftop Royal Dinner",
              "description": "Private dining with city views",
              "category": "Food",
              "costEstimate": "₹4000",
              "mapLink": "https://maps.google.com/?q=Taj+Rambagh+Palace+Jaipur"
            }
          ],
          "food": [
            {
              "restaurant": "Suvarna Mahal",
              "specialty": "Royal Indian Cuisine",
              "approxCost": "₹5000"
            },
            {
              "restaurant": "Steam Lounge",
              "specialty": "International Gourmet",
              "approxCost": "₹3000"
            }
          ],
          "stay": {
            "name": "Rambagh Palace",
            "category": "Palace Hotel",
            "priceRange": "₹35000/night",
            "mapLink": "https://maps.google.com/?q=Rambagh+Palace+Jaipur"
          },
          "localBusiness": [
            {
              "name": "Gem Palace",
              "description": "Heritage jewelry house since 1852"
            },
            {
              "name": "Royal Atelier",
              "description": "Bespoke traditional clothing"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹58500",
            "category": "Luxury"
          },
          "tips": [
            "Request palace historian for tour",
            "Book advance dinner reservations",
            "Private shopping appointments recommended"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 2,
          "title": "Amber Fort Royal Experience",
          "theme": "Heritage + Adventure",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Helicopter Tour",
              "description": "Aerial view of Jaipur forts",
              "category": "Adventure",
              "costEstimate": "₹15000",
              "mapLink": "https://maps.google.com/?q=Amber+Fort+Jaipur"
            },
            {
              "time": "10:00 AM",
              "placeName": "Amber Fort Private Tour",
              "description": "VIP access to restricted areas",
              "category": "Culture",
              "costEstimate": "₹5000",
              "mapLink": "https://maps.google.com/?q=Amber+Fort+Interior"
            },
            {
              "time": "2:00 PM",
              "placeName": "Private Art Workshop",
              "description": "Blue pottery and miniature painting",
              "category": "Culture",
              "costEstimate": "₹3000",
              "mapLink": "https://maps.google.com/?q=Jaipur+Art+School"
            },
            {
              "time": "5:00 PM",
              "placeName": "Sunset at Nahargarh",
              "description": "Private terrace dinner setup",
              "category": "Luxury",
              "costEstimate": "₹8000",
              "mapLink": "https://maps.google.com/?q=Nahargarh+Fort+Jaipur"
            }
          ],
          "food": [
            {
              "restaurant": "1135 AD Amber",
              "specialty": "Royal Rajasthani Feast",
              "approxCost": "₹6000"
            },
            {
              "restaurant": "Bar Palladio",
              "specialty": "Fine Italian Cuisine",
              "approxCost": "₹4000"
            }
          ],
          "stay": {
            "name": "Rambagh Palace",
            "category": "Palace Hotel",
            "priceRange": "₹35000/night",
            "mapLink": "https://maps.google.com/?q=Rambagh+Palace+Jaipur"
          },
          "localBusiness": [
            {
              "name": "Neerja Blue Pottery",
              "description": "Heritage blue pottery artisans"
            },
            {
              "name": "Rajasthali",
              "description": "Luxury handicraft emporium"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹76000",
            "category": "Luxury"
          },
          "tips": [
            "Book helicopter tour in advance",
            "Request special palace access permits",
            "Pre-book sunset dinner setup"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 3,
          "title": "Spiritual Luxury in Pushkar",
          "theme": "Spirituality + Luxury",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Private Transfer to Pushkar",
              "description": "Luxury vehicle with refreshments",
              "category": "Travel",
              "costEstimate": "₹8000",
              "mapLink": "https://maps.google.com/?q=Pushkar+Rajasthan"
            },
            {
              "time": "11:00 AM",
              "placeName": "Private Temple Tour",
              "description": "VIP access to sacred sites",
              "category": "Spiritual",
              "costEstimate": "₹5000",
              "mapLink": "https://maps.google.com/?q=Brahma+Temple+Pushkar"
            },
            {
              "time": "2:00 PM",
              "placeName": "Luxury Spa Treatment",
              "description": "Ayurvedic wellness session",
              "category": "Wellness",
              "costEstimate": "₹8000",
              "mapLink": "https://maps.google.com/?q=Ananta+Spa+Pushkar"
            },
            {
              "time": "5:00 PM",
              "placeName": "Private Pushkar Lake Ceremony",
              "description": "Traditional puja with priest",
              "category": "Spiritual",
              "costEstimate": "₹3000",
              "mapLink": "https://maps.google.com/?q=Pushkar+Lake"
            },
            {
              "time": "7:00 PM",
              "placeName": "Desert Luxury Camp",
              "description": "Private cultural performance",
              "category": "Culture",
              "costEstimate": "₹12000",
              "mapLink": "https://maps.google.com/?q=Pushkar+Luxury+Camp"
            }
          ],
          "food": [
            {
              "restaurant": "Sunset Cafe",
              "specialty": "International Cuisine",
              "approxCost": "₹3000"
            },
            {
              "restaurant": "Royal Desert Camp",
              "specialty": "Traditional Royal Feast",
              "approxCost": "₹5000"
            }
          ],
          "stay": {
            "name": "The Green House Resort",
            "category": "Luxury Resort",
            "priceRange": "₹25000/night",
            "mapLink": "https://maps.google.com/?q=The+Green+House+Resort+Pushkar"
          },
          "localBusiness": [
            {
              "name": "Silver Emporium",
              "description": "Fine jewelry and artifacts"
            },
            {
              "name": "Pushkar Textiles",
              "description": "High-end traditional textiles"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹69000",
            "category": "Luxury"
          },
          "tips": [
            "Book private ceremonies in advance",
            "Request vegetarian meals only",
            "Dress modestly for temple visits"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 4,
          "title": "Royal Jodhpur Experience",
          "theme": "Heritage + Luxury",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Private Helicopter Transfer",
              "description": "Aerial journey to Blue City",
              "category": "Travel",
              "costEstimate": "₹25000",
              "mapLink": "https://maps.google.com/?q=Jodhpur+Airport"
            },
            {
              "time": "10:00 AM",
              "placeName": "Mehrangarh Fort Private Tour",
              "description": "Exclusive access with royal family historian",
              "category": "Culture",
              "costEstimate": "₹15000",
              "mapLink": "https://maps.google.com/?q=Mehrangarh+Fort+Jodhpur"
            },
            {
              "time": "2:00 PM",
              "placeName": "Umaid Bhawan Palace",
              "description": "Royal lunch and private museum tour",
              "category": "Culture",
              "costEstimate": "₹12000",
              "mapLink": "https://maps.google.com/?q=Umaid+Bhawan+Palace+Jodhpur"
            },
            {
              "time": "5:00 PM",
              "placeName": "Blue City Photography Tour",
              "description": "Private rooftop access with photographer",
              "category": "Adventure",
              "costEstimate": "₹8000",
              "mapLink": "https://maps.google.com/?q=Blue+City+Jodhpur"
            }
          ],
          "food": [
            {
              "restaurant": "Risala",
              "specialty": "Royal Heritage Cuisine",
              "approxCost": "₹8000"
            },
            {
              "restaurant": "Pillars Restaurant",
              "specialty": "International Fine Dining",
              "approxCost": "₹6000"
            }
          ],
          "stay": {
            "name": "Umaid Bhawan Palace",
            "category": "Palace Hotel",
            "priceRange": "₹45000/night",
            "mapLink": "https://maps.google.com/?q=Umaid+Bhawan+Palace+Jodhpur"
          },
          "localBusiness": [
            {
              "name": "Royal Blue Antiques",
              "description": "Curated heritage artifacts"
            },
            {
              "name": "Jodhpur Crafts",
              "description": "Luxury textile and handicraft boutique"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹119000",
            "category": "Luxury"
          },
          "tips": [
            "Book palace dining in advance",
            "Request royal family historian",
            "Special permits needed for photography"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 5,
          "title": "Golden City Luxury Experience",
          "theme": "Heritage + Desert Luxury",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Private Transfer to Jaisalmer",
              "description": "Luxury SUV with desert guide",
              "category": "Travel",
              "costEstimate": "₹15000",
              "mapLink": "https://maps.google.com/?q=Jaisalmer+Rajasthan"
            },
            {
              "time": "11:00 AM",
              "placeName": "Jaisalmer Fort VIP Tour",
              "description": "Exclusive heritage walk with historian",
              "category": "Culture",
              "costEstimate": "₹8000",
              "mapLink": "https://maps.google.com/?q=Jaisalmer+Fort"
            },
            {
              "time": "2:00 PM",
              "placeName": "Private Haveli Tour",
              "description": "Access to private mansion quarters",
              "category": "Culture",
              "costEstimate": "₹6000",
              "mapLink": "https://maps.google.com/?q=Patwon+Ki+Haveli+Jaisalmer"
            },
            {
              "time": "5:00 PM",
              "placeName": "Desert Sunset Experience",
              "description": "Private dunes with champagne setup",
              "category": "Luxury",
              "costEstimate": "₹12000",
              "mapLink": "https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer"
            }
          ],
          "food": [
            {
              "restaurant": "Desert Palace",
              "specialty": "Royal Rajasthani Feast",
              "approxCost": "₹7000"
            },
            {
              "restaurant": "Saffron",
              "specialty": "Fine Dining Experience",
              "approxCost": "₹5000"
            }
          ],
          "stay": {
            "name": "Suryagarh Palace",
            "category": "Desert Palace Hotel",
            "priceRange": "₹35000/night",
            "mapLink": "https://maps.google.com/?q=Suryagarh+Jaisalmer"
          },
          "localBusiness": [
            {
              "name": "Heritage Textiles",
              "description": "Luxury desert fabrics and artifacts"
            },
            {
              "name": "Golden Art Gallery",
              "description": "Fine local art and sculptures"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹88000",
            "category": "Luxury"
          },
          "tips": [
            "Request private fort access permits",
            "Book sunset experience in advance",
            "Arrange private shopping tours"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 6,
          "title": "Ultimate Desert Safari",
          "theme": "Adventure + Luxury",
          "activities": [
            {
              "time": "7:00 AM",
              "placeName": "Desert Ballooning",
              "description": "Private hot air balloon over dunes",
              "category": "Adventure",
              "costEstimate": "₹25000",
              "mapLink": "https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer"
            },
            {
              "time": "10:00 AM",
              "placeName": "Desert Wildlife Safari",
              "description": "Private jeep tour with naturalist",
              "category": "Adventure",
              "costEstimate": "₹12000",
              "mapLink": "https://maps.google.com/?q=Desert+National+Park"
            },
            {
              "time": "4:00 PM",
              "placeName": "Royal Desert Camp",
              "description": "Luxury glamping experience",
              "category": "Luxury",
              "costEstimate": "₹35000",
              "mapLink": "https://maps.google.com/?q=Serai+Jaisalmer"
            },
            {
              "time": "7:00 PM",
              "placeName": "Private Cultural Evening",
              "description": "Folk artists and royal dinner",
              "category": "Culture",
              "costEstimate": "₹15000",
              "mapLink": "https://maps.google.com/?q=The+Serai+Desert+Camp"
            }
          ],
          "food": [
            {
              "restaurant": "The Serai Dining",
              "specialty": "Royal Desert Cuisine",
              "approxCost": "₹12000"
            },
            {
              "restaurant": "Starlit Dining",
              "specialty": "International Gourmet",
              "approxCost": "₹8000"
            }
          ],
          "stay": {
            "name": "The Serai",
            "category": "Luxury Desert Camp",
            "priceRange": "₹75000/night",
            "mapLink": "https://maps.google.com/?q=The+Serai+Jaisalmer"
          },
          "localBusiness": [
            {
              "name": "Desert Artisans",
              "description": "Luxury desert crafts and textiles"
            },
            {
              "name": "Royal Desert Gems",
              "description": "Fine jewelry and precious stones"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹182000",
            "category": "Luxury"
          },
          "tips": [
            "Book balloon safari in advance",
            "Request special dietary requirements",
            "Arrange private cultural performances"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 7,
          "title": "Royal Departure via Bikaner",
          "theme": "Heritage + Culinary",
          "activities": [
            {
              "time": "9:00 AM",
              "placeName": "Private Transfer to Bikaner",
              "description": "Luxury car with refreshments",
              "category": "Travel",
              "costEstimate": "₹18000",
              "mapLink": "https://maps.google.com/?q=Bikaner+Rajasthan"
            },
            {
              "time": "12:00 PM",
              "placeName": "Junagarh Fort Private Tour",
              "description": "Exclusive palace access",
              "category": "Culture",
              "costEstimate": "₹8000",
              "mapLink": "https://maps.google.com/?q=Junagarh+Fort+Bikaner"
            },
            {
              "time": "3:00 PM",
              "placeName": "Royal Camel Breeding Farm",
              "description": "Private tour with experts",
              "category": "Culture",
              "costEstimate": "₹5000",
              "mapLink": "https://maps.google.com/?q=Camel+Breeding+Farm+Bikaner"
            },
            {
              "time": "5:00 PM",
              "placeName": "Luxury Spa Session",
              "description": "Royal wellness treatment",
              "category": "Wellness",
              "costEstimate": "₹12000",
              "mapLink": "https://maps.google.com/?q=Narendra+Bhawan+Bikaner"
            }
          ],
          "food": [
            {
              "restaurant": "Narendra Bhawan",
              "specialty": "Royal Marwari Feast",
              "approxCost": "₹8000"
            },
            {
              "restaurant": "Chhotu Motu Joshi",
              "specialty": "Premium Bhujia Tasting",
              "approxCost": "₹2000"
            }
          ],
          "stay": {
            "name": "Narendra Bhawan",
            "category": "Palace Hotel",
            "priceRange": "₹25000/night",
            "mapLink": "https://maps.google.com/?q=Narendra+Bhawan+Bikaner"
          },
          "localBusiness": [
            {
              "name": "Royal Bhujia House",
              "description": "Premium Bikaneri snacks"
            },
            {
              "name": "Heritage Arts",
              "description": "Museum quality artifacts"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹78000",
            "category": "Luxury"
          },
          "tips": [
            "Book palace dining in advance",
            "Request royal family memorabilia tour",
            "Arrange luxury airport transfer"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        }
      ]
    },
    
    "mid": {
      "destination": "Rajasthan",
      "duration": 7,
      "budget": "Mid",
      "itinerary": [
        {
          "day": 1,
          "title": "Royal Welcome to Jaipur",
          "theme": "Heritage + Luxury",
          "activities": [
            {
              "time": "10:00 AM",
              "placeName": "City Palace Museum",
              "description": "Explore royal artifacts and architecture with audio guide",
              "category": "Culture",
              "costEstimate": "₹700",
              "mapLink": "https://maps.google.com/?q=City+Palace+Jaipur"
            },
            {
              "time": "1:00 PM",
              "placeName": "Hawa Mahal Interior",
              "description": "Interior visit of the Palace of Winds",
              "category": "Culture",
              "costEstimate": "₹200",
              "mapLink": "https://maps.google.com/?q=Hawa+Mahal+Jaipur"
            },
            {
              "time": "3:30 PM",
              "placeName": "Jantar Mantar with Guide",
              "description": "Guided tour of astronomical observatory",
              "category": "Culture",
              "costEstimate": "₹400",
              "mapLink": "https://maps.google.com/?q=Jantar+Mantar+Jaipur"
            },
            {
              "time": "6:00 PM",
              "placeName": "Chokhi Dhani Village",
              "description": "Cultural village with folk performances",
              "category": "Culture",
              "costEstimate": "₹900",
              "mapLink": "https://maps.google.com/?q=Chokhi+Dhani+Jaipur"
            }
          ],
          "food": [
            {
              "restaurant": "1135 AD Restaurant",
              "specialty": "Royal Rajasthani Cuisine",
              "approxCost": "₹800"
            },
            {
              "restaurant": "LMB (Laxmi Misthan Bhandar)",
              "specialty": "Traditional Sweets & Thali",
              "approxCost": "₹400"
            }
          ],
          "stay": {
            "name": "Hotel Clarks Amer",
            "category": "4-Star Hotel",
            "priceRange": "₹4500/night",
            "mapLink": "https://maps.google.com/?q=Hotel+Clarks+Amer+Jaipur"
          },
          "localBusiness": [
            {
              "name": "Gem Palace",
              "description": "Royal family jewelers with precious stones"
            },
            {
              "name": "Anokhi Museum Shop",
              "description": "High-quality block printed textiles"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹7000",
            "category": "Mid"
          },
          "tips": [
            "Pre-book Chokhi Dhani for dinner show",
            "Use hotel taxi service for comfortable travel",
            "Photography allowed with extra ticket at palaces"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 2,
          "title": "Amber Fort & Jaipur Outskirts",
          "theme": "Adventure + Heritage",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Amber Fort Elephant Ride",
              "description": "Elephant ride up to the fort entrance",
              "category": "Adventure",
              "costEstimate": "₹1100",
              "mapLink": "https://maps.google.com/?q=Amber+Fort+Jaipur"
            },
            {
              "time": "10:30 AM",
              "placeName": "Amber Palace Interior",
              "description": "Sheesh Mahal and royal chambers tour",
              "category": "Culture",
              "costEstimate": "₹500",
              "mapLink": "https://maps.google.com/?q=Amber+Palace+Interior"
            },
            {
              "time": "1:00 PM",
              "placeName": "Jal Mahal",
              "description": "Water Palace photography and boat ride",
              "category": "Relaxation",
              "costEstimate": "₹300",
              "mapLink": "https://maps.google.com/?q=Jal+Mahal+Jaipur"
            },
            {
              "time": "4:00 PM",
              "placeName": "Nahargarh Fort",
              "description": "Sculpture park and sunset views",
              "category": "Culture",
              "costEstimate": "₹200",
              "mapLink": "https://maps.google.com/?q=Nahargarh+Fort+Jaipur"
            },
            {
              "time": "7:00 PM",
              "placeName": "Raj Mandir Cinema",
              "description": "Bollywood movie experience",
              "category": "Culture",
              "costEstimate": "₹200",
              "mapLink": "https://maps.google.com/?q=Raj+Mandir+Cinema+Jaipur"
            }
          ],
          "food": [
            {
              "restaurant": "Samode Haveli Restaurant",
              "specialty": "Royal Dining Experience",
              "approxCost": "₹1200"
            },
            {
              "restaurant": "Tapri Central",
              "specialty": "Modern Indian Tea House",
              "approxCost": "₹300"
            }
          ],
          "stay": {
            "name": "Hotel Clarks Amer",
            "category": "4-Star Hotel",
            "priceRange": "₹4500/night",
            "mapLink": "https://maps.google.com/?q=Hotel+Clarks+Amer+Jaipur"
          },
          "localBusiness": [
            {
              "name": "Rajasthali Emporium",
              "description": "Government certified handicrafts store"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹8300",
            "category": "Mid"
          },
          "tips": [
            "Book elephant ride in advance",
            "Carry camera with extra battery",
            "Evening show timings at Raj Mandir vary"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 3,
          "title": "Pushkar Sacred Journey",
          "theme": "Spirituality + Culture",
          "activities": [
            {
              "time": "7:00 AM",
              "placeName": "Private Transfer to Pushkar",
              "description": "Comfortable AC car journey",
              "category": "Adventure",
              "costEstimate": "₹2500",
              "mapLink": "https://maps.google.com/?q=Pushkar+Rajasthan"
            },
            {
              "time": "11:00 AM",
              "placeName": "Brahma Temple",
              "description": "Guided tour of sacred temple",
              "category": "Culture",
              "costEstimate": "₹100",
              "mapLink": "https://maps.google.com/?q=Brahma+Temple+Pushkar"
            },
            {
              "time": "1:00 PM",
              "placeName": "Pushkar Lake Aarti",
              "description": "Participate in evening prayers",
              "category": "Culture",
              "costEstimate": "₹50",
              "mapLink": "https://maps.google.com/?q=Pushkar+Lake"
            },
            {
              "time": "4:00 PM",
              "placeName": "Savitri Temple Ropeway",
              "description": "Cable car to hilltop temple",
              "category": "Adventure",
              "costEstimate": "₹85",
              "mapLink": "https://maps.google.com/?q=Savitri+Temple+Pushkar"
            },
            {
              "time": "6:30 PM",
              "placeName": "Pushkar Bazaar Walk",
              "description": "Shopping for silver jewelry and textiles",
              "category": "Shopping",
              "costEstimate": "₹800",
              "mapLink": "https://maps.google.com/?q=Pushkar+Main+Bazaar"
            }
          ],
          "food": [
            {
              "restaurant": "La Pizzeria",
              "specialty": "Italian & Continental",
              "approxCost": "₹450"
            },
            {
              "restaurant": "Raju Terrace Garden",
              "specialty": "Local Vegetarian",
              "approxCost": "₹300"
            }
          ],
          "stay": {
            "name": "Zostel Plus Pushkar",
            "category": "Premium Hostel",
            "priceRange": "₹2000/night",
            "mapLink": "https://maps.google.com/?q=Zostel+Plus+Pushkar"
          },
          "localBusiness": [
            {
              "name": "Pushkar Silver Emporium",
              "description": "Traditional silver jewelry and antiques"
            },
            {
              "name": "Pushkar Organic",
              "description": "Local organic products and cosmetics"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹5785",
            "category": "Mid"
          },
          "tips": [
            "Book ropeway tickets in advance",
            "Dress modestly for temple visits",
            "Best shopping deals in evening hours"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 4,
          "title": "Royal Jodhpur Experience",
          "theme": "Heritage + Luxury",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Private Transfer to Jodhpur",
              "description": "Luxury car transfer with scenic stops",
              "category": "Travel",
              "costEstimate": "₹3500",
              "mapLink": "https://maps.google.com/?q=Jodhpur+Rajasthan"
            },
            {
              "time": "11:00 AM",
              "placeName": "Mehrangarh Fort VIP Tour",
              "description": "Private guided tour with museum curator",
              "category": "Culture",
              "costEstimate": "₹1200",
              "mapLink": "https://maps.google.com/?q=Mehrangarh+Fort+Jodhpur"
            },
            {
              "time": "3:00 PM",
              "placeName": "Umaid Bhawan Palace",
              "description": "Heritage walk and museum visit",
              "category": "Culture",
              "costEstimate": "₹800",
              "mapLink": "https://maps.google.com/?q=Umaid+Bhawan+Palace+Jodhpur"
            },
            {
              "time": "6:00 PM",
              "placeName": "Sunset Zip-lining",
              "description": "Flying fox over Mehrangarh Fort",
              "category": "Adventure",
              "costEstimate": "₹1500",
              "mapLink": "https://maps.google.com/?q=Flying+Fox+Jodhpur"
            }
          ],
          "food": [
            {
              "restaurant": "Indique Restaurant",
              "specialty": "Royal Rajasthani Cuisine",
              "approxCost": "₹1200"
            },
            {
              "restaurant": "Darikhana",
              "specialty": "International Fine Dining",
              "approxCost": "₹2000"
            }
          ],
          "stay": {
            "name": "RAAS Jodhpur",
            "category": "Heritage Boutique Hotel",
            "priceRange": "₹8000/night",
            "mapLink": "https://maps.google.com/?q=RAAS+Jodhpur"
          },
          "localBusiness": [
            {
              "name": "Maharani Textiles",
              "description": "Luxury textiles and handicrafts"
            },
            {
              "name": "Umaid Heritage Art School",
              "description": "Traditional miniature painting workshop"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹18200",
            "category": "Mid"
          },
          "tips": [
            "Book zip-lining in advance",
            "Carry comfortable walking shoes",
            "Evening photography permitted at fort"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 5,
          "title": "Luxury Desert Experience in Jaisalmer",
          "theme": "Desert + Culture",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Private Transfer to Jaisalmer",
              "description": "Luxury car journey with refreshments",
              "category": "Travel",
              "costEstimate": "₹4000",
              "mapLink": "https://maps.google.com/?q=Jaisalmer+Rajasthan"
            },
            {
              "time": "2:00 PM",
              "placeName": "Jaisalmer Fort Tour",
              "description": "Private guided heritage walk",
              "category": "Culture",
              "costEstimate": "₹800",
              "mapLink": "https://maps.google.com/?q=Jaisalmer+Fort"
            },
            {
              "time": "4:00 PM",
              "placeName": "Patwon Ki Haveli",
              "description": "Architecture photography tour",
              "category": "Culture",
              "costEstimate": "₹500",
              "mapLink": "https://maps.google.com/?q=Patwon+Ki+Haveli+Jaisalmer"
            },
            {
              "time": "6:00 PM",
              "placeName": "Sunset at Desert Camp",
              "description": "Luxury camping experience",
              "category": "Adventure",
              "costEstimate": "₹3000",
              "mapLink": "https://maps.google.com/?q=Desert+Camp+Jaisalmer"
            }
          ],
          "food": [
            {
              "restaurant": "Desert Safari Camp",
              "specialty": "BBQ Dinner with Live Music",
              "approxCost": "₹1500"
            },
            {
              "restaurant": "Trio Restaurant",
              "specialty": "Multi-cuisine Dining",
              "approxCost": "₹800"
            }
          ],
          "stay": {
            "name": "Suryagarh Jaisalmer",
            "category": "5-Star Heritage Hotel",
            "priceRange": "₹12000/night",
            "mapLink": "https://maps.google.com/?q=Suryagarh+Jaisalmer"
          },
          "localBusiness": [
            {
              "name": "Desert Handicrafts Emporium",
              "description": "Premium desert crafts and textiles"
            },
            {
              "name": "Silk Route Art Gallery",
              "description": "Local art and artifacts"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹22600",
            "category": "Mid"
          },
          "tips": [
            "Pre-book desert camp for best rates",
            "Carry light jacket for evening desert",
            "Photography permits required in some havelis"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 6,
          "title": "Desert Safari and Cultural Evening",
          "theme": "Adventure + Culture",
          "activities": [
            {
              "time": "6:00 AM",
              "placeName": "Desert Safari",
              "description": "Camel trek in Sam Sand Dunes",
              "category": "Adventure",
              "costEstimate": "₹2000",
              "mapLink": "https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer"
            },
            {
              "time": "10:00 AM",
              "placeName": "Desert Village Tour",
              "description": "Visit to traditional desert village",
              "category": "Culture",
              "costEstimate": "₹800",
              "mapLink": "https://maps.google.com/?q=Khuri+Village+Jaisalmer"
            },
            {
              "time": "4:00 PM",
              "placeName": "Desert National Park",
              "description": "Wildlife safari with naturalist",
              "category": "Adventure",
              "costEstimate": "₹1500",
              "mapLink": "https://maps.google.com/?q=Desert+National+Park+Jaisalmer"
            },
            {
              "time": "7:00 PM",
              "placeName": "Cultural Evening",
              "description": "Folk music and dance performance",
              "category": "Culture",
              "costEstimate": "₹1000",
              "mapLink": "https://maps.google.com/?q=Desert+Cultural+Centre+Jaisalmer"
            }
          ],
          "food": [
            {
              "restaurant": "Desert Boys Dhani",
              "specialty": "Traditional Desert Cuisine",
              "approxCost": "₹800"
            },
            {
              "restaurant": "Sunset Cafe",
              "specialty": "Multi-cuisine Dining",
              "approxCost": "₹600"
            }
          ],
          "stay": {
            "name": "Suryagarh Jaisalmer",
            "category": "5-Star Heritage Hotel",
            "priceRange": "₹12000/night",
            "mapLink": "https://maps.google.com/?q=Suryagarh+Jaisalmer"
          },
          "localBusiness": [
            {
              "name": "Desert Artisans",
              "description": "Traditional desert handicrafts"
            },
            {
              "name": "Silk Route Gallery",
              "description": "Desert art and artifacts"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹18700",
            "category": "Mid"
          },
          "tips": [
            "Start desert safari early morning",
            "Carry sunscreen and hat",
            "Book cultural show in advance"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        },
        {
          "day": 7,
          "title": "Bikaner Heritage Experience",
          "theme": "Culture + Food",
          "activities": [
            {
              "time": "8:00 AM",
              "placeName": "Travel to Bikaner",
              "description": "Private car transfer",
              "category": "Travel",
              "costEstimate": "₹3500",
              "mapLink": "https://maps.google.com/?q=Bikaner+Rajasthan"
            },
            {
              "time": "11:00 AM",
              "placeName": "Junagarh Fort",
              "description": "Guided heritage tour",
              "category": "Culture",
              "costEstimate": "₹600",
              "mapLink": "https://maps.google.com/?q=Junagarh+Fort+Bikaner"
            },
            {
              "time": "2:00 PM",
              "placeName": "Camel Research Farm",
              "description": "Guided tour with experts",
              "category": "Culture",
              "costEstimate": "₹200",
              "mapLink": "https://maps.google.com/?q=Camel+Research+Farm+Bikaner"
            },
            {
              "time": "4:00 PM",
              "placeName": "Rampuria Havelis",
              "description": "Architecture photography tour",
              "category": "Culture",
              "costEstimate": "₹300",
              "mapLink": "https://maps.google.com/?q=Rampuria+Haveli+Bikaner"
            }
          ],
          "food": [
            {
              "restaurant": "Gallops Restaurant",
              "specialty": "Rajasthani Thali",
              "approxCost": "₹600"
            },
            {
              "restaurant": "Chhotu Motu Joshi",
              "specialty": "Famous Bikaneri Bhujia",
              "approxCost": "₹200"
            }
          ],
          "stay": {
            "name": "Narendra Bhawan",
            "category": "Heritage Hotel",
            "priceRange": "₹8000/night",
            "mapLink": "https://maps.google.com/?q=Narendra+Bhawan+Bikaner"
          },
          "localBusiness": [
            {
              "name": "Bikaneri Namkeen",
              "description": "Traditional snacks and sweets"
            },
            {
              "name": "Kund Arts",
              "description": "Local handicrafts and textiles"
            }
          ],
          "budgetSummary": {
            "estimatedCost": "₹13400",
            "category": "Mid"
          },
          "tips": [
            "Try famous Bikaneri bhujia",
            "Book heritage walk in advance",
            "Visit Junagarh Fort early morning"
          ],
          "cta": {
            "bookNowUrl": "#",
            "addToFavorites": true
          }
        }
      ]
    }
  }
};