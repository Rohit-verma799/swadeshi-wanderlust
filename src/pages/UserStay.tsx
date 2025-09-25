import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@clerk/clerk-react';
import { Search, MapPin, DollarSign, Calendar, Utensils, Hotel, Home, Frown, ArrowLeft, Bus } from 'lucide-react';

const SAMPLE_PLACES = {
    Jaipur: [
        { type: 'PG', name: 'Pink City PG House', basePrice: 500 },
        { type: 'Home Kitchen', name: 'Rajasthani Home Kitchen', basePrice: 300 },
        { type: 'Hotel', name: 'Rambagh Inn', basePrice: 2500 }
    ],
    Mumbai: [
        { type: 'PG', name: 'Colaba PG', basePrice: 700 },
        { type: 'Home Kitchen', name: 'Seafood Home Kitchen', basePrice: 400 },
        { type: 'Hotel', name: 'Marine View Hotel', basePrice: 3200 }
    ],
    Delhi: [
        { type: 'PG', name: 'Old Delhi PG', basePrice: 450 },
        { type: 'Home Kitchen', name: 'Chandni Chowk Kitchen', basePrice: 350 },
        { type: 'Hotel', name: 'Connaught Plaza Hotel', basePrice: 2800 }
    ],
    Goa: [
        { type: 'PG', name: 'Anjuna PG', basePrice: 800 },
        { type: 'Home Kitchen', name: 'Goan Home Kitchen', basePrice: 500 },
        { type: 'Hotel', name: 'Beachside Resort', basePrice: 3500 }
    ],
    Agra: [
        { type: 'PG', name: 'Agra PG Stay', basePrice: 400 },
        { type: 'Home Kitchen', name: 'Mughlai Home Kitchen', basePrice: 300 },
        { type: 'Hotel', name: 'Taj View Hotel', basePrice: 2200 }
    ]
};

