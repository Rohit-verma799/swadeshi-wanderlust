import React, { useState } from 'react';
import { IndianRupee, BedDouble, Home, Utensils, ShoppingBag, TramFront, Search, ArrowLeft, Building, MapPin, Sparkles, Calendar, Star } from 'lucide-react';

// --- EXPANDED MOCK DATA ---
const JAIPUR_PLACES = {
    'Mansarovar': [
        { type: 'Hotel', name: 'The Fern Residency', basePrice: 2800, rating: 4.5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop' },
        { type: 'Hotel', name: 'Mansarovar Grand', basePrice: 2200, rating: 4.2, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?q=80&w=2070&auto=format&fit=crop' },
        { type: 'Hotel', name: 'Hotel Classic Inn', basePrice: 1800, rating: 4.0, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop' },
        { type: 'PG', name: 'Student Comfort PG', basePrice: 550, rating: 4.6, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop' },
        { type: 'PG', name: 'Shree Krishna PG', basePrice: 650, rating: 4.3, image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop' },
        { type: 'Restaurant', name: 'Thali & More', basePrice: 400, rating: 4.7, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop' },
        { type: 'Restaurant', name: 'The Barbeque Company', basePrice: 700, rating: 4.8, image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop' }
    ],
    'Pratap Nagar': [
        { type: 'Hotel', name: 'Pratap Regency', basePrice: 2200, rating: 4.3, image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop' },
        { type: 'Hotel', name: 'Pratap Nagar Inn', basePrice: 2000, rating: 4.1, image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop' },
        { type: 'PG', name: 'Pratap PG Rooms', basePrice: 550, rating: 4.5, image: 'https://images.unsplash.com/photo-1618221628465-9d95f87f5b12?q=80&w=1932&auto=format&fit=crop' },
        { type: 'PG', name: 'Jaipur Living PG', basePrice: 600, rating: 4.2, image: 'https://images.unsplash.com/photo-1594411448208-35c249419126?q=80&w=2070&auto=format&fit=crop' },
        { type: 'Restaurant', name: 'Kanha Restaurant', basePrice: 300, rating: 4.6, image: 'https://images.unsplash.com/photo-1600565193348-f74d3c2723a4?q=80&w=2070&auto=format&fit=crop' },
        { type: 'Restaurant', name: 'Chokha Punjab', basePrice: 600, rating: 4.9, image: 'https://images.unsplash.com/photo-1552590635-27c2c2122ab0?q=80&w=2070&auto=format&fit=crop' }
    ],
};
const JAIPUR_AREAS = Object.keys(JAIPUR_PLACES);

// --- TYPE DEFINITIONS ---
interface Place {
    type: 'Hotel' | 'PG' | 'Restaurant';
    name: string;
    basePrice: number;
    rating: number;
    image: string;
}
interface BudgetPlan {
    breakdown: {
        stay: number;
        food: number;
        transport: number;
        shopping: number;
    };
    accommodation: {
        hotels: Place[];
        pgs: Place[];
    };
    restaurants: Place[];
}

const StayPlannerPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    
    const [city, setCity] = useState('Jaipur');
    const [area, setArea] = useState(JAIPUR_AREAS[0]);
    const [totalBudget, setTotalBudget] = useState('50000');
    const [days, setDays] = useState('30');

    const [plan, setPlan] = useState<BudgetPlan | null>(null);

    const handleGeneratePlan = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            const budget = Number(totalBudget);
            const numDays = Number(days) || 1;

            // Smart budget allocation for a 30-day stay
            const stayBudget = budget * 0.50; // 50% for long stay
            const foodBudget = budget * 0.25; // 25% for food
            const transportBudget = budget * 0.10; // 10% for local transport
            const shoppingBudget = budget * 0.15; // 15% for shopping/misc

            const stayBudgetPerDay = stayBudget / numDays;
            
            const areaPlaces = JAIPUR_PLACES[area as keyof typeof JAIPUR_PLACES] || [];
            
            const hotels = areaPlaces.filter(p => p.type === 'Hotel' && p.basePrice <= stayBudgetPerDay).sort((a,b) => b.rating - a.rating).slice(0, 3);
            const pgs = areaPlaces.filter(p => p.type === 'PG' && p.basePrice <= stayBudgetPerDay).sort((a,b) => b.rating - a.rating).slice(0, 3);
            const restaurants = areaPlaces.filter(p => p.type === 'Restaurant').sort((a,b) => b.rating - a.rating).slice(0, 3);

            setPlan({
                breakdown: {
                    stay: stayBudget,
                    food: foodBudget,
                    transport: transportBudget,
                    shopping: shoppingBudget,
                },
                accommodation: {
                    hotels,
                    pgs,
                },
                restaurants
            });

            setIsLoading(false);
            setStep(2);
        }, 2000);
    };

    const handleStartOver = () => {
        setStep(1);
        setPlan(null);
    };

    const BudgetCard: React.FC<{ title: string, amount: number, icon: React.ReactNode }> = ({ title, amount, icon }) => (
        <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center space-x-4">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-xl font-bold text-slate-800">₹{amount.toLocaleString('en-IN')}</p>
            </div>
        </div>
    );

    const PlaceCard: React.FC<{ place: Place }> = ({ place }) => (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border group transform hover:-translate-y-1 transition-transform duration-300">
            <img src={place.image} alt={place.name} className="w-full h-40 object-cover"/>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-800 flex-1 mr-2">{place.name}</h4>
                    <div className="flex items-center space-x-1 text-yellow-500 flex-shrink-0">
                        <Star size={16} fill="currentColor" />
                        <span className="font-bold text-slate-700 text-sm">{place.rating}</span>
                    </div>
                </div>
                <p className="text-green-600 font-bold mt-1">₹{place.basePrice.toLocaleString('en-IN')} / {place.type === 'Restaurant' ? 'avg meal' : 'day'}</p>
                <button className="w-full mt-4 bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600">
                    {place.type === 'Restaurant' ? 'View Menu' : 'Book Now'}
                </button>
            </div>
        </div>
    );

    const ResultsSection: React.FC<{title: string, places: Place[], type: string}> = ({title, places, type}) => (
        <div>
            <h2 className="text-2xl font-bold text-slate-700 mb-4">{title}</h2>
            {places.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {places.map(place => <PlaceCard key={place.name} place={place} />)}
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg text-center text-gray-500 border">
                    <p>No suitable {type.toLowerCase()} options found in this budget for the selected area.</p>
                </div>
            )}
        </div>
    );

    return (
        <div className="bg-slate-50 min-h-screen font-sans flex flex-col items-center justify-center p-4">
            {step === 1 && (
                <div className="w-full max-w-2xl animate-fade-in">
                    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-extrabold text-slate-800">Plan Your Long Stay</h1>
                            <p className="text-gray-600 mt-2">Perfect for students and professionals. Let's craft your monthly plan.</p>
                        </div>
                        <form onSubmit={handleGeneratePlan} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="font-semibold text-gray-700 flex items-center mb-2"><Building size={16} className="mr-2 text-orange-500"/> City</label>
                                    <input type="text" value={city} readOnly className="w-full p-3 border bg-slate-100 border-gray-300 rounded-lg"/>
                                </div>
                                <div>
                                    <label className="font-semibold text-gray-700 flex items-center mb-2"><MapPin size={16} className="mr-2 text-orange-500"/> Area in Jaipur</label>
                                    <select value={area} onChange={e => setArea(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg bg-white">
                                        {JAIPUR_AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="font-semibold text-gray-700 flex items-center mb-2"><IndianRupee size={16} className="mr-2 text-orange-500"/> Total Monthly Budget (₹)</label>
                                    <input type="number" value={totalBudget} onChange={e => setTotalBudget(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., 50000"/>
                                </div>
                                <div>
                                    <label className="font-semibold text-gray-700 flex items-center mb-2"><Calendar size={16} className="mr-2 text-orange-500"/> No. of Days</label>
                                    <input type="number" value={days} onChange={e => setDays(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., 30"/>
                                </div>
                            </div>
                            <button type="submit" disabled={isLoading} className="w-full mt-4 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition flex items-center justify-center disabled:bg-orange-300">
                               {isLoading ? (
                                   <><Sparkles className="animate-spin mr-2" size={20}/> Crafting Your Plan...</>
                               ) : (
                                   <><Search className="mr-2" size={20}/> Generate My Plan</>
                               )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
            
            {step === 2 && plan && (
                <div className="w-full max-w-6xl animate-fade-in">
                    <button onClick={handleStartOver} className="flex items-center text-sm font-semibold text-gray-600 hover:text-orange-600 mb-6">
                        <ArrowLeft size={16} className="mr-2" /> Start New Plan
                    </button>
                    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-extrabold text-slate-800">Your Smart Monthly Plan</h1>
                            <p className="text-gray-600 mt-2">For a {days}-day stay in {area}, Jaipur with a budget of ₹{Number(totalBudget).toLocaleString('en-IN')}</p>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-700 mb-4 border-b pb-2">Monthly Budget Breakdown</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                            <BudgetCard title="Accommodation" amount={plan.breakdown.stay} icon={<BedDouble size={22}/>}/>
                            <BudgetCard title="Food & Groceries" amount={plan.breakdown.food} icon={<Utensils size={22}/>}/>
                            <BudgetCard title="Local Transport" amount={plan.breakdown.transport} icon={<TramFront size={22}/>}/>
                            <BudgetCard title="Shopping & Misc." amount={plan.breakdown.shopping} icon={<ShoppingBag size={22}/>}/>
                        </div>
                        
                        <div className="space-y-12">
                            <ResultsSection title="Recommended Hotels" places={plan.accommodation.hotels} type="Hotel"/>
                            <ResultsSection title="Recommended PGs" places={plan.accommodation.pgs} type="PG"/>
                            <ResultsSection title="Top Rated Restaurants" places={plan.restaurants} type="Restaurant"/>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default StayPlannerPage;

