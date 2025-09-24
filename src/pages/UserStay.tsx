import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// A simple UserStay component with a form to collect origin/destination, budgets and days.
// On submit it shows simulated nearby stays (PG, Home Kitchen, Hotel) within 2 km.
// Transportation button opens a Google Maps search for public transport to the destination.

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

// Detailed Jaipur neighbourhoods / places and nearby options (10 places)
const JAIPUR_PLACES = {
	'Mansarovar': [
		{ type: 'Hotel', name: 'Mansarovar Grand', basePrice: 2200, image: 'https://source.unsplash.com/600x400/?Mansarovar,hotel' },
		{ type: 'Hotel', name: 'Hotel Mansarovar Palace', basePrice: 2400, image: 'https://source.unsplash.com/600x400/?Jaipur,hotel' },
		{ type: 'PG', name: 'Mansarovar PG Lodge', basePrice: 600, image: 'https://source.unsplash.com/600x400/?hostel,PG' },
		{ type: 'PG', name: 'Affordable PG Mansarovar', basePrice: 550, image: 'https://source.unsplash.com/600x400/?PG,room' },
		{ type: 'Home Kitchen', name: 'Mansarovar Home Kitchen', basePrice: 350, image: 'https://source.unsplash.com/600x400/?Indian,food' },
		{ type: 'Home Kitchen', name: 'Local Eats Mansarovar', basePrice: 300, image: 'https://source.unsplash.com/600x400/?home-cooked,food' }
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
	return `https://www.google.com/maps/search/?api=1&query=${q}`;
};

// Official transport app/web links (replace Jaipur URL with the official JCTCL app/web link or deep link scheme)
const OFFICIAL_TRANSPORT_APPS = {
	Jaipur: 'https://jctcl.jaipur.in' // TODO: replace with official JCTCL app link or scheme
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
		e && e.preventDefault();
		if (!destination) {
			alert('Please enter a destination.');
			return;
		}
		setIsSearching(true);
		setResults([]);

		// Simulate an API search and filtering of places within 2 km
		setTimeout(() => {
			const city = destination.trim();
			const cityLower = city.toLowerCase();
			let sample = SAMPLE_PLACES[city] || Object.values(SAMPLE_PLACES).flat();

			// If user selected a specific Jaipur place, use its nearby options
			if (cityLower === 'jaipur') {
				if (selectedJaipurPlace) {
					sample = JAIPUR_PLACES[selectedJaipurPlace] || sample;
				} else {
					// flatten all Jaipur places if none selected
					sample = Object.values(JAIPUR_PLACES).flat();
				}
			}

			// For each sample place compute a random distance <= 2 km and an estimated price
			const computed = sample.map((p) => {
				const distance = randomDistanceKm(2);
				// price influenced by stayBudget (if provided)
				const stayBud = Number(stayBudget) || 0;
				const estimatedPrice = Math.max(50, Math.round(p.basePrice * (stayBud > 0 ? Math.max(0.5, 1 - stayBud / 10000) : 1)));
				return {
					...p,
					distance,
					estimatedPrice,
					transportUrl: transportSearchUrl(city)
				};
			}).filter(r => r.distance <= 2);

			setResults(computed);
			setIsSearching(false);
		}, 700);
	};

	return (
		<div className="min-h-screen py-8 px-4 bg-muted/20">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold mb-4">Find Nearby Stays & Food</h1>
				<p className="text-sm text-muted-foreground mb-6">Enter your origin and destination, budgets and days, then press Find to see nearby PGs, home kitchens and hotels within 2 km.</p>

				<form onSubmit={handleFind} className="space-y-4 bg-white p-6 rounded-lg shadow">
					<div>
						<Label>Origin (your current location)</Label>
						<div className="flex gap-2 mt-2">
							<Input value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Latitude, Longitude or place name" />
							<Button type="button" onClick={useMyLocation} className="whitespace-nowrap">
								{geoLoading ? 'Locating...' : 'Use my location'}
							</Button>
						</div>
					</div>

					<div>
						<Label>Destination</Label>
						<Input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g., Jaipur, Mumbai, Goa" />
						{destination.trim().toLowerCase() === 'jaipur' && (
							<div className="mt-3">
								<Label>Select Jaipur Place</Label>
								<select
									className="w-full mt-2 p-2 border rounded"
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

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
						<div>
							<Label>Stay budget (₹ total)</Label>
							<Input value={stayBudget} onChange={(e) => setStayBudget(e.target.value)} placeholder="e.g., 5000" type="number" />
						</div>
						<div>
							<Label>Food budget (₹ per day)</Label>
							<Input value={foodBudget} onChange={(e) => setFoodBudget(e.target.value)} placeholder="e.g., 300" type="number" />
						</div>
						<div>
							<Label>How many days</Label>
							<Input value={days} onChange={(e) => setDays(e.target.value)} placeholder="1" type="number" min="1" />
						</div>
					</div>

					<div className="flex justify-end">
						<Button type="submit" className="w-36" disabled={isSearching}>
							{isSearching ? 'Finding...' : 'Find'}
						</Button>
					</div>
				</form>

				<div className="mt-6">
					<h2 className="text-2xl font-semibold mb-3">Results</h2>

					{isSearching && <div className="text-muted-foreground">Searching nearby places...</div>}

					{!isSearching && results.length === 0 && (
						<div className="text-sm text-muted-foreground">No nearby places found yet. Try a different destination or click Find.</div>
					)}

					<div className="space-y-4 mt-4">
						{results.map((r, idx) => (
										<div key={idx} className="bg-gradient-to-r from-white via-gray-50 to-white p-4 rounded-lg shadow-md flex items-center justify-between border border-gray-100">
											<div className="flex items-center gap-4">
												{r.image && (
													<img src={r.image} alt={r.name} className="w-28 h-20 rounded object-cover shadow-sm" />
												)}
												<div>
													<div className="inline-block text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{r.type}</div>
													<div className="text-lg font-semibold mt-2">{r.name}</div>
													<div className="text-sm text-muted-foreground mt-1">Distance: {r.distance} km • Est. price: ₹{r.estimatedPrice}</div>
												</div>
											</div>
											<div className="flex gap-3">
												<Button size="sm" variant="outline" onClick={() => {
													const q = encodeURIComponent(`${r.name} ${destination}`);
													window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank');
												}}>
													View on Map
												</Button>
												<Button size="sm" onClick={async () => {
													// POST reservation to backend
													try {
														const res = await fetch(import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/api/reservations` : 'http://localhost:4000/api/reservations', {
															method: 'POST',
															headers: { 'Content-Type': 'application/json' },
															body: JSON.stringify({
																placeName: r.name,
																placeType: r.type,
																price: r.estimatedPrice,
																days: Number(days),
																origin,
																destination
															})
														});
														const data = await res.json();
														if (res.ok) {
															alert('Reservation saved successfully');
														} else {
															alert('Failed to save reservation');
														}
													} catch (err) {
														console.error(err);
														alert('Error saving reservation');
													}
												}}>
													Reserve
												</Button>
											</div>
										</div>
									))}
					</div>
				</div>
			</div>

			{/* Prominent Transportation button below results */}
			{results.length > 0 && (
				<div className="mt-6 flex justify-center">
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
						className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-2xl hover:scale-[1.02] transition-transform"
					>
						<span className="text-2xl">🚌</span>
						<span className="font-semibold">Transportation</span>
					</button>
				</div>
			)}
		</div>
	);
};

export default UserStay;
