import React from 'react';

const AnalyticsDashboard = () => {
  // Mock Data for KPIs
  const kpis = [
    { 
      title: "Total Bookings", 
      value: "1,245", 
      sub: "vs 1,112 last period", 
      trend: "12%", 
      trendIcon: "trending_up", 
      trendColor: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-400",
      icon: "book_online",
      accent: "border-t-4 border-emerald-400"
    },
    { 
      title: "Total Revenue", 
      value: "$145,200", 
      sub: "vs $133,800 last period", 
      trend: "8.5%", 
      trendIcon: "trending_up", 
      trendColor: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-400",
      icon: "payments",
      accent: "border-t-4 border-primary"
    },
    { 
      title: "New Listings", 
      value: "86", 
      sub: "vs 69 last period", 
      trend: "24%", 
      trendIcon: "trending_up", 
      trendColor: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-400",
      icon: "home_work",
      accent: "border-t-4 border-blue-400"
    },
    { 
      title: "Active Users", 
      value: "3,402", 
      sub: "Daily active users", 
      trend: "5%", 
      trendIcon: "trending_up", 
      trendColor: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-400",
      icon: "group",
      accent: "border-t-4 border-indigo-400"
    },
    { 
      title: "Avg Booking Value", 
      value: "$320", 
      sub: "vs $327 last period", 
      trend: "2%", 
      trendIcon: "trending_down", 
      trendColor: "text-rose-600 bg-rose-100 dark:bg-rose-500/20 dark:text-rose-400",
      icon: "price_change",
      accent: "border-t-4 border-rose-400"
    },
  ];

  // Mock Data for Properties
  const topProperties = [
    { name: "Sunnyvale Villa", location: "California, USA", bookings: 142, revenue: "$24,500", rating: "4.9", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH-8HGgIxMCpcqRg2GIFhnZYyM5kwdoLk7ZFFiooKeny3_T4FlrA017ENTGsyjf-oc7W3evd7sK5WdBX3VWTqD1nO2UEjNyDLwiAhiK2j0mxz-v0KMfjKRmZZLeAD0XGQ3k_t_xpdKEfeqnPIb_2kSoBXfH9R-njFmzh2qzXqpOvyM2keGZeixo0Z_pyb844kyFdvVFbOzTEVKar9XP_q5gQjnbPSCIYPVU7qcnMHfl80mz6mzsaaTiKdNNZsUaJYBcJz53ptF6CrV" },
    { name: "Highland Estate", location: "Texas, USA", bookings: 98, revenue: "$18,200", rating: "4.8", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC70e_RYsTXHmxtqHHba2rqfaSirTMbrxjsgjln8JNFKfHFSThu-Dy1b74NGNZ7VTA3FH_u-G_upgZbVOldjzUGlkL21C0id6l9I_K52mkSWA2gk7sCocBrZ_fSATvjqjGtwT5EBdveuX6T53siGKT29T1XMk6mB_Nq0b9sb8c9m8JmW8YYGgqwaLWWuiGYj3H9v9HGmt5IPy4zvxBFX5VP-pwvgED3dG-Ii9T27cxHYSu4r4X63t7bRGnvVSpG-nllVP9ofipbik6D" },
    { name: "Downtown Loft", location: "New York, USA", bookings: 85, revenue: "$15,400", rating: "4.7", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlBJDpuP_6l2C_PfppcIwObicI-r5Z5lp88Zbj7eFYPmcfmetRnsojgaBOETeLWjG46xYXaV38jp7qSrmOeYKh_m7A42yiyCUFa6e1W5XK3afz7NBXAgDVQ4o2JphMActbkpWWmGn4-e_qX308rycg1RYnZQFJkjPsfpZfI33ieufXw8ZnukBAbTS0Im7mXsdvZFyRl-TxXiodLmBFwt0v2aiSJR6Q-_LEmAwXpOnAXFiZJ3mm70wp0tkouCAmmXisd0RqMqa7-Lz4" },
    { name: "Lakeside Cabin", location: "Michigan, USA", bookings: 64, revenue: "$8,900", rating: "4.9", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV87X8BcAj4Yt4tWA2lQ6GpHTc8MNVuNvYEAdd0E7GQV6T22g2VDGvOXVAV147wLbxwdchaTa1-L8-Ytrec-EYb2qyv72IpEFp5UZh95rL2W1vWAM-IC21JZqURJ-mQxG6_kYCMhCtJQppFghFgVEhGky3PavYXB8tps0Bc133IvJPyp82E_hAqHaPniOHOxKXiWlayNX18oh_joU7wTTWhqrMHf-q080PZmGN757hML82J2JoErACMeaczdTp3tVnuXdETkEcBfoQ" },
  ];

  return (
    // Changed main bg to #f4f6f8 (cool grey) to contrast with white cards
    <div className="flex flex-col h-full bg-[#f4f6f8] dark:bg-background-dark font-inter overflow-hidden">
      
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-[#d1d9e0] dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-20 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-[#111718] dark:text-white">Analytics Dashboard</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 pointer-events-none">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            </span>
            <select className="bg-white dark:bg-surface-dark border border-[#d1d9e0] dark:border-border-dark text-[#111718] dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 cursor-pointer appearance-none pr-8 outline-none shadow-sm hover:border-primary/50 transition-colors">
              <option>Last 7 Days</option>
              <option defaultValue>Last 30 Days</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-500">
              <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
            </span>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-[#0ebcdb] text-[#111718] px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span className="hidden sm:inline">Export Data</span>
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <div className="max-w-[1400px] mx-auto space-y-6">
          
          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {kpis.map((kpi, index) => (
              <div key={index} className={`bg-white dark:bg-surface-dark rounded-xl border border-[#e2e8f0] dark:border-border-dark p-5 flex flex-col justify-between h-36 hover:shadow-lg transition-all duration-300 group shadow-sm ${kpi.accent}`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-[#f1f5f9] dark:bg-white/5 text-slate-600 dark:text-slate-300">
                       <span className="material-symbols-outlined text-[18px]">{kpi.icon}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold">{kpi.title}</p>
                  </div>
                  <span className={`${kpi.trendColor} text-xs px-2 py-1 rounded-full flex items-center gap-1 font-bold`}>
                    <span className="material-symbols-outlined text-[14px]">{kpi.trendIcon}</span> {kpi.trend}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#111718] dark:text-white group-hover:text-primary transition-colors tracking-tight">{kpi.value}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 font-medium">{kpi.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Revenue Trends Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-xl border border-[#e2e8f0] dark:border-border-dark p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#111718] dark:text-white">Revenue Trends</h3>
                  <p className="text-sm text-slate-500">Income over the last 30 days</p>
                </div>
                <div className="flex gap-4 bg-[#f8fafc] dark:bg-black/20 p-1.5 rounded-lg border border-[#f1f5f9] dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-primary shadow-sm"></span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-slate-300 dark:bg-slate-600 shadow-sm"></span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Previous</span>
                  </div>
                </div>
              </div>
              <div className="h-[280px] w-full relative">
                {/* Simulated Chart Grid */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400 dark:text-slate-500">
                  <div className="border-b border-dashed border-slate-200 dark:border-border-dark/50 w-full h-0"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-border-dark/50 w-full h-0"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-border-dark/50 w-full h-0"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-border-dark/50 w-full h-0"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-border-dark/50 w-full h-0"></div>
                </div>
                {/* SVG Chart */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="gradientPrimary" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#13c8ec" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#13c8ec" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  {/* Previous Period Line */}
                  <path d="M0 80 Q 20 70, 40 75 T 80 60 T 100 65" fill="none" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="1"></path>
                  {/* Current Period Line */}
                  <path d="M0 70 C 15 70, 15 40, 30 40 S 50 60, 65 50 S 85 20, 100 30 V 100 H 0 Z" fill="url(#gradientPrimary)"></path>
                  <path d="M0 70 C 15 70, 15 40, 30 40 S 50 60, 65 50 S 85 20, 100 30" fill="none" stroke="#13c8ec" strokeWidth="2" strokeLinecap="round"></path>
                  {/* Tooltip Point */}
                  <g className="group cursor-pointer">
                    <circle cx="65" cy="50" fill="#fff" r="4" stroke="#13c8ec" strokeWidth="2" className="drop-shadow-md"></circle>
                    <rect x="55" y="25" width="40" height="20" rx="4" fill="#1e293b" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <text x="75" y="39" textAnchor="middle" fill="white" fontSize="8" className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">$8,450</text>
                  </g>
                </svg>
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-2 px-1 font-medium">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>

            {/* Booking Status Distribution */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-[#e2e8f0] dark:border-border-dark p-6 flex flex-col shadow-sm">
              <h3 className="text-lg font-bold text-[#111718] dark:text-white mb-1">Booking Status</h3>
              <p className="text-sm text-slate-500 mb-8">Distribution of current orders</p>
              <div className="flex-1 flex items-center justify-center relative scale-110">
                {/* Custom Donut Chart using SVG */}
                <svg className="transform -rotate-90" height="200" viewBox="0 0 100 100" width="200">
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f1f5f9" className="dark:stroke-[#2b3d41]" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="#10b981" strokeDasharray="113 251" strokeDashoffset="0" strokeWidth="12" strokeLinecap="round"></circle>
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="#13c8ec" strokeDasharray="63 251" strokeDashoffset="-113" strokeWidth="12" strokeLinecap="round"></circle>
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f43f5e" strokeDasharray="38 251" strokeDashoffset="-176" strokeWidth="12" strokeLinecap="round"></circle>
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f59e0b" strokeDasharray="38 251" strokeDashoffset="-214" strokeWidth="12" strokeLinecap="round"></circle>
                </svg>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-black text-[#111718] dark:text-white">1,245</span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-emerald-500 shadow-sm"></span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Completed (45%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-primary shadow-sm"></span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Pending (25%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-amber-500 shadow-sm"></span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Confirmed (15%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-rose-500 shadow-sm"></span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Cancelled (15%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Property Performance Table */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-[#e2e8f0] dark:border-border-dark p-6 overflow-hidden flex flex-col shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#111718] dark:text-white">Top Performing Properties</h3>
                <button className="text-primary text-sm font-bold hover:text-cyan-600 transition-colors">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs text-slate-500 uppercase border-b border-[#e2e8f0] dark:border-border-dark/50">
                      <th className="py-3 px-2 font-bold tracking-wider">Property</th>
                      <th className="py-3 px-2 font-bold tracking-wider">Bookings</th>
                      <th className="py-3 px-2 font-bold tracking-wider">Revenue</th>
                      <th className="py-3 px-2 font-bold tracking-wider text-right">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-[#f1f5f9] dark:divide-border-dark/30">
                    {topProperties.map((prop, idx) => (
                      <tr key={idx} className="group hover:bg-[#f8fafc] dark:hover:bg-white/5 transition-colors cursor-pointer">
                        <td className="py-3 px-2 flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 shadow-sm">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={prop.img} alt={prop.name} />
                          </div>
                          <div>
                            <p className="font-bold text-[#111718] dark:text-white group-hover:text-primary transition-colors">{prop.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">{prop.location}</p>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-slate-600 dark:text-slate-300 font-medium">{prop.bookings}</td>
                        <td className="py-3 px-2 font-bold text-[#111718] dark:text-white">{prop.revenue}</td>
                        <td className="py-3 px-2 text-right">
                          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 border border-amber-100 px-2 py-0.5 rounded-md text-xs font-bold shadow-sm">
                            {prop.rating} <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Demographics & Category Trends */}
            <div className="flex flex-col gap-6">
              
              {/* User Demographics */}
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-[#e2e8f0] dark:border-border-dark p-6 flex-1 shadow-sm">
                <h3 className="text-lg font-bold text-[#111718] dark:text-white mb-6">User Demographics</h3>
                <div className="flex items-end gap-6 h-40 pb-2 border-b border-[#e2e8f0] dark:border-border-dark relative">
                  <div className="flex-1 flex flex-col items-center justify-end gap-2 h-full group">
                    <div className="text-xs text-[#111718] dark:text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">65%</div>
                    <div className="w-full max-w-[48px] bg-primary rounded-t-md h-[65%] group-hover:bg-cyan-400 transition-all shadow-sm"></div>
                    <p className="text-xs text-slate-500 font-semibold">Tourists</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end gap-2 h-full group">
                    <div className="text-xs text-[#111718] dark:text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">25%</div>
                    <div className="w-full max-w-[48px] bg-indigo-500 rounded-t-md h-[25%] group-hover:bg-indigo-400 transition-all shadow-sm"></div>
                    <p className="text-xs text-slate-500 font-semibold">Owners</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end gap-2 h-full group">
                    <div className="text-xs text-[#111718] dark:text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">10%</div>
                    <div className="w-full max-w-[48px] bg-slate-400 dark:bg-slate-600 rounded-t-md h-[10%] group-hover:bg-slate-500 transition-all shadow-sm"></div>
                    <p className="text-xs text-slate-500 font-semibold">Agencies</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm text-slate-500">
                  <p className="flex items-center gap-2 font-medium">
                    <span className="material-symbols-outlined text-[20px] text-primary">person_add</span>
                    <span className="text-emerald-600 font-bold">+12%</span> New Tourists this month
                  </p>
                </div>
              </div>

              {/* Category Trends */}
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-[#e2e8f0] dark:border-border-dark p-6 flex-1 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#111718] dark:text-white">Popular Categories</h3>
                  <span className="text-xs text-slate-500 font-medium bg-[#f1f5f9] dark:bg-white/10 px-2 py-1 rounded">By bookings</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Beachfront</span>
                      <span className="text-[#111718] dark:text-white font-bold">45%</span>
                    </div>
                    <div className="h-2.5 w-full bg-[#f1f5f9] dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[45%] rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Mountain Cabins</span>
                      <span className="text-[#111718] dark:text-white font-bold">32%</span>
                    </div>
                    <div className="h-2.5 w-full bg-[#f1f5f9] dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/70 w-[32%] rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Urban Lofts</span>
                      <span className="text-[#111718] dark:text-white font-bold">23%</span>
                    </div>
                    <div className="h-2.5 w-full bg-[#f1f5f9] dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/40 w-[23%] rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;