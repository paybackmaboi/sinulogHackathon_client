import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authService';
import { MdCheckCircle } from 'react-icons/md'; // Added Check Icon

const SignUp = () => {
  const navigate = useNavigate();

  // State Management
  const [userType, setUserType] = useState('tourist'); 
  const [formData, setFormData] = useState({
    fullName: '',
    username: '', 
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // New State for Success Modal
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

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!formData.username || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      // 2. Map UI UserType to Backend Role
      const role = userType === 'owner' ? 'admin' : 'user';

      // 3. Call API
      await registerUser({
        username: formData.username,
        password: formData.password,
        role: role
      });

      // 4. Show Success Modal & Redirect Logic
      setShowSuccessModal(true);

      // Wait 2 seconds, then redirect to LOGIN page
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      setError(err.message || "Registration failed. Try a different username.");
      setLoading(false); // Only stop loading if error. If success, keep loading visual until redirect.
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
            <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">Estately</h2>
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
              {/* Option 1: Tourist */}
              <label className={`flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md py-2 text-sm font-medium leading-normal transition-all text-center ${userType === 'tourist' ? 'bg-white dark:bg-gray-600 shadow-sm text-[#111418] dark:text-white' : 'text-[#617589] dark:text-gray-400'}`}>
                <span className="truncate">Tourist / Renter</span>
                <input 
                  className="hidden" 
                  name="user_type" 
                  type="radio" 
                  value="tourist"
                  checked={userType === 'tourist'}
                  onChange={() => setUserType('tourist')}
                />
              </label>
              {/* Option 2: Owner */}
              <label className={`flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md py-2 text-sm font-medium leading-normal transition-all text-center ${userType === 'owner' ? 'bg-white dark:bg-gray-600 shadow-sm text-[#111418] dark:text-white' : 'text-[#617589] dark:text-gray-400'}`}>
                <span className="truncate">Property Owner</span>
                <input 
                  className="hidden" 
                  name="user_type" 
                  type="radio" 
                  value="owner"
                  checked={userType === 'owner'}
                  onChange={() => setUserType('owner')}
                />
              </label>
            </div>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <label className="flex flex-col w-full">
              <p className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Full Name</p>
              <input 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal transition-colors`} 
                placeholder="e.g. Sarah Jenkins" 
                type="text"
              />
            </label>

            {/* Email / Username */}
            <label className="flex flex-col w-full">
              <p className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Email Address / Username</p>
              <div className="relative">
                <input 
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal transition-colors`} 
                  placeholder="name@example.com" 
                  type="text"
                />
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
                <input 
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 pr-12 text-base font-normal leading-normal transition-colors`} 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                />
                <button 
                  className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:${primaryColorClass} transition-colors cursor-pointer flex items-center`} 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {/* Strength Indicator */}
              <div className="flex gap-1 mt-2 h-1 w-full">
                <div className={`h-full w-1/4 rounded-full transition-colors duration-300 ${formData.password.length > 0 ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className={`h-full w-1/4 rounded-full transition-colors duration-300 ${formData.password.length > 5 ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className={`h-full w-1/4 rounded-full transition-colors duration-300 ${formData.password.length > 8 ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className="h-full w-1/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </label>

            {/* Confirm Password */}
            <label className="flex flex-col w-full">
              <p className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Confirm Password</p>
              <div className="relative">
                <input 
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 ${focusRingPrimaryClass} border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-[#9aa2a9] dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal transition-colors`} 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
            </label>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 mt-1">
              <div className="flex items-center h-5">
                <input className={`w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 ${focusRingPrimaryClass} dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#137fec]/60 dark:ring-offset-gray-800 ${primaryColorClass}`} id="terms" type="checkbox"/>
              </div>
              <label className="text-sm font-normal text-[#617589] dark:text-gray-400" htmlFor="terms">
                I agree to the <a className={`font-medium ${primaryColorClass} hover:underline`} href="#">Terms and Conditions</a> and <a className={`font-medium ${primaryColorClass} hover:underline`} href="#">Privacy Policy</a>.
              </label>
            </div>

            {/* Create Account Button */}
            <button 
              type="submit"
              disabled={loading || showSuccessModal}
              className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 ${bgPrimaryClass} hover:bg-[#137fec]/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] mt-2 shadow-lg shadow-[#137fec]/20 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              <span className="truncate">
                {loading ? 'Creating Account...' : `Sign Up as ${userType === 'owner' ? 'Owner' : 'Tourist'}`}
              </span>
            </button>

            {/* Social Login */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or continue with</span>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" type="button">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.55 0 2.95.53 4.05 1.58l3.03-3.03C17.48 2.19 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" type="button">
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                Facebook
              </button>
            </div>

            <p className="text-center text-sm text-[#617589] mt-4">
              Already have an account? <Link className={`font-bold ${primaryColorClass} hover:underline`} to="/login">Log In</Link>
            </p>
          </form>

          <div className="mt-8 text-xs text-center text-gray-400">
            © 2023 Estately Inc. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side: Visual Section */}
      <div className="hidden lg:flex w-1/2 h-full relative bg-gray-200">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        {/* Content on top of image */}
        <div className="relative z-10 flex flex-col justify-end p-16 h-full w-full max-w-[700px]">
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 mb-4">
              <span className="material-symbols-outlined text-white text-3xl">apartment</span>
            </div>
            <h2 className="text-white text-4xl font-bold leading-tight tracking-tight">
              Start Your Journey with Modern Living
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-md">
              Experience curated homes and seamless property management in one centralized platform.
            </p>
            
            {/* Stats / Trust badges */}
            <div className="flex gap-8 mt-8 border-t border-white/20 pt-8">
              <div>
                <p className="text-white font-bold text-2xl">10k+</p>
                <p className="text-white/60 text-sm">Active Listings</p>
              </div>
              <div>
                <p className="text-white font-bold text-2xl">2M+</p>
                <p className="text-white/60 text-sm">Happy Travelers</p>
              </div>
              <div>
                <p className="text-white font-bold text-2xl">4.9</p>
                <p className="text-white/60 text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;