const JAIPUR_PLACES = {
    'Mansarovar': [
        { type: 'Hotel', name: 'Mansarovar Grand', basePrice: 1000, image: 'https://source.unsplash.com/600x400/?Mansarovar,hotel' },
        { type: 'Hotel', name: 'Hotel Mansarovar Palace', basePrice: 1100, image: 'https://source.unsplash.com/600x400/?Jaipur,hotel' },
        { type: 'PG', name: 'Mansarovar PG Lodge', basePrice: 6000, image: 'https://source.unsplash.com/600x400/?hostel,PG' },
        { type: 'PG', name: 'Affordable PG Mansarovar', basePrice: 6500, image: 'https://source.unsplash.com/600x400/?PG,room' },
        { type: 'Home Kitchen', name: 'Mansarovar Home Kitchen', basePrice: 3000, image: 'https://source.unsplash.com/600x400/?Indian,food' },
        { type: 'Home Kitchen', name: 'Local Eats Mansarovar', basePrice: 3200, image: 'https://source.unsplash.com/600x400/?home-cooked,food' }
    ],
    'Haldighati': [
        { type: 'Hotel', name: 'Haldighati Retreat', basePrice: 1800, image: 'https://source.unsplash.com/600x400/?Haldighati,hotel' },
        { type: 'Hotel', name: 'Haldighati Comforts', basePrice: 2000, image: 'https://source.unsplash.com/600x400/?hotel,rajasthan' },
        { type: 'PG', name: 'Haldighati PG', basePrice: 450, image: 'https://source.unsplash.com/600x400/?PG,hostel' },
        { type: 'PG', name: 'Haldighati Budget PG', basePrice: 420, image: 'https://source.unsplash.com/600x400/?room,PG' },
        { type: 'Home Kitchen', name: 'Haldighati Rasoi', basePrice: 300, image: 'https://source.unsplash.com/600x400/?Rajasthani,food' },
        { type: 'Home Kitchen', name: 'Haldighati Family Kitchen', basePrice: 280, image: 'https://source.unsplash.com/600x400/?homefood,india' }
    ],
    'Pratap Nagar': [
        { type: 'Hotel', name: 'Pratap Nagar Inn', basePrice: 2000, image: 'https://source.unsplash.com/600x400/?Pratap%20Nagar,hotel' },
        { type: 'Hotel', name: 'Pratap Regency', basePrice: 2200, image: 'https://source.unsplash.com/600x400/?resort,hotel' },
        { type: 'PG', name: 'Pratap PG Rooms', basePrice: 550, image: 'https://source.unsplash.com/600x400/?PG,house' },
        { type: 'PG', name: 'Pratap Budget PG', basePrice: 500, image: 'https://source.unsplash.com/600x400/?student,PG' },
        { type: 'Home Kitchen', name: 'Pratap Home Kitchen', basePrice: 320, image: 'https://source.unsplash.com/600x400/?curry,home' },
        { type: 'Home Kitchen', name: 'Pratap Family Dining', basePrice: 300, image: 'https://source.unsplash.com/600x400/?homestyle,food' }
    ],
    'Dwarkapuri': [
        { type: 'Hotel', name: 'Dwarkapuri Hotel & Suites', basePrice: 2400, image: 'https://source.unsplash.com/600x400/?Dwarkapuri,hotel' },
        { type: 'Hotel', name: 'Dwarka Grand', basePrice: 2600, image: 'https://source.unsplash.com/600x400/?luxury,hotel' },
        { type: 'PG', name: 'Dwarkapuri PG', basePrice: 650, image: 'https://source.unsplash.com/600x400/?PG,room' },
        { type: 'PG', name: 'Dwarkapuri Shared Rooms', basePrice: 600, image: 'https://source.unsplash.com/600x400/?hostel,room' },
        { type: 'Home Kitchen', name: 'Dwarkapuri Home Kitchen', basePrice: 360, image: 'https://source.unsplash.com/600x400/?home-cooked,meal' },
        { type: 'Home Kitchen', name: 'Dwarkapuri Tadka', basePrice: 340, image: 'https://source.unsplash.com/600x400/?spicy,food' }
    ],
    'Amber Fort': [
        { type: 'Hotel', name: 'Amber Fort View Hotel', basePrice: 4000, image: 'https://source.unsplash.com/600x400/?Amber%20Fort,hotel' },
        { type: 'Hotel', name: 'Fortside Heritage Hotel', basePrice: 4200, image: 'https://source.unsplash.com/600x400/?heritage,hotel' },
        { type: 'PG', name: 'Amber PG', basePrice: 700, image: 'https://source.unsplash.com/600x400/?PG,jaipur' },
        { type: 'PG', name: 'Amber Budget PG', basePrice: 650, image: 'https://source.unsplash.com/600x400/?budget,PG' },
        { type: 'Home Kitchen', name: 'Amber Local Kitchen', basePrice: 420, image: 'https://source.unsplash.com/600x400/?streetfood,jaipur' },
        { type: 'Home Kitchen', name: 'Amber Spice Home', basePrice: 400, image: 'https://source.unsplash.com/600x400/?homecooking,india' }
    ],
    'Jal Mahal': [
        { type: 'Hotel', name: 'Lakeview Hotel Jaipur', basePrice: 3000, image: 'https://source.unsplash.com/600x400/?Jal%20Mahal,hotel' },
        { type: 'Hotel', name: 'Jal Mahal Retreat', basePrice: 3200, image: 'https://source.unsplash.com/600x400/?lake,hotel' },
        { type: 'PG', name: 'Jal PG Stay', basePrice: 600, image: 'https://source.unsplash.com/600x400/?PG,jaipur' },
        { type: 'PG', name: 'Jal Mahal PG', basePrice: 580, image: 'https://source.unsplash.com/600x400/?sharedroom,PG' },
        { type: 'Home Kitchen', name: 'Jal Mahal Kitchen', basePrice: 330, image: 'https://source.unsplash.com/600x400/?kitchen,home' },
        { type: 'Home Kitchen', name: 'Lakeside Home Kitchen', basePrice: 350, image: 'https://source.unsplash.com/600x400/?lakeside,food' }
    ],
    'Nahargarh': [
        { type: 'Hotel', name: 'Nahargarh Palace Hotel', basePrice: 3800, image: 'https://source.unsplash.com/600x400/?Nahargarh,hotel' },
        { type: 'Hotel', name: 'Nahargarh Heights', basePrice: 4000, image: 'https://source.unsplash.com/600x400/?palace,hotel' },
        { type: 'PG', name: 'Nahargarh PG', basePrice: 650, image: 'https://source.unsplash.com/600x400/?PG,nahargarh' },
        { type: 'PG', name: 'Nahargarh Student PG', basePrice: 620, image: 'https://source.unsplash.com/600x400/?studentroom,PG' },
        { type: 'Home Kitchen', name: 'Nahargarh Home Kitchen', basePrice: 400, image: 'https://source.unsplash.com/600x400/?homefood,raj' },
        { type: 'Home Kitchen', name: 'Nahargarh Spice Kitchen', basePrice: 380, image: 'https://source.unsplash.com/600x400/?spice,food' }
    ],
    'Johari Bazaar': [
        { type: 'Hotel', name: 'Johari Boutique Hotel', basePrice: 2600, image: 'https://source.unsplash.com/600x400/?Johari,Bazaar,hotel' },
        { type: 'Hotel', name: 'Bazaar Heritage Stay', basePrice: 2800, image: 'https://source.unsplash.com/600x400/?bazaar,hotel' },
        { type: 'PG', name: 'Johari PG Lodge', basePrice: 520, image: 'https://source.unsplash.com/600x400/?PG,bazaar' },
        { type: 'PG', name: 'Johari Budget PG', basePrice: 500, image: 'https://source.unsplash.com/600x400/?budget,PG' },
        { type: 'Home Kitchen', name: 'Johari Family Kitchen', basePrice: 290, image: 'https://source.unsplash.com/600x400/?familyfood,india' },
        { type: 'Home Kitchen', name: 'Bazaar Tiffin Service', basePrice: 270, image: 'https://source.unsplash.com/600x400/?tiffin,food' }
    ],
    'Bapu Bazaar': [
        { type: 'Hotel', name: 'Bapu Street Hotel', basePrice: 2100, image: 'https://source.unsplash.com/600x400/?Bapu,Bazaar,hotel' },
        { type: 'Hotel', name: 'Bapu Classic Inn', basePrice: 2300, image: 'https://source.unsplash.com/600x400/?inn,hotel' },
        { type: 'PG', name: 'Bapu PG', basePrice: 480, image: 'https://source.unsplash.com/600x400/?pg,bapu' },
        { type: 'PG', name: 'Bapu Shared Rooms', basePrice: 460, image: 'https://source.unsplash.com/600x400/?shared,room' },
        { type: 'Home Kitchen', name: 'Bapu Local Kitchen', basePrice: 310, image: 'https://source.unsplash.com/600x400/?streetfood,india' },
        { type: 'Home Kitchen', name: 'Bapu Homemade Foods', basePrice: 300, image: 'https://source.unsplash.com/600x400/?homemade,food' }
    ],
    'Vaishali Nagar': [
        { type: 'Hotel', name: 'Vaishali Residency', basePrice: 2700, image: 'https://source.unsplash.com/600x400/?Vaishali,Nagar,hotel' },
        { type: 'Hotel', name: 'Vaishali Comfort Inn', basePrice: 2900, image: 'https://source.unsplash.com/600x400/?residency,hotel' },
        { type: 'PG', name: 'Vaishali PG Rooms', basePrice: 560, image: 'https://source.unsplash.com/600x400/?PG,vaishali' },
        { type: 'PG', name: 'Vaishali Budget PG', basePrice: 540, image: 'https://source.unsplash.com/600x400/?budget,PG' },
        { type: 'Home Kitchen', name: 'Vaishali Home Kitchen', basePrice: 340, image: 'https://source.unsplash.com/600x400/?homekitchen,food' },
        { type: 'Home Kitchen', name: 'Vaishali Street Kitchen', basePrice: 320, image: 'https://source.unsplash.com/600x400/?streetkitchen,food' }
    ]
};

