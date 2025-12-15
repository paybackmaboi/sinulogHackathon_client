import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// NOTE: We added "/components/" to the paths below
import Header from './components/Header';
import Hero from './components/Hero';
import Listings from './components/Listings';
import AIFeature from './components/AIFeature';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Listings />
      <AIFeature />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;