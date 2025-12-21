import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase'; 

const PropertyDashboard = () => {
  // State for logic
  const [activeTab, setActiveTab] = useState('All');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form State
  const [newListing, setNewListing] = useState({
    title: '',
    price: '',
    location: '',
    category: 'Driveways', // Default category
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470'
  });

  // === 1. FIREBASE FETCH LOGIC ===
  const fetchMyProperties = async (user) => {
    if (!user) return;
    setLoading(true);
    try {
      const q = query(collection(db, "properties"), where("ownerId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const props = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListings(props);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchMyProperties(user);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // === 2. ADD LISTING LOGIC ===
  const handleAddListing = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return alert("You must be logged in!");

    try {
      await addDoc(collection(db, "properties"), {
        ...newListing,
        ownerId: auth.currentUser.uid,
        status: "ACTIVE",
        rating: "New",
        specs: [{ icon: "verified", text: "Verified Owner" }], // Default spec
        createdAt: new Date().toISOString()
      });

      setShowAddModal(false);
      fetchMyProperties(auth.currentUser);
      alert("Property Added Successfully!");
      
      // Reset form
      setNewListing({
        title: '',
        price: '',
        location: '',
        category: 'Driveways',
        imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470'
      });
    } catch (error) {
      console.error("Error adding property:", error);
      alert("Failed to add property");
    }
  };

  // === 3. FILTERING LOGIC ===
  // If tab is 'All', show everything. Otherwise, match the category.
  const filteredListings = activeTab === 'All' 
    ? listings 
    : listings.filter(item => item.category === activeTab);

  // === DATA FOR TABS ===
  const tabs = [
    { name: 'All', label: 'All Listings', icon: 'apps' },
    { name: 'Driveways', label: 'Driveways', icon: 'directions_car' },
    { name: 'Lawns', label: 'Lawns', icon: 'camping' },
    { name: 'Frontage', label: 'Frontage', icon: 'storefront' },
    { name: 'House', label: 'Whole House', icon: 'home' }
  ];

  return (
    <div className="flex flex-col w-full gap-6 relative z-10">
      
      {/* Header */}
      <header className="flex flex-wrap justify-between items-end gap-4 pb-4 border-b border-[#dbe4e6] dark:border-gray-700">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#111718] dark:text-white text-3xl font-extrabold leading-tight">Property Management</h1>
          <p className="text-[#618389] dark:text-gray-400 text-base font-normal">Manage your short-term rentals for Sinulog week.</p>
        </div>
        <div className="flex items-center gap-3">
           <button 
            onClick={() => setShowAddModal(true)}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#137fec] text-white text-sm font-bold hover:bg-[#0ebcdb] transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-lg">add_location_alt</span>
            <span>Add New Listing</span>
          </button>
        </div>
      </header>

      {/* Stats Overview (Static for visual appeal, dynamic count for Active Listings) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dbe4e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#618389] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Total Listings</p>
              <span className="material-symbols-outlined text-[#618389]">holiday_village</span>
            </div>
            <p className="text-[#111718] dark:text-white text-3xl font-black leading-tight">{listings.length}</p>
            <p className="text-green-600 text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> Active</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dbe4e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#618389] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Pending Bookings</p>
              <span className="material-symbols-outlined text-[#618389]">pending_actions</span>
            </div>
            <p className="text-[#111718] dark:text-white text-3xl font-black leading-tight">0</p>
            <p className="text-orange-500 text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">priority_high</span> Action required</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dbe4e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[#618389] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Total Earnings</p>
              <span className="material-symbols-outlined text-[#618389]">payments</span>
            </div>
            <p className="text-[#111718] dark:text-white text-3xl font-black leading-tight">₱ 0</p>
            <p className="text-green-600 text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> Start earning</p>
        </div>
      </section>

      {/* Listings Management Area */}
      <section className="flex flex-col gap-4 border border-[#dbe4e6] dark:border-gray-700 rounded-xl bg-white dark:bg-[#1a2632] shadow-sm overflow-hidden min-h-[400px]">
        
        {/* === TABS SECTION === */}
        <div className="border-b border-[#dbe4e6] dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 px-6 pt-4">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button 
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 border-b-[3px] pb-3 px-1 transition-all whitespace-nowrap ${
                  activeTab === tab.name 
                    ? 'border-[#137fec] text-[#137fec]' 
                    : 'border-transparent text-[#618389] hover:text-[#111718] dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                <span className={`material-symbols-outlined ${activeTab === tab.name ? 'fill-current' : ''}`}>
                  {tab.icon}
                </span>
                <p className="text-sm font-bold">{tab.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {loading ? (
             <p className="col-span-full text-center py-10 text-gray-500 animate-pulse">Loading properties...</p>
          ) : filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <div key={listing.id} className="group flex flex-col rounded-xl border border-[#dbe4e6] dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all bg-white dark:bg-[#1a2632]">
                
                {/* Image Area */}
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${listing.imageUrl}")` }}></div>
                  
                  {/* Status Badges */}
                  <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wider bg-green-100 text-green-800">
                    {listing.status}
                  </div>
                  <div className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md shadow-sm bg-white/90 text-black">
                    {listing.category}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-[#111718] dark:text-white leading-tight">{listing.title}</h3>
                      <div className="font-bold text-[#137fec] text-lg">₱{listing.price}<span className="text-[#618389] text-xs font-normal">/night</span></div>
                    </div>
                    <p className="text-[#618389] text-sm mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> {listing.location}
                    </p>
                  </div>
                  
                  {/* Actions */}
                  <div className="mt-auto pt-2 flex gap-2">
                    <button className="flex-1 py-2 px-3 rounded-lg border border-[#dbe4e6] dark:border-gray-600 text-[#111718] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <span className="material-symbols-outlined text-5xl text-gray-300 mb-2">folder_open</span>
                <p className="text-gray-500">No properties found in "{activeTab}".</p>
                {activeTab !== 'All' && (
                  <button onClick={() => setActiveTab('All')} className="text-[#137fec] font-bold text-sm mt-2 hover:underline">View All</button>
                )}
            </div>
          )}
        </div>
      </section>

      {/* === ADD LISTING MODAL === */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 w-full max-w-md shadow-2xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-[#111418] dark:text-white">Add New Property</h2>
            <form onSubmit={handleAddListing} className="flex flex-col gap-3">
              <input 
                placeholder="Title (e.g. Spacious Driveway)" 
                className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={newListing.title}
                onChange={e => setNewListing({...newListing, title: e.target.value})}
                required
              />
              <input 
                placeholder="Price per night (e.g. 500)" 
                type="number"
                className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={newListing.price}
                onChange={e => setNewListing({...newListing, price: e.target.value})}
                required
              />
              <input 
                placeholder="Location (e.g. Near Mango Ave)" 
                className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={newListing.location}
                onChange={e => setNewListing({...newListing, location: e.target.value})}
                required
              />
              {/* This dropdown matches the Tabs exactly */}
              <select 
                className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={newListing.category}
                onChange={e => setNewListing({...newListing, category: e.target.value})}
              >
                <option value="Driveways">Driveway</option>
                <option value="Lawns">Lawn</option>
                <option value="Frontage">Frontage</option>
                <option value="House">Whole House</option>
              </select>
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#137fec] hover:bg-blue-600 text-white font-bold rounded transition">Save Listing</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDashboard;