import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Discover Cebu's <br/> <span className="text-brand-gold">Future Skyline</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-gray-200 mb-8"
        >
          Sinulog Hackathon 2026 Innovation Entry. Connecting top universities with real estate solutions.
        </motion.p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="#listings" 
          className="inline-block px-8 py-3 bg-brand-gold text-brand-dark font-bold rounded-full text-lg shadow-lg hover:shadow-brand-gold/50 transition"
        >
          View Listings
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;