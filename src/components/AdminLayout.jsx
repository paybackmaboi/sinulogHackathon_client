import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('AdminLayout - Current path:', location.pathname);
  }, [location.pathname]);

  // Get user from localStorage if available
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.username || 'Admin';
  const userSince = new Date().getFullYear() - 1; // Mock year

  return (
    <div className="bg-[#f8f8f5] dark:bg-[#181611] font-display text-slate-900 dark:text-white h-screen flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#3a3527] bg-[#181611] px-6 py-3 shrink-0 z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 text-[#fac638]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">EstateBook</h2>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#bbb29b] flex border-none bg-[#3a3527] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined text-lg">search</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#3a3527] focus:border-none h-full placeholder:text-[#bbb29b] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" 
                placeholder="Search properties..." 
                type="text"
              />
            </div>
          </label>
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-[#3a3527] hover:bg-[#554e3a] text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#3a3527]" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCx1Nh0tWNbtqYmmNIl9O0m9PRHkFcl1fr6LC4bCYKtT1Ckq5OYnuJVs9Ch7BZeYSH6WJYraFnfmF64zrKWWnd5xFcpSZb1ArcBR__hyDJ4LZbABCcQGOQfrRErjynwJfqGXHV8w0D_oSsFGYLq384tzofsmoRQuD0jWWqB9LDICaRK1zdXDwUzkJScQNJnQvyTtsUyAO0dXFCD0oEG7cqe7-XLyCyJA6sBKdHUNUt5y-OK0fpLh9z_gp35ASfHIwqi1LokVO7jjh4o")' }}
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
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbQxayfzZgeYYic_WVAh_LGL2jC-Y3_btnkJQQXF1dHhmmkK3Ze8FpbZg9CE3eRBkX861M5SWohmki6uORBTQG1XTyD2j65jCiO9vJkkLXlHX0Y8i020xhKo-GPtaB5P0NJdL33w1VmgAeiP_PnXtzhaG7QfRY_rBr07-M0QiagexVFunk5AUMwDZBqQKdA2KNtU11A4xFoo6ScU_12yfd5Dq5XTaOg68E2VQAS1IZ602xPo9FkFNJE1IQC0Rbw9KGc1nmdeVvIBLJ")' }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-bold leading-normal">{userName}</h1>
                <p className="text-[#bbb29b] text-xs font-normal leading-normal">Admin since {userSince}</p>
              </div>
            </div>

            {/* Nav Menu */}
            <nav className="flex flex-col gap-2">
              <Link 
                to="/owner-dashboard" 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all ${
                  location.pathname === '/owner-dashboard' 
                    ? 'bg-[#fac638]/10 border border-[#fac638]/20' 
                    : 'hover:bg-[#3a3527]'
                }`}
              >
                <span className={`material-symbols-outlined ${location.pathname === '/owner-dashboard' ? 'text-[#fac638] fill' : 'text-[#bbb29b] group-hover:text-white'}`}>
                  dashboard
                </span>
                <p className={`text-sm font-medium leading-normal ${
                  location.pathname === '/owner-dashboard' 
                    ? 'text-[#fac638]' 
                    : 'text-[#bbb29b] group-hover:text-white'
                }`}>
                  Dashboard
                </p>
              </Link>

              <Link 
                to="/owner-dashboard/properties" 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all ${
                  location.pathname === '/owner-dashboard/properties' 
                    ? 'bg-[#fac638]/10 border border-[#fac638]/20' 
                    : 'hover:bg-[#3a3527]'
                }`}
              >
                <span className={`material-symbols-outlined ${location.pathname === '/owner-dashboard/properties' ? 'text-[#fac638] fill' : 'text-[#bbb29b] group-hover:text-white'}`}>
                  apartment
                </span>
                <p className={`text-sm font-medium leading-normal ${
                  location.pathname === '/owner-dashboard/properties' 
                    ? 'text-[#fac638]' 
                    : 'text-[#bbb29b] group-hover:text-white'
                }`}>
                  Properties
                </p>
              </Link>

              <Link 
                to="/owner-dashboard/bookings" 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all ${
                  location.pathname === '/owner-dashboard/bookings' 
                    ? 'bg-[#fac638]/10 border border-[#fac638]/20' 
                    : 'hover:bg-[#3a3527]'
                }`}
              >
                <span className={`material-symbols-outlined ${location.pathname === '/owner-dashboard/bookings' ? 'text-[#fac638] fill' : 'text-[#bbb29b] group-hover:text-white'}`}>
                  calendar_month
                </span>
                <p className={`text-sm font-medium leading-normal ${
                  location.pathname === '/owner-dashboard/bookings' 
                    ? 'text-[#fac638]' 
                    : 'text-[#bbb29b] group-hover:text-white'
                }`}>
                  Bookings
                </p>
              </Link>

              <div className="h-px bg-[#3a3527] my-2"></div>

              <Link 
                to="/owner-dashboard/profile" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all"
              >
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">person</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">Profile</p>
              </Link>

              <Link 
                to="/owner-dashboard/settings" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#3a3527] group transition-all"
              >
                <span className="material-symbols-outlined text-[#bbb29b] group-hover:text-white">settings</span>
                <p className="text-[#bbb29b] group-hover:text-white text-sm font-medium leading-normal">Settings</p>
              </Link>
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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
