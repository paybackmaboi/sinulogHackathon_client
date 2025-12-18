import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="bg-[#f8f8f5] dark:bg-[#181611] font-space text-slate-900 dark:text-white h-screen flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#3a3527] bg-[#181611] px-6 py-3 shrink-0 z-20">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 text-white">
            <div className="size-8 text-[#fac638]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">EstateBook</h2>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#bbb29b] flex border-none bg-[#3a3527] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined text-lg">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#3a3527] focus:border-none h-full placeholder:text-[#bbb29b] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search properties..." />
            </div>
          </label>
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-[#3a3527] hover:bg-[#554e3a] text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#3a3527]" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150")' }}
          ></div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-72 flex-col bg-[#181611] border-r border-[#3a3527] h-full overflow-y-auto">
          <div className="p-4 flex flex-col gap-6">
            {/* User Snippet */}
            <div className="flex gap-3 items-center px-2 py-2">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150")' }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-bold leading-normal">Alex Johnson</h1>
                <p className="text-[#bbb29b] text-xs font-normal leading-normal">Traveler since 2023</p>
              </div>
            </div>
            {/* Nav Menu */}
            <nav className="flex flex-col gap-2">
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#fac638]/10 border border-[#fac638]/20 group transition-all" href="#">
                <span className="material-symbols-outlined text-[#fac638] fill">dashboard</span>
                <p className="text-[#fac638] text-sm font-medium leading-normal">Dashboard</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all" href="#">
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">explore</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">Explore</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all" href="#">
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">calendar_month</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">My Bookings</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all" href="#">
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">favorite</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">Saved Homes</p>
              </a>
              <div className="h-px bg-[#3a3527] my-2"></div>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all" href="#">
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">person</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">Profile</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all" href="#">
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">credit_card</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">Payments</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all" href="#">
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">settings</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">Settings</p>
              </a>
            </nav>
            {/* Support Banner */}
            <div className="mt-auto bg-gradient-to-br from-[#27241b] to-[#3a3527] p-4 rounded-xl border border-[#554e3a] relative overflow-hidden group cursor-pointer">
              <div className="absolute -right-4 -top-4 text-[#554e3a] opacity-50 rotate-12">
                <span className="material-symbols-outlined text-8xl">support_agent</span>
              </div>
              <div className="relative z-10">
                <p className="text-white font-bold mb-1">Need Help?</p>
                <p className="text-[#bbb29b] text-xs mb-3">Our support team is available 24/7.</p>
                <button className="bg-[#181611] text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-2 hover:bg-black transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#181611] p-6 lg:p-10 scroll-smooth">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            {/* Welcome & Stats */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Dashboard</h1>
                  <p className="text-[#bbb29b] mt-1 text-lg">Welcome back, Alex!</p>
                </div>
                <button className="bg-[#fac638] hover:bg-yellow-400 text-[#181611] font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">explore</span>
                  Explore New Places
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1 rounded-xl bg-[#27241b] border border-[#3a3527] p-4 hover:border-[#fac638]/50 transition-colors cursor-default">
                  <div className="flex items-center justify-between">
                    <p className="text-[#bbb29b] text-sm font-medium">Active Bookings</p>
                    <span className="material-symbols-outlined text-[#fac638]">confirmation_number</span>
                  </div>
                  <p className="text-white text-3xl font-bold mt-2">2</p>
                  <p className="text-[#bbb29b] text-xs">1 upcoming this week</p>
                </div>
                <div className="flex flex-col gap-1 rounded-xl bg-[#27241b] border border-[#3a3527] p-4 hover:border-[#fac638]/50 transition-colors cursor-default">
                  <div className="flex items-center justify-between">
                    <p className="text-[#bbb29b] text-sm font-medium">Saved Homes</p>
                    <span className="material-symbols-outlined text-[#fac638]">favorite</span>
                  </div>
                  <p className="text-white text-3xl font-bold mt-2">5</p>
                  <p className="text-[#bbb29b] text-xs">Across 3 different countries</p>
                </div>
                <div className="flex flex-col gap-1 rounded-xl bg-[#27241b] border border-[#3a3527] p-4 hover:border-[#fac638]/50 transition-colors cursor-default">
                  <div className="flex items-center justify-between">
                    <p className="text-[#bbb29b] text-sm font-medium">Past Trips</p>
                    <span className="material-symbols-outlined text-[#fac638]">flight_land</span>
                  </div>
                  <p className="text-white text-3xl font-bold mt-2">12</p>
                  <p className="text-[#bbb29b] text-xs">Total distance: 14,502 km</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 items-start">
              {/* Left Column: Bookings */}
              <div className="flex flex-col gap-8 flex-1 w-full min-w-0">
                {/* Upcoming Trips */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Upcoming Trips</h2>
                    <a className="text-[#fac638] text-sm font-medium hover:underline" href="#">View Calendar</a>
                  </div>
                  
                  {/* Card 1 */}
                  <div className="flex flex-col md:flex-row items-stretch rounded-xl bg-[#27241b] border border-[#3a3527] overflow-hidden hover:shadow-lg transition-all group">
                    <div 
                        className="w-full md:w-72 h-48 md:h-auto bg-center bg-cover relative" 
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-2a4d9fdb2243?q=80&w=1000")' }}
                    >
                      <div className="absolute top-3 left-3 bg-[#181611]/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                        4 Days Left
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5 gap-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[#fac638] transition-colors">Sunnyvale Villa Escape</h3>
                          <div className="flex items-center gap-1 mt-1 text-[#bbb29b] text-sm">
                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                            <span>Miami, FL, USA</span>
                          </div>
                        </div>
                        <span className="bg-green-900/40 text-green-400 border border-green-800 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">Confirmed</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2 bg-[#3a3527]/50 px-3 py-2 rounded-lg">
                          <span className="material-symbols-outlined text-[#fac638] text-[20px]">calendar_today</span>
                          <span>Oct 24 - Oct 28</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#3a3527]/50 px-3 py-2 rounded-lg">
                          <span className="material-symbols-outlined text-[#fac638] text-[20px]">group</span>
                          <span>4 Guests</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-3 mt-2">
                        <button className="text-white hover:bg-[#3a3527] px-4 py-2 rounded-lg text-sm font-medium transition-colors">Manage</button>
                        <button className="bg-[#fac638] hover:bg-yellow-400 text-[#181611] text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-[0_0_15px_rgba(250,198,56,0.15)]">View Details</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="flex flex-col md:flex-row items-stretch rounded-xl bg-[#27241b] border border-[#3a3527] overflow-hidden hover:shadow-lg transition-all group opacity-80 hover:opacity-100">
                    <div 
                        className="w-full md:w-72 h-48 md:h-auto bg-center bg-cover relative grayscale-[30%] group-hover:grayscale-0 transition-all" 
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1000")' }}
                    >
                      <div className="absolute top-3 left-3 bg-[#181611]/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                        Dec 15
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5 gap-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[#fac638] transition-colors">Aspen Mountain Lodge</h3>
                          <div className="flex items-center gap-1 mt-1 text-[#bbb29b] text-sm">
                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                            <span>Aspen, CO, USA</span>
                          </div>
                        </div>
                        <span className="bg-yellow-900/30 text-yellow-500 border border-yellow-800/50 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">Pending</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2 bg-[#3a3527]/50 px-3 py-2 rounded-lg">
                          <span className="material-symbols-outlined text-[#fac638] text-[20px]">calendar_today</span>
                          <span>Dec 15 - Dec 22</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-3 mt-2">
                        <button className="text-white hover:bg-[#3a3527] px-4 py-2 rounded-lg text-sm font-medium transition-colors">Contact Host</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Past Trips */}
                <div className="flex flex-col gap-4 mt-4">
                  <h2 className="text-xl font-bold text-white">Past Trips</h2>
                  <div className="bg-[#27241b] rounded-xl border border-[#3a3527] overflow-hidden">
                    <div className="flex flex-col divide-y divide-[#3a3527]">
                      {/* Past Item 1 */}
                      <div className="p-4 flex flex-col sm:flex-row gap-4 items-center justify-between hover:bg-[#3a3527]/30 transition-colors">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <div 
                            className="size-16 rounded-lg bg-cover bg-center shrink-0" 
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000")' }}
                          ></div>
                          <div>
                            <h4 className="text-white font-bold">Downtown Loft</h4>
                            <p className="text-[#bbb29b] text-sm">New York, NY • Sep 12-15</p>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-[#fac638] text-[16px] fill">star</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto justify-end">
                          <button className="text-[#bbb29b] hover:text-white text-sm font-medium px-3 py-2">Receipt</button>
                          <button className="border border-[#554e3a] hover:border-[#fac638] text-white hover:text-[#fac638] px-3 py-2 rounded-lg text-sm font-medium transition-colors">Rebook</button>
                        </div>
                      </div>
                      
                      {/* Past Item 2 */}
                      <div className="p-4 flex flex-col sm:flex-row gap-4 items-center justify-between hover:bg-[#3a3527]/30 transition-colors">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <div 
                            className="size-16 rounded-lg bg-cover bg-center shrink-0" 
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000")' }}
                          ></div>
                          <div>
                            <h4 className="text-white font-bold">Lakeside Cottage</h4>
                            <p className="text-[#bbb29b] text-sm">Lake Tahoe, CA • Aug 05-10</p>
                            <button className="text-[#fac638] text-xs font-bold mt-1 hover:underline">Leave a review</button>
                          </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto justify-end">
                          <button className="text-[#bbb29b] hover:text-white text-sm font-medium px-3 py-2">Receipt</button>
                          <button className="border border-[#554e3a] hover:border-[#fac638] text-white hover:text-[#fac638] px-3 py-2 rounded-lg text-sm font-medium transition-colors">Rebook</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#2d2a21] p-2 text-center">
                      <button className="text-[#bbb29b] text-sm hover:text-white w-full py-1">View all history</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Favorites & Extras */}
              <div className="w-full xl:w-80 flex flex-col gap-8 shrink-0">
                {/* Favorites Widget */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Saved Homes</h2>
                    <a className="text-[#bbb29b] hover:text-white" href="#"><span className="material-symbols-outlined">arrow_forward</span></a>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                    {/* Fav Card 1 */}
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000")' }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                        <h4 className="text-white font-bold truncate">Malibu Oceanfront</h4>
                        <p className="text-gray-300 text-xs">$450 / night</p>
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 bg-black/40 backdrop-blur rounded-full text-[#fac638] hover:bg-black/60 transition-colors">
                        <span className="material-symbols-outlined text-[20px] fill">favorite</span>
                      </button>
                    </div>
                    {/* Fav Card 2 */}
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=1000")' }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                        <h4 className="text-white font-bold truncate">Kyoto Zen Garden</h4>
                        <p className="text-gray-300 text-xs">$220 / night</p>
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 bg-black/40 backdrop-blur rounded-full text-[#fac638] hover:bg-black/60 transition-colors">
                        <span className="material-symbols-outlined text-[20px] fill">favorite</span>
                      </button>
                    </div>
                    {/* Fav Card 3 */}
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512918760383-5658fc14bc63?q=80&w=1000")' }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                        <h4 className="text-white font-bold truncate">Seattle Penthouse</h4>
                        <p className="text-gray-300 text-xs">$890 / night</p>
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 bg-black/40 backdrop-blur rounded-full text-[#fac638] hover:bg-black/60 transition-colors">
                        <span className="material-symbols-outlined text-[20px] fill">favorite</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mini Promo/Status */}
                <div className="rounded-xl border border-dashed border-[#554e3a] p-5 flex flex-col items-center justify-center text-center gap-2 bg-[#1f1d16]">
                  <div className="p-3 bg-[#fac638]/10 rounded-full text-[#fac638] mb-1">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <h3 className="text-white font-bold text-sm">Complete your profile</h3>
                  <p className="text-[#bbb29b] text-xs px-2">Add your phone number and ID to get the 'Verified Traveler' badge.</p>
                  <button className="text-[#fac638] text-xs font-bold mt-2 hover:underline">Complete now</button>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Spacer */}
          <div className="h-10"></div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;