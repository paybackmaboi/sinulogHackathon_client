import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 p-6 lg:p-10">
      
      {/* 1. Welcome Hero Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-user-border pb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-space tracking-tight">Dashboard</h1>
          <p className="text-user-text mt-2 text-lg font-light max-w-xl">
            Welcome back, <span className="text-white font-medium">Alex</span>. You have <span className="text-white underline decoration-zinc-600 underline-offset-4 decoration-2">1 upcoming trip</span> starting in 4 days.
          </p>
        </div>
        
        {/* Quick Actions Toolbar */}
        <div className="flex items-center gap-3">
          <Link to="/explore" className="group bg-white hover:bg-zinc-200 text-black font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-white/5">
            <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">explore</span>
            <span>Browse Homes</span>
          </Link>
          <button className="p-2.5 bg-user-card border border-user-border rounded-lg text-user-text hover:text-white hover:border-zinc-500 transition-all" title="Messages">
            <span className="material-symbols-outlined">mail</span>
          </button>
        </div>
      </div>

      {/* 2. Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Bookings" 
          value="12" 
          icon="confirmation_number" 
          trend="+2 this year"
          trendColor="text-emerald-500"
        />
        <StatCard 
          title="Saved Homes" 
          value="5" 
          icon="favorite" 
          trend="3 Price drops"
          trendColor="text-amber-500"
        />
        <StatCard 
          title="Wallet Balance" 
          value="$450.00" 
          icon="account_balance_wallet" 
          action="Top Up"
        />
        <StatCard 
          title="Loyalty Points" 
          value="2,400" 
          icon="loyalty" 
          trend="Silver Tier"
          trendColor="text-zinc-400"
        />
      </div>

      <div className="flex flex-col xl:flex-row gap-8 items-start">
        
        {/* LEFT COLUMN: Main Activity (2/3 width) */}
        <div className="flex flex-col gap-8 flex-1 w-full min-w-0">
          
          {/* Active Trip "Boarding Pass" */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-white">flight_takeoff</span> Next Trip
              </h2>
              <span className="text-xs font-mono text-zinc-500 bg-user-surface border border-user-border px-2 py-1 rounded">REF: BKG-8821</span>
            </div>
            
            <div className="bg-user-card border border-user-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group relative">
              {/* Image Header */}
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-2a4d9fdb2243?q=80&w=1000")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-user-card via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-bold text-white font-space leading-none mb-1">Sunnyvale Villa</h3>
                  <p className="text-zinc-300 flex items-center gap-1 text-sm">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Miami, Florida
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                  4 Days Left
                </div>
              </div>

              {/* Ticket Details */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-6 right-6 h-px bg-user-border border-t border-dashed border-zinc-700 -z-10"></div>

                <div className="bg-user-card z-10 pr-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Check-in</p>
                  <p className="text-xl font-bold text-white">Oct 24</p>
                  <p className="text-sm text-user-text">Thursday • 2:00 PM</p>
                </div>
                
                <div className="bg-user-card z-10 text-center">
                  <div className="inline-flex items-center justify-center p-2 rounded-full bg-user-surface border border-user-border mb-1">
                    <span className="material-symbols-outlined text-white">night_shelter</span>
                  </div>
                  <p className="text-xs text-zinc-400">4 Nights • 2 Guests</p>
                </div>

                <div className="bg-user-card z-10 pl-4 text-right">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Check-out</p>
                  <p className="text-xl font-bold text-white">Oct 28</p>
                  <p className="text-sm text-user-text">Monday • 11:00 AM</p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 pb-6 pt-2 flex justify-end gap-3">
                <button className="px-4 py-2 rounded-lg border border-user-border text-user-text hover:text-white hover:bg-user-surface text-sm font-medium transition-colors">
                  Get Directions
                </button>
                <button className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black text-sm font-bold transition-colors">
                  View Ticket
                </button>
              </div>
            </div>
          </div>

          {/* Recent History */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            <div className="bg-user-card rounded-xl border border-user-border overflow-hidden">
              <div className="divide-y divide-user-border">
                <ActivityRow 
                  icon="credit_card" 
                  title="Payment Successful" 
                  desc="Paid $450.00 for Sunnyvale Villa" 
                  date="Today, 10:42 AM" 
                />
                <ActivityRow 
                  icon="favorite" 
                  title="Saved New Home" 
                  desc="Added 'Modern Loft' to your favorites" 
                  date="Yesterday" 
                />
                <ActivityRow 
                  icon="mail" 
                  title="Message from Host" 
                  desc="Maria replied to your inquiry regarding parking." 
                  date="Oct 20" 
                />
              </div>
              <Link to="/transactions" className="block w-full py-3 text-center text-xs font-bold text-user-text hover:text-white hover:bg-user-surface transition-colors uppercase tracking-widest">
                View All Activity
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar (1/3 width) */}
        <div className="w-full xl:w-80 flex flex-col gap-8 shrink-0">
          
          {/* Profile Status */}
          <div className="p-6 rounded-xl bg-gradient-to-b from-user-surface to-user-card border border-user-border relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="text-white font-bold">Profile Status</h3>
              <span className="text-xs font-bold bg-zinc-800 text-zinc-300 px-2 py-1 rounded">85%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-4 relative z-10">
              <div className="bg-white h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-user-text text-xs mb-4 relative z-10">Complete your verification to get the "Trusted" badge and unlock instant booking.</p>
            <Link to="/profile" className="text-white text-xs font-bold border-b border-zinc-600 hover:border-white pb-0.5 transition-colors relative z-10">
              Complete Profile
            </Link>
            {/* Decor */}
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/5 rotate-12 select-none">verified</span>
          </div>

          {/* Suggested / Saved Homes Mini-List */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Saved Homes</h3>
              <Link to="/saved" className="text-xs text-white hover:underline">View All</Link>
            </div>
            <div className="flex flex-col gap-3">
              <MiniHomeCard 
                title="Malibu Oceanfront" 
                loc="California" 
                price="$450" 
                img="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=200" 
              />
              <MiniHomeCard 
                title="Kyoto Zen Garden" 
                loc="Japan" 
                price="$220" 
                img="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=200" 
              />
            </div>
          </div>

          {/* Support Banner */}
          <div className="p-5 rounded-xl border border-dashed border-zinc-700 bg-user-bg/50 flex items-start gap-4">
            <div className="p-2 bg-zinc-800 rounded-lg text-white">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold">Need Help?</h4>
              <p className="text-user-text text-xs mt-1 mb-2">Our concierge team is available 24/7 for booking assistance.</p>
              <button className="text-white text-xs font-bold hover:underline">Chat Now</button>
            </div>
          </div>

        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

// --- Sub Components ---

const StatCard = ({ title, value, icon, trend, trendColor, action }) => (
  <div className="bg-user-card border border-user-border p-5 rounded-xl hover:border-zinc-500 transition-all shadow-sm group">
    <div className="flex justify-between items-start mb-2">
      <div className="p-2 bg-user-bg rounded-lg border border-user-border text-zinc-400 group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      {action && (
        <button className="text-[10px] font-bold uppercase tracking-wider text-white bg-zinc-800 px-2 py-1 rounded hover:bg-zinc-700 transition-colors">
          {action}
        </button>
      )}
    </div>
    <p className="text-user-text text-xs font-medium uppercase tracking-wider mb-0.5">{title}</p>
    <div className="flex items-end gap-2">
      <h3 className="text-2xl font-bold text-white font-space">{value}</h3>
      {trend && <span className={`text-[10px] font-bold mb-1 ${trendColor}`}>{trend}</span>}
    </div>
  </div>
);

const ActivityRow = ({ icon, title, desc, date }) => (
  <div className="flex items-center gap-4 p-4 hover:bg-user-surface transition-colors cursor-pointer">
    <div className="w-10 h-10 rounded-full bg-user-bg border border-user-border flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-zinc-400 text-lg">{icon}</span>
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-white text-sm font-bold truncate">{title}</h4>
      <p className="text-user-text text-xs truncate">{desc}</p>
    </div>
    <span className="text-zinc-600 text-[10px] whitespace-nowrap">{date}</span>
  </div>
);

const MiniHomeCard = ({ title, loc, price, img }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-user-card transition-colors border border-transparent hover:border-user-border cursor-pointer group">
    <div className="w-12 h-12 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${img}")` }}></div>
    <div className="flex-1 min-w-0">
      <h4 className="text-white text-sm font-bold truncate group-hover:underline decoration-zinc-600 underline-offset-2">{title}</h4>
      <p className="text-user-text text-xs">{loc}</p>
    </div>
    <span className="text-white text-xs font-mono font-bold">{price}</span>
  </div>
);

export default UserDashboard;