import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-user-bg font-noto text-user-text-main overflow-hidden selection:bg-user-gold/30 selection:text-white">
      
      {/* HEADER: Glass effect with user-surface */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-user-border bg-user-bg/80 backdrop-blur-md px-6 py-3 shrink-0 z-30 sticky top-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 text-user-gold">
              {/* Logo SVG */}
              <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight font-space tracking-tight">GO4th Book</h2>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-user-surface hover:bg-zinc-700 text-user-text hover:text-white transition-colors border border-user-border">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <div className="relative group cursor-pointer">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border border-user-border ring-2 ring-transparent group-hover:ring-user-gold/50 transition-all" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100")' }}>
            </div>
            <div className="absolute right-0 top-0 size-2.5 bg-green-500 rounded-full border-2 border-user-bg"></div>
          </div>
        </div>
      </header>

      {/* CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* SIDEBAR: Dark Zinc with Gold Glow Accents */}
        <aside className="hidden lg:flex w-72 flex-col bg-user-surface border-r border-user-border h-full overflow-y-auto shrink-0 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.5)] z-20">
          <div className="p-4 flex flex-col gap-6">
            <div className="flex gap-3 items-center px-2 py-2 bg-user-bg rounded-xl border border-user-border">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10" 
                   style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200")' }}>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-sm font-bold leading-normal">Alex Johnson</h1>
                <p className="text-user-text text-[10px] font-medium uppercase tracking-wider">Premium Member</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1.5">
              <NavItem to="/user-dashboard" icon="dashboard" label="Dashboard" />
              <NavItem to="/explore" icon="explore" label="Explore" />
              <NavItem to="/bookings" icon="calendar_month" label="My Bookings" />
              <NavItem to="/saved" icon="favorite" label="Saved Homes" />
              
              <div className="h-px bg-gradient-to-r from-transparent via-user-border to-transparent my-3"></div>
              
              <NavItem to="/profile" icon="person" label="Profile" />
              <NavItem to="/payments" icon="credit_card" label="Payments" />
              
            </nav>

            <div className="mt-auto bg-gradient-to-b from-user-card to-user-bg p-5 rounded-xl border border-user-border relative overflow-hidden group">
              {/* Decorative Gold Glow */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-user-gold/20 blur-3xl rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 text-user-gold">
                    <span className="material-symbols-outlined text-lg">support_agent</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Support</span>
                </div>
                <p className="text-user-text text-xs mb-3 leading-relaxed">Need help with a booking? Our concierge is here 24/7.</p>
                <button className="w-full bg-white text-black text-xs font-bold py-2.5 px-3 rounded-lg hover:bg-zinc-200 transition-colors shadow-lg">
                   Chat with Support
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN PAGE RENDER */}
        <main className="flex-1 overflow-y-auto bg-user-bg relative scroll-smooth">
             <Outlet />
        </main>
      </div>
    </div>
  );
};

// Enhanced Nav Item with Glow Effect
const NavItem = ({ to, icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all duration-300 relative overflow-hidden ${
        isActive 
          ? 'text-white font-medium' 
          : 'text-user-text hover:text-white hover:bg-user-card'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {/* Active State Background & Gold Border */}
        {isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-user-gold/10 to-transparent border-l-2 border-user-gold"></div>
        )}
        
        <span className={`material-symbols-outlined relative z-10 text-[20px] transition-colors ${isActive ? 'text-user-gold fill' : 'group-hover:text-white'}`}>{icon}</span>
        <p className="text-sm relative z-10">{label}</p>
      </>
    )}
  </NavLink>
);

export default UserLayout;