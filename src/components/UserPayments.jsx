import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

const UserPayments = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 p-6 lg:p-10">
      
      {/* 1. Header Section */}
      <div className="flex flex-col gap-6 mb-2">
        <div className="flex items-center gap-2 text-user-text text-sm">
          <span>Dashboard</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span>Profile Settings</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-white font-medium">Payment Methods</span>
        </div>
        
        {/* Updated Header Row with Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-white tracking-tight font-space">Payment Methods</h1>
          
          {/* 2. Added Transaction History Button */}
          <Link to="/transactions" className="flex items-center gap-2 px-4 py-2 bg-user-card border border-user-border rounded-lg text-white text-sm font-medium hover:bg-user-surface transition-all shadow-sm">
            <span className="material-symbols-outlined text-lg">history</span>
            Transaction History
          </Link>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-3 rounded-lg flex items-start sm:items-center gap-3" role="alert">
          <span className="material-symbols-outlined text-blue-500 shrink-0">lock</span>
          <p className="text-sm font-medium">Security Assurance: All your payment transactions and data are tokenized and securely encrypted using industry-standard protocols.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* 2. Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex flex-col gap-1 shrink-0">
          <button className="w-full text-left px-4 py-3 rounded-lg text-user-text hover:bg-user-surface hover:text-white transition-colors font-medium text-sm flex items-center justify-between group">
            <span>Personal Information</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-user-text hover:bg-user-surface hover:text-white transition-colors font-medium text-sm flex items-center justify-between group">
            <span>Login & Security</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg bg-user-surface text-white border-l-4 border-white font-medium text-sm flex items-center justify-between group shadow-sm">
            <span>Payment Methods</span>
            <span className="material-symbols-outlined text-lg opacity-100">chevron_right</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-user-text hover:bg-user-surface hover:text-white transition-colors font-medium text-sm flex items-center justify-between group">
            <span>Notifications</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-user-text hover:bg-user-surface hover:text-white transition-colors font-medium text-sm flex items-center justify-between group">
            <span>Privacy Settings</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-user-text hover:bg-user-surface hover:text-white transition-colors font-medium text-sm flex items-center justify-between group">
            <span>Linked Accounts</span>
          </button>
          <div className="h-px bg-user-border my-2"></div>
          <button className="w-full text-left px-4 py-3 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors font-medium text-sm flex items-center gap-2 group">
            <span className="material-symbols-outlined text-lg">logout</span>
            <span>Sign Out</span>
          </button>
        </aside>

        {/* 3. Main Content Area */}
        <div className="flex-1 w-full bg-user-card rounded-xl border border-user-border p-6 lg:p-8 shadow-sm">
          
          {/* Saved Cards */}
          <div className="mb-10">
            <h3 className="text-white text-lg font-bold mb-5 font-space">Saved Payment Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card 1 (Default) */}
              <div className="bg-user-bg rounded-xl p-5 border border-white/20 relative group shadow-md hover:border-white/40 transition-all">
                <div className="absolute top-3 right-3">
                  <span className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Default</span>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700 text-white">
                    <span className="font-bold text-xs italic">VISA</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Personal Visa</p>
                    <p className="text-user-text text-xs">Visa ending in 4242</p>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-user-text text-xs">Expires 12/25</p>
                  <div className="flex gap-2">
                    <button className="text-user-text hover:text-white text-xs font-medium transition-colors">Edit</button>
                    <button className="text-user-text hover:text-rose-400 text-xs font-medium transition-colors">Remove</button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-user-bg rounded-xl p-5 border border-user-border relative group hover:border-zinc-500 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-8 bg-[#003087] rounded flex items-center justify-center border border-white/10 text-white">
                    <span className="font-bold text-[10px] italic">PayPal</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">PayPal Wallet</p>
                    <p className="text-user-text text-xs">alex...son@example.com</p>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-user-text text-xs">Linked Account</p>
                  <div className="flex gap-2">
                    <button className="text-user-text hover:text-white text-xs font-medium transition-colors">Set Default</button>
                    <button className="text-user-text hover:text-rose-400 text-xs font-medium transition-colors">Remove</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Add New Method Form */}
          <div className="border-t border-user-border pt-8">
            <h3 className="text-white text-lg font-bold mb-2 font-space">Add New Payment Method</h3>
            <p className="text-user-text text-sm mb-6">Add a new credit card or connect a digital wallet.</p>
            
            <div className="flex gap-6 mb-6 border-b border-user-border">
              <button className="pb-3 text-sm font-medium text-white border-b-2 border-white">Credit/Debit Card</button>
              <button className="pb-3 text-sm font-medium text-user-text hover:text-white transition-colors">Digital Wallet</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Card Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-user-text text-lg">credit_card</span>
                  <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full pl-10 p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" placeholder="0000 0000 0000 0000" type="text"/>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 material-symbols-outlined text-lg hidden">check_circle</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Name on Card</label>
                <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" placeholder="Alex Johnson" type="text"/>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Expiration Date (MM/YY)</label>
                <div className="grid grid-cols-2 gap-3">
                  <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 text-center transition-all outline-none" placeholder="MM" type="text"/>
                  <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 text-center transition-all outline-none" placeholder="YY" type="text"/>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide flex items-center gap-1">
                   CVV / CVC
                   <span className="material-symbols-outlined text-[14px] text-zinc-600 cursor-help" title="3 digit number on back of card">help</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-user-text text-lg">lock</span>
                  <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full pl-10 p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" placeholder="123" type="text"/>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Card Nickname (Optional)</label>
                <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" placeholder="e.g. Work Card" type="text"/>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-user-bg border border-user-border mb-8">
              <div>
                <h4 className="text-white text-sm font-bold">Set as Default Payment Method</h4>
                <p className="text-user-text text-xs">This card will be used for all future transactions unless changed.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
              <div className="flex items-center gap-2 text-user-text text-xs mr-auto">
                <span className="material-symbols-outlined text-sm">encrypted</span>
                <span>Encrypted & Secure</span>
              </div>
              <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-user-text hover:text-white hover:bg-user-surface text-sm font-medium transition-colors">Cancel</button>
              <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-all shadow-lg shadow-white/5 flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" disabled>
                <span>Add Payment Method</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-user-border flex flex-wrap gap-4 items-center">
              <span className="text-xs text-user-text font-bold uppercase">Or connect wallet:</span>
              <button className="flex items-center gap-2 px-4 py-2 bg-user-bg hover:bg-white hover:text-black border border-user-border rounded-lg text-white text-sm font-medium transition-all">
                <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                PayPal
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-user-bg hover:bg-white hover:text-black border border-user-border rounded-lg text-white text-sm font-medium transition-all">
                <span className="material-symbols-outlined text-lg">token</span>
                Google Pay
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPayments;