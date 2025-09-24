import React, { useState } from 'react';
import { Plane, Bus, Train, ArrowRight, User, Calendar, CreditCard, CheckCircle, Loader2, ArrowLeft } from 'lucide-react';

// --- MOCK DATA FOR A SINGLE ROUTE (DELHI -> MUMBAI) ---
const mockApiData = {
  flights: [
    { id: 'FL101', brand: 'IndiGo', logoUrl: 'https://placehold.co/100x40/6E3A8A/FFFFFF?text=IndiGo', from: 'DEL', to: 'BOM', departureTime: '08:30', arrivalTime: '10:45', duration: '2h 15m', price: 4500, type: 'flight' },
    { id: 'FL102', brand: 'Vistara', logoUrl: 'https://placehold.co/100x40/000080/FFFFFF?text=Vistara', from: 'DEL', to: 'BOM', departureTime: '11:00', arrivalTime: '13:05', duration: '2h 05m', price: 5200, type: 'flight' },
  ],
  buses: [
    { id: 'BS201', brand: 'Orange Travels', logoUrl: 'https://placehold.co/100x40/FF5722/FFFFFF?text=Orange', from: 'DEL', to: 'BOM', departureTime: '18:00', arrivalTime: '12:30', duration: '18h 30m', price: 2100, type: 'bus' },
    { id: 'BS202', brand: 'InterCity', logoUrl: 'https://placehold.co/100x40/4CAF50/FFFFFF?text=InterCity', from: 'DEL', to: 'BOM', departureTime: '19:30', arrivalTime: '14:00', duration: '18h 30m', price: 2450, type: 'bus' },
  ],
  trains: [
    { id: 'TR301', brand: 'Rajdhani Exp', logoUrl: 'https://placehold.co/100x40/8B0000/FFFFFF?text=Rajdhani', from: 'DEL', to: 'BOM', departureTime: '16:55', arrivalTime: '08:15', duration: '15h 20m', price: 3200, type: 'train' },
    { id: 'TR302', brand: 'Duronto Exp', logoUrl: 'https://placehold.co/100x40/00008B/FFFFFF?text=Duronto', from: 'DEL', to: 'BOM', departureTime: '23:25', arrivalTime: '15:50', duration: '16h 25m', price: 2950, type: 'train' },
  ],
};

// --- TYPESCRIPT INTERFACES ---
interface Ticket {
  id: string;
  brand: string;
  logoUrl: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  type: 'flight' | 'bus' | 'train';
}

// --- MAIN COMPONENT ---
const TicketBookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [from, setFrom] = useState('New Delhi');
  const [to, setTo] = useState('Mumbai');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
  const [activeTransport, setActiveTransport] = useState<'flights' | 'buses' | 'trains'>('flights');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const [passengerDetails, setPassengerDetails] = useState({ name: '', email: '', phone: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const steps = ['Search', 'Results', 'Details', 'Payment', 'Confirmation'];

  // --- FUNCTIONS ---
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleSelectTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setStep(3);
  };
  
  const handlePassengerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(passengerDetails.name && passengerDetails.email && passengerDetails.phone) {
        setStep(4);
    } else {
        alert("Please fill all passenger details.");
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setBookingId(`SWT${Math.floor(100000 + Math.random() * 900000)}`);
      setIsLoading(false);
      setStep(5);
    }, 2000);
  };

  const startNewBooking = () => {
    setStep(1);
    setSelectedTicket(null);
  };

  // --- SUB-COMPONENTS for better readability ---
  const StepIndicator: React.FC = () => (
    <div className="bg-orange-500/10 p-8 rounded-l-2xl">
      <h2 className="text-2xl font-bold text-orange-600 mb-8">Swadeshi Travel</h2>
      <nav>
        <ol className="space-y-6">
          {steps.map((s, index) => (
            <li key={s} className="flex items-center">
              <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                  step > index + 1 ? 'bg-green-500 text-white' : 
                  step === index + 1 ? 'bg-orange-500 text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                {step > index + 1 ? <CheckCircle size={16}/> : index + 1}
              </span>
              <span className={`ml-4 font-semibold ${step === index + 1 ? 'text-orange-600' : 'text-gray-600'}`}>{s}</span>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-12 p-4 bg-orange-100/50 rounded-lg text-sm text-orange-800">
        <p><strong>Note:</strong> This is a demo booking page for SIH. All data is for illustrative purposes only.</p>
      </div>
    </div>
  );

  const TicketCard: React.FC<{ ticket: Ticket }> = ({ ticket }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Left side: Brand and Timings */}
            <div className="w-full sm:w-auto flex-grow">
                <div className="flex items-center mb-4">
                    <img src={ticket.logoUrl} alt={ticket.brand} className="h-8 w-auto mr-3 object-contain"/>
                    <div>
                        <p className="font-bold text-lg text-slate-800">{ticket.brand}</p>
                        <p className="text-xs text-gray-500">{ticket.id}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-left">
                        <p className="font-semibold text-lg">{ticket.departureTime}</p>
                        <p className="text-sm text-gray-500">{ticket.from}</p>
                    </div>
                    <div className="text-center px-2">
                        <p className="text-xs text-gray-500">{ticket.duration}</p>
                        <div className="w-full border-b-2 border-dotted border-gray-300 mt-1"></div>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-lg">{ticket.arrivalTime}</p>
                        <p className="text-sm text-gray-500">{ticket.to}</p>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className="w-full sm:w-px sm:h-20 bg-gray-200"></div>

            {/* Right side: Price and Button */}
            <div className="w-full sm:w-auto text-center sm:text-right flex-shrink-0 sm:pl-4">
                <p className="text-2xl font-bold text-orange-600">₹{ticket.price.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gray-500 mb-2">per adult</p>
                <button onClick={() => handleSelectTicket(ticket)} className="w-full sm:w-auto bg-orange-500 text-white text-sm font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-transform hover:scale-105">Book Now</button>
            </div>
        </div>
    </div>
  );

  return (
    <div className="bg-slate-100 min-h-screen font-sans flex items-center justify-center p-4">
      <main className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl grid md:grid-cols-12">
        <div className="hidden md:block md:col-span-4">
          <StepIndicator />
        </div>
        <div className="md:col-span-8 p-8 sm:p-12">
          {step > 1 && step < 5 && (
             <button onClick={() => setStep(step - 1)} className="flex items-center text-sm font-semibold text-gray-500 hover:text-orange-600 mb-6">
                <ArrowLeft size={16} className="mr-1"/>
                Back
             </button>
          )}

          {/* Step 1: Search */}
          {step === 1 && (
             <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Book Your Journey</h2>
              <p className="text-gray-600 mb-8">Find the best deals across India.</p>
              <form onSubmit={handleSearch} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" value={from} onChange={e => setFrom(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
                    <input type="text" value={to} onChange={e => setTo(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
                 </div>
                 <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
                 <button type="submit" disabled={isLoading} className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition flex items-center justify-center disabled:bg-orange-300">
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Search Transport'}
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Results */}
          {step === 2 && (
             <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800">Available Transport</h2>
              <p className="text-gray-500 mb-6">{from} to {to} on {date}</p>
              <div className="border-b border-gray-200 mb-6">
                 <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {Object.keys(mockApiData).map(key => (
                       <button key={key} onClick={() => setActiveTransport(key as any)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center capitalize ${activeTransport === key ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                           {key === 'flights' && <Plane className="mr-2" size={18}/>}
                           {key === 'buses' && <Bus className="mr-2" size={18}/>}
                           {key === 'trains' && <Train className="mr-2" size={18}/>}
                           {key}
                       </button>
                    ))}
                 </nav>
              </div>
              <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                  {mockApiData[activeTransport].map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
              </div>
            </div>
          )}
          
          {/* Step 3: Details */}
          {step === 3 && selectedTicket && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Enter Passenger Details</h2>
              <form onSubmit={handlePassengerSubmit} className="space-y-4">
                  <input type="text" placeholder="Full Name" onChange={e => setPassengerDetails({...passengerDetails, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" required/>
                  <input type="email" placeholder="Email Address" onChange={e => setPassengerDetails({...passengerDetails, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" required/>
                  <input type="tel" placeholder="Phone Number" onChange={e => setPassengerDetails({...passengerDetails, phone: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" required/>
                  <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">Proceed to Payment</button>
              </form>
            </div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && selectedTicket && (
             <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Confirm and Pay</h2>
                <div className="bg-slate-50 p-6 rounded-lg border mb-6">
                    <div className="flex justify-between items-center text-xl font-bold">
                        <span>Total Payable</span>
                        <span className="text-orange-600">₹{selectedTicket.price.toLocaleString('en-IN')}</span>
                    </div>
                </div>
                <form onSubmit={handlePayment} className="space-y-4">
                    <input type="text" placeholder="Card Number" defaultValue="1234 5678 9101 1121" className="w-full p-3 border rounded-lg"/>
                    <div className="flex gap-4">
                        <input type="text" placeholder="MM/YY" defaultValue="12/28" className="w-1/2 p-3 border rounded-lg"/>
                        <input type="text" placeholder="CVV" defaultValue="***" className="w-1/2 p-3 border rounded-lg"/>
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center disabled:bg-orange-300">
                       {isLoading ? <Loader2 className="animate-spin" /> : `Pay ₹${selectedTicket.price.toLocaleString('en-IN')}`}
                    </button>
                </form>
             </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && selectedTicket && (
            <div className="text-center p-8 animate-fade-in">
                <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-8">Your e-ticket has been sent to {passengerDetails.email}.</p>
                <div className="bg-white text-left p-6 rounded-lg border-2 border-dashed border-gray-300 max-w-md mx-auto relative">
                    <div className="absolute top-0 -left-4 w-8 h-8 bg-slate-100 rounded-full"></div>
                    <div className="absolute top-0 -right-4 w-8 h-8 bg-slate-100 rounded-full"></div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Booking ID</p>
                        <p className="font-mono font-bold text-lg">{bookingId}</p>
                      </div>
                      <div className="w-16 h-16 bg-gray-200 p-1 rounded-md">
                        {/* Mock QR Code */}
                        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zM13 13h2v2h-2v-2zm0 4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm2-2h2v2h-2v-2zm-4-2h2v2h-2v-2zm2 0h2v2h-2v-2z"></path></svg>
                      </div>
                    </div>
                    <div className="border-t border-dashed border-gray-300 my-4"></div>
                    <p className="text-sm text-gray-500">Passenger: <span className="font-bold text-slate-800">{passengerDetails.name}</span></p>
                    <div className="flex justify-between mt-4">
                      <div>
                        <p className="text-sm text-gray-500">{from}</p>
                        <p className="font-bold text-2xl">{selectedTicket.departureTime}</p>
                      </div>
                      <div className="flex-grow flex items-center">
                         <div className="w-full border-b border-gray-300 relative">
                           {selectedTicket.type === 'flight' && <Plane size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1"/>}
                           {selectedTicket.type === 'bus' && <Bus size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1"/>}
                           {selectedTicket.type === 'train' && <Train size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1"/>}
                         </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{to}</p>
                        <p className="font-bold text-2xl">{selectedTicket.arrivalTime}</p>
                      </div>
                    </div>
                </div>
                 <button onClick={startNewBooking} className="mt-10 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition">
                    Make a New Booking
                </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TicketBookingPage;

