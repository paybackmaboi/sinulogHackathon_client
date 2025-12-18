import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#f0f2f4] dark:bg-[#111418]/95 dark:border-[#293038] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer select-none">
          <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">apartment</span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-xl font-bold tracking-tight">EstateBook</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">List Property</a>
          <a className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Stays</a>
          <a className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Experiences</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden sm:flex h-10 px-4 items-center justify-center rounded-lg text-[#111418] dark:text-white text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Log In
          </Link>
          <Link to="/signup" className="flex h-10 px-6 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;