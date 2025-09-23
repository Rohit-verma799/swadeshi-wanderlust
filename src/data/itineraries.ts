export interface ItineraryDay {
  day: number;
  title: string;
  places: string[];
  hotels: string[];
  description: string;
  activities: string[];
}

export interface Itinerary {
  destination: string;
  days: number;
  budget: string;
  itinerary: ItineraryDay[];
}

export const sampleItineraries: Record<string, Itinerary[]> = {
  "Rajasthan": [
    {
      destination: "Rajasthan",
      days: 5,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur - The Pink City",
          places: ["Hawa Mahal", "City Palace", "Jantar Mantar"],
          hotels: ["Hotel Pearl Palace", "Rambagh Palace"],
          description: "Explore the magnificent Pink City with its royal heritage and stunning architecture.",
          activities: ["Palace tour", "Local market shopping", "Traditional Rajasthani dinner"]
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          places: ["Amber Fort", "Jal Mahal", "Nahargarh Fort"],
          hotels: ["Hotel Pearl Palace", "Rambagh Palace"],
          description: "Visit the majestic forts and experience the royal grandeur of Rajasthan.",
          activities: ["Elephant ride", "Fort exploration", "Sunset viewing"]
        },
        {
          day: 3,
          title: "Journey to Jodhpur - The Blue City",
          places: ["Mehrangarh Fort", "Jaswant Thada", "Clock Tower Market"],
          hotels: ["Ajit Bhawan", "Umaid Bhawan Palace"],
          description: "Travel to the Blue City and explore its magnificent fort and vibrant markets.",
          activities: ["Fort museum visit", "Local handicraft shopping", "Blue city walk"]
        },
        {
          day: 4,
          title: "Jodhpur to Udaipur - City of Lakes",
          places: ["City Palace Udaipur", "Lake Pichola", "Jag Mandir"],
          hotels: ["Hotel Udaivilas", "Shiv Niwas Palace"],
          description: "Experience the romantic city of lakes with its beautiful palaces and serene waters.",
          activities: ["Boat ride", "Palace visit", "Lakeside dinner"]
        },
        {
          day: 5,
          title: "Udaipur Exploration & Departure",
          places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Bagore Ki Haveli"],
          hotels: ["Hotel Udaivilas", "Shiv Niwas Palace"],
          description: "Final day exploring the gardens and cultural sites before departure.",
          activities: ["Garden visit", "Cultural show", "Shopping for souvenirs"]
        }
      ]
    }
  ],
  "Kerala": [
    {
      destination: "Kerala",
      days: 6,
      budget: "High",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi - Gateway to Kerala",
          places: ["Fort Kochi", "Chinese Fishing Nets", "St. Francis Church"],
          hotels: ["Casino Hotel", "Taj Malabar Resort"],
          description: "Explore the historic port city with its colonial charm and maritime heritage.",
          activities: ["Heritage walk", "Spice market visit", "Kathakali performance"]
        },
        {
          day: 2,
          title: "Munnar Hill Station",
          places: ["Tea Gardens", "Mattupetty Dam", "Echo Point"],
          hotels: ["Windermere Estate", "Tea Valley Resort"],
          description: "Journey to the beautiful hill station famous for tea plantations.",
          activities: ["Tea factory tour", "Nature walks", "Boating"]
        },
        {
          day: 3,
          title: "Thekkady Wildlife Experience",
          places: ["Periyar Wildlife Sanctuary", "Spice Plantations", "Kumily"],
          hotels: ["Spice Village", "Cardamom County"],
          description: "Wildlife safari and spice plantation tours in the Western Ghats.",
          activities: ["Jungle safari", "Spice tour", "Bamboo rafting"]
        },
        {
          day: 4,
          title: "Alleppey Backwaters",
          places: ["Backwater Canals", "Kumarakom", "Vembanad Lake"],
          hotels: ["Houseboat Stay", "Kumarakom Lake Resort"],
          description: "Experience the serene backwaters on traditional houseboats.",
          activities: ["Houseboat cruise", "Village visit", "Ayurvedic massage"]
        },
        {
          day: 5,
          title: "Kovalam Beach Relaxation",
          places: ["Lighthouse Beach", "Hawah Beach", "Samudra Beach"],
          hotels: ["Leela Kovalam", "Taj Green Cove"],
          description: "Relax on the pristine beaches and enjoy water activities.",
          activities: ["Beach relaxation", "Water sports", "Sunset viewing"]
        },
        {
          day: 6,
          title: "Trivandrum & Departure",
          places: ["Padmanabhaswamy Temple", "Napier Museum", "Zoo"],
          hotels: ["Leela Kovalam", "Taj Green Cove"],
          description: "Explore the capital city before departure.",
          activities: ["Temple visit", "Museum tour", "Shopping"]
        }
      ]
    }
  ],
  "Goa": [
    {
      destination: "Goa",
      days: 4,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "North Goa Beaches & Nightlife",
          places: ["Calangute Beach", "Baga Beach", "Anjuna Flea Market"],
          hotels: ["The Leela Goa", "W Goa"],
          description: "Discover the vibrant beaches and lively nightlife of North Goa.",
          activities: ["Water sports", "Beach shack hopping", "Night market shopping"]
        },
        {
          day: 2,
          title: "South Goa & Heritage",
          places: ["Palolem Beach", "Colva Beach", "Basilica of Bom Jesus"],
          hotels: ["Park Hyatt Goa Resort and Spa", "Taj Exotica Resort & Spa"],
          description: "Relax on the serene beaches of South Goa and explore its colonial heritage.",
          activities: ["Dolphin sighting tour", "Church visit", "Beach relaxation"]
        },
        {
          day: 3,
          title: "Old Goa & Spice Plantations",
          places: ["Se Cathedral", "Church of St. Cajetan", "Savoi Spice Plantation"],
          hotels: ["Park Hyatt Goa Resort and Spa", "Taj Exotica Resort & Spa"],
          description: "Explore the historical churches of Old Goa and immerse yourself in nature.",
          activities: ["Heritage site tour", "Spice plantation walk", "Goan cuisine cooking class"]
        },
        {
          day: 4,
          title: "Explore Panjim & Departure",
          places: ["Fontainhas", "Our Lady of the Immaculate Conception Church"],
          hotels: ["The Leela Goa", "W Goa"],
          description: "Wander through the colourful Latin Quarter of Panjim before departing.",
          activities: ["City walk", "Shopping for souvenirs", "Ferry ride"]
        }
      ]
    }
  ],
  "Himachal Pradesh": [
    {
      destination: "Himachal Pradesh",
      days: 7,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Shimla - The Queen of Hills",
          places: ["The Mall Road", "Christ Church", "Jakhoo Temple"],
          hotels: ["The Oberoi Cecil", "Hotel Willow Banks"],
          description: "Start your Himalayan journey in the colonial charm of Shimla.",
          activities: ["Toy train ride", "Local market exploration", "Temple visit"]
        },
        {
          day: 2,
          title: "Shimla & Kufri Exploration",
          places: ["Kufri", "Himalayan Nature Park", "Fagu"],
          hotels: ["The Oberoi Cecil", "Hotel Willow Banks"],
          description: "Day trip to Kufri for snow activities and stunning views.",
          activities: ["Yak riding", "Adventure sports", "Nature photography"]
        },
        {
          day: 3,
          title: "Journey to Manali - Valley of Gods",
          places: ["Hadimba Temple", "Old Manali", "Manu Temple"],
          hotels: ["The Himalayan", "Solang Valley Resort"],
          description: "Travel to the picturesque town of Manali.",
          activities: ["Temple tour", "Walk along Beas River", "Cafe hopping"]
        },
        {
          day: 4,
          title: "Manali Adventure",
          places: ["Solang Valley", "Rohtang Pass (seasonal)", "Vashisht Hot Springs"],
          hotels: ["The Himalayan", "Solang Valley Resort"],
          description: "Engage in thrilling adventure activities amidst the snow-capped mountains.",
          activities: ["Paragliding", "Skiing (seasonal)", "River rafting"]
        },
        {
          day: 5,
          title: "Journey to Dalhousie",
          places: ["Khajjiar (Mini Switzerland of India)", "Chamba"],
          hotels: ["Fortune Khajjiar", "Grand View Hotel"],
          description: "Travel to the serene town of Dalhousie and visit Khajjiar.",
          activities: ["Nature walk", "Horse riding", "Boating"]
        },
        {
          day: 6,
          title: "Dalhousie & Local Sightseeing",
          places: ["St. Francis' Church", "Subhash Baoli", "Kalatop Wildlife Sanctuary"],
          hotels: ["Fortune Khajjiar", "Grand View Hotel"],
          description: "Explore the colonial architecture and natural beauty of Dalhousie.",
          activities: ["Trekking", "Nature photography", "Shopping"]
        },
        {
          day: 7,
          title: "Departure from Pathankot",
          places: ["Pathankot"],
          hotels: ["Fortune Khajjiar", "Grand View Hotel"],
          description: "Travel to Pathankot for your onward journey.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Uttarakhand": [
    {
      destination: "Uttarakhand",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Dehradun & Mussoorie",
          places: ["Mall Road, Mussoorie", "Gun Hill"],
          hotels: ["JW Marriott Mussoorie Walnut Grove Resort & Spa", "The Claridges Nabha Residence"],
          description: "Begin your journey in the \"Queen of the Hills\" and explore its charming vistas.",
          activities: ["Ropeway ride", "Shopping on Mall Road", "Evening walk"]
        },
        {
          day: 2,
          title: "Mussoorie & Kempty Falls",
          places: ["Kempty Falls", "Company Garden", "Lal Tibba"],
          hotels: ["JW Marriott Mussoorie Walnut Grove Resort & Spa", "The Claridges Nabha Residence"],
          description: "Visit the famous Kempty Falls and enjoy the scenic beauty of Mussoorie.",
          activities: ["Boating", "Photography", "Sunset viewing"]
        },
        {
          day: 3,
          title: "Journey to Rishikesh - The Yoga Capital",
          places: ["Laxman Jhula", "Ram Jhula", "Parmarth Niketan Ashram"],
          hotels: ["Aloha on the Ganges", "Taj Rishikesh Resort & Spa"],
          description: "Travel to Rishikesh and immerse yourself in spirituality and adventure.",
          activities: ["Ganga Aarti ceremony", "Ashram visit", "River rafting"]
        },
        {
          day: 4,
          title: "Rishikesh Adventure & Spirituality",
          places: ["Neer Garh Waterfall", "Beatles Ashram"],
          hotels: ["Aloha on the Ganges", "Taj Rishikesh Resort & Spa"],
          description: "Experience thrilling activities and find peace at the famous ashram.",
          activities: ["Bungee jumping", "Trekking", "Meditation"]
        },
        {
          day: 5,
          title: "Journey to Nainital - The City of Lakes",
          places: ["Naini Lake", "Naina Devi Temple", "The Mall Road"],
          hotels: ["The Naini Retreat", "Cygnett Resort Mountain Vows"],
          description: "Travel to Nainital and enjoy a serene experience around its beautiful lake.",
          activities: ["Boating", "Temple visit", "Shopping"]
        },
        {
          day: 6,
          title: "Nainital Sightseeing & Departure",
          places: ["Snow View Point", "Tiffin Top", "Sattal"],
          hotels: ["The Naini Retreat", "Cygnett Resort Mountain Vows"],
          description: "Explore the scenic viewpoints and surrounding lakes before departure.",
          activities: ["Cable car ride", "Horse riding", "Photography"]
        }
      ]
    }
  ],
  "Jammu & Kashmir": [
    {
      destination: "Jammu & Kashmir",
      days: 7,
      budget: "High",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Srinagar - The Paradise on Earth",
          places: ["Dal Lake", "Shikara Ride", "Mughal Gardens"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Experience the serene beauty of Srinagar with a traditional Shikara ride on Dal Lake.",
          activities: ["Shikara ride", "Garden tour", "Shopping for Kashmiri handicrafts"]
        },
        {
          day: 2,
          title: "Srinagar & Gulmarg",
          places: ["Gulmarg Gondola", "Khilanmarg"],
          hotels: ["The Khyber Himalayan Resort & Spa", "Hotel Highlands Park"],
          description: "Travel to Gulmarg for adventure activities and breathtaking views.",
          activities: ["Gondola ride", "Skiing (seasonal)", "Snowboarding"]
        },
        {
          day: 3,
          title: "Pahalgam - Valley of Shepherds",
          places: ["Betaab Valley", "Aru Valley", "Chandanwari"],
          hotels: ["The Chinar Resort & Spa", "Hotel Heevan Pahalgam"],
          description: "Explore the beautiful valleys and meadows of Pahalgam.",
          activities: ["Horse riding", "River rafting", "Trekking"]
        },
        {
          day: 4,
          title: "Back to Srinagar & Shopping",
          places: ["Pari Mahal", "Shankaracharya Temple"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Visit ancient sites and shop for local goods in Srinagar.",
          activities: ["Temple visit", "Shopping for pashmina and saffron"]
        },
        {
          day: 5,
          title: "Srinagar & Sonamarg",
          places: ["Thajiwas Glacier", "Zojila Pass"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Day trip to Sonamarg, the 'Meadow of Gold', for stunning glacier views.",
          activities: ["Glacier trek", "Sledging", "Horse riding"]
        },
        {
          day: 6,
          title: "Houseboat Stay Experience",
          places: ["Nigeen Lake"],
          hotels: ["Royal Group of Houseboats", "New Heritage Houseboats"],
          description: "Spend a relaxing day and night on a traditional houseboat.",
          activities: ["Houseboat relaxation", "Local cuisine experience", "Canoeing"]
        },
        {
          day: 7,
          title: "Departure from Srinagar",
          places: ["Srinagar Airport"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Departure from Srinagar with beautiful memories.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Maharashtra": [
    {
      destination: "Maharashtra",
      days: 7,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mumbai - The City of Dreams",
          places: ["Gateway of India", "Marine Drive", "Colaba Causeway"],
          hotels: ["The Taj Mahal Palace", "Trident Nariman Point"],
          description: "Explore the bustling metropolis of Mumbai, a city of contrasts.",
          activities: ["City tour", "Shopping", "Street food tasting"]
        },
        {
          day: 2,
          title: "Mumbai Film City & Elephanta Caves",
          places: ["Film City", "Elephanta Caves"],
          hotels: ["The Taj Mahal Palace", "Trident Nariman Point"],
          description: "Visit the heart of the Indian film industry and ancient caves.",
          activities: ["Studio tour", "Ferry ride", "Cave exploration"]
        },
        {
          day: 3,
          title: "Journey to Lonavala & Khandala",
          places: ["Tiger Point", "Bhushi Dam", "Lonavala Lake"],
          hotels: ["Della Resorts", "Fariyas Resort Lonavala"],
          description: "Travel to the popular hill stations near Mumbai for scenic beauty.",
          activities: ["Waterfall visit", "Nature walks", "Local sweet shopping"]
        },
        {
          day: 4,
          title: "Journey to Nashik - Wine Capital of India",
          places: ["Sula Vineyards", "York Winery", "Trimbakeshwar Temple"],
          hotels: ["Sula Vineyards", "The Gateway Hotel Ambad"],
          description: "Taste some of India's finest wines and visit ancient temples.",
          activities: ["Wine tasting", "Vineyard tour", "Spiritual visit"]
        },
        {
          day: 5,
          title: "Aurangabad - Ancient Caves",
          places: ["Ajanta Caves", "Ellora Caves"],
          hotels: ["Welcomhotel by ITC Hotels, Rama International", "The Manor Hotel"],
          description: "Discover the UNESCO World Heritage Sites of Ajanta and Ellora.",
          activities: ["Cave exploration", "Photography", "History tour"]
        },
        {
          day: 6,
          title: "Shirdi & Shani Shingnapur",
          places: ["Sai Baba Temple, Shirdi", "Shani Shingnapur Temple"],
          hotels: ["Hotel Sai Palace", "Sun-n-Sand Shirdi"],
          description: "A spiritual day visiting revered temples.",
          activities: ["Pilgrimage", "Spiritual prayers", "Local market visit"]
        },
        {
          day: 7,
          title: "Departure from Mumbai",
          places: ["Mumbai Airport"],
          hotels: ["The Taj Mahal Palace", "Trident Nariman Point"],
          description: "Travel back to Mumbai for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Karnataka": [
    {
      destination: "Karnataka",
      days: 7,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bengaluru - The Silicon Valley of India",
          places: ["Lalbagh Botanical Garden", "Cubbon Park", "Bangalore Palace"],
          hotels: ["The Leela Palace Bengaluru", "The Ritz-Carlton, Bangalore"],
          description: "Explore the Garden City with its modern vibe and historical landmarks.",
          activities: ["Garden walk", "Palace tour", "Pub hopping on MG Road"]
        },
        {
          day: 2,
          title: "Journey to Mysuru - The City of Palaces",
          places: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
          hotels: ["Radisson Blu Plaza Hotel Mysore", "Fortune JP Palace"],
          description: "Travel to Mysuru and witness the grandeur of its royal past.",
          activities: ["Palace light show", "Hilltop temple visit", "Musical fountain show"]
        },
        {
          day: 3,
          title: "Mysuru Heritage & Srirangapatna",
          places: ["Srirangapatna", "St. Philomena's Church", "Mysuru Zoo"],
          hotels: ["Radisson Blu Plaza Hotel Mysore", "Fortune JP Palace"],
          description: "Explore the historical sites and religious landmarks around Mysuru.",
          activities: ["History tour", "Church visit", "Zoo visit"]
        },
        {
          day: 4,
          title: "Journey to Coorg - Scotland of India",
          places: ["Abbey Falls", "Raja's Seat", "Omkareshwara Temple"],
          hotels: ["Taj Madikeri Resort & Spa", "Club Mahindra Madikeri, Coorg"],
          description: "Travel to the misty hills of Coorg, famous for its coffee plantations.",
          activities: ["Coffee plantation tour", "Waterfall visit", "Sunset viewing"]
        },
        {
          day: 5,
          title: "Coorg & Bylakuppe",
          places: ["Dubare Elephant Camp", "Bylakuppe Tibetan Settlement"],
          hotels: ["Taj Madikeri Resort & Spa", "Club Mahindra Madikeri, Coorg"],
          description: "Interact with elephants and visit the unique Tibetan settlement.",
          activities: ["Elephant bathing", "Monastery visit", "Local handicraft shopping"]
        },
        {
          day: 6,
          title: "Journey to Hampi - Ancient City",
          places: ["Virupaksha Temple", "Stone Chariot", "Hampi Bazaar"],
          hotels: ["Evolve Back, Hampi", "Hyatt Place Hampi"],
          description: "Travel to the UNESCO World Heritage Site of Hampi with its ancient ruins.",
          activities: ["Temple tour", "Coracle ride on Tungabhadra River", "Sunset at Hemakuta Hill"]
        },
        {
          day: 7,
          title: "Hampi Exploration & Departure",
          places: ["Vitthala Temple Complex", "Lotus Mahal"],
          hotels: ["Evolve Back, Hampi", "Hyatt Place Hampi"],
          description: "Explore more of the ruins before heading to the airport.",
          activities: ["Archaeological site tour", "Photography", "Travel"]
        }
      ]
    }
  ],
  "Tamil Nadu": [
    {
      destination: "Tamil Nadu",
      days: 7,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Chennai - The Gateway to South India",
          places: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
          hotels: ["ITC Grand Chola, a Luxury Collection Hotel", "The Leela Palace Chennai"],
          description: "Explore the cultural and historical capital of Tamil Nadu.",
          activities: ["Beach walk", "Temple visit", "Museum tour"]
        },
        {
          day: 2,
          title: "Mahabalipuram & Pondicherry",
          places: ["Shore Temple", "Panch Rathas", "Aurobindo Ashram"],
          hotels: ["Radisson Blu Resort Temple Bay Mamallapuram", "Le Dupleix, Pondicherry"],
          description: "Travel to the ancient port city of Mahabalipuram and the French colonial town of Pondicherry.",
          activities: ["Heritage site visit", "Ashram visit", "Cycling through French Quarter"]
        },
        {
          day: 3,
          title: "Pondicherry & Chidambaram",
          places: ["Auroville", "Nataraja Temple, Chidambaram"],
          hotels: ["Le Dupleix, Pondicherry", "Hotel Saradharam"],
          description: "Visit the spiritual community of Auroville and the ancient temple of Chidambaram.",
          activities: ["Meditation", "Temple visit", "Local market shopping"]
        },
        {
          day: 4,
          title: "Journey to Madurai - Temple City",
          places: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace"],
          hotels: ["Heritage Madurai", "The Gateway Hotel Pasumalai Madurai"],
          description: "Travel to the vibrant city of Madurai, known for its magnificent temples.",
          activities: ["Temple tour", "Palace visit", "Local cuisine tasting"]
        },
        {
          day: 5,
          title: "Madurai & Kodaikanal",
          places: ["Kodaikanal Lake", "Coaker's Walk"],
          hotels: ["The Tamara Kodaikanal", "Sterling Kodai Lake"],
          description: "Journey to the hill station of Kodaikanal for its pleasant climate and natural beauty.",
          activities: ["Boating", "Cycling", "Nature walk"]
        },
        {
          day: 6,
          title: "Kodaikanal & Departure",
          places: ["Pillar Rocks", "Guna Cave"],
          hotels: ["The Tamara Kodaikanal", "Sterling Kodai Lake"],
          description: "Explore the famous viewpoints and caves before heading back.",
          activities: ["Trekking", "Photography", "Local shopping"]
        },
        {
          day: 7,
          title: "Departure from Madurai Airport",
          places: ["Madurai Airport"],
          hotels: ["The Gateway Hotel Pasumalai Madurai"],
          description: "Travel to the airport for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "West Bengal": [
    {
      destination: "West Bengal",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kolkata - The City of Joy",
          places: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple"],
          hotels: ["The Oberoi Grand", "ITC Sonar"],
          description: "Experience the bustling cultural hub of Kolkata.",
          activities: ["City tour", "Tram ride", "Street food tasting"]
        },
        {
          day: 2,
          title: "Kolkata Art & Culture",
          places: ["Indian Museum", "Mother House", "Princep Ghat"],
          hotels: ["The Oberoi Grand", "ITC Sonar"],
          description: "Explore the rich art, history, and spiritual side of the city.",
          activities: ["Museum visit", "Boat ride on Hooghly", "Shopping at New Market"]
        },
        {
          day: 3,
          title: "Journey to Darjeeling - Queen of the Hills",
          places: ["Darjeeling Himalayan Railway (Toy Train)", "Batasia Loop"],
          hotels: ["Mayfair Darjeeling", "Hotel Sonam Paljor"],
          description: "Travel to the scenic hill station of Darjeeling.",
          activities: ["Toy train ride", "Tea garden tour", "Photography"]
        },
        {
          day: 4,
          title: "Darjeeling Tiger Hill & Tea Gardens",
          places: ["Tiger Hill", "Ghoom Monastery", "Happy Valley Tea Estate"],
          hotels: ["Mayfair Darjeeling", "Hotel Sonam Paljor"],
          description: "Witness the magnificent sunrise over Kanchenjunga and visit tea plantations.",
          activities: ["Sunrise viewing", "Monastery visit", "Tea tasting"]
        },
        {
          day: 5,
          title: "Kalimpong Exploration",
          places: ["Durpin Dara Hill", "Zang Dhok Palri Phodang Monastery"],
          hotels: ["Mayfair Himalayan Spa Resort", "Sinclairs Retreat Kalimpong"],
          description: "A day trip to the serene town of Kalimpong.",
          activities: ["Monastery tour", "Flower garden visit", "Scenic drive"]
        },
        {
          day: 6,
          title: "Departure from Bagdogra",
          places: ["Bagdogra Airport"],
          hotels: ["Mayfair Darjeeling", "Hotel Sonam Paljor"],
          description: "Travel to Bagdogra for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Gujarat": [
    {
      destination: "Gujarat",
      days: 7,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ahmedabad - Heritage City",
          places: ["Sabarmati Ashram", "Adalaj Stepwell", "Hutheesing Jain Temple"],
          hotels: ["Hyatt Regency Ahmedabad", "The House of MG"],
          description: "Explore the city's rich history and architectural marvels.",
          activities: ["Ashram visit", "Heritage walk", "Traditional Gujarati dinner"]
        },
        {
          day: 2,
          title: "Ahmedabad & Modhera",
          places: ["Modhera Sun Temple", "Rani ki Vav (Patan)"],
          hotels: ["Hyatt Regency Ahmedabad", "The House of MG"],
          description: "Day trip to the magnificent Sun Temple and the UNESCO site of Rani ki Vav.",
          activities: ["Temple tour", "Stepwell exploration", "Photography"]
        },
        {
          day: 3,
          title: "Journey to Dwarka - The Kingdom of Lord Krishna",
          places: ["Dwarkadhish Temple", "Rukmini Devi Temple"],
          hotels: ["The Dwarika", "Hotel Nandini"],
          description: "Travel to the spiritual city of Dwarka on the Arabian Sea coast.",
          activities: ["Spiritual visit", "Evening aarti ceremony", "Coastal walk"]
        },
        {
          day: 4,
          title: "Dwarka & Bet Dwarka",
          places: ["Nageshwar Jyotirlinga Temple", "Bet Dwarka Island"],
          hotels: ["The Dwarika", "Hotel Nandini"],
          description: "Explore the ancient pilgrimage sites and a sacred island.",
          activities: ["Temple visit", "Boat ride to island", "Dolphin spotting"]
        },
        {
          day: 5,
          title: "Journey to Somnath",
          places: ["Somnath Temple", "Triveni Sangam"],
          hotels: ["Lords Inn Somnath", "Sarovar Portico Somnath"],
          description: "Travel to Somnath, home to one of the 12 Jyotirlinga shrines of Shiva.",
          activities: ["Temple aarti", "Beach relaxation", "Scenic walk"]
        },
        {
          day: 6,
          title: "Somnath & Gir National Park",
          places: ["Gir National Park & Wildlife Sanctuary"],
          hotels: ["The Fern Gir Forest Resort", "Gir Serai, a Taj Safari"],
          description: "Travel to Gir for a wildlife safari to see the Asiatic lions.",
          activities: ["Jungle safari", "Wildlife spotting", "Nature photography"]
        },
        {
          day: 7,
          title: "Departure from Diu or Rajkot",
          places: ["Diu Airport", "Rajkot Airport"],
          hotels: ["The Fern Gir Forest Resort", "Gir Serai, a Taj Safari"],
          description: "Travel to the nearest airport for departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Punjab": [
    {
      destination: "Punjab",
      days: 5,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Amritsar - The Holy City",
          places: ["Golden Temple", "Jallianwala Bagh"],
          hotels: ["Hyatt Regency Amritsar", "Radisson Blu Hotel Amritsar"],
          description: "Start your spiritual journey in Amritsar, home to the revered Golden Temple.",
          activities: ["Langar service", "Temple visit", "History walk"]
        },
        {
          day: 2,
          title: "Amritsar & Wagah Border",
          places: ["Wagah Border", "Akal Takht"],
          hotels: ["Hyatt Regency Amritsar", "Radisson Blu Hotel Amritsar"],
          description: "Witness the iconic border ceremony and explore more of Amritsar's spiritual sites.",
          activities: ["Beating Retreat ceremony", "Shopping for Punjabi juttis and suits"]
        },
        {
          day: 3,
          title: "Journey to Chandigarh - The City Beautiful",
          places: ["Rock Garden", "Sukhna Lake", "Rose Garden"],
          hotels: ["Hyatt Regency Chandigarh", "Taj Chandigarh"],
          description: "Travel to Chandigarh and explore the city's unique architecture and gardens.",
          activities: ["Boating", "Walking tour", "Le Corbusier Centre visit"]
        },
        {
          day: 4,
          title: "Chandigarh & Patiala",
          places: ["Qila Mubarak", "Sheesh Mahal"],
          hotels: ["Hyatt Regency Chandigarh", "Taj Chandigarh"],
          description: "A day trip to the royal city of Patiala, known for its palaces and whiskey.",
          activities: ["Palace visit", "History tour", "Local food tasting"]
        },
        {
          day: 5,
          title: "Departure from Chandigarh",
          places: ["Chandigarh International Airport"],
          hotels: ["Hyatt Regency Chandigarh", "Taj Chandigarh"],
          description: "Departure from Chandigarh with beautiful memories.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Uttar Pradesh": [
    {
      destination: "Uttar Pradesh",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Agra - City of Taj",
          places: ["Taj Mahal", "Agra Fort", "Itimad-ud-Daulah's Tomb"],
          hotels: ["The Oberoi Amarvilas", "ITC Mughal, A Luxury Collection Hotel"],
          description: "Witness the timeless beauty of the Taj Mahal and other Mughal monuments.",
          activities: ["Sunrise visit to Taj Mahal", "Fort exploration", "Shopping for marble handicrafts"]
        },
        {
          day: 2,
          title: "Journey to Varanasi - The Spiritual Capital",
          places: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple"],
          hotels: ["Taj Ganges, Varanasi", "BrijRama Palace"],
          description: "Travel to the oldest living city and experience its vibrant spirituality.",
          activities: ["Ganga aarti ceremony", "Temple visit", "Evening boat ride"]
        },
        {
          day: 3,
          title: "Varanasi Ganges & Sarnath",
          places: ["Assi Ghat", "Sarnath (Dhamek Stupa)"],
          hotels: ["Taj Ganges, Varanasi", "BrijRama Palace"],
          description: "Explore the ghats and the sacred Buddhist site of Sarnath.",
          activities: ["Morning boat ride on Ganges", "Sarnath monastery tour", "Shopping for silk sarees"]
        },
        {
          day: 4,
          title: "Journey to Lucknow - The City of Nawabs",
          places: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza"],
          hotels: ["Taj Mahal Lucknow", "Hyatt Regency Lucknow"],
          description: "Travel to Lucknow, known for its refined culture, food, and architecture.",
          activities: ["Historical site tour", "Tasting Awadhi cuisine", "Shopping for Chikankari work"]
        },
        {
          day: 5,
          title: "Lucknow Heritage & Departure",
          places: ["Residency", "Lucknow Zoo"],
          hotels: ["Taj Mahal Lucknow", "Hyatt Regency Lucknow"],
          description: "Explore more of the city's heritage and then depart.",
          activities: ["History walk", "Zoo visit", "Shopping for local sweets"]
        },
        {
          day: 6,
          title: "Departure from Lucknow",
          places: ["Chaudhary Charan Singh International Airport, Lucknow"],
          hotels: ["Taj Mahal Lucknow", "Hyatt Regency Lucknow"],
          description: "Departure from Lucknow.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Madhya Pradesh": [
    {
      destination: "Madhya Pradesh",
      days: 7,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bhopal - City of Lakes",
          places: ["Bhojtal Lake", "Upper Lake", "Tribal Museum"],
          hotels: ["Jehan Numa Palace Hotel", "Noor Us Sabah Palace"],
          description: "Begin your journey in the beautiful 'City of Lakes' and explore its serene landscapes.",
          activities: ["Boat ride", "Museum visit", "Local market tour"]
        },
        {
          day: 2,
          title: "Bhopal & Sanchi Stupa",
          places: ["Sanchi Stupa", "Bhimbetka Rock Shelters"],
          hotels: ["Jehan Numa Palace Hotel", "Noor Us Sabah Palace"],
          description: "Explore the UNESCO World Heritage Sites of Sanchi and Bhimbetka.",
          activities: ["Archaeological site tour", "Cave art exploration"]
        },
        {
          day: 3,
          title: "Journey to Khajuraho - Temple Town",
          places: ["Khajuraho Group of Temples", "Duladeo Temple"],
          hotels: ["Radisson Jass Khajuraho", "The Lalit Temple View Khajuraho"],
          description: "Travel to Khajuraho, famous for its intricate temple carvings.",
          activities: ["Temple tour", "Sound and light show", "Photography"]
        },
        {
          day: 4,
          title: "Khajuraho & Panna National Park",
          places: ["Panna National Park"],
          hotels: ["Radisson Jass Khajuraho", "The Lalit Temple View Khajuraho"],
          description: "A wildlife safari in Panna National Park, home to tigers and other wildlife.",
          activities: ["Jungle safari", "Nature photography"]
        },
        {
          day: 5,
          title: "Journey to Gwalior - The Fort City",
          places: ["Gwalior Fort", "Jai Vilas Palace"],
          hotels: ["Radisson Gwalior", "Hotel Central Park"],
          description: "Travel to Gwalior and explore its majestic fort and royal history.",
          activities: ["Fort exploration", "Palace museum visit", "Light and sound show"]
        },
        {
          day: 6,
          title: "Gwalior & Orchha",
          places: ["Orchha Fort Complex", "Ram Raja Temple"],
          hotels: ["Radisson Gwalior", "Hotel Central Park"],
          description: "A day trip to the medieval town of Orchha on the banks of Betwa River.",
          activities: ["Historical tour", "River walk", "Temple visit"]
        },
        {
          day: 7,
          title: "Departure from Gwalior",
          places: ["Gwalior Airport"],
          hotels: ["Radisson Gwalior", "Hotel Central Park"],
          description: "Travel to the airport for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Assam": [
    {
      destination: "Assam",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Guwahati - Gateway to Northeast",
          places: ["Kamakhya Temple", "Umananda Temple"],
          hotels: ["Vivanta Guwahati", "Radisson Blu Hotel Guwahati"],
          description: "Begin your journey in the vibrant city of Guwahati.",
          activities: ["Temple visit", "River cruise on Brahmaputra", "Local food tasting"]
        },
        {
          day: 2,
          title: "Journey to Kaziranga National Park",
          places: ["Kaziranga National Park"],
          hotels: ["Iora - The Retreat", "Borgos Resort"],
          description: "Travel to the famous national park, home to the one-horned rhinoceros.",
          activities: ["Evening jungle safari", "Nature walk"]
        },
        {
          day: 3,
          title: "Kaziranga Wildlife Safari",
          places: ["Kaziranga National Park"],
          hotels: ["Iora - The Retreat", "Borgos Resort"],
          description: "Enjoy both elephant and jeep safaris to spot wildlife.",
          activities: ["Elephant safari", "Jeep safari", "Bird watching"]
        },
        {
          day: 4,
          title: "Journey to Majuli - River Island",
          places: ["Satra Monasteries", "River cruise"],
          hotels: ["Dekasang Majuli", "La Maison de Ananda"],
          description: "Travel to the world's largest river island and explore its unique culture.",
          activities: ["Ferry ride", "Monastery visit", "Cultural performance"]
        },
        {
          day: 5,
          title: "Majuli & Tea Estates",
          places: ["Tea Gardens"],
          hotels: ["Dekasang Majuli", "La Maison de Ananda"],
          description: "Explore the scenic tea gardens and learn about tea production.",
          activities: ["Tea plantation tour", "Local village visit", "Shopping for local handicrafts"]
        },
        {
          day: 6,
          title: "Departure from Jorhat",
          places: ["Jorhat Airport"],
          hotels: ["Dekasang Majuli"],
          description: "Travel to the nearest airport for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Odisha": [
    {
      destination: "Odisha",
      days: 6,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bhubaneswar - Temple City",
          places: ["Lingaraj Temple", "Udayagiri and Khandagiri Caves"],
          hotels: ["Mayfair Lagoon", "Swosti Premium"],
          description: "Explore the ancient temples and rock-cut caves of Bhubaneswar.",
          activities: ["Temple tour", "History walk", "Odia cuisine tasting"]
        },
        {
          day: 2,
          title: "Bhubaneswar & Konark",
          places: ["Konark Sun Temple", "Dhauli Shanti Stupa"],
          hotels: ["Mayfair Lagoon", "Swosti Premium"],
          description: "Visit the iconic Sun Temple and the Buddhist peace pagoda.",
          activities: ["Temple exploration", "Sound and light show", "Photography"]
        },
        {
          day: 3,
          title: "Puri - The Sacred City",
          places: ["Jagannath Temple", "Puri Beach"],
          hotels: ["Mayfair Heritage", "Hotel Holiday Resort"],
          description: "Travel to the holy city of Puri and visit the famous Jagannath Temple.",
          activities: ["Temple visit", "Beach relaxation", "Local market shopping"]
        },
        {
          day: 4,
          title: "Puri & Chilika Lake",
          places: ["Chilika Lake", "Nalabana Bird Sanctuary"],
          hotels: ["Mayfair Heritage", "Hotel Holiday Resort"],
          description: "Day trip to the serene Chilika Lake, home to a variety of bird species.",
          activities: ["Boat ride", "Bird watching", "Dolphin spotting"]
        },
        {
          day: 5,
          title: "Puri & Raghurajpur",
          places: ["Raghurajpur Heritage Village"],
          hotels: ["Mayfair Heritage", "Hotel Holiday Resort"],
          description: "Visit the artisan village of Raghurajpur and shop for local art.",
          activities: ["Village tour", "Shopping for Pattachitra paintings"]
        },
        {
          day: 6,
          title: "Departure from Bhubaneswar",
          places: ["Biju Patnaik International Airport, Bhubaneswar"],
          hotels: ["Mayfair Lagoon"],
          description: "Departure from Bhubaneswar with beautiful memories.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Andhra Pradesh": [
    {
      destination: "Andhra Pradesh",
      days: 5,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Tirupati - Spiritual Hub",
          places: ["Tirumala Venkateswara Temple", "Padmavathi Temple"],
          hotels: ["Marasa Sarovar Premiere", "Fortune Select Grand Ridge"],
          description: "Start your journey in the spiritual capital of Tirupati.",
          activities: ["Temple visit", "Spiritual prayers", "Local market tour"]
        },
        {
          day: 2,
          title: "Tirupati & Srikalahasti",
          places: ["Srikalahasti Temple", "Chandragiri Fort"],
          hotels: ["Marasa Sarovar Premiere", "Fortune Select Grand Ridge"],
          description: "A day trip to the ancient Srikalahasti Temple and a historical fort.",
          activities: ["Temple tour", "Fort exploration", "Scenic photography"]
        },
        {
          day: 3,
          title: "Journey to Visakhapatnam - The City of Destiny",
          places: ["Araku Valley", "Borra Caves", "Padmapuram Gardens"],
          hotels: ["Novotel Visakhapatnam Varun Beach", "Welcomhotel by ITC Hotels, Rama International"],
          description: "Travel to Visakhapatnam and explore the scenic Araku Valley.",
          activities: ["Cave exploration", "Garden walk", "Local tribal museum visit"]
        },
        {
          day: 4,
          title: "Visakhapatnam City Tour",
          places: ["Rushikonda Beach", "Submarine Museum", "Kailasagiri Hill Park"],
          hotels: ["Novotel Visakhapatnam Varun Beach", "Welcomhotel by ITC Hotels, Rama International"],
          description: "Relax on the beaches and explore the city's unique attractions.",
          activities: ["Beach relaxation", "Museum tour", "Ropeway ride"]
        },
        {
          day: 5,
          title: "Departure from Visakhapatnam",
          places: ["Visakhapatnam International Airport"],
          hotels: ["Novotel Visakhapatnam Varun Beach"],
          description: "Departure from Visakhapatnam.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Telangana": [
    {
      destination: "Telangana",
      days: 5,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Hyderabad - The City of Pearls",
          places: ["Charminar", "Golconda Fort", "Mecca Masjid"],
          hotels: ["Taj Falaknuma Palace", "ITC Kohenur, a Luxury Collection Hotel"],
          description: "Start your trip in the historic city of Hyderabad, a blend of old and new.",
          activities: ["Historical monument visit", "Local bazaar shopping", "Biryani tasting"]
        },
        {
          day: 2,
          title: "Hyderabad Palaces & Museums",
          places: ["Chowmahalla Palace", "Salar Jung Museum", "Qutb Shahi Tombs"],
          hotels: ["Taj Falaknuma Palace", "ITC Kohenur, a Luxury Collection Hotel"],
          description: "Explore the majestic palaces and rich museum collections.",
          activities: ["Palace tour", "Museum visit", "Light and sound show at Golconda"]
        },
        {
          day: 3,
          title: "Ramoji Film City",
          places: ["Ramoji Film City"],
          hotels: ["Taj Falaknuma Palace", "ITC Kohenur, a Luxury Collection Hotel"],
          description: "Spend a full day at the world's largest film city.",
          activities: ["Studio tour", "Live shows", "Thematic garden exploration"]
        },
        {
          day: 4,
          title: "Journey to Warangal",
          places: ["Warangal Fort", "Thousand Pillar Temple", "Bhadrakali Temple"],
          hotels: ["Haritha Kakatiya Hotel", "The Bliss"],
          description: "Travel to the ancient city of Warangal, known for its temples and forts.",
          activities: ["Temple tour", "Fort exploration", "Photography"]
        },
        {
          day: 5,
          title: "Departure from Hyderabad",
          places: ["Rajiv Gandhi International Airport, Hyderabad"],
          hotels: ["Taj Falaknuma Palace"],
          description: "Travel back to Hyderabad for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Sikkim": [
    {
      destination: "Sikkim",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gangtok - The Himalayan Gateway",
          places: ["MG Marg", "Ganesh Tok", "Hanuman Tok"],
          hotels: ["Mayfair Spa Resort & Casino", "Hotel Sonam Delek"],
          description: "Arrive in the scenic capital of Sikkim and explore the city.",
          activities: ["City walk", "Temple visit", "Shopping for local goods"]
        },
        {
          day: 2,
          title: "Tsomgo Lake & Baba Mandir",
          places: ["Tsomgo Lake", "Baba Harbhajan Singh Mandir"],
          hotels: ["Mayfair Spa Resort & Casino", "Hotel Sonam Delek"],
          description: "A breathtaking day trip to the high-altitude Tsomgo Lake.",
          activities: ["Yak ride", "Cable car ride", "Scenic photography"]
        },
        {
          day: 3,
          title: "Lachen & Gurudongmar Lake",
          places: ["Gurudongmar Lake", "Lachen Monastery"],
          hotels: ["Lachen Village Home Stay", "Hotel Snow Lion Mountain"],
          description: "Journey to Lachen and visit the sacred Gurudongmar Lake.",
          activities: ["High-altitude scenic drive", "Monastery visit", "Trekking"]
        },
        {
          day: 4,
          title: "Lachung & Yumthang Valley",
          places: ["Yumthang Valley (Valley of Flowers)", "Lachung Monastery"],
          hotels: ["The Yuma La", "Hotel Sonam Kanchendzonga"],
          description: "Explore the beautiful Yumthang Valley, also known as the Valley of Flowers.",
          activities: ["Nature walk", "Photography", "Hot spring bath"]
        },
        {
          day: 5,
          title: "Lachung to Gangtok",
          places: ["Seven Sisters Waterfalls", "Phodong Monastery"],
          hotels: ["Mayfair Spa Resort & Casino", "Hotel Sonam Delek"],
          description: "Return to Gangtok with stops at scenic spots.",
          activities: ["Waterfall visit", "Monastery tour", "Road trip"]
        },
        {
          day: 6,
          title: "Departure from Bagdogra",
          places: ["Bagdogra Airport"],
          hotels: ["Mayfair Spa Resort & Casino"],
          description: "Travel to Bagdogra for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ]
};