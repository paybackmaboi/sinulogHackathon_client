import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDashboard from './components/UserDashboard';
import OwnerDashboard from './components/OwnerDashboard';
import AdminDashboard from './components/AdminDashboard';
import AdminBookings from './components/AdminBookings'; 
import PropertyDashboard from './components/PropertyDashboard'; 
import { HowItWorks, Benefits, Testimonials, CTA } from './components/HomeSections';
import AdminLayout from './components/AdminLayout';

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
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* User & Owner Dashboards */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        {/* === 2. ADMIN ROUTES WRAPPED IN LAYOUT === */}
        <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/properties" element={<PropertyDashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
