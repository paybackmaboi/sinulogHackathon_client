import React from 'react';

const AdminDashboard = () => {
  // Mock User Data
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.username || 'Alex';

  return (
    <div className="flex flex-col gap-8">
      
      {/* === Welcome Section === */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Welcome back, {userName}</h1>
          {/* FIX: Changed text-owner-text-sec to text-slate-500 dark:text-owner-text-sec for visibility on light mode */}
          <p className="mt-1 text-slate-500 dark:text-owner-text-sec">Here's what's happening with your properties today.</p>
        </div>
        <div className="flex gap-2 items-center">
          {/* FIX: Changed text-owner-text-sec to text-slate-500 dark:text-owner-text-sec */}
          <span className="text-sm font-medium text-slate-500 dark:text-owner-text-sec">Last Updated: Just now</span>
          <span className="material-symbols-outlined text-sm text-owner-primary animate-spin">sync</span>
        </div>
      </div>

      {/* === Stats Grid === */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Card 1 */}
        <div className="group relative overflow-hidden rounded-xl bg-owner-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-owner-primary/5 blur-xl transition-all group-hover:bg-owner-primary/10"></div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-owner-text-sec">Total Listed</p>
              <h3 className="mt-2 text-3xl font-bold text-white">12</h3>
            </div>
            <div className="rounded-lg bg-[#28392e] p-2 text-white">
              <span className="material-symbols-outlined">home_work</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-owner-primary">
            <span className="material-symbols-outlined text-base">trending_up</span>
            <span>+1 this month</span>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="group relative overflow-hidden rounded-xl bg-owner-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-500/5 blur-xl transition-all group-hover:bg-blue-500/10"></div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-owner-text-sec">Active Bookings</p>
              <h3 className="mt-2 text-3xl font-bold text-white">8</h3>
            </div>
            <div className="rounded-lg bg-[#28392e] p-2 text-white">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-owner-primary">
            <span className="material-symbols-outlined text-base">trending_up</span>
            <span>+2 this week</span>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="group relative overflow-hidden rounded-xl bg-owner-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-owner-primary/5 blur-xl transition-all group-hover:bg-owner-primary/10"></div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-owner-text-sec">Total Revenue</p>
              <h3 className="mt-2 text-3xl font-bold text-white">$14,250</h3>
            </div>
            <div className="rounded-lg bg-[#28392e] p-2 text-white">
              <span className="material-symbols-outlined">payments</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-owner-primary">
            <span className="material-symbols-outlined text-base">trending_up</span>
            <span>+12% vs last month</span>
          </div>
        </div>

        {/* Stat Card 4 */}
        <div className="group relative overflow-hidden rounded-xl bg-owner-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-orange-500/5 blur-xl transition-all group-hover:bg-orange-500/10"></div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-owner-text-sec">Pending Inquiries</p>
              <h3 className="mt-2 text-3xl font-bold text-white">3</h3>
            </div>
            <div className="rounded-lg bg-[#28392e] p-2 text-white">
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-owner-text-sec">
            <span className="material-symbols-outlined text-base">schedule</span>
            <span>Avg response 2h</span>
          </div>
        </div>
      </div>

      {/* === Main Grid Layout === */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        
        {/* Left Column: Properties & Charts */}
        <div className="flex flex-col gap-6 xl:col-span-2">
          
          {/* Properties Table Section */}
          <div className="rounded-xl bg-owner-card p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Active Properties</h3>
              <button className="text-sm font-medium text-owner-primary hover:text-green-400">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#28392e] text-xs uppercase tracking-wider text-owner-text-sec">
                    <th className="py-3 font-semibold">Property</th>
                    <th className="py-3 font-semibold">Status</th>
                    <th className="py-3 font-semibold">Price / Night</th>
                    <th className="py-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-white">
                  {/* Row 1 */}
                  <tr className="group border-b border-[#28392e]/50 hover:bg-[#28392e]/30 transition-colors">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-16 overflow-hidden rounded-md bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYuyPmmj1qnASlC8_C-xHesqRlPH061nLwGmVHf3-mfIlIIIbRMBRjFmM7yjbaTUhnp3-8s2c53oShQYT165FQZJfdcsW9MNfmgFaWXtpMIZN0BoSd_-CP8x3V8vL_Sjw14tFE30_MyK5dsB2fqiwD5mNDccZ6SoDrd0OkcQxdoGH_0_Y5DZVsk_-zMw-HjRlktU-6N8czUg_vIS6p4wcmrX5-iwbQqOo0TMKtaQ0rTJOlhaxgXMwnJ5J3KqZgqDrrDPm3rxXaS4qa")' }}></div>
                        <div>
                          <p className="font-semibold text-white">Sunset Villa</p>
                          <p className="text-xs text-owner-text-sec">Beverly Hills, CA</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-owner-primary/20 px-2.5 py-1 text-xs font-medium text-owner-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-owner-primary"></span>
                        Available
                      </span>
                    </td>
                    <td className="py-4 font-medium">$450</td>
                    <td className="py-4 text-right">
                      <button className="rounded p-1 text-owner-text-sec hover:bg-[#28392e] hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="rounded p-1 text-owner-text-sec hover:bg-[#28392e] hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  
                  {/* Row 2 */}
                  <tr className="group border-b border-[#28392e]/50 hover:bg-[#28392e]/30 transition-colors">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-16 overflow-hidden rounded-md bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF3UP9PoSgeJkIHcviRixRwr-dgTPgEhP7mXmVKhF7MQQCIluwfsAvyYYoMMvHAerr2nFcu9uqWfXADpqMdMJR_TwSsPnYsTWRgXqrtCsky4NLA5AERQiVKSMaU7ZytT6SuVxlIikGZLCFBb2G9ILXsT1eHkMbdQ3070UrTcC7v6oQY-vDP9TjHG-VErrppyHBGAfjYOB4f3tUyys9hN-xcvJ_lxh7VKD8qF4lJR1YzstbwFiSt6CSlAgnFjddrQlCxEH44psk9WGr")' }}></div>
                        <div>
                          <p className="font-semibold text-white">Downtown Loft</p>
                          <p className="text-xs text-owner-text-sec">New York, NY</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-2.5 py-1 text-xs font-medium text-red-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                        Booked
                      </span>
                    </td>
                    <td className="py-4 font-medium">$280</td>
                    <td className="py-4 text-right">
                      <button className="rounded p-1 text-owner-text-sec hover:bg-[#28392e] hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="rounded p-1 text-owner-text-sec hover:bg-[#28392e] hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="group hover:bg-[#28392e]/30 transition-colors">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-16 overflow-hidden rounded-md bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBG73MLX16Ejt3IHzEiOfrImmkR52YbedY8dAwqgP8GLJx0InA47egGFvgmzq9NQvrGh-bflk5qJ8yV9SOVfeZCX55iSkzUlFTmgA1IUkaOTPGEatPA2us1hxGQ2IxivhuhLi-T2iEK89M-6VOrmaRyjQy0lX9Ix2OXlKW67Pr-sctJm-toh0dgfDWAYwosDDC2kOgiJciPdew4lwzM0GQY98Ikz3zO4VTeQLxNtBBXv7Vf1obH5lpcnQrmqkGhv6hGYckeoRDI4P3")' }}></div>
                        <div>
                          <p className="font-semibold text-white">Alpine Cabin</p>
                          <p className="text-xs text-owner-text-sec">Aspen, CO</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/20 px-2.5 py-1 text-xs font-medium text-yellow-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                        Draft
                      </span>
                    </td>
                    <td className="py-4 font-medium">$320</td>
                    <td className="py-4 text-right">
                      <button className="rounded p-1 text-owner-text-sec hover:bg-[#28392e] hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="rounded p-1 text-owner-text-sec hover:bg-[#28392e] hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Revenue Chart Section */}
          <div className="rounded-xl bg-owner-card p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Revenue Trends</h3>
                <p className="text-sm text-owner-text-sec">Income over the last 30 days</p>
              </div>
              <select className="rounded-lg bg-[#28392e] border-none text-sm text-white focus:ring-1 focus:ring-owner-primary py-1.5 px-3">
                <option>Last 30 Days</option>
                <option>This Year</option>
                <option>All Time</option>
              </select>
            </div>
            <div className="mt-6 h-64 w-full">
              {/* Simulated Chart with SVG */}
              <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#13ec5b" stopOpacity="0.2"></stop>
                    <stop offset="100%" stopColor="#13ec5b" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line stroke="#28392e" strokeWidth="1" x1="0" x2="500" y1="150" y2="150"></line>
                <line stroke="#28392e" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="500" y1="100" y2="100"></line>
                <line stroke="#28392e" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="500" y1="50" y2="50"></line>
                
                {/* Graph Line */}
                <path d="M0 120 C 50 120, 50 80, 100 90 S 150 110, 200 70 S 250 40, 300 60 S 350 90, 400 50 S 450 20, 500 40" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeWidth="3"></path>
                
                {/* Area under graph */}
                <path d="M0 120 C 50 120, 50 80, 100 90 S 150 110, 200 70 S 250 40, 300 60 S 350 90, 400 50 S 450 20, 500 40 V 150 H 0 Z" fill="url(#gradient)"></path>
              </svg>
              <div className="flex justify-between mt-2 text-xs font-medium text-owner-text-sec">
                <span>Nov 01</span>
                <span>Nov 08</span>
                <span>Nov 15</span>
                <span>Nov 22</span>
                <span>Nov 29</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Widgets */}
        <div className="flex flex-col gap-6">
          
          {/* Recent Inquiries */}
          <div className="flex flex-1 flex-col rounded-xl bg-owner-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Recent Inquiries</h3>
              <button className="rounded-full bg-[#28392e] p-1 text-owner-text-sec hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">filter_list</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {/* Inquiry 1 */}
              <div className="flex gap-3 rounded-lg border border-[#28392e] bg-[#28392e]/20 p-3 transition-colors hover:border-owner-primary/50 cursor-pointer">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-slate-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3DcIyYp2F3stPd5kJfP63aueguPae5TPPzWVhfYEScvD5iR0rv3Cnzn890F2x6_bVKHggRARybZ8HaoxWt0ggemfDs1D0g5Ojv06EpHNkWtLP0NsQH1HPvQ4k2zd0vSpgfLGpTu0RWs-BZtMeQryHx1seO88PrubdWdRA4botqOhB8hcyefpuTRz97_xkIhMUoj8oTNbl48mv09qjc02uV0X476ZMq48YMz2ovYyehEdApTLiducgcxFzWcyaKtCnxVU-G4Ay66cN")' }}></div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Sarah Jenkins</p>
                    <p className="text-[10px] text-owner-text-sec">10m ago</p>
                  </div>
                  <p className="text-xs text-owner-text-sec line-clamp-1">Is the Sunset Villa available for...</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-owner-primary"></span>
                    <span className="text-[10px] font-medium text-owner-primary">New Inquiry</span>
                  </div>
                </div>
              </div>

              {/* Inquiry 2 */}
              <div className="flex gap-3 rounded-lg border border-[#28392e] bg-[#28392e]/20 p-3 transition-colors hover:border-owner-primary/50 cursor-pointer">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-slate-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRNUzer-m753q67xVDBzEuR3wrxfZCBV4_2WFNjz2s3AZXMpoBuSycTI61VIm8CJkHkofRdSjBdjago5XFavEr9SngymSgYCZa7khcA_mRPlps2nLG4DUzaQYBQtiRPhRy6ICtZQSnMwW2-_cSJ_Gd49xCWNbT3Y7C8wWXXcXEpTiZaXWDrCTBsCUh3xM7YauD2tm_-mcpGspDTOhT2yBABuvgNjCFITDOo2rh4gClnIRDwlFn-q981jWMu6KUQ7dK0uwMs0Y4V9X0")' }}></div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Michael Brown</p>
                    <p className="text-[10px] text-owner-text-sec">2h ago</p>
                  </div>
                  <p className="text-xs text-owner-text-sec line-clamp-1">Regarding the Downtown Loft booking...</p>
                </div>
              </div>

              {/* Inquiry 3 */}
              <div className="flex gap-3 rounded-lg border border-[#28392e] bg-[#28392e]/20 p-3 transition-colors hover:border-owner-primary/50 cursor-pointer">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-slate-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDONN160_-IbvScAdH9x4jBp1omG50rTDvJHROqxD-qeukGs_ko9OL6UykJ1Puk6bnan28fK_MPOGId2WSJ1L9OPiuZ6QDw5EgEG5VCyHy8-pApO3A8lAbJ4BNiP4M1apTkPjR9s25M6nBorP52ly1F5hKBIN9nax9k-Mnpo9u5Rq-zTeCo__LlEd-m-OhGD04xeVgRDJ4vNC2CVaH84JKwk1JBxWVEoWYNRPo0nj3ZZPBd-PCkSc0Sdqrx_m2SHqP2yknP-Reeo_Ix")' }}></div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Emily White</p>
                    <p className="text-[10px] text-owner-text-sec">1d ago</p>
                  </div>
                  <p className="text-xs text-owner-text-sec line-clamp-1">Can we check out late on Sunday?</p>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg border border-[#28392e] py-2 text-sm font-medium text-owner-text-sec hover:bg-[#28392e] hover:text-white transition-colors">
              View All Messages
            </button>
          </div>

          {/* Upcoming Bookings */}
          <div className="rounded-xl bg-owner-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Upcoming Check-ins</h3>
              <button className="text-xs text-owner-primary hover:underline">Full Calendar</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center rounded bg-[#28392e] p-2 w-12 text-center">
                  <span className="text-xs font-bold text-owner-text-sec">OCT</span>
                  <span className="text-lg font-bold text-white">24</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">John & Mary Doe</p>
                  <p className="text-xs text-owner-text-sec">Sunset Villa • 3 Nights</p>
                </div>
                <span className="material-symbols-outlined text-owner-text-sec">chevron_right</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center rounded bg-[#28392e] p-2 w-12 text-center">
                  <span className="text-xs font-bold text-owner-text-sec">OCT</span>
                  <span className="text-lg font-bold text-white">28</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">Alice Smith</p>
                  <p className="text-xs text-owner-text-sec">Downtown Loft • 2 Nights</p>
                </div>
                <span className="material-symbols-outlined text-owner-text-sec">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Quick Promo / Tip Card */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#16261d] to-owner-primary/20 p-6">
            <div className="relative z-10">
              <h4 className="text-lg font-bold text-white">Boost your listings</h4>
              <p className="mt-2 text-xs text-owner-text-sec mb-4">Properties with updated photos get 30% more bookings.</p>
              <button className="rounded-lg bg-owner-primary px-3 py-1.5 text-xs font-bold text-black hover:bg-green-400 transition-colors">
                Update Photos
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[100px] text-owner-primary/10">photo_camera</span>
          </div>

        </div>
      </div>
      
      {/* Spacer for bottom scrolling */}
      <div className="h-4"></div>
    </div>
  );
};

export default AdminDashboard;