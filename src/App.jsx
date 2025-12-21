  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { db } from './firebase';
  // Component Imports
  import Header from './components/Header';
  import Hero from './components/Hero';
  import Listings from './components/Listings';
  import Footer from './components/Footer';
  import Login from './components/Login';
  import SignUp from './components/SignUp';

  // User Components
  import UserLayout from './components/UserLayout'; // Newly created layout
  import Explore from './components/Explore';       // Newly created page
  import UserDashboard from './components/UserDashboard';
  import UserBookings from './components/UserBookings';
  import UserSavedHomes from './components/UserSavedHomes';
  import UserProfile from './components/UserProfile';
  import UserPayments from './components/UserPayments';
  import UserTransactionHistory from './components/UserTransactionHistory';


  // Admin Components
  import AdminLayout from './components/AdminLayout';
  import AdminDashboard from './components/AdminDashboard';
  import AdminBookings from './components/AdminBookings'; 
  import PropertyDashboard from './components/PropertyDashboard'; 
  import AnalyticsDashboard from './components/AnalyticsDashboard'; 
  import Settings from './components/Settings';

  // Sections
  import { HowItWorks, Benefits, Testimonials, CTA } from './components/HomeSections';

  const LandingPage = () => {
    return (
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <div className="layout-container flex flex-col items-center">
              <Listings />
              <HowItWorks />
              <Benefits />
              <Testimonials />
              <CTA />
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  function App() {
    console.log(db);
    return (
      <Router>
        <Routes>
          {/* === PUBLIC ROUTES === */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* === USER ROUTES (Wrapped in UserLayout) === */}
          <Route element={<UserLayout />}>
            {/* Matches the "Dashboard" link in sidebar */}
            <Route path="/user-dashboard" element={<UserDashboard />} />
            
            {/* Matches the "Explore" link in sidebar */}
            <Route path="/explore" element={<Explore />} />
            {/* <Route path="/bookings" element={<UserBookings />} />
            <Route path="/saved" element={<UserSavedHomes />} />
            <Route path="/profile" element={<UserProfile />} /> */}
            <Route path="/payments" element={<UserPayments />} />
            <Route path="/transactions" element={<UserTransactionHistory />} />


            
            {/* Placeholders for other sidebar links to prevent 404s */}
            <Route path="/bookings" element={<div className="p-10 text-white">My Bookings Page (Coming Soon)</div>} />
            <Route path="/saved" element={<div className="p-10 text-white">Saved Homes (Coming Soon)</div>} />
            <Route path="/profile" element={<div className="p-10 text-white">Profile Settings (Coming Soon)</div>} />
            <Route path="/payments" element={<div className="p-10 text-white">Payment Methods (Coming Soon)</div>} />
            <Route path="/settings" element={<div className="p-10 text-white">User Settings (Coming Soon)</div>} />
          </Route>
          
          {/* === ADMIN/OWNER ROUTES (Wrapped in AdminLayout) === */}
          <Route element={<AdminLayout />}>
            <Route path="/owner-dashboard" element={<AdminDashboard />} />
            <Route path="/owner-dashboard/properties" element={<PropertyDashboard />} />
            <Route path="/owner-dashboard/bookings" element={<AdminBookings />} />
            <Route path="/owner-dashboard/earnings" element={<AnalyticsDashboard />} />
            <Route path="/owner-dashboard/settings" element={<Settings />} />
          </Route>

        </Routes>
      </Router>
    );
  }

  export default App;