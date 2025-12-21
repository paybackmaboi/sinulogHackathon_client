import React, { useState } from 'react';

const AdminBookings = () => {
  // Mock Data
  const mockBookings = [
    { id: 1, propertyTitle: "Capitol Site Prime Driveway", customerName: "Juan Dela Cruz", date: "Jan 15 - Jan 21", status: "Pending", price: 3500, img: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?auto=format&fit=crop&q=80&w=1000" },
    { id: 2, propertyTitle: "IT Park Loft Secure Spot", customerName: "Maria Clara", date: "Feb 02 - Feb 05", status: "Confirmed", price: 2100, img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" },
    { id: 3, propertyTitle: "Ayala Center Basement", customerName: "Jose Rizal", date: "Jan 10 - Jan 12", status: "Cancelled", price: 1000, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" },
  ];

  const [bookings] = useState(mockBookings);
  const [selectedBooking, setSelectedBooking] = useState(mockBookings[0]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  // Filter Logic
  const filteredBookings = bookings.filter(b => {
    const matchesFilter = filter === 'All' || b.status === filter;
    const matchesSearch = b.customerName.toLowerCase().includes(search.toLowerCase()) || 
                          b.propertyTitle.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Pending': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Cancelled': return 'text-rose-700 bg-rose-50 border-rose-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-inter overflow-hidden">
      
      {/* -----------------------
          LEFT PANEL: SIDEBAR LIST
          (Pure White Background)
         ----------------------- */}
      <aside className="w-full md:w-[400px] flex flex-col border-r border-slate-200 bg-white shrink-0 z-10 shadow-sm">
        
        {/* Sidebar Header */}
        <div className="p-5 border-b border-slate-200 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Bookings</h2>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
              {filteredBookings.length} TOTAL
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 group-focus-within:text-slate-600 transition-colors text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search customer or property..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-slate-200 focus:border-slate-400 outline-none transition-all placeholder:text-slate-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Pending', 'Confirmed', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all whitespace-nowrap
                  ${filter === status 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'text-slate-500 border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-700'}
                `}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-slate-50/50">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div
                key={booking.id}
                onClick={() => setSelectedBooking(booking)}
                className={`p-4 rounded-xl cursor-pointer border transition-all relative overflow-hidden group
                  ${selectedBooking?.id === booking.id
                    ? 'bg-white border-slate-300 shadow-md'
                    : 'bg-white border-transparent hover:border-slate-200 hover:shadow-sm'}
                `}
              >
                {/* Active Indicator Strip */}
                {selectedBooking?.id === booking.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900"></div>
                )}

                <div className="flex justify-between items-start mb-2 pl-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">#{booking.id.toString().padStart(4, '0')}</span>
                </div>
                
                <div className="pl-2">
                  <h4 className={`font-bold text-sm mb-1 truncate ${selectedBooking?.id === booking.id ? 'text-slate-900' : 'text-slate-700'}`}>
                    {booking.propertyTitle}
                  </h4>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-[14px]">person</span>
                      {booking.customerName}
                    </span>
                    <span>{booking.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400">
              <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
              <p className="text-sm">No bookings found</p>
            </div>
          )}
        </div>
      </aside>

      {/* -----------------------
          RIGHT PANEL: DETAILS
          (Soft Slate Background for contrast)
         ----------------------- */}
      <main className="flex-1 flex flex-col h-full bg-[#f8fafc] relative overflow-hidden">
        
        {selectedBooking ? (
          <>
            {/* Header / Toolbar */}
            <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white/80 backdrop-blur z-10 sticky top-0">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Booking ID</span>
                <span className="text-slate-900 font-mono bg-slate-100 px-2 py-1 rounded border border-slate-200 font-bold">
                  #{selectedBooking.id.toString().padStart(4, '0')}
                </span>
              </div>
              
              <div className="flex gap-3">
                 <button className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg transition-colors hover:bg-slate-100">
                   <span className="material-symbols-outlined text-sm">print</span> Print
                 </button>
                 <button className="flex items-center gap-2 text-xs font-bold text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                   <span className="material-symbols-outlined text-sm">edit</span> Edit Booking
                 </button>
              </div>
            </header>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-10">
              <div className="max-w-5xl mx-auto space-y-8">
                
                {/* 1. Property Hero */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-32 h-32 rounded-xl bg-cover bg-center border border-slate-200 shadow-sm shrink-0" 
                       style={{ backgroundImage: `url("${selectedBooking.img}")` }}>
                  </div>
                  <div className="flex-1">
                     <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">{selectedBooking.propertyTitle}</h1>
                     <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Cebu City</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-yellow-500 fill-current">star</span> 4.85</span>
                     </div>
                  </div>
                  <div className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${getStatusColor(selectedBooking.status)}`}>
                    <span className="material-symbols-outlined text-lg">
                      {selectedBooking.status === 'Confirmed' ? 'check_circle' : selectedBooking.status === 'Pending' ? 'schedule' : 'cancel'}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wide">{selectedBooking.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* 2. Left Col: Guest & Trip Info */}
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* Guest Card (White Paper Style) */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">person</span> Guest Information
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-lg">
                          {selectedBooking.customerName.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-900 font-bold text-lg">{selectedBooking.customerName}</p>
                          <p className="text-sm text-slate-500">Verified Member</p>
                        </div>
                        <div className="flex gap-2">
                           <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-700 transition-colors border border-slate-200">
                             <span className="material-symbols-outlined text-lg">chat</span>
                           </button>
                           <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-700 transition-colors border border-slate-200">
                             <span className="material-symbols-outlined text-lg">call</span>
                           </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <label className="text-xs text-slate-400 block mb-1 font-semibold">Email</label>
                            <span className="text-sm text-slate-700 font-medium">juan@example.com</span>
                         </div>
                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <label className="text-xs text-slate-400 block mb-1 font-semibold">Phone</label>
                            <span className="text-sm text-slate-700 font-medium">+63 912 345 6789</span>
                         </div>
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                         <span className="material-symbols-outlined text-sm">calendar_month</span> Trip Timeline
                      </h3>
                      <div className="flex items-center justify-between relative mt-6">
                        {/* Connecting Line (Gray) */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
                        
                        <div className="bg-white pr-4">
                           <p className="text-xs text-slate-400 mb-1 font-semibold">Check-in</p>
                           <p className="text-slate-900 font-bold text-lg">Jan 15</p>
                           <p className="text-xs text-slate-500">2:00 PM</p>
                        </div>
                        <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-600 font-bold shadow-sm">
                           7 Nights
                        </div>
                        <div className="bg-white pl-4 text-right">
                           <p className="text-xs text-slate-400 mb-1 font-semibold">Check-out</p>
                           <p className="text-slate-900 font-bold text-lg">Jan 21</p>
                           <p className="text-xs text-slate-500">11:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Right Col: Payment Receipt (Professional Paper Look) */}
                  <div className="lg:col-span-1">
                    <div className="bg-white text-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                      <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                         <h3 className="text-sm font-bold text-slate-600 uppercase">Payment Summary</h3>
                         <span className="material-symbols-outlined text-slate-400 text-sm">receipt_long</span>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-600">Base Price</span>
                           <span className="font-medium text-slate-900">₱500.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500">
                           <span>Duration</span>
                           <span>7 Days</span>
                        </div>
                        
                        {/* Dashed Line separator */}
                        <div className="border-t-2 border-dashed border-slate-200 my-2"></div>
                        
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-600">Subtotal</span>
                           <span className="font-medium text-slate-900">₱3,500.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500">
                           <span>Service Fee</span>
                           <span>₱350.00</span>
                        </div>
                        
                        {/* Total Box */}
                        <div className="bg-slate-900 text-white p-4 -mx-6 -mb-6 mt-4 flex justify-between items-center">
                           <span className="text-sm font-medium opacity-80">Total Amount</span>
                           <span className="text-xl font-bold">₱3,850.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col gap-3">
                       <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                         <span className="material-symbols-outlined text-sm">check</span> Approve Request
                       </button>
                       <button className="w-full py-3 bg-white border border-slate-300 text-slate-600 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                         <span className="material-symbols-outlined text-sm">close</span> Decline
                       </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4">
               <span className="material-symbols-outlined text-4xl text-slate-300">description</span>
            </div>
            <p className="font-medium text-slate-500">Select a booking to view details</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminBookings;