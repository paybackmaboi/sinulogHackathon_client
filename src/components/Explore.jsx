import React from 'react';

const Explore = () => {
  // Data for the grid to keep JSX clean
  const properties = [
    {
        title: "Mango Ave Frontage",
        location: "Cebu City, Philippines",
        desc: "Perfect for food stalls or viewing decks.",
        price: "$150",
        unit: "/ day",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
        badge: "Sinulog Ready",
        badgeColor: "bg-primary text-surface-dark",
        guests: "10+"
    },
    {
        title: "IT Park Condo",
        location: "Lahug, Cebu City",
        desc: "Walking distance to nightlife.",
        price: "$45",
        unit: "/ night",
        rating: "4.8",
        reviews: "(120)",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Secure Gated Driveway",
        location: "Guadalupe, Cebu City",
        desc: "Fits 2 SUVs. 24/7 Security.",
        price: "$15",
        unit: "/ day",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1621293954908-bae9d00c9c65?auto=format&fit=crop&q=80&w=600",
        badge: "Parking Spot",
        badgeColor: "bg-blue-600 text-white"
    },
    {
        title: "Backyard Oasis",
        location: "Busay, Cebu",
        desc: "Scenic view, tent pitching allowed.",
        price: "$25",
        unit: "/ night",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=600",
        badge: "Camping / Lawn",
        badgeColor: "bg-green-700 text-white"
    },
    {
        title: "Mountain View Villa",
        location: "Balamban, Cebu",
        desc: "Private pool, 4 bedrooms.",
        price: "$220",
        unit: "/ night",
        rating: "4.95",
        reviews: "(42)",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "City Center Loft",
        location: "Fuente Osmeña, Cebu City",
        desc: "Direct view of the parade.",
        price: "$300",
        unit: "/ night",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600",
        badge: "Sinulog Ready",
        badgeColor: "bg-primary text-surface-dark"
    },
    {
        title: "Seaside Bungalow",
        location: "Moalboal, Cebu",
        desc: "Beachfront, snorkeling area.",
        price: "$85",
        unit: "/ night",
        rating: "4.88",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Modern Function Hall",
        location: "Mandaue City, Cebu",
        desc: "For parties and gatherings.",
        price: "$400",
        unit: "/ day",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600",
        badge: "Event Space",
        badgeColor: "bg-purple-600 text-white"
    }
  ];

  return (
    <div className="p-6 lg:p-10">
      {/* Sticky Search & Filter Header */}
      <div className="sticky top-0 -mt-6 lg:-mt-10 z-20 bg-surface-dark/95 backdrop-blur border-b border-[#3a3527] pb-4 pt-6 lg:pt-10 px-0 mb-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          {/* Search Bar */}
          <div className="flex flex-col xl:flex-row gap-4 items-stretch bg-card-dark p-2 rounded-xl border border-[#3a3527] shadow-xl">
            <div className="flex-1 relative w-full border-b xl:border-b-0 xl:border-r border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-focus-within:text-primary transition-colors">Location</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">search</span>
                <input className="bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 w-full text-sm font-medium p-0 leading-tight outline-none" placeholder="Where do you want to go?" type="text"/>
              </div>
            </div>
            
            <div className="flex-1 relative w-full border-b xl:border-b-0 xl:border-r border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group cursor-pointer">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-hover:text-primary transition-colors">Dates</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">calendar_today</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium text-white truncate">Jan 14 - Jan 22</span>
                </div>
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-primary/30 ml-auto whitespace-nowrap">Sinulog Week</span>
              </div>
            </div>

            <div className="flex-1 relative w-full border-b xl:border-b-0 xl:border-r border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-hover:text-primary transition-colors">Property Type</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">home_work</span>
                <select className="bg-transparent border-none text-white focus:ring-0 w-full text-sm font-medium p-0 cursor-pointer [&>option]:bg-card-dark outline-none">
                  <option>Homes & Apts</option>
                  <option>Driveways</option>
                  <option>Lawns</option>
                  <option>Frontages</option>
                  <option>Event Spaces</option>
                </select>
              </div>
            </div>

            <div className="w-full xl:w-40 relative border-b xl:border-b-0 border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-hover:text-primary transition-colors">Guests</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">group</span>
                <input className="bg-transparent border-none text-white focus:ring-0 w-full text-sm font-medium p-0 leading-tight outline-none" min="1" type="number" defaultValue="2"/>
              </div>
            </div>

            <button className="w-full xl:w-auto bg-primary hover:bg-yellow-400 text-surface-dark font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(250,198,56,0.1)]">
              <span className="material-symbols-outlined">search</span>
              <span>Search</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 lg:px-0 lg:mx-0">
            <button className="flex items-center gap-2 bg-primary/20 border border-primary text-primary px-4 py-2 rounded-full whitespace-nowrap transition-transform active:scale-95 shrink-0">
              <span className="material-symbols-outlined text-[20px] fill">festival</span>
              <span className="text-sm font-bold">Sinulog Specials</span>
            </button>
            <FilterPill icon="beach_access" label="Beachfront" />
            <FilterPill icon="apartment" label="City Apts" />
            <FilterPill icon="local_parking" label="Parking Spots" />
            <FilterPill icon="storefront" label="Food Stall Frontage" />
            <FilterPill icon="deck" label="Lawns & Camping" />
            <FilterPill icon="theater_comedy" label="Event Spaces" />
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Results Info Bar */}
        <div className="flex items-center justify-between">
          <p className="text-text-secondary text-sm"><span className="text-white font-bold">142</span> properties found in Cebu</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-text-secondary hover:text-white text-sm font-medium transition-colors">
              <span className="material-symbols-outlined text-lg">tune</span> Filters
            </button>
            <div className="h-4 w-px bg-[#3a3527]"></div>
            <div className="flex bg-[#3a3527] p-1 rounded-lg">
              <button className="p-1.5 bg-surface-dark rounded text-white shadow-sm">
                <span className="material-symbols-outlined text-lg">grid_view</span>
              </button>
              <button className="p-1.5 text-text-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {properties.map((prop, index) => (
             <div key={index} className="group flex flex-col gap-3 cursor-pointer">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card-dark">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                         style={{ backgroundImage: `url("${prop.image}")` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    
                    <button className="absolute top-3 right-3 p-2 bg-surface-dark/60 backdrop-blur rounded-full text-white hover:text-red-500 hover:bg-white transition-all z-10">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    
                    {prop.badge && (
                        <div className={`absolute top-3 left-3 ${prop.badgeColor} text-xs font-bold px-2 py-1 rounded shadow-md`}>
                            {prop.badge}
                        </div>
                    )}
                    
                    {prop.guests && (
                        <div className="absolute bottom-3 left-3 flex gap-2">
                            <div className="bg-surface-dark/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">group</span> {prop.guests}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{prop.title}</h3>
                        <div className="flex items-center gap-1 text-white text-sm">
                            <span className="material-symbols-outlined text-[16px] fill text-primary">star</span>
                            <span>{prop.rating}</span>
                            {prop.reviews && <span className="text-text-secondary text-xs">{prop.reviews}</span>}
                        </div>
                    </div>
                    <p className="text-text-secondary text-sm">{prop.location}</p>
                    <p className="text-text-secondary text-xs mt-1">{prop.desc}</p>
                    <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-white font-bold text-lg">{prop.price}</span>
                        <span className="text-text-secondary text-sm">{prop.unit}</span>
                    </div>
                </div>
             </div>
           ))}
        </div>

        {/* Pagination / Load More */}
        <div className="flex flex-col items-center gap-4 py-8">
            <p className="text-text-secondary text-sm">Showing 8 of 142 properties</p>
            <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-[#3a3527] rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-primary rounded-full"></div>
                </div>
            </div>
            <button className="bg-[#3a3527] hover:bg-[#554e3a] text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mt-2">
                <span>Load More Properties</span>
                <span className="material-symbols-outlined">expand_more</span>
            </button>
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
};

// Helper for Filter Pills
const FilterPill = ({ icon, label }) => (
    <button className="flex items-center gap-2 bg-card-dark border border-[#3a3527] text-text-secondary hover:text-white hover:border-gray-500 px-4 py-2 rounded-full whitespace-nowrap transition-all active:scale-95 shrink-0">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
    </button>
);

export default Explore;