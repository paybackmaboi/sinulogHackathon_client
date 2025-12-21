import React from 'react';

const UserBookings = () => {
  // Mock Data to make the UI dynamic
  const bookings = [
    {
      id: "BKG-8821",
      title: "Secure Gated Driveway",
      location: "Guadalupe, Cebu City",
      price: "$45.00",
      status: "Confirmed",
      checkIn: "Jan 18, 2024",
      checkInTime: "2:00 PM",
      checkOut: "Jan 21, 2024",
      checkOutTime: "11:00 AM",
      host: "Maria Santos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY5eO8yWXkj3C3UuEZ4262bmggzB_FahEWTNVQgcbLZCo9ss3pc8EJah_EuA-RcquhBj_G_iKGJ5afbMl0vVl3IrHo2FaTflLQsxEb5jHkpoCez7dEUw2dLdPizzGto5S-NjeAz2kP43BRFQ6eKjQhXDZTe8vJA7LxgictHTZXDDse6CRFxyqzmlq0ZjQUhbRZVGfnpxdJbY1OTu94poRldkakFAAbWkvHOqwyQ3L1F94J5Rya0YfPtw-Su7g28j8FMknFeVsjXWqE",
      hostImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl8wAIgXTidmlSpBu6J7k5u3Ac1q_hDQYvMYqOMzb-GOuz5fXHYPEggARzlYbtq1WGV5WrQiX6arcGws88FErUkxRjQCcVVeaO7FKJ_yd5-VSIyuRU98Yo426uR9fJWnNPcBpzn01q73cqjeyPnmADbxcRXWf4GEirfhPv_zxgc_BT-jb0pIcD9e5_-GXg2oNQ7lveA7O_VQ_DUket746H-wiOaZppR4P6dLVXhDl9nl59_VO83LJ2Y-bvhopWNfY-gvVglqhKfO6a"
    },
    {
      id: "BKG-9002",
      title: "City Center Loft",
      location: "Fuente Osmeña, Cebu City",
      price: "$600.00",
      status: "Pending Approval",
      checkIn: "Jan 25, 2024",
      checkInTime: "3:00 PM",
      checkOut: "Jan 27, 2024",
      checkOutTime: "12:00 PM",
      host: "Urban Stays Inc.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC97gSZs187CObMpIAdgP5jNCLbHxgfn_D72wMSUsZZ0PXDIFLfwX7n4y4IZJiDTDmN51Pu1CYe5YkNjlz3ISK2n1OBothyT_lwk3-V_wXHEL_FKxSnpSv0Hm3qWaneRLykZ3BPp-4Hl1eLgN0RpXUP5fxrPmuLDqDzzDUl4t2ijMrFvFiuFgCEJtkETUDt5CMmp79T0W8Ba-z0-GxA5VJU4gf6Q8JL9GJ_xeNXbPOx5byE9D0vhc2vJZZfkVqtSjujKVV8yruDiukV",
      hostImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpDG3V0WbYUdgH3ayvb2epqb15cl-Y5cFxJkT2rBoMTTV5txkRjqIGjaPXa5BshLCvH8ohhbIF85nJfmAnfnYGYg1xxViTJEikbysuGESa10rgq9_y6XhHmPzezB184I16pv-0jQL1NEH7dg-qiAJJ0KwKvt3jPa1PM_J7YBP0usn1QqUdGcm6QcOtKPbPXoPRRHP6WDmBNGpbt8kjWLnjPgq6q1p66uzbeej8y9zKZ5hwPUoQ_2wVMciXEkSQmd6mKJqJat9eYOr2"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 p-6 lg:p-10">
      
      {/* 1. Header Section */}
      <div className="flex flex-col gap-6 mb-2">
        <div className="flex items-center gap-2 text-user-text text-sm">
          <span>Dashboard</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-white font-medium">My Bookings</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-white tracking-tight font-space">Your Reservations</h1>
          <button className="hidden md:flex items-center gap-2 text-user-text hover:text-white font-medium text-sm transition-colors">
            <span className="material-symbols-outlined">history</span>
            <span>View past transactions</span>
          </button>
        </div>
      </div>

      {/* 2. Tabs */}
      <div className="border-b border-user-border mb-4">
        <nav className="flex gap-8 -mb-px overflow-x-auto scrollbar-hide">
          <button className="border-b-2 border-white text-white pb-4 font-bold text-sm flex items-center gap-2 whitespace-nowrap">
             Upcoming Bookings
             <span className="bg-white text-black text-[10px] px-2 py-0.5 rounded-full">2</span>
          </button>
          <button className="border-b-2 border-transparent text-user-text hover:text-white hover:border-zinc-700 pb-4 font-medium text-sm flex items-center gap-2 whitespace-nowrap transition-colors">
             Past Bookings
             <span className="bg-user-surface text-user-text group-hover:text-white text-[10px] px-2 py-0.5 rounded-full border border-user-border">5</span>
          </button>
          <button className="border-b-2 border-transparent text-user-text hover:text-white hover:border-zinc-700 pb-4 font-medium text-sm flex items-center gap-2 whitespace-nowrap transition-colors">
             Cancelled
             <span className="bg-user-surface text-user-text group-hover:text-white text-[10px] px-2 py-0.5 rounded-full border border-user-border">1</span>
          </button>
        </nav>
      </div>

      {/* 3. Booking List */}
      <div className="flex flex-col gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-user-card border border-user-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-zinc-500 transition-all group">
            <div className="flex flex-col md:flex-row">
              
              {/* Image Section */}
              <div className="w-full md:w-64 h-48 md:h-auto relative shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                     style={{ backgroundImage: `url("${booking.image}")` }}></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1 backdrop-blur-md border border-white/10 ${
                  booking.status.includes("Pending") ? "bg-amber-600/90" : "bg-emerald-600/90"
                }`}>
                  <span className="material-symbols-outlined text-[14px]">
                    {booking.status.includes("Pending") ? "hourglass_empty" : "check_circle"}
                  </span>
                  {booking.status}
                </div>
              </div>

              {/* Details Section */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white text-xl font-bold group-hover:underline decoration-zinc-500 underline-offset-4 decoration-2 transition-all">{booking.title}</h3>
                      <span className="text-user-text text-xs bg-user-surface border border-user-border px-2 py-0.5 rounded font-mono">{booking.id}</span>
                    </div>
                    <p className="text-user-text text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {booking.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white font-space">{booking.price}</p>
                    <p className="text-user-text text-xs">Total Price</p>
                  </div>
                </div>

                {/* Dates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-user-surface/50 rounded-lg border border-user-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-user-surface border border-user-border rounded-full text-white">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold mb-0.5">Check-in</p>
                      <p className="text-white text-sm font-medium">{booking.checkIn}</p>
                      <p className="text-user-text text-xs">{booking.checkInTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-user-surface border border-user-border rounded-full text-white">
                      <span className="material-symbols-outlined text-[20px]">event_busy</span>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold mb-0.5">Check-out</p>
                      <p className="text-white text-sm font-medium">{booking.checkOut}</p>
                      <p className="text-user-text text-xs">{booking.checkOutTime}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-user-border">
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="size-8 rounded-full bg-cover bg-center border border-user-border" 
                         style={{ backgroundImage: `url("${booking.hostImage}")` }}></div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Host: {booking.host}</span>
                      <button className="text-user-text text-xs hover:text-white hover:underline text-left transition-colors">Contact Host</button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto">
                     {booking.status.includes("Pending") ? (
                        <button className="flex-1 md:flex-none py-2 px-4 rounded-lg border border-red-900/50 text-red-400 hover:bg-red-900/20 text-sm font-medium transition-all">
                           Cancel Request
                        </button>
                     ) : (
                        <button className="flex-1 md:flex-none py-2 px-4 rounded-lg border border-user-border text-user-text hover:text-white hover:border-white hover:bg-user-surface text-sm font-medium transition-all">
                           Get Directions
                        </button>
                     )}
                     
                     {/* Primary Action: White Button (Admin Style) */}
                     <button className="flex-1 md:flex-none py-2 px-4 rounded-lg bg-white hover:bg-zinc-200 text-black text-sm font-bold transition-all shadow-lg shadow-white/5">
                        View Details
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 4. Empty State / Footer */}
        <div className="text-center py-10 mt-4 border-t border-user-border border-dashed">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-user-surface border border-user-border mb-4">
            <span className="material-symbols-outlined text-3xl text-user-text">search_off</span>
          </div>
          <h3 className="text-white font-bold text-lg mb-2">That's all for now</h3>
          <p className="text-user-text text-sm mb-6 max-w-md mx-auto">You don't have any other upcoming bookings at the moment. Looking for your next stay?</p>
          <button className="bg-white hover:bg-zinc-200 text-black font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg">
            <span className="material-symbols-outlined">explore</span>
            <span>Explore Properties</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserBookings;