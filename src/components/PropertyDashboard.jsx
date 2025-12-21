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
    { 
      id: 1, 
      title: "Capitol Site Driveway", 
      price: "₱500", 
      location: "Near Fuente Osmeña", 
      status: "ACTIVE", 
      statusColor: "bg-green-100 text-green-800 border-green-200", 
      rating: "4.8", 
      specs: [{ icon: "directions_car", text: "2 Slots" }, { icon: "videocam", text: "CCTV" }], 
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyBEf8lQNwDLPCXhkprGGUvTqbo20VA9l0PJ8KdGk9aiQPdBFtD4_As-5YqgjbVdc-YFLdovoh4qaF7pEaZbZgOj7GKpynOFpF4lTFKLbmzapLE4Ul8wkzUv-0zWztiHjm5QFoa2uMb36ZburiOl0cb7jRrIlBdhylvV1NHOGUyGIsioUifminTxRcpSub1Wm0H8i9XcSf6kQmosdd9nhVBCP148P7e08PQBBpbWLNyg5X3-vg9-WJgxwS4WoLQ3a8qGbXfEVziAQu", 
      opacity: "opacity-100",
      category: "Driveways"
    },
    { 
      id: 2, 
      title: "Juana Osmeña Lawn", 
      price: "₱1,200", 
      location: "Mango Avenue Area", 
      status: "PENDING REVIEW", 
      statusColor: "bg-orange-100 text-orange-800 border-orange-200", 
      rating: null, 
      specs: [{ icon: "camping", text: "4 Tents" }, { icon: "water_drop", text: "Water Access" }], 
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8HtwBl9exOKs6Jis_9cT9MlIBL8yeCJjfXn7lJmFw3vJbDazep5Z8vLTluTkvTy6jfiR0IHXOsAhYjdpO_kXtqM7BT3LpyaMPpgN6QheuxcSpHo_8FcySqmUDMhkcAUszgfup6UfSuBRKtztR0TvlmW8UeZ3GglYZJK7p2Ca8m7szzrpN7BMA1Dl5BSnv9QgUnBbHoXp5Pr9dF-Zu2sEXro4P9151ckFPdBD2u2T6cG67QAFalMmVFv7Gpftn9Sf31tQcid3eL0P8", 
      opacity: "opacity-100",
      category: "Lawns"
    },
    { 
      id: 3, 
      title: "Mango Ave Frontage", 
      price: "₱5,000", 
      location: "Prime Parade Route", 
      status: "FULLY BOOKED", 
      statusColor: "bg-[#111718] text-white", 
      isBooked: true, 
      specs: [{ icon: "storefront", text: "Food Stall" }, { icon: "bolt", text: "Electric" }], 
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuALTIOsRfoffwHIWVUCZSbGYHwcqSva6uBuY3veS6fJhAbYUoHh7PLj6pJtaj0NpvGbMe5QPieepYCv8lyzlxE8BaO-218OiIUhqbK9fpP9oIrSRNLdDA6xIfH81wC9NYbdPI0mQ51NVrbMUev8aOTCPSMg_8rgk4A7wAvhcEgD9DRC1hqukQREAv6XCLBcs48MNsou4uaGp4MTw6jh_vqtJv7CXVkuGaIJqPSB3-Z_z1mwuREqXk5YS_pj7hJHTHMhUvYl1RlnE-Aa", 
      opacity: "opacity-80",
      category: "Frontage"
    }
  ];

  // Filter listings based on active tab (Optional logic, removing if you want to see all)
  // const filteredListings = listings.filter(l => l.category === activeTab); 

  return (
    <div className="flex flex-col w-full gap-6 relative z-10">
      
      {/* Header */}
      <header className="flex flex-wrap justify-between items-end gap-4 pb-4 border-b border-[#dbe4e6]">
        <div className="flex flex-col gap-1">
          {/* Fixed Text Color for Light Theme */}
          <h1 className="text-[#111718] text-3xl font-extrabold leading-tight tracking-[-0.033em]">Property Management</h1>
          <p className="text-[#618389] text-base font-normal">Manage your short-term rentals for Sinulog week.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 border border-[#dbe4e6] bg-white text-[#111718] text-sm font-bold hover:bg-background-light transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">download</span>
            <span>Export Report</span>
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-[#111718] text-sm font-bold hover:bg-[#0ebcdb] transition-colors shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-lg">add_location_alt</span>
            <span>Add New Listing</span>
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-2 rounded-xl p-6 border border-[#dbe4e6] bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <p className="text-[#618389] text-sm font-bold uppercase tracking-wider">{stat.title}</p>
              <span className="material-symbols-outlined text-[#618389]">{stat.icon}</span>
            </div>
            <p className="text-[#111718] text-3xl font-black leading-tight">{stat.value}</p>
            <div className={`flex items-center gap-1 ${stat.trendColor} text-sm font-medium`}>
              <span className="material-symbols-outlined text-sm">{stat.trendIcon}</span>
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Listings Management Area */}
      <section className="flex flex-col gap-4 border border-[#dbe4e6] rounded-xl bg-white shadow-sm overflow-hidden">
        
        {/* Tabs - Enhanced Visibility */}
        <div className="border-b border-[#dbe4e6] bg-background-light/30 px-6 pt-4">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { name: 'Driveways', label: 'Driveways (Parking)', icon: 'directions_car' },
              { name: 'Lawns', label: 'Lawns (Camping)', icon: 'camping' },
              { name: 'Frontage', label: 'Frontage (Vendors)', icon: 'storefront' }
            ].map((tab) => (
              <button 
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 border-b-[3px] pb-3 px-1 transition-all whitespace-nowrap ${
                  activeTab === tab.name 
                    ? 'border-primary text-[#111718]' 
                    : 'border-transparent text-[#618389] hover:text-[#111718] hover:border-[#dbe4e6]'
                }`}
              >
                <span className={`material-symbols-outlined ${activeTab === tab.name ? 'text-primary fill-current' : ''}`}>
                  {tab.icon}
                </span>
                <p className="text-sm font-bold">{tab.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-4 px-6 py-4 bg-white border-b border-[#dbe4e6]">
            <div className="relative flex-1 min-w-[200px]">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#618389]">search</span>
                <input 
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#dbe4e6] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[#111718] placeholder-[#618389]" 
                    placeholder="Search properties..." 
                    type="text"
                />
            </div>
            <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#618389]">Sort by:</span>
                <select className="pl-3 pr-8 py-2 rounded-lg border border-[#dbe4e6] text-sm text-[#111718] bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {listings.map((listing) => (
            <div key={listing.id} className={`group flex flex-col rounded-xl border border-[#dbe4e6] overflow-hidden hover:shadow-lg transition-all bg-white ${listing.opacity}`}>
              
              {/* Image Area */}
              <div className={`relative h-48 bg-gray-200 ${listing.isBooked ? 'grayscale' : ''}`}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${listing.imgUrl}")` }}></div>
                
                {/* Status Badges */}
                <div className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wider ${listing.statusColor}`}>
                  {listing.status}
                </div>
                
                {/* Rating Badge */}
                {!listing.isBooked && listing.rating && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#111718] text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-sm text-yellow-500 fill-current">star</span> {listing.rating}
                    </div>
                )}
              </div>
              
              {/* Content Area */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-[#111718] leading-tight">{listing.title}</h3>
                    <div className="font-bold text-[#111718]">{listing.price}<span className="text-[#618389] text-xs font-normal">/day</span></div>
                  </div>
                  <p className="text-[#618389] text-sm mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> {listing.location}
                  </p>
                </div>
                
                {/* Specs/Features */}
                <div className="flex items-center gap-2 text-xs text-[#618389] font-medium bg-background-light p-2 rounded-lg">
                    {listing.specs.map((spec, i) => (
                        <React.Fragment key={i}>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">{spec.icon}</span> 
                                {spec.text}
                            </div>
                            {i < listing.specs.length - 1 && <span className="w-1 h-1 rounded-full bg-[#dbe4e6]"></span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-2 flex gap-2">
                  <button className="flex-1 py-2 px-3 rounded-lg border border-[#dbe4e6] text-[#111718] text-sm font-bold hover:bg-background-light transition-colors">
                    {listing.isBooked ? 'View Details' : 'Manage'}
                  </button>
                  <button className="py-2 px-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-transparent">
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