import React, { useState, useEffect } from 'react';

const PropertyDashboard = () => {
  const [activeTab, setActiveTab] = useState('Driveways');

  useEffect(() => {
    console.log('PropertyDashboard component mounted!');
  }, []);

  // Mock Data
  const stats = [
    { title: "Active Sinulog Listings", value: "12", icon: "holiday_village", trend: "+2 added this week", trendColor: "text-[#078834]", trendIcon: "trending_up" },
    { title: "Pending Bookings", value: "4", icon: "pending_actions", trend: "Action required", trendColor: "text-[#e89c30]", trendIcon: "priority_high" },
    { title: "Total Earnings", value: "₱ 45,000", icon: "payments", trend: "+15% vs last year", trendColor: "text-[#078834]", trendIcon: "trending_up" },
  ];

  const listings = [
    { id: 1, title: "Capitol Site Driveway", price: "₱500", location: "Near Fuente Osmeña", status: "ACTIVE", statusColor: "bg-green-100 text-green-800 border-green-200", rating: "4.8", specs: [{ icon: "directions_car", text: "2 Slots" }, { icon: "videocam", text: "CCTV" }], imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyBEf8lQNwDLPCXhkprGGUvTqbo20VA9l0PJ8KdGk9aiQPdBFtD4_As-5YqgjbVdc-YFLdovoh4qaF7pEaZbZgOj7GKpynOFpF4lTFKLbmzapLE4Ul8wkzUv-0zWztiHjm5QFoa2uMb36ZburiOl0cb7jRrIlBdhylvV1NHOGUyGIsioUifminTxRcpSub1Wm0H8i9XcSf6kQmosdd9nhVBCP148P7e08PQBBpbWLNyg5X3-vg9-WJgxwS4WoLQ3a8qGbXfEVziAQu", opacity: "opacity-100" },
    { id: 2, title: "Juana Osmeña Lawn", price: "₱1,200", location: "Mango Avenue Area", status: "PENDING REVIEW", statusColor: "bg-orange-100 text-orange-800 border-orange-200", rating: null, specs: [{ icon: "camping", text: "4 Tents" }, { icon: "water_drop", text: "Water Access" }], imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8HtwBl9exOKs6Jis_9cT9MlIBL8yeCJjfXn7lJmFw3vJbDazep5Z8vLTluTkvTy6jfiR0IHXOsAhYjdpO_kXtqM7BT3LpyaMPpgN6QheuxcSpHo_8FcySqmUDMhkcAUszgfup6UfSuBRKtztR0TvlmW8UeZ3GglYZJK7p2Ca8m7szzrpN7BMA1Dl5BSnv9QgUnBbHoXp5Pr9dF-Zu2sEXro4P9151ckFPdBD2u2T6cG67QAFalMmVFv7Gpftn9Sf31tQcid3eL0P8", opacity: "opacity-100" },
    { id: 3, title: "Mango Ave Frontage", price: "₱5,000", location: "Prime Parade Route", status: "FULLY BOOKED", statusColor: "bg-white text-[#111718]", isBooked: true, specs: [{ icon: "storefront", text: "Food Stall" }, { icon: "bolt", text: "Electric" }], imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuALTIOsRfoffwHIWVUCZSbGYHwcqSva6uBuY3veS6fJhAbYUoHh7PLj6pJtaj0NpvGbMe5QPieepYCv8lyzlxE8BaO-218OiIUhqbK9fpP9oIrSRNLdDA6xIfH81wC9NYbdPI0mQ51NVrbMUev8aOTCPSMg_8rgk4A7wAvhcEgD9DRC1hqukQREAv6XCLBcs48MNsou4uaGp4MTw6jh_vqtJv7CXVkuGaIJqPSB3-Z_z1mwuREqXk5YS_pj7hJHTHMhUvYl1RlnE-Aa", opacity: "opacity-80" }
  ];

  return (
    // Note: Removed the sidebar <aside> and the outer flex container. 
    // This is now just a plain div that fills the parent <Outlet />
    <div className="flex flex-col w-full gap-6 relative z-10">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-end gap-4 pb-2 border-b border-white/10">
        <div className="flex flex-col gap-1">
          {/* Changed text color to white to match your Dark Admin Theme */}
          <h1 className="text-white text-3xl font-extrabold leading-tight">Property Management</h1>
          <p className="text-gray-400 text-base font-normal">Manage your short-term rentals for Sinulog week.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 border border-white/20 bg-white/5 text-white text-sm font-bold hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            <span>Export Report</span>
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-brand-gold text-black text-sm font-bold hover:bg-yellow-500 transition-colors shadow-lg">
            <span className="material-symbols-outlined text-lg">add_location_alt</span>
            <span>Add New Listing</span>
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-2 rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">{stat.title}</p>
              <span className="material-symbols-outlined text-gray-400">{stat.icon}</span>
            </div>
            <p className="text-white text-3xl font-black leading-tight">{stat.value}</p>
            <div className={`flex items-center gap-1 ${stat.trendColor} text-sm font-medium`}>
              <span className="material-symbols-outlined text-sm">{stat.trendIcon}</span>
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Listings Management Area */}
      <section className="flex flex-col gap-4 border border-white/10 rounded-xl bg-white/5 shadow-sm p-4">
        {/* Tabs */}
        <div className="border-b border-white/10 pb-4">
          <div className="flex gap-8">
            {[
              { name: 'Driveways', label: 'Driveways (Parking)', icon: 'directions_car' },
              { name: 'Lawns', label: 'Lawns (Camping)', icon: 'camping' },
              { name: 'Frontage', label: 'Frontage (Vendors)', icon: 'storefront' }
            ].map((tab) => (
              <button 
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 border-b-[3px] pb-3 px-1 transition-all ${activeTab === tab.name ? 'border-brand-gold text-white' : 'border-transparent text-gray-500 hover:text-white'}`}
              >
                <span className={`material-symbols-outlined ${activeTab === tab.name ? 'text-brand-gold' : ''}`}>{tab.icon}</span>
                <p className="text-sm font-bold">{tab.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {listings.map((listing) => (
            <div key={listing.id} className={`group flex flex-col rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors bg-black/20 ${listing.opacity}`}>
              <div className={`relative h-48 bg-gray-700 ${listing.isBooked ? 'grayscale' : ''}`}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${listing.imgUrl}")` }}></div>
                
                {listing.isBooked ? (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white text-black text-sm font-bold px-3 py-1 rounded-full shadow-lg">{listing.status}</div>
                  </div>
                ) : (
                  <div className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-md shadow-sm ${listing.status === 'ACTIVE' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>{listing.status}</div>
                )}
              </div>
              
              <div className="p-4 flex flex-col gap-3 flex-1 text-white">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg leading-tight">{listing.title}</h3>
                    <div className="font-bold text-brand-gold">{listing.price}<span className="text-gray-400 text-xs font-normal">/day</span></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> {listing.location}
                  </p>
                </div>
                
                <div className="mt-auto pt-2 flex gap-2">
                  <button className="flex-1 py-2 px-3 rounded-lg border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                    {listing.isBooked ? 'Details' : 'Manage'}
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-brand-gold/20 text-brand-gold hover:bg-brand-gold/40 transition-colors">
                    <span className="material-symbols-outlined text-lg">edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PropertyDashboard;