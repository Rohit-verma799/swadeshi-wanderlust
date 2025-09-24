import React, { useState } from 'react';
import { LayoutDashboard, Package, CalendarCheck, UserCircle, LogOut, PlusCircle, MoreHorizontal, X, BarChart2, Star, Edit, Save, MessageSquare } from 'lucide-react';

// --- EXPANDED MOCK DATA ---
const initialAgentData = {
  name: 'Himalayan Adventures',
  profile: {
    owner: 'Rohan Sharma',
    email: 'rohan@himalayanadventures.com',
    phone: '+91 98765 43210',
    address: 'Mall Road, Manali, Himachal Pradesh',
    memberSince: '2024-03-15',
    verified: true,
  },
  dashboardStats: {
    monthlyEarningsData: [1.2, 1.8, 1.5, 2.5, 2.1, 3.4], // Lakhs
    activePackages: 3,
    pendingQueries: 3,
  },
  packages: [
    { id: 'PKG001', name: '7-Day Spiti Valley Wonder', price: 25000, status: 'Active', bookings: 22, rating: 4.8 },
    { id: 'PKG002', name: 'Weekend Trek to Triund', price: 4500, status: 'Active', bookings: 45, rating: 4.9 },
    { id: 'PKG003', name: 'Manali-Leh Bike Expedition', price: 40000, status: 'Inactive', bookings: 11, rating: 4.7 },
    { id: 'PKG004', name: 'Paragliding in Solang Valley', price: 3500, status: 'Active', bookings: 67, rating: 4.9 },
  ],
  bookings: [
    { id: 'BK1012', customer: 'Priya Mehta', package: 'Weekend Trek to Triund', date: '2025-10-15', guests: 2, amount: 9000, status: 'Confirmed' },
    { id: 'BK1011', customer: 'Ankit Desai', package: 'Paragliding in Solang Valley', date: '2025-10-12', guests: 1, amount: 3500, status: 'Confirmed' },
    { id: 'BK1010', customer: 'Sneha Verma', package: '7-Day Spiti Valley Wonder', date: '2025-10-10', guests: 4, amount: 100000, status: 'Completed' },
    { id: 'BK1009', customer: 'Vikram Singh', package: 'Weekend Trek to Triund', date: '2025-10-08', guests: 3, amount: 13500, status: 'Completed' },
  ]
};

// --- TYPE DEFINITIONS ---
type PackageType = typeof initialAgentData.packages[0];