const JAIPUR_PLACE_KEYS = Object.keys(JAIPUR_PLACES);

function randomDistanceKm(max = 2) {
    return +(Math.random() * max).toFixed(2);
}

const transportSearchUrl = (destination) => {
    const q = encodeURIComponent(`${destination} public transport`);
    return `https://google.com/maps?q=${q}`;
};

const OFFICIAL_TRANSPORT_APPS = {
    Jaipur: 'https://jctcl.jaipur.in'
};

const Message = ({ type, text, onClose }) => {
    const bgColor = type === 'success' ? 'bg-emerald-500' : 'bg-red-500';
    return (
        <div className={`p-4 rounded-lg text-white font-semibold flex justify-between items-center shadow-lg transition-all ${bgColor}`}>
            <span>{text}</span>
            <button onClick={onClose} className="text-xl font-bold opacity-70 hover:opacity-100 transition-opacity">×</button>
        </div>
    );
};

const ReservationPage = ({ reservation, onBack, days }) => {
    const { user, isSignedIn } = useUser();
    const clerkId = user ? user.id : null;
    const [message, setMessage] = useState(null);

    const handleBookNow = async () => {
        if (!isSignedIn) {
            setMessage({ type: 'error', text: 'You must be logged in to book.' });
            return;
        }

        try {
            const res = await fetch(import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/api/reservations` : 'http://localhost:4000/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    placeName: reservation.name,
                    placeType: reservation.type,
                    price: reservation.estimatedPrice,
                    days: Number(days),
                    destination: reservation.destination,
                    clerkId: clerkId
                })
            });
            const data = await res.json();
            if (res.ok) {
                setMessage({ type: 'success', text: 'Booking has been confirmed and saved to DB! 🎉' });
            } else {
                setMessage({ type: 'error', text: `Booking failed: ${data.error}` });
            }
        } catch (err) {
            console.error('Error saving booking:', err);
            setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
        }
    };

    const handleView = () => {
        const q = encodeURIComponent(`${reservation.name} ${reservation.destination}`);
        window.open(`https://google.com/maps?q=${q}`, '_blank');
    };

    const getPlaceIcon = (type) => {
        switch (type) {
            case 'Hotel':
                return <Hotel size={24} className="text-rose-500" />;
            case 'PG':
                return <Home size={24} className="text-blue-500" />;
            case 'Home Kitchen':
                return <Utensils size={24} className="text-yellow-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen py-8 px-4 bg-gray-50 flex items-center justify-center">
            <div className="max-w-2xl w-full p-8 rounded-3xl shadow-2xl bg-white space-y-6 transform transition-transform duration-500 hover:scale-[1.01]">
                <Button onClick={onBack} variant="ghost" className="mb-4 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Search
                </Button>
                {message && (
                    <div className="mb-4">
                        <Message type={message.type} text={message.text} onClose={() => setMessage(null)} />
                    </div>
                )}
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <MapPin size={32} className="text-red-500" />
                    Your Reservation
                </h1>
                <div className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-gray-100 rounded-2xl shadow-inner">
                    <img src={reservation.image} alt={reservation.name} className="w-full sm:w-48 h-40 rounded-xl object-cover shadow-lg transition-transform hover:scale-105" />
                    <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-primary/10 text-primary font-medium w-fit">
                            {getPlaceIcon(reservation.type)} {reservation.type}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{reservation.name}</h2>
                        <div className="text-base text-gray-600 space-y-2">
                            <p className="flex items-center gap-2"><MapPin size={18} /> Distance: <span className="font-semibold text-gray-800">{reservation.distance} km</span></p>
                            <p className="flex items-center gap-2"><DollarSign size={18} /> Est. price: <span className="font-bold text-emerald-600">₹{reservation.estimatedPrice} per day</span></p>
                            <p className="flex items-center gap-2"><Calendar size={18} /> Days: <span className="font-semibold text-gray-800">{days}</span></p>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground text-center sm:text-left mt-4">
                    This is your final reservation summary. You can proceed to book or view the location on the map.
                </p>
                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
                    <Button onClick={handleView} variant="outline" className="w-full sm:w-auto text-gray-700 hover:bg-gray-100 transition-colors">
                        View on Map
                    </Button>
                    <Button onClick={handleBookNow} className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-yellow-500 hover:from-rose-600 hover:to-yellow-600 text-white font-bold shadow-lg transition-transform hover:scale-105 active:scale-95">
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

const UserStay = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [stayBudget, setStayBudget] = useState('');
    const [foodBudget, setFoodBudget] = useState('');
    const [selectedJaipurPlace, setSelectedJaipurPlace] = useState('');
    const [days, setDays] = useState('1');
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState([]);
    const [geoLoading, setGeoLoading] = useState(false);
    const [reservedPlace, setReservedPlace] = useState(null);
    const [splitBudget, setSplitBudget] = useState({});

    const useMyLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation not supported in this browser. Please type your origin.');
            return;
        }
        setGeoLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setGeoLoading(false);
                const { latitude, longitude } = pos.coords;
                setOrigin(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
            },
            (err) => {
                setGeoLoading(false);
                alert('Unable to get location. Please enter origin manually.');
            },
            { timeout: 8000 }
        );
    };

    const handleFind = (e) => {
        e.preventDefault();
        if (!destination) {
            alert('Please enter a destination.');
            return;
        }
        setIsSearching(true);
        setResults([]);
        
        // New logic to split the budget
        const totalStayBudget = Number(stayBudget) || 0;
        if (totalStayBudget > 0) {
            const hotelsBudget = Math.round(totalStayBudget * 0.6); // 60% for hotels
            const pgsBudget = Math.round(totalStayBudget * 0.4);     // 40% for PGs
            const homeKitchensBudget = Math.round(totalStayBudget * 0.2); // 20% for home kitchens
            setSplitBudget({
                Hotel: hotelsBudget,
                PG: pgsBudget,
                'Home Kitchen': homeKitchensBudget,
            });
        } else {
            setSplitBudget({});
        }

        setTimeout(() => {
            const city = destination.trim();
            const cityLower = city.toLowerCase();
            let sample = SAMPLE_PLACES[city] || Object.values(SAMPLE_PLACES).flat();

            if (cityLower === 'jaipur') {
                if (selectedJaipurPlace) {
                    sample = JAIPUR_PLACES[selectedJaipurPlace] || sample;
                } else {
                    sample = Object.values(JAIPUR_PLACES).flat();
                }
            }

            const computed = sample.map((p) => {
                const distance = randomDistanceKm(2);
                const stayBud = Number(stayBudget) || 0;
                const estimatedPrice = Math.max(50, Math.round(p.basePrice * (stayBud > 0 ? Math.max(0.5, 1 - stayBud / 10000) : 1)));
                return {
                    ...p,
                    distance,
                    estimatedPrice,
                    transportUrl: transportSearchUrl(city),
                    destination: destination
                };
            }).filter(r => r.distance <= 2);

            // Filter results based on split budget
            const filteredResults = computed.filter(r => {
                if (!stayBudget || !splitBudget[r.type]) {
                    return true; // If no budget set, show all
                }
                return r.estimatedPrice <= splitBudget[r.type];
            });

            setResults(filteredResults);
            setIsSearching(false);
        }, 700);
    };

    const handleReserve = (place) => {
        setReservedPlace({ ...place, days: days });
    };

    const handleBackToSearch = () => {
        setReservedPlace(null);
    };

    const getPlaceIcon = (type) => {
        switch (type) {
            case 'Hotel':
                return <Hotel size={18} className="text-rose-500" />;
            case 'PG':
                return <Home size={18} className="text-blue-500" />;
            case 'Home Kitchen':
                return <Utensils size={18} className="text-yellow-500" />;
            default:
                return null;
        }
    };

    if (reservedPlace) {
        return <ReservationPage reservation={reservedPlace} onBack={handleBackToSearch} days={days} />;
    }

    return (
        <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-indigo-50 to-blue-100 font-sans">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4 tracking-tight">
                    Find Your Wanderlust Stay
                </h1>
                <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Explore and book your perfect stay, from local home kitchens to luxurious hotels.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-8 animate-fade-in-up">
                    <form onSubmit={handleFind} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                            <div className="col-span-1 md:col-span-2 lg:col-span-2">
                                <Label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                                    <MapPin size={18} className="text-primary" /> Destination
                                </Label>
                                <Input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g., Jaipur, Mumbai, Goa" className="w-full" />
                                {destination.trim().toLowerCase() === 'jaipur' && (
                                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                                        <Label className="font-semibold text-gray-700">Select Jaipur Place</Label>
                                        <select
                                            className="w-full mt-2 p-2 border rounded-lg bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                            value={selectedJaipurPlace}
                                            onChange={(e) => setSelectedJaipurPlace(e.target.value)}
                                        >
                                            <option value="">-- choose a place in Jaipur --</option>
                                            {JAIPUR_PLACE_KEYS.map((k) => (
                                                <option key={k} value={k}>{k}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                            <div>
                                <Label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                                    <DollarSign size={18} className="text-green-500" /> Stay budget (₹ total)
                                </Label>
                                <Input value={stayBudget} onChange={(e) => setStayBudget(e.target.value)} placeholder="e.g., 10000" type="number" />
                            </div>
                            <div>
                                <Label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                                    <Calendar size={18} className="text-blue-500" /> Days
                                </Label>
                                <Input value={days} onChange={(e) => setDays(e.target.value)} placeholder="1" type="number" min="1" />
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Button type="submit" className="w-full md:w-60 bg-[#ff6600] text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105" disabled={isSearching}>
                                {isSearching ? (
                                    <>
                                        <Search size={18} className="mr-2 animate-spin" /> Finding...
                                    </>
                                ) : (
                                    <>
                                        <Search size={18} className="mr-2" /> Search Stays
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="mt-12">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Results</h2>
                    <div className="p-8 rounded-3xl bg-white shadow-2xl min-h-[300px] flex flex-col justify-center">
                        {isSearching && <div className="text-center text-gray-500 py-10 text-lg">Searching nearby places...</div>}
                        {!isSearching && results.length === 0 && (
                            <div className="text-center text-gray-500 py-10">
                                <Frown size={64} className="mx-auto text-gray-400 mb-4" />
                                <p className="text-xl font-medium">No nearby places found yet. Try a different destination.</p>
                            </div>
                        )}
                        <div className="space-y-6">
                            {results.map((r, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                                    <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                                        {r.image && (
                                            <img src={r.image} alt={r.name} className="w-full md:w-36 h-28 rounded-lg object-cover shadow-sm transition-transform hover:scale-105" />
                                        )}
                                        <div className="text-center md:text-left space-y-1">
                                            <div className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium flex items-center gap-1 w-fit mx-auto md:mx-0">
                                                {getPlaceIcon(r.type)} {r.type}
                                            </div>
                                            <div className="text-2xl font-bold text-gray-900">{r.name}</div>
                                            <div className="text-sm text-gray-600 space-y-1">
                                                <p className="flex items-center gap-1.5 justify-center md:justify-start"><MapPin size={14} /> Distance: {r.distance} km</p>
                                                <p className="flex items-center gap-1.5 justify-center md:justify-start"><DollarSign size={14} /> Est. price: ₹{r.estimatedPrice} per day</p>
                                                {splitBudget[r.type] && (
                                                    <p className="text-sm font-semibold text-purple-600 flex items-center gap-1.5 justify-center md:justify-start">
                                                        <DollarSign size={14} /> Your Budget: ₹{splitBudget[r.type]}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
                                        <Button size="sm" variant="outline" onClick={() => {
                                            const q = encodeURIComponent(`${r.name} ${destination}`);
                                            window.open(`https://google.com/maps?q=${q}`, '_blank');
                                        }} className="w-full hover:bg-gray-100 transition-colors">
                                            View on Map
                                        </Button>
                                        <Button size="sm" onClick={() => handleReserve(r)} className="w-full bg-[#ff6600] text-white font-bold transition-colors">
                                            Reserve
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {results.length > 0 && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => {
                                const city = destination.trim();
                                const official = OFFICIAL_TRANSPORT_APPS[city] || OFFICIAL_TRANSPORT_APPS[city.charAt(0).toUpperCase() + city.slice(1)];
                                if (official) {
                                    window.open(official, '_blank');
                                } else {
                                    window.open(transportSearchUrl(destination), '_blank');
                                }
                            }}
                            className="inline-flex items-center gap-3 bg-[#ff6600] text-white px-8 py-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-[1.02] active:scale-95 transform-gpu font-bold text-lg"
                        >
                            <Bus size={24} />
                            Find Public Transportation
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserStay;