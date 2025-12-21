import React from 'react';

const UserSavedHomes = () => {
  const savedProperties = [
    {
      id: 1,
      title: "Secure Gated Driveway",
      location: "Guadalupe, Cebu City",
      price: "$45",
      rating: "4.9",
      reviews: "86",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY5eO8yWXkj3C3UuEZ4262bmggzB_FahEWTNVQgcbLZCo9ss3pc8EJah_EuA-RcquhBj_G_iKGJ5afbMl0vVl3IrHo2FaTflLQsxEb5jHkpoCez7dEUw2dLdPizzGto5S-NjeAz2kP43BRFQ6eKjQhXDZTe8vJA7LxgictHTZXDDse6CRFxyqzmlq0ZjQUhbRZVGfnpxdJbY1OTu94poRldkakFAAbWkvHOqwyQ3L1F94J5Rya0YfPtw-Su7g28j8FMknFeVsjXWqE",
      features: ["3 Beds", "Wi-Fi"],
      icons: ["bed", "wifi"],
      status: "Available",
      statusColor: "bg-emerald-500/90",
      available: true
    },
    {
      id: 2,
      title: "City Center Loft",
      location: "Fuente Osmeña, Cebu City",
      price: "$85",
      rating: "4.7",
      reviews: "124",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC97gSZs187CObMpIAdgP5jNCLbHxgfn_D72wMSUsZZ0PXDIFLfwX7n4y4IZJiDTDmN51Pu1CYe5YkNjlz3ISK2n1OBothyT_lwk3-V_wXHEL_FKxSnpSv0Hm3qWaneRLykZ3BPp-4Hl1eLgN0RpXUP5fxrPmuLDqDzzDUl4t2ijMrFvFiuFgCEJtkETUDt5CMmp79T0W8Ba-z0-GxA5VJU4gf6Q8JL9GJ_xeNXbPOx5byE9D0vhc2vJZZfkVqtSjujKVV8yruDiukV",
      features: ["1 Bed", "A/C"],
      icons: ["bed", "ac_unit"],
      status: "Sinulog Blocked",
      statusColor: "bg-rose-600/90",
      available: false
    },
    {
      id: 3,
      title: "Mountain View Villa",
      location: "Busay, Cebu City",
      price: "$250",
      rating: "5.0",
      reviews: "32",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx1Nh0tWNbtqYmmNIl9O0m9PRHkFcl1fr6LC4bCYKtT1Ckq5OYnuJVs9Ch7BZeYSH6WJYraFnfmF64zrKWWnd5xFcpSZb1ArcBR__hyDJ4LZbABCcQGOQfrRErjynwJfqGXHV8w0D_oSsFGYLq384tzofsmoRQuD0jWWqB9LDICaRK1zdXDwUzkJScQNJnQvyTtsUyAO0dXFCD0oEG7cqe7-XLyCyJA6sBKdHUNUt5y-OK0fpLh9z_gp35ASfHIwqi1LokVO7jjh4o",
      features: ["5 Beds", "Pool"],
      icons: ["bed", "pool"],
      status: "Available",
      statusColor: "bg-emerald-500/90",
      available: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 p-6 lg:p-10">
      
      {/* 1. Header Section */}
      <div className="flex flex-col gap-6 mb-2">
        <div className="flex items-center gap-2 text-user-text text-sm">
          <span>Dashboard</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-white font-medium">Saved Homes</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-white tracking-tight font-space">Saved Homes</h1>
          
          {/* Filters */}
          <div className="flex items-center gap-3">
            <div className="relative group hidden sm:block">
              <select className="appearance-none bg-user-card border border-user-border text-white text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:border-zinc-500 cursor-pointer hover:border-zinc-600 transition-colors">
                <option>Sort by: Recently Added</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-user-text pointer-events-none text-lg">expand_more</span>
            </div>
            <button className="flex items-center gap-2 bg-user-card border border-user-border text-white text-sm rounded-lg px-4 py-2.5 hover:bg-user-border transition-colors">
              <span className="material-symbols-outlined text-lg">tune</span>
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {savedProperties.map((prop) => (
          <div key={prop.id} className="bg-user-card rounded-xl overflow-hidden border border-user-border group hover:border-zinc-500 hover:shadow-lg transition-all flex flex-col relative">
            
            {/* Image Area */}
            <div className="aspect-[16/10] bg-cover bg-center relative group-hover:scale-[1.02] transition-transform duration-500" 
                 style={{ backgroundImage: `url("${prop.image}")` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
              
              {/* Heart Button */}
              <div className="absolute top-3 right-3 z-10">
                <button className="p-2 bg-black/40 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all group/btn">
                  <span className="material-symbols-outlined fill text-xl group-hover/btn:scale-110 transition-transform">favorite</span>
                </button>
              </div>

              {/* Status Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className={`${prop.statusColor} text-white text-xs font-bold px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1 shadow-sm border border-white/10`}>
                  <span className="material-symbols-outlined text-[14px]">
                    {prop.available ? 'check_circle' : 'event_busy'}
                  </span>
                  {prop.status}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-bold text-lg leading-tight mb-0.5 font-space">{prop.title}</h3>
                <p className="text-xs text-zinc-300 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> {prop.location}
                </p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex items-center justify-between text-user-text text-sm pb-3 border-b border-user-border">
                <div className="flex items-center gap-4">
                  {prop.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-zinc-500">{prop.icons[idx]}</span> {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-white">
                  <span className="material-symbols-outlined text-[16px] fill text-white">star</span>
                  <span className="font-bold">{prop.rating}</span>
                  <span className="text-user-text text-xs">({prop.reviews})</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-user-text text-[10px] uppercase tracking-wide font-bold">Per Night</p>
                  <p className="text-white text-xl font-bold font-space">{prop.price}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 rounded-lg border border-user-border text-user-text hover:text-white hover:bg-user-surface text-sm font-medium transition-colors">
                    Details
                  </button>
                  {prop.available ? (
                    <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 font-bold text-sm transition-colors shadow-lg shadow-white/5">
                      Book Now
                    </button>
                  ) : (
                    <button className="px-4 py-2 rounded-lg bg-user-surface border border-user-border text-zinc-600 cursor-not-allowed font-bold text-sm" disabled>
                      Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Empty/Continue State */}
      <div className="text-center py-10 border-t border-user-border border-dashed">
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-user-surface border border-user-border mb-4">
          <span className="material-symbols-outlined text-3xl text-user-text">search</span>
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Continue Exploring</h3>
        <p className="text-user-text text-sm mb-6 max-w-md mx-auto">Found what you were looking for? Browse our curated collections for more inspiration.</p>
        <button className="bg-user-card border border-user-border hover:border-white hover:text-white text-zinc-300 font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2">
          <span className="material-symbols-outlined">explore</span>
          <span>Discover More Homes</span>
        </button>
      </div>

    </div>
  );
};

export default UserSavedHomes;