import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/authService'; 
import { MdVisibility, MdVisibilityOff, MdCheck } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc'; 
import { FaFacebook } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  
  // State for form fields
  // We keep the key as 'username' to match your authService, but the VALUE must be an email.
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Styling Constants
  const primaryText = "text-[#137fec]";
  const primaryBg = "bg-[#137fec]";
  const focusRing = "focus:ring-[#137fec]/50";

  // Handle Input Change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(null); 
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Call Firebase Login
      // NOTE: 'credentials.username' MUST be an email address for Firebase to work
      const response = await loginUser(credentials);
      
      // 2. Save User to LocalStorage
      localStorage.setItem('user', JSON.stringify(response));
      console.log("Login Success. Role:", response.role);

      // 3. Redirect based on Role
      // We check for both 'admin' and 'owner' to be safe
      if (response.role === 'admin' || response.role === 'owner') {
        navigate('/owner-dashboard'); 
      } else {
        navigate('/explore'); // Or /user-dashboard
      }

    } catch (err) {
      console.error("Login Error:", err);
      // specific firebase error handling
      if (err.code === 'auth/invalid-email') {
        setError("Please enter a valid email address.");
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError("Incorrect email or password.");
      } else {
        setError("Failed to login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-[#f6f7f8] dark:bg-[#101922] text-[#111418] dark:text-white antialiased transition-colors duration-300">
      
      {/* === Background Image === */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-pulse-slow" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-[#101922]/40 backdrop-blur-[6px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101922]/90 via-[#101922]/50 to-[#101922]/30"></div>
      </div>

      {/* === Login Card === */}
      <div className="relative z-10 w-full max-w-[480px] p-4">
        <div className="bg-white dark:bg-[#1a2632] rounded-2xl shadow-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm">
          
          <div className="px-8 pt-8 pb-4 text-center">
            <div className="flex justify-center mb-6">
              <Link to="/" className={`w-14 h-14 rounded-xl ${primaryBg}/10 flex items-center justify-center ${primaryText}`}>
                <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white mb-2">Welcome Back</h1>
            <p className="text-[#617589] dark:text-gray-400 text-base font-normal">
              Login with your email and password.
            </p>
          </div>

          <div className="px-8 pb-8 pt-2">
            
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Email Field (Changed Label from Username to Email) */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#111418] dark:text-gray-200">Email Address</label>
                <div className="relative">
                  <input 
                    name="username" // Keep name='username' so it matches state
                    type="email"    // CHANGED TO EMAIL
                    required
                    value={credentials.username}
                    onChange={handleChange}
                    className={`w-full h-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 text-base text-[#111418] dark:text-white placeholder-gray-400 focus:border-[#137fec] focus:ring-2 ${focusRing} focus:outline-none transition-all duration-200`} 
                    placeholder="name@example.com" 
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#111418] dark:text-gray-200">Password</label>
                <div className="relative flex items-center">
                  <input 
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={credentials.password}
                    onChange={handleChange}
                    className={`w-full h-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 pr-12 text-base text-[#111418] dark:text-white placeholder-gray-400 focus:border-[#137fec] focus:ring-2 ${focusRing} focus:outline-none transition-all duration-200`} 
                    placeholder="Enter your password" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex items-center justify-center outline-none"
                  >
                    {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className={`peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 checked:${primaryBg} checked:border-transparent transition-all`}/>
                    <MdCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none font-bold" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-[#111418] dark:group-hover:text-gray-200 transition-colors">Remember me</span>
                </label>
                <a href="#" className={`text-sm font-medium ${primaryText} hover:underline transition-colors`}>Forgot Password?</a>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`mt-2 w-full h-12 ${primaryBg} hover:bg-[#137fec]/90 text-white font-semibold rounded-lg shadow-md shadow-[#137fec]/20 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {loading ? 'Logging in...' : 'Log In'}
                {!loading && <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform">→</span>}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white dark:bg-[#1a2632] px-2 text-gray-500 dark:text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 h-11 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <FcGoogle size={20} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-11 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <FaFacebook size={20} className="text-[#1877F2]" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Facebook</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 py-4 px-8 border-t border-gray-100 dark:border-gray-700/50 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account? 
              <Link to="/signup" className={`font-semibold ${primaryText} hover:underline transition-colors ml-1`}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;