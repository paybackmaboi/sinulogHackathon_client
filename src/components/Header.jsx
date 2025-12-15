import React from 'react';
import { FaBuilding } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <FaBuilding className="text-brand-gold text-2xl" />
            <span className="ml-2 text-xl font-bold tracking-wider text-white">
              Cebu<span className="text-brand-gold">Estate</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/#home" className="hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/#listings" className="hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium">Properties</a>
              <a href="#ai-tools" className="bg-brand-gold text-brand-dark hover:bg-yellow-500 px-3 py-2 rounded-md text-sm font-bold">AI Architect</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;