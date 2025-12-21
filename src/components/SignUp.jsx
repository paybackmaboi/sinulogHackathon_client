import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authService';
import { MdCheckCircle } from 'react-icons/md'; 

const SignUp = () => {
  const navigate = useNavigate();

  // State Management
  const [userType, setUserType] = useState('tourist'); 
  const [formData, setFormData] = useState({
    fullName: '',
    username: '', // This will be used as the Email
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Styling Constants
  const primaryColorClass = "text-[#137fec]";
  const bgPrimaryClass = "bg-[#137fec]";
  const focusRingPrimaryClass = "focus:ring-[#137fec]/50";

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // Map userType to role
      const role = userType === 'owner' ? 'owner' : 'tourist';

      await registerUser({
        username: formData.username, // This sends the email
        password: formData.password,
        fullName: formData.fullName,
        role: role
      });

      setShowSuccessModal(true);

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      console.error(err);
      let msg = "Registration failed.";
      if (err.code === 'auth/email-already-in-use') msg = "That email is already in use.";
      if (err.code === 'auth/weak-password') msg = "Password should be at least 6 characters.";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-screen w-full bg-[#f6f7f8] dark:bg-[#101922] font-sans overflow-hidden">
      
      {/* === SUCCESS MODAL === */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white dark:bg-[#1a2632] p-8 rounded-2xl shadow-2xl flex flex-col items-center animate-bounce-in transform scale-100 border border-gray-100 dark:border-gray-700 max-w-sm w-full mx-4">
            <div className="mb-4 text-green-500">
              <MdCheckCircle className="text-6xl animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2 text-center">
              Account Created!
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
              Redirecting you to login...
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 overflow-hidden">
              <div className="bg-green-500 h-1.5 rounded-full animate-progress-bar w-full origin-left duration-[2000ms] transition-transform ease-linear"></div>
            </div>
          </div>
        </div>
      )}

      {/* Left Side: Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 h-full overflow-y-auto bg-white dark:bg-[#1a2632] shadow-xl z-10">
        <div className="flex flex-col flex-1 justify-center px-8 sm:px-12 lg:px-20 py-10">
          
          {/* Logo & Header */}
          <div className="flex items-center gap-3 mb-8">
            <Link to="/" className={`size-10 ${primaryColorClass}`}>
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </Link>
            <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">GO4thEstate</h2>
          </div>

          <div className="mb-8">
            <h1 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight mb-2">Create Account</h1>
            <p className="text-[#617589] dark:text-gray-400 text-base font-normal">Join us to book unique stays or list your properties.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-medium animate-pulse">
              {error}
            </div>
          )}

          {/* User Type Segmented Control */}
          <div className="flex mb-6 w-full">
            <div className="flex w-full items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-gray-700 p-1">
              <label className={`flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md py-2 text-sm font-medium leading-normal transition-all text-center ${userType === 'tourist' ? 'bg-white dark:bg-gray-600 shadow-sm text-[#111418] dark:text-white' : 'text-[#617589] dark:text-gray-400'}`}>
                <span className="truncate">Tourist / Renter</span>
                <input className="hidden" name="user_type" type="radio" value="tourist" checked={userType === 'tourist'} onChange={() => setUserType('tourist')} />
              </label>
              <label className={`flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md py-2 text-sm font-medium leading-normal transition-all text-center ${userType === 'owner' ? 'bg-white dark:bg-gray-600 shadow-sm text-[#111418] dark:text-white' : 'text-[#617589] dark:text-gray-400'}`}>
                <span className="truncate">Property Owner</span>
                <input className="hidden" name="user_type" type="radio" value="owner" checked={userType === 'owner'} onChange={() => setUserType('owner')} />
              </label>
            </div>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <label className="flex flex-col w-full">
              <p className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Full Name</p>
              <input name="fullName" value={formData.fullName} onChange={handleChange} className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal transition-colors`} placeholder="e.g. Sarah Jenkins" type="text" />
            </label>

            {/* Email / Username */}
            <label className="flex flex-col w-full">
              <p className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Email Address</p>
              <div className="relative">
                <input name="username" required value={formData.username} onChange={handleChange} className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal transition-colors`} placeholder="name@example.com" type="text" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589]">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
              </div>
            </label>

            {/* Password */}
            <label className="flex flex-col w-full group">
              <div className="flex justify-between items-baseline pb-2">
                <p className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal">Password</p>
              </div>
              <div className="relative">
                <input name="password" required value={formData.password} onChange={handleChange} className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 pr-12 text-base font-normal leading-normal transition-colors`} placeholder="••••••••" type={showPassword ? "text" : "password"} />
                <button className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:${primaryColorClass} transition-colors cursor-pointer flex items-center`} type="button" onClick={() => setShowPassword(!showPassword)}>
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </label>

            {/* Confirm Password */}
            <label className="flex flex-col w-full">
              <p className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Confirm Password</p>
              <div className="relative">
                <input name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal transition-colors`} placeholder="••••••••" type="password" />
              </div>
            </label>

            {/* Create Account Button */}
            <button type="submit" disabled={loading || showSuccessModal} className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 ${bgPrimaryClass} hover:bg-[#137fec]/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] mt-2 shadow-lg shadow-[#137fec]/20 disabled:opacity-70 disabled:cursor-not-allowed`}>
              <span className="truncate">
                {loading ? 'Creating Account...' : `Sign Up as ${userType === 'owner' ? 'Owner' : 'Tourist'}`}
              </span>
            </button>
            
            <p className="text-center text-sm text-[#617589] mt-4">
              Already have an account? <Link className={`font-bold ${primaryColorClass} hover:underline`} to="/login">Log In</Link>
            </p>
          </form>

          <div className="mt-8 text-xs text-center text-gray-400">
            © 2025 GO4thEstate Inc. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side: Visual Section */}
      <div className="hidden lg:flex w-1/2 h-full relative bg-gray-200">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end p-16 h-full w-full max-w-[700px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-4xl font-bold leading-tight tracking-tight">Start Your Journey with Modern Living</h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-md">Experience curated homes and seamless property management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;