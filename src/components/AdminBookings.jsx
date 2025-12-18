import React, { useEffect, useState } from 'react';
import { getAllBookings, updateBookingStatus } from '../api/bookingService';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await getAllBookings();
      setBookings(data);
      // Set first booking as selected by default
      if (data.length > 0 && !selectedBooking) {
        setSelectedBooking(data[0]);
      }
    } catch (error) {
      console.error('Failed to load bookings:', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateBookingStatus(id, newStatus);
      loadBookings();
      // Update selected booking if it's the one being changed
      if (selectedBooking && selectedBooking.id === id) {
        setSelectedBooking({ ...selectedBooking, status: newStatus });
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Mock data for booking details (replace with actual booking data)
  const bookingDetails = selectedBooking ? {
    title: selectedBooking.propertyTitle || "Capitol Site Prime Driveway - Secure Parking",
    location: "Capitol Site, Cebu City (Near Fuente Osmeña)",
    rating: 4.85,
    reviews: 12,
    price: 500,
    days: 7,
    checkIn: selectedBooking.bookingDate || "Jan 15",
    checkOut: "Jan 21",
    hostName: "Maria",
    hostImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8LCnJPumwQIJOyLfmYi67AxVLW4JreyyENBtrUmcdeGpoNrzjdxBjiFdRIYNr53ZmXsQn90tIO7TO7i9x3lewMNSR3B-E3J0-JBGECRaRLjItcyDJPJj4VfnBzIZ4phK7Pf6de9Dy9sJwfrQoibIeI3iKY7dVvfupGtl-9dO6ErMUVwOcVeD6FrEIUGWvh6nssjHno7Jf6YVAv4Y61tYLD-c_MWOkeuW-cY94dVnLz_Mxv757CL076Ej2XJmoTMg065ctoKA-YzT6",
    propertyImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyBEf8lQNwDLPCXhkprGGUvTqbo20VA9l0PJ8KdGk9aiQPdBFtD4_As-5YqgjbVdc-YFLdovoh4qaF7pEaZbZgOj7GKpynOFpF4lTFKLbmzapLE4Ul8wkzUv-0zWztiHjm5QFoa2uMb36ZburiOl0cb7jRrIlBdhylvV1NHOGUyGIsioUifminTxRcpSub1Wm0H8i9XcSf6kQmosdd9nhVBCP148P7e08PQBBpbWLNyg5X3-vg9-WJgxwS4WoLQ3a8qGbXfEVziAQu",
    customerName: selectedBooking.customerName || "Juan Dela Cruz",
    contactNumber: selectedBooking.contactNumber || "+63 912 345 6789",
    status: selectedBooking.status || "Pending"
  } : null;

  if (!selectedBooking && bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-white">
        <span className="material-symbols-outlined text-6xl mb-4 text-gray-400">calendar_month</span>
        <h2 className="text-2xl font-bold mb-2">No Bookings Yet</h2>
        <p className="text-gray-400">Bookings will appear here once customers make reservations.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-white text-[#111718] overflow-hidden">
      {/* Header */}
      <header className="w-full bg-white border-b border-[#dbe4e6] px-6 py-4 sticky top-0 z-20 flex justify-between items-center">
        <nav className="flex text-sm text-[#618389]">
          <span className="hover:text-[#13c8ec] transition-colors cursor-pointer">Admin</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#13c8ec] transition-colors cursor-pointer">Bookings</span>
          <span className="mx-2">/</span>
          <span className="text-[#111718] font-medium">{selectedBooking?.propertyTitle || 'Select a booking'}</span>
        </nav>
        <div className="flex gap-4">
          <button className="flex items-center gap-1 text-sm font-medium text-[#111718] hover:bg-[#f6f8f8] px-3 py-2 rounded-lg transition-colors">
            <span className="material-symbols-outlined text-lg">share</span> Share
          </button>
          <button className="flex items-center gap-1 text-sm font-medium text-[#111718] hover:bg-[#f6f8f8] px-3 py-2 rounded-lg transition-colors">
            <span className="material-symbols-outlined text-lg">download</span> Export
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto bg-white scroll-smooth">
        <div className="w-full max-w-[1120px] mx-auto p-6 flex flex-col gap-8 pb-20">
          {/* Booking Selection Sidebar (Left) */}
          <div className="flex gap-6">
            <div className="w-80 shrink-0 border-r border-[#dbe4e6] pr-6">
              <h3 className="text-lg font-bold mb-4">All Bookings ({bookings.length})</h3>
              <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    onClick={() => setSelectedBooking(booking)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedBooking?.id === booking.id
                        ? 'border-[#13c8ec] bg-[#13c8ec]/10'
                        : 'border-[#dbe4e6] hover:border-[#13c8ec]/50 hover:bg-[#f6f8f8]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-sm">{booking.propertyTitle || 'Property'}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#618389] mb-1">{booking.customerName}</p>
                    <p className="text-xs text-[#618389]">{booking.bookingDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Details (Right) */}
            {bookingDetails ? (
              <div className="flex-1">
                <section className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-[-0.02em]">
                      {bookingDetails.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <div className="flex items-center gap-1 font-bold text-[#111718]">
                        <span className="material-symbols-outlined text-base fill-current">star</span>
                        {bookingDetails.rating}
                      </div>
                      <span className="text-[#111718] underline font-medium cursor-pointer">
                        {bookingDetails.reviews} reviews
                      </span>
                      <span className="text-[#618389]">•</span>
                      <span className="text-[#618389] font-medium">{bookingDetails.location}</span>
                    </div>
                  </div>

                  {/* Main Image */}
                  <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden relative group">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url("${bookingDetails.propertyImage}")` }}
                    ></div>
                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#111718] px-3 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-white transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">grid_view</span>
                      Show all photos
                    </button>
                  </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative mt-8">
                  <div className="lg:col-span-2 flex flex-col gap-8">
                    {/* Host Info */}
                    <div className="flex justify-between items-center py-4 border-b border-[#dbe4e6]">
                      <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-[#111718]">Booking by {bookingDetails.customerName}</h2>
                        <p className="text-[#618389]">Contact: {bookingDetails.contactNumber}</p>
                      </div>
                      <div
                        className="h-12 w-12 rounded-full bg-cover bg-center border border-[#dbe4e6]"
                        style={{ backgroundImage: `url("${bookingDetails.hostImage}")` }}
                      ></div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-4 py-2">
                      <div className="flex gap-4">
                        <span className="material-symbols-outlined text-[#111718] text-2xl">location_on</span>
                        <div>
                          <h3 className="font-bold text-[#111718]">Prime Sinulog Location</h3>
                          <p className="text-[#618389] text-sm">Walking distance to the Grand Parade route and street parties.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="material-symbols-outlined text-[#111718] text-2xl">security</span>
                        <div>
                          <h3 className="font-bold text-[#111718]">Secure & Gated</h3>
                          <p className="text-[#618389] text-sm">Property is fully fenced with CCTV monitoring 24/7.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="material-symbols-outlined text-[#111718] text-2xl">key</span>
                        <div>
                          <h3 className="font-bold text-[#111718]">Self Check-in</h3>
                          <p className="text-[#618389] text-sm">Easily access the driveway with a provided key code for the gate.</p>
                        </div>
                      </div>
                    </div>

                    <hr className="border-[#dbe4e6]" />

                    {/* About */}
                    <section>
                      <h2 className="text-xl font-bold text-[#111718] mb-4">About this booking</h2>
                      <div className="text-[#111718] leading-relaxed space-y-3">
                        <p>
                          Customer <strong>{bookingDetails.customerName}</strong> has booked this property for Sinulog week.
                          The booking is currently <strong>{bookingDetails.status}</strong> and requires your attention.
                        </p>
                        <p>
                          Contact the customer at <strong>{bookingDetails.contactNumber}</strong> to confirm details
                          or make any necessary arrangements.
                        </p>
                      </div>
                    </section>

                    <hr className="border-[#dbe4e6]" />

                    {/* Amenities */}
                    <section>
                      <h2 className="text-xl font-bold text-[#111718] mb-6">What this place offers</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#618389]">local_parking</span>
                          <span className="text-[#111718]">Free parking on premises</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#618389]">videocam</span>
                          <span className="text-[#111718]">Security cameras on property</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#618389]">fence</span>
                          <span className="text-[#111718]">Fully Fenced</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#618389]">light_mode</span>
                          <span className="text-[#111718]">Floodlights at night</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#618389]">water_drop</span>
                          <span className="text-[#111718]">Water access</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#618389]">pets</span>
                          <span className="text-[#111718]">Pet friendly (leashed)</span>
                        </div>
                      </div>
                    </section>

                    <hr className="border-[#dbe4e6]" />

                    {/* Calendar */}
                    <section>
                      <h2 className="text-xl font-bold text-[#111718] mb-2">Booking Dates</h2>
                      <p className="text-[#618389] text-sm mb-6">{bookingDetails.checkIn} - {bookingDetails.checkOut}, 2024</p>
                      <div className="bg-[#f6f8f8] p-6 rounded-xl border border-[#dbe4e6]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg">January 2024</h3>
                          <div className="flex gap-2">
                            <button className="p-1 hover:bg-gray-200 rounded-full">
                              <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded-full">
                              <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                            <div key={day} className="text-[#618389] font-medium py-2">{day}</div>
                          ))}
                          {Array.from({ length: 31 }, (_, i) => {
                            const day = i + 1;
                            const isBooked = day >= 15 && day <= 21;
                            const isStart = day === 15;
                            const isEnd = day === 21;
                            return (
                              <div
                                key={day}
                                className={`py-3 ${
                                  isBooked
                                    ? isStart
                                      ? 'bg-[#13c8ec] text-[#111718] font-bold rounded-l-full'
                                      : isEnd
                                      ? 'bg-[#13c8ec] text-[#111718] font-bold rounded-r-full'
                                      : 'bg-[#13c8ec]/30 text-[#111718]'
                                    : day < 15
                                    ? 'text-gray-400 line-through'
                                    : 'text-[#111718] hover:bg-gray-200 rounded-lg cursor-pointer'
                                }`}
                              >
                                {day}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </section>

                    {/* Host Section */}
                    <section className="flex flex-col gap-4">
                      <h2 className="text-xl font-bold text-[#111718]">Property Host</h2>
                      <div className="bg-[#f6f8f8] p-6 rounded-xl border border-[#dbe4e6] flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="flex flex-col items-center gap-2 min-w-[120px]">
                          <div
                            className="h-24 w-24 rounded-full bg-cover bg-center border-4 border-white shadow-sm"
                            style={{ backgroundImage: `url("${bookingDetails.hostImage}")` }}
                          ></div>
                          <h3 className="font-bold text-lg">{bookingDetails.hostName}</h3>
                          <div className="flex items-center gap-1 text-sm text-[#111718] font-bold">
                            <span className="material-symbols-outlined text-sm fill-current">star</span>
                            24 Reviews
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                          <div className="flex gap-2 text-sm text-[#618389]">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-base">verified_user</span>
                              Identity verified
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-base">award_star</span>
                              Superhost
                            </span>
                          </div>
                          <p className="text-[#111718] text-sm leading-relaxed">
                            Hi! I'm {bookingDetails.hostName}. I've been living in Capitol Site for over 20 years.
                            My property is very secure and my family is always home to assist.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Booking Card (Right Sidebar) */}
                  <div className="lg:col-span-1 relative">
                    <div className="sticky top-28 bg-white border border-[#dbe4e6] rounded-xl p-6 shadow-xl shadow-black/5">
                      <div className="flex justify-between items-end mb-6">
                        <div>
                          <span className="text-2xl font-extrabold text-[#111718]">₱{bookingDetails.price}</span>
                          <span className="text-[#618389]"> / day</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[#111718] font-medium underline">
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          {bookingDetails.rating}
                        </div>
                      </div>

                      <div className="flex flex-col border border-[#dbe4e6] rounded-lg mb-4 overflow-hidden">
                        <div className="grid grid-cols-2 border-b border-[#dbe4e6]">
                          <div className="p-3 border-r border-[#dbe4e6]">
                            <p className="text-[10px] font-bold uppercase text-[#111718]">Check-in</p>
                            <p className="text-sm text-[#618389]">{bookingDetails.checkIn}</p>
                          </div>
                          <div className="p-3">
                            <p className="text-[10px] font-bold uppercase text-[#111718]">Check-out</p>
                            <p className="text-sm text-[#618389]">{bookingDetails.checkOut}</p>
                          </div>
                        </div>
                        <div className="p-3 flex justify-between items-center">
                          <div>
                            <p className="text-[10px] font-bold uppercase text-[#111718]">Status</p>
                            <p className="text-sm text-[#618389]">{bookingDetails.status}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mb-4">
                        <button
                          onClick={() => handleStatusChange(selectedBooking.id, 'Confirmed')}
                          className="w-full bg-[#13c8ec] hover:bg-[#0ebcdb] text-[#111718] font-bold py-3 rounded-lg transition-all transform active:scale-95 shadow-md shadow-[#13c8ec]/20"
                        >
                          Approve Booking
                        </button>
                        <button
                          onClick={() => handleStatusChange(selectedBooking.id, 'Cancelled')}
                          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95"
                        >
                          Cancel Booking
                        </button>
                      </div>

                      <div className="flex flex-col gap-3 text-sm text-[#111718]">
                        <div className="flex justify-between">
                          <span className="underline decoration-[#dbe4e6]">₱{bookingDetails.price} x {bookingDetails.days} days</span>
                          <span>₱{bookingDetails.price * bookingDetails.days}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="underline decoration-[#dbe4e6]">Sinulog Service Fee</span>
                          <span>₱{Math.round(bookingDetails.price * bookingDetails.days * 0.1)}</span>
                        </div>
                      </div>

                      <hr className="my-4 border-[#dbe4e6]" />

                      <div className="flex justify-between font-bold text-lg text-[#111718]">
                        <span>Total</span>
                        <span>₱{bookingDetails.price * bookingDetails.days + Math.round(bookingDetails.price * bookingDetails.days * 0.1)}</span>
                      </div>

                      <div className="mt-6 p-3 bg-[#f6f8f8] rounded-lg text-xs text-[#618389] flex gap-2">
                        <span className="material-symbols-outlined text-base">event_busy</span>
                        <p>
                          <strong>Free cancellation</strong> before Jan 10. Non-refundable during Sinulog week.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Things to Know */}
                <section className="border-t border-[#dbe4e6] pt-10 mt-8">
                  <h2 className="text-xl font-bold text-[#111718] mb-4">Things to know</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-bold text-sm mb-2">Rental Rules</h3>
                      <ul className="text-sm text-[#618389] space-y-2">
                        <li>Check-in after 2:00 PM</li>
                        <li>No loud music after 10:00 PM</li>
                        <li>Max 2 vehicles per booking</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">Safety</h3>
                      <ul className="text-sm text-[#618389] space-y-2">
                        <li>CCTV recording 24/7</li>
                        <li>Well-lit driveway</li>
                        <li>Emergency contacts provided</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">Cancellation Policy</h3>
                      <p className="text-sm text-[#618389] leading-relaxed">
                        Cancel before Jan 10 for a full refund. Review the Host's full cancellation policy for details.
                      </p>
                      <a className="text-sm font-bold underline mt-2 inline-block" href="#">Show more</a>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-[#618389]">
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl mb-4">calendar_month</span>
                  <p>Select a booking to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminBookings;
