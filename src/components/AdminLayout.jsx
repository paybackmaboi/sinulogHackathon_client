import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('AdminLayout - Current path:', location.pathname);
  }, [location.pathname]);

  // Get user from localStorage or use defaults from design
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.username || 'Alex Morgan';
  const userRole = 'Pro Owner';

  // Helper to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-owner-bg-light dark:bg-owner-bg-dark font-display text-slate-900 dark:text-white h-screen flex overflow-hidden">
      
      {/* === Side Navigation === */}
      <aside className="hidden w-64 flex-col border-r border-[#28392e] bg-[#111813] md:flex shrink-0">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-6">
            
            {/* Brand */}
            <div className="flex items-center gap-3 px-2">
              <div className="flex items-center justify-center rounded-lg bg-owner-primary/20 p-2 text-owner-primary">
                <span className="material-symbols-outlined text-3xl">real_estate_agent</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold leading-tight text-white">GO4thEstate Pro</h1>
                <p className="text-xs text-owner-text-sec">Owner Portal</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              <Link 
                to="/owner-dashboard" 
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  isActive('/owner-dashboard') 
                    ? 'bg-owner-primary/10 text-owner-primary' 
                    : 'text-owner-text-sec hover:bg-[#28392e] hover:text-white'
                }`}
              >
                <span className={`material-symbols-outlined ${isActive('/owner-dashboard') ? 'filled' : ''}`}>dashboard</span>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>

              <Link 
                to="/owner-dashboard/properties" 
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  isActive('/owner-dashboard/properties') 
                    ? 'bg-owner-primary/10 text-owner-primary' 
                    : 'text-owner-text-sec hover:bg-[#28392e] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">apartment</span>
                <span className="text-sm font-medium">Properties</span>
              </Link>

              <Link 
                to="/owner-dashboard/bookings" 
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  isActive('/owner-dashboard/bookings') 
                    ? 'bg-owner-primary/10 text-owner-primary' 
                    : 'text-owner-text-sec hover:bg-[#28392e] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">calendar_month</span>
                <span className="text-sm font-medium">Bookings</span>
              </Link>

              <div className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-owner-text-sec transition-colors hover:bg-[#28392e] hover:text-white cursor-pointer">
                <span className="material-symbols-outlined">chat_bubble</span>
                <span className="text-sm font-medium">Messages</span>
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-owner-primary text-[10px] font-bold text-black">3</span>
              </div>

              {/* Updated Analytics Link */}
              <Link 
                to="/owner-dashboard/earnings" 
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  isActive('/owner-dashboard/earnings') 
                    ? 'bg-owner-primary/10 text-owner-primary' 
                    : 'text-owner-text-sec hover:bg-[#28392e] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">monitoring</span>
                <span className="text-sm font-medium">Analytics</span>
              </Link>
            </nav>
          </div>

          {/* Bottom User Profile */}
          <div className="flex flex-col gap-4 border-t border-[#28392e] pt-4">
            <Link to="/owner-dashboard/settings" className="group flex items-center gap-3 rounded-lg px-3 py-2 text-owner-text-sec hover:text-white transition-colors">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </Link>
            
            <div className="flex items-center gap-3 px-2">
              <div 
                className="h-10 w-10 overflow-hidden rounded-full bg-slate-700 bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTDLjxoB35NnvRfeTuMugW7ApnUhWJ2DhBdBfGBBau5uolYajqqNJHhDIfaG6fA7pq08JF5mMZRYujQDvzkwjGyA8WMoodx7Zndj_CjB6cEmzUg7NrP05EyM7Vqbc17iLAisAyhDyE1r3zf0RyuR3IrsWjian4Xu9R1zxE6lB7nSK0U1YFyx3Zf8pj34DB22m4ZVEl5qubD2YWPNLdStf4i-f3Z6UnQ9qA2uNpSV0jLaibcKrhMhYKe1WAulEZMqyfRLrkIXY0D5Hf")' }}
              ></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium text-white">{userName}</p>
                <p className="text-xs text-owner-text-sec">{userRole}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* === Main Content Area === */}
      <main className="flex h-full flex-1 flex-col overflow-hidden bg-owner-bg-light dark:bg-owner-bg-dark">
        
        {/* Top Header */}
        <header className="flex items-center justify-between border-b border-[#28392e] bg-[#111813] px-6 py-4 shadow-sm">
          {/* Mobile Menu Button */}
          <button className="mr-4 text-white md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>

          <h2 className="text-xl font-bold leading-tight tracking-tight text-white">
            {location.pathname === '/owner-dashboard' ? 'Dashboard Overview' : 
             location.pathname.includes('properties') ? 'Properties' : 
             location.pathname.includes('bookings') ? 'Bookings' : 
             location.pathname.includes('earnings') ? 'Analytics' : 
             location.pathname.includes('settings') ? 'Settings' : 'Overview'}
          </h2>

          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="hidden max-w-md items-center rounded-lg bg-[#28392e] px-3 py-2 lg:flex">
              <span className="material-symbols-outlined text-owner-text-sec">search</span>
              <input 
                className="border-none bg-transparent px-2 text-sm text-white placeholder-owner-text-sec focus:ring-0 focus:outline-none" 
                placeholder="Search properties, bookings..." 
                type="text"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#28392e] text-white hover:bg-[#344a3c] transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-owner-primary ring-2 ring-[#28392e]"></span>
              </button>
              
              <Link 
                to="/owner-dashboard/properties"
                className="hidden h-10 items-center gap-2 rounded-lg bg-owner-primary px-4 text-sm font-bold text-black hover:bg-green-400 transition-colors sm:flex"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span>Add Property</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
};

export default AdminLayout;