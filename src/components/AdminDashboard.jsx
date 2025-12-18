import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock Data
  const mockProperties = [
    {
      id: 1,
      title: "Capitol Site Prime Driveway",
      price: 500,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyBEf8lQNwDLPCXhkprGGUvTqbo20VA9l0PJ8KdGk9aiQPdBFtD4_As-5YqgjbVdc-YFLdovoh4qaF7pEaZbZgOj7GKpynOFpF4lTFKLbmzapLE4Ul8wkzUv-0zWztiHjm5QFoa2uMb36ZburiOl0cb7jRrIlBdhylvV1NHOGUyGIsioUifminTxRcpSub1Wm0H8i9XcSf6kQmosdd9nhVBCP148P7e08PQBBpbWLNyg5X3-vg9-WJgxwS4WoLQ3a8qGbXfEVziAQu",
      location: "Near Fuente Osmeña",
      status: "Active"
    },
    {
      id: 2,
      title: "Juana Osmeña Lawn",
      price: 1200,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8HtwBl9exOKs6Jis_9cT9MlIBL8yeCJjfXn7lJmFw3vJbDazep5Z8vLTluTkvTy6jfiR0IHXOsAhYjdpO_kXtqM7BT3LpyaMPpgN6QheuxcSpHo_8FcySqmUDMhkcAUszgfup6UfSuBRKtztR0TvlmW8UeZ3GglYZJK7p2Ca8m7szzrpN7BMA1Dl5BSnv9QgUnBbHoXp5Pr9dF-Zu2sEXro4P9151ckFPdBD2u2T6cG67QAFalMmVFv7Gpftn9Sf31tQcid3eL0P8",
      location: "Mango Avenue Area",
      status: "Active"
    },
    {
      id: 3,
      title: "Mango Ave Frontage",
      price: 5000,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuALTIOsRfoffwHIWVUCZSbGYHwcqSva6uBuY3veS6fJhAbYUoHh7PLj6pJtaj0NpvGbMe5QPieepYCv8lyzlxE8BaO-218OiIUhqbK9fpP9oIrSRNLdDA6xIfH81wC9NYbdPI0mQ51NVrbMUev8aOTCPSMg_8rgk4A7wAvhcEgD9DRC1hqukQREAv6XCLBcs48MNsou4uaGp4MTw6jh_vqtJv7CXVkuGaIJqPSB3-Z_z1mwuREqXk5YS_pj7hJHTHMhUvYl1RlnE-Aa",
      location: "Prime Parade Route",
      status: "Active"
    }
  ];

  const mockBookings = [
    {
      id: 1,
      propertyTitle: "Capitol Site Prime Driveway",
      customerName: "Juan Dela Cruz",
      contactNumber: "+63 912 345 6789",
      bookingDate: "2024-01-15",
      status: "Confirmed",
      totalAmount: 3500,
      days: 7
    },
    {
      id: 2,
      propertyTitle: "Juana Osmeña Lawn",
      customerName: "Maria Santos",
      contactNumber: "+63 923 456 7890",
      bookingDate: "2024-01-18",
      status: "Pending",
      totalAmount: 2400,
      days: 2
    },
    {
      id: 3,
      propertyTitle: "Mango Ave Frontage",
      customerName: "John Smith",
      contactNumber: "+63 934 567 8901",
      bookingDate: "2024-01-10",
      status: "Completed",
      totalAmount: 10000,
      days: 2
    },
    {
      id: 4,
      propertyTitle: "Capitol Site Prime Driveway",
      customerName: "Sarah Johnson",
      contactNumber: "+63 945 678 9012",
      bookingDate: "2024-01-05",
      status: "Completed",
      totalAmount: 2500,
      days: 5
    }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bRes = await axios.get('http://localhost:5000/api/bookings');
      const pRes = await axios.get('http://localhost:5000/api/properties');
      setBookings(bRes.data.length > 0 ? bRes.data : mockBookings);
      setProperties(pRes.data.length > 0 ? pRes.data : mockProperties);
    } catch (error) {
      console.error('Error fetching data, using mock data:', error);
      // Use mock data if API fails
      setBookings(mockBookings);
      setProperties(mockProperties);
    } finally {
      setLoading(false);
    }
  };

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.username || 'Admin';

  // Calculate stats
  const activeBookings = bookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending').length;
  const totalRevenue = bookings
    .filter(b => b.status === 'Confirmed')
    .reduce((sum, b) => sum + (parseFloat(b.totalAmount) || 0), 0);
  const recentBookings = bookings
    .filter(b => b.status === 'Confirmed' || b.status === 'Pending')
    .slice(0, 2);
  const pastBookings = bookings
    .filter(b => b.status === 'Completed' || b.status === 'Cancelled')
    .slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      {/* Welcome & Stats */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Dashboard</h1>
            <p className="text-[#bbb29b] mt-1 text-lg">Welcome back, {userName}!</p>
          </div>
          <Link 
            to="/owner-dashboard/properties"
            className="bg-[#fac638] hover:bg-yellow-400 text-[#181611] font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined">add_location_alt</span>
            Add New Property
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1 rounded-xl bg-[#27241b] border border-[#3a3527] p-4 hover:border-[#fac638]/50 transition-colors cursor-default">
            <div className="flex items-center justify-between">
              <p className="text-[#bbb29b] text-sm font-medium">Total Properties</p>
              <span className="material-symbols-outlined text-[#fac638]">holiday_village</span>
            </div>
            <p className="text-white text-3xl font-bold mt-2">{properties.length}</p>
            <p className="text-[#bbb29b] text-xs">Active listings</p>
          </div>

          <div className="flex flex-col gap-1 rounded-xl bg-[#27241b] border border-[#3a3527] p-4 hover:border-[#fac638]/50 transition-colors cursor-default">
            <div className="flex items-center justify-between">
              <p className="text-[#bbb29b] text-sm font-medium">Active Bookings</p>
              <span className="material-symbols-outlined text-[#fac638]">confirmation_number</span>
            </div>
            <p className="text-white text-3xl font-bold mt-2">{activeBookings}</p>
            <p className="text-[#bbb29b] text-xs">Requires attention</p>
          </div>

          <div className="flex flex-col gap-1 rounded-xl bg-[#27241b] border border-[#3a3527] p-4 hover:border-[#fac638]/50 transition-colors cursor-default">
            <div className="flex items-center justify-between">
              <p className="text-[#bbb29b] text-sm font-medium">Total Revenue</p>
              <span className="material-symbols-outlined text-[#fac638]">payments</span>
            </div>
            <p className="text-white text-3xl font-bold mt-2">₱{totalRevenue.toLocaleString()}</p>
            <p className="text-[#bbb29b] text-xs">This month</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 items-start">
        {/* Left Column: Bookings */}
        <div className="flex flex-col gap-8 flex-1 w-full min-w-0">
          {/* Recent Bookings */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Recent Bookings</h2>
              <Link to="/owner-dashboard/bookings" className="text-[#fac638] text-sm font-medium hover:underline">
                View Calendar
              </Link>
            </div>

            {recentBookings.length > 0 ? (
              recentBookings.map((booking, idx) => (
                <div
                  key={booking.id || idx}
                  className="flex flex-col md:flex-row items-stretch rounded-xl bg-[#27241b] border border-[#3a3527] overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="w-full md:w-72 h-48 md:h-auto bg-gradient-to-br from-[#fac638]/20 to-yellow-600/20 relative flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-[#fac638]/30">calendar_month</span>
                    {booking.status === 'Pending' && (
                      <div className="absolute top-3 left-3 bg-[#181611]/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                        Pending
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 gap-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[#fac638] transition-colors">
                          {booking.propertyTitle || 'Property Booking'}
                        </h3>
                        <div className="flex items-center gap-1 mt-1 text-[#bbb29b] text-sm">
                          <span className="material-symbols-outlined text-[18px]">person</span>
                          <span>{booking.customerName || 'Guest'}</span>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                          booking.status === 'Confirmed'
                            ? 'bg-green-900/40 text-green-400 border border-green-800'
                            : 'bg-yellow-900/30 text-yellow-500 border border-yellow-800/50'
                        }`}
                      >
                        {booking.status || 'Pending'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2 bg-[#3a3527]/50 px-3 py-2 rounded-lg">
                        <span className="material-symbols-outlined text-[#fac638] text-[20px]">calendar_today</span>
                        <span>{booking.bookingDate || 'Date TBD'}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#3a3527]/50 px-3 py-2 rounded-lg">
                        <span className="material-symbols-outlined text-[#fac638] text-[20px]">phone</span>
                        <span>{booking.contactNumber || 'N/A'}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-3 mt-2">
                      <button className="text-white hover:bg-[#3a3527] px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Manage
                      </button>
                      <Link
                        to="/owner-dashboard/bookings"
                        className="bg-[#fac638] hover:bg-yellow-400 text-[#181611] text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-[0_0_15px_rgba(250,198,56,0.15)]"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl bg-[#27241b] border border-[#3a3527] p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-gray-500 mb-2">calendar_month</span>
                <p className="text-[#bbb29b]">No recent bookings</p>
              </div>
            )}
          </div>

          {/* Past Bookings */}
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xl font-bold text-white">Completed Bookings</h2>
            <div className="bg-[#27241b] rounded-xl border border-[#3a3527] overflow-hidden">
              {pastBookings.length > 0 ? (
                <div className="flex flex-col divide-y divide-[#3a3527]">
                  {pastBookings.map((booking, idx) => (
                    <div
                      key={booking.id || idx}
                      className="p-4 flex flex-col sm:flex-row gap-4 items-center justify-between hover:bg-[#3a3527]/30 transition-colors"
                    >
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="size-16 rounded-lg bg-gradient-to-br from-[#fac638]/20 to-yellow-600/20 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[#fac638] text-2xl">check_circle</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold">{booking.propertyTitle || 'Property'}</h4>
                          <p className="text-[#bbb29b] text-sm">
                            {booking.customerName || 'Guest'} • {booking.bookingDate || 'Date'}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                booking.status === 'Completed'
                                  ? 'bg-green-900/40 text-green-400'
                                  : 'bg-red-900/40 text-red-400'
                              }`}
                            >
                              {booking.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto justify-end">
                        <button className="text-[#bbb29b] hover:text-white text-sm font-medium px-3 py-2">Receipt</button>
                        <button className="border border-[#554e3a] hover:border-[#fac638] text-white hover:text-[#fac638] px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-[#bbb29b]">
                  <span className="material-symbols-outlined text-4xl mb-2">history</span>
                  <p>No completed bookings yet</p>
                </div>
              )}
              <div className="bg-[#2d2a21] p-2 text-center">
                <Link to="/owner-dashboard/bookings" className="text-[#bbb29b] text-sm hover:text-white w-full py-1 block">
                  View all history
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Properties & Extras */}
        <div className="w-full xl:w-80 flex flex-col gap-8 shrink-0">
          {/* Top Properties Widget */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Top Properties</h2>
              <Link to="/owner-dashboard/properties" className="text-[#bbb29b] hover:text-white">
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              {properties.slice(0, 3).map((property, idx) => (
                <div key={property.id || idx} className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: property.imageUrl
                        ? `url("${property.imageUrl}")`
                        : 'linear-gradient(135deg, rgba(250,198,56,0.2) 0%, rgba(250,198,56,0.4) 100%)'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                    <h4 className="text-white font-bold truncate">{property.title || 'Property'}</h4>
                    <p className="text-gray-300 text-xs">₱{property.price || '0'} / night</p>
                  </div>
                  <button className="absolute top-2 right-2 p-1.5 bg-black/40 backdrop-blur rounded-full text-[#fac638] hover:bg-black/60 transition-colors">
                    <span className="material-symbols-outlined text-[20px] fill">star</span>
                  </button>
                </div>
              ))}
              {properties.length === 0 && (
                <div className="rounded-xl bg-[#27241b] border border-[#3a3527] p-8 text-center aspect-[4/3] flex items-center justify-center">
                  <div>
                    <span className="material-symbols-outlined text-4xl text-gray-500 mb-2">holiday_village</span>
                    <p className="text-[#bbb29b] text-sm">No properties yet</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats Widget */}
          <div className="rounded-xl border border-dashed border-[#554e3a] p-5 flex flex-col items-center justify-center text-center gap-2 bg-[#1f1d16]">
            <div className="p-3 bg-[#fac638]/10 rounded-full text-[#fac638] mb-1">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h3 className="text-white font-bold text-sm">Quick Stats</h3>
            <p className="text-[#bbb29b] text-xs px-2">
              {properties.length} properties • {bookings.length} total bookings • ₱{totalRevenue.toLocaleString()} revenue
            </p>
            <Link to="/owner-dashboard/properties" className="text-[#fac638] text-xs font-bold mt-2 hover:underline">
              View analytics
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-10"></div>
    </div>
  );
};

export default AdminDashboard;
