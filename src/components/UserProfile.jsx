import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 p-6 lg:p-10">
      
      {/* 1. Header Section */}
      <div className="flex flex-col gap-6 mb-2">
        <div className="flex items-center gap-2 text-user-text text-sm">
          <span>Dashboard</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-white font-medium">Profile Settings</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-white tracking-tight font-space">Profile Settings</h1>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-lg flex items-center gap-3" role="alert">
          <span className="material-symbols-outlined text-emerald-500">check_circle</span>
          <p className="text-sm font-medium">Your profile information was updated successfully.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* 2. Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex flex-col gap-1 shrink-0">
          <button className="w-full text-left px-4 py-3 rounded-lg bg-user-surface text-white border-l-4 border-white font-medium text-sm flex items-center justify-between group shadow-sm">
            <span>Personal Information</span>
            <span className="material-symbols-outlined text-lg opacity-100">chevron_right</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-user-text hover:bg-user-surface hover:text-white transition-colors font-medium text-sm flex items-center justify-between group">
            <span>Login & Security</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-user-text hover:bg-user-surface hover:text-white transition-colors font-medium text-sm flex items-center justify-between group">
            <span>Payment Methods</span>
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

        {/* 3. Main Form Area */}
        <div className="flex-1 w-full bg-user-card rounded-xl border border-user-border p-6 lg:p-8 shadow-sm">
          
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-user-border">
            <div className="relative group">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-2 border-user-border" 
                   style={{ backgroundImage: `url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200")` }}></div>
              <button className="absolute bottom-0 right-0 bg-user-surface hover:bg-white hover:text-black text-white rounded-full p-1.5 border border-user-border transition-colors shadow-lg" title="Change Photo">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-lg font-bold">Profile Picture</h3>
              <p className="text-user-text text-sm max-w-sm">Upload a new avatar. Larger images will be resized automatically. Maximum upload size is 2 MB.</p>
              <div className="flex items-center gap-3 mt-1">
                <button className="px-4 py-2 bg-white hover:bg-zinc-200 text-black text-xs font-bold rounded-lg transition-colors border border-transparent shadow-sm">Upload New</button>
                <button className="px-4 py-2 bg-transparent hover:bg-rose-500/10 text-user-text hover:text-rose-400 text-xs font-medium rounded-lg transition-colors border border-user-border hover:border-rose-500/20">Delete</button>
              </div>
            </div>
          </div>

          {/* Basic Info Form */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-bold mb-4 font-space">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">First Name</label>
                <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" type="text" defaultValue="Alex"/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Last Name</label>
                <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" type="text" defaultValue="Johnson"/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Title / Occupation</label>
                <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" placeholder="e.g. Digital Nomad" type="text"/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Location</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-user-text text-lg">location_on</span>
                  <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full pl-10 p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" type="text" defaultValue="Cebu City, Philippines"/>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Bio</label>
                <textarea className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 resize-none transition-all outline-none" rows="4" defaultValue="Passionate traveler and food enthusiast. I love exploring new cities and finding hidden gems. Currently based in Cebu."></textarea>
                <p className="text-xs text-user-text text-right">240 characters left</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-bold mb-4 font-space">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-user-text text-lg">mail</span>
                  <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full pl-10 p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" type="email" defaultValue="alex.johnson@example.com"/>
                </div>
                <p className="text-[10px] text-user-text mt-1">We'll send a confirmation email to verify this address.</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Phone Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-user-text text-lg">call</span>
                  <input className="bg-user-bg border border-user-border text-white text-sm rounded-lg block w-full pl-10 p-3 focus:ring-1 focus:ring-white focus:border-white placeholder-zinc-600 transition-all outline-none" type="tel" defaultValue="+63 912 345 6789"/>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="mb-10">
            <h3 className="text-white text-lg font-bold mb-4 font-space">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-user-bg border border-user-border">
                <div>
                  <h4 className="text-white text-sm font-bold">Public Profile</h4>
                  <p className="text-user-text text-xs">Allow other users to see your profile and saved lists.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-user-bg border border-user-border">
                <div>
                  <h4 className="text-white text-sm font-bold">Marketing Emails</h4>
                  <p className="text-user-text text-xs">Receive updates about new features and promotions.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-user-border">
            <button className="px-6 py-2.5 rounded-lg text-user-text hover:text-white hover:bg-user-surface text-sm font-medium transition-colors">Cancel</button>
            <button className="px-6 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-all shadow-lg shadow-white/5 flex items-center gap-2">
              <span>Save Changes</span>
              <span className="material-symbols-outlined text-lg">save</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;