// --- MAIN COMPONENT ---
const AgentDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [agentData, setAgentData] = useState(initialAgentData);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState(initialAgentData.profile);

  // Derived state
  const totalBookings = agentData.bookings.length;
  const monthlyEarnings = agentData.dashboardStats.monthlyEarningsData[agentData.dashboardStats.monthlyEarningsData.length - 1] * 100000;

  const handleAddPackage = (newPackage: Omit<PackageType, 'id' | 'bookings' | 'rating'>) => {
    const newPkg: PackageType = {
      ...newPackage,
      id: `PKG${String(agentData.packages.length + 1).padStart(3, '0')}`,
      bookings: 0,
      rating: 0,
    };
    setAgentData(prev => ({...prev, packages: [newPkg, ...prev.packages]}));
    setShowModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  
  const handleProfileSave = () => {
      setAgentData(prev => ({ ...prev, profile: profileData}));
      setIsEditingProfile(false);
  }

  // --- Re-usable sub-components definition ---
  const StatCard: React.FC<{ title: string, value: string | number, icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{value}</p>
        </div>
        <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );

  const ToastNotification: React.FC<{ message: string }> = ({ message }) => (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fade-in-out">
        {message}
    </div>
  );
  
  const AddPackageModal: React.FC<{ onClose: () => void, onAdd: (pkg: any) => void }> = ({ onClose, onAdd }) => {
    const [newPackage, setNewPackage] = useState({ name: '', price: '', status: 'Active' });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onAdd({ ...newPackage, price: Number(newPackage.price) });
    };

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
        <div className="bg-white rounded-xl p-8 w-full max-w-lg animate-fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-800">Add New Package</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Package Name" value={newPackage.name} onChange={e => setNewPackage({...newPackage, name: e.target.value})} className="w-full p-3 border rounded-lg" required/>
            <input type="number" placeholder="Price (INR)" value={newPackage.price} onChange={e => setNewPackage({...newPackage, price: e.target.value})} className="w-full p-3 border rounded-lg" required/>
            <select value={newPackage.status} onChange={e => setNewPackage({...newPackage, status: e.target.value})} className="w-full p-3 border rounded-lg bg-white">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex justify-end gap-4 pt-4">
              <button type="button" onClick={onClose} className="text-gray-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100">Cancel</button>
              <button type="submit" className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600">Add Package</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const EarningsChart: React.FC<{ data: number[] }> = ({ data }) => {
    const maxValue = Math.max(...data, 1); // Avoid division by zero
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm col-span-1 lg:col-span-2">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Monthly Earnings (in Lakhs)</h3>
        <div className="flex justify-around items-end h-48 pt-4">
          {data.map((value, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div 
                className="w-10 bg-orange-300 rounded-t-lg hover:bg-orange-500 transition-all"
                style={{ height: `${(value / maxValue) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][index]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // -- Views as separate components for better organization --
  const DashboardView = () => (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Bookings" value={totalBookings} icon={<CalendarCheck size={22} />} />
        <StatCard title="This Month's Earnings" value={`₹${monthlyEarnings.toLocaleString('en-IN')}`} icon={<BarChart2 size={22} />} />
        <StatCard title="Active Packages" value={agentData.packages.filter(p => p.status === 'Active').length} icon={<Package size={22} />} />
        <StatCard title="Pending Queries" value={agentData.dashboardStats.pendingQueries} icon={<UserCircle size={22} />} />
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EarningsChart data={agentData.dashboardStats.monthlyEarningsData} />
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Bookings</h3>
            <div className="space-y-4">
                {agentData.bookings.slice(0, 4).map(booking => (
                    <div key={booking.id} className="text-sm">
                        <p className="font-semibold text-gray-800">{booking.customer}</p>
                        <p className="text-gray-500">{booking.package}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );

  const PackagesView = () => (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">My Packages</h2>
        <button onClick={() => setShowModal(true)} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center hover:bg-orange-600 transition">
          <PlusCircle size={20} className="mr-2" /> Add New Package
        </button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Package Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Price (INR)</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Rating</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agentData.packages.map(pkg => (
              <tr key={pkg.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">{pkg.name}</td>
                <td className="p-4 text-gray-600">₹{pkg.price.toLocaleString('en-IN')}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${pkg.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {pkg.status}
                  </span>
                </td>
                <td className="p-4 text-gray-600 flex items-center">{pkg.rating > 0 ? pkg.rating : 'N/A'} {pkg.rating > 0 && <Star size={14} className="ml-1 text-yellow-400 fill-yellow-400"/>}</td>
                <td className="p-4">
                  <button className="text-gray-500 hover:text-orange-600 p-2 rounded-full"><MoreHorizontal size={20}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const BookingsView = () => (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Recent Bookings</h2>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="p-4 text-sm font-semibold text-gray-600">Booking ID</th>
                    <th className="p-4 text-sm font-semibold text-gray-600">Customer</th>
                    <th className="p-4 text-sm font-semibold text-gray-600">Package</th>
                    <th className="p-4 text-sm font-semibold text-gray-600">Amount</th>
                    <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                </tr>
            </thead>
            <tbody>
                {agentData.bookings.map(booking => (
                    <tr key={booking.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                        <td className="p-4 font-mono text-xs text-gray-600">{booking.id}</td>
                        <td className="p-4 font-medium text-gray-800">{booking.customer}</td>
                        <td className="p-4 text-gray-600">{booking.package}</td>
                        <td className="p-4 text-gray-600">₹{booking.amount.toLocaleString('en-IN')}</td>
                        <td className="p-4">
                             <span className={`px-2 py-1 text-xs font-semibold rounded-full ${booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                {booking.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
  
  const ProfileView = () => (
    <div className="animate-fade-in">
       <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">My Profile</h2>
        {isEditingProfile ? (
          <button onClick={handleProfileSave} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center hover:bg-green-600">
            <Save size={18} className="mr-2"/> Save Changes
          </button>
        ) : (
          <button onClick={() => setIsEditingProfile(true)} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center hover:bg-orange-600">
            <Edit size={18} className="mr-2"/> Edit Profile
          </button>
        )}
      </div>
      <div className="bg-white rounded-xl border p-8 space-y-4">
        {Object.entries(profileData).map(([key, value]) => (
            <div key={key}>
                <label className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input 
                  type="text"
                  value={String(value)}
                  readOnly={!isEditingProfile}
                  onChange={(e) => setProfileData(prev => ({...prev, [key]: e.target.value}))}
                  className={`w-full p-2 mt-1 border rounded-lg ${isEditingProfile ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'}`}
                />
            </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-100 min-h-screen font-sans flex">
      <aside className="w-64 bg-white flex-shrink-0 flex flex-col border-r">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-orange-600">Agent Portal</h1>
          <p className="text-sm text-gray-500">{agentData.name}</p>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <a href="#" onClick={() => setActiveView('dashboard')} className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 ${activeView === 'dashboard' ? 'bg-orange-100 text-orange-600 font-semibold' : ''}`}>
            <LayoutDashboard size={20} className="mr-3" /> Dashboard
          </a>
          <a href="#" onClick={() => setActiveView('packages')} className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 ${activeView === 'packages' ? 'bg-orange-100 text-orange-600 font-semibold' : ''}`}>
            <Package size={20} className="mr-3" /> My Packages
          </a>
          <a href="#" onClick={() => setActiveView('bookings')} className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 ${activeView === 'bookings' ? 'bg-orange-100 text-orange-600 font-semibold' : ''}`}>
            <CalendarCheck size={20} className="mr-3" /> Bookings
          </a>
        </nav>
        <div className="p-4 border-t">
          <a href="#" onClick={() => setActiveView('profile')} className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 ${activeView === 'profile' ? 'bg-orange-100 text-orange-600 font-semibold' : ''}`}>
            <UserCircle size={20} className="mr-3" /> Profile
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <LogOut size={20} className="mr-3" /> Logout
          </a>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {activeView === 'dashboard' && <DashboardView />}
        {activeView === 'packages' && <PackagesView />}
        {activeView === 'bookings' && <BookingsView />}
        {activeView === 'profile' && <ProfileView />}
      </main>
      
      {showModal && <AddPackageModal onClose={() => setShowModal(false)} onAdd={handleAddPackage} />}
      {showToast && <ToastNotification message="Package added successfully!" />}
    </div>
  );
};

export default AgentDashboard;

