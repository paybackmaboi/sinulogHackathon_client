import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../firebase';

const Explore = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 1. Reference the 'properties' collection in Firestore
        const propertiesCollection = collection(db, "properties");
        
        // 2. Get the data (Snapshot)
        const snapshot = await getDocs(propertiesCollection);
        
        // 3. Map the data to an array
        const propertyList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // 4. Transform data to match the expected format for the Explore component
        const transformedProperties = propertyList.map(prop => ({
          title: prop.title || "Untitled Property",
          location: prop.location || "Unknown Location",
          desc: prop.desc || "No description available",
          price: prop.price ? `$${prop.price}` : "$0",
          unit: prop.category === 'Driveways' || prop.category === 'Lawns' ? "/ day" : "/ night",
          rating: prop.rating || "New",
          image: prop.imageUrl || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470",
          badge: getBadgeForCategory(prop.category),
          badgeColor: getBadgeColorForCategory(prop.category),
          guests: prop.guests || "2+"
        }));

        // 5. Use only what's in Firebase - no mock data fallback
        setProperties(transformedProperties);
        console.log("Loaded from Firebase:", transformedProperties);

      } catch (error) {
        console.error("Error connecting to Firebase:", error);
        setError("Failed to load properties. Please try again later.");
        setProperties([]); // Clear properties on error
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Helper functions for badge assignment
  const getBadgeForCategory = (category) => {
    const badgeMap = {
      'Driveways': 'Parking Spot',
      'Lawns': 'Camping / Lawn',
      'Frontage': 'Food Stall Frontage',
      'House': 'Sinulog Ready'
    };
    return badgeMap[category] || null;
  };

  const getBadgeColorForCategory = (category) => {
    const colorMap = {
      'Driveways': 'bg-blue-600 text-white',
      'Lawns': 'bg-green-700 text-white',
      'Frontage': 'bg-primary text-surface-dark',
      'House': 'bg-primary text-surface-dark'
    };
    return colorMap[category] || null;
  };

  return (
    <div className="p-6 lg:p-10">
      {/* Sticky Search & Filter Header */}
      <div className="sticky top-0 -mt-6 lg:-mt-10 z-20 bg-surface-dark/95 backdrop-blur border-b border-[#3a3527] pb-4 pt-6 lg:pt-10 px-0 mb-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          {/* Search Bar */}
          <div className="flex flex-col xl:flex-row gap-4 items-stretch bg-card-dark p-2 rounded-xl border border-[#3a3527] shadow-xl">
            <div className="flex-1 relative w-full border-b xl:border-b-0 xl:border-r border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-focus-within:text-primary transition-colors">Location</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">search</span>
                <input className="bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 w-full text-sm font-medium p-0 leading-tight outline-none" placeholder="Where do you want to go?" type="text"/>
              </div>
            </div>
            
            <div className="flex-1 relative w-full border-b xl:border-b-0 xl:border-r border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group cursor-pointer">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-hover:text-primary transition-colors">Dates</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">calendar_today</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium text-white truncate">Jan 14 - Jan 22</span>
                </div>
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-primary/30 ml-auto whitespace-nowrap">Sinulog Week</span>
              </div>
            </div>

            <div className="flex-1 relative w-full border-b xl:border-b-0 xl:border-r border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-hover:text-primary transition-colors">Property Type</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">home_work</span>
                <select className="bg-transparent border-none text-white focus:ring-0 w-full text-sm font-medium p-0 cursor-pointer [&>option]:bg-card-dark outline-none">
                  <option>Homes & Apts</option>
                  <option>Driveways</option>
                  <option>Lawns</option>
                  <option>Frontages</option>
                  <option>Event Spaces</option>
                </select>
              </div>
            </div>

            <div className="w-full xl:w-40 relative border-b xl:border-b-0 border-[#3a3527] px-2 py-1 hover:bg-[#3a3527]/30 rounded transition-colors group">
              <label className="text-[10px] uppercase text-text-secondary font-bold tracking-wider ml-2 group-hover:text-primary transition-colors">Guests</label>
              <div className="flex items-center gap-2 px-2 pb-1">
                <span className="material-symbols-outlined text-text-secondary">group</span>
                <input className="bg-transparent border-none text-white focus:ring-0 w-full text-sm font-medium p-0 leading-tight outline-none" min="1" type="number" defaultValue="2"/>
              </div>
            </div>

            <button className="w-full xl:w-auto bg-primary hover:bg-yellow-400 text-surface-dark font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(250,198,56,0.1)]">
              <span className="material-symbols-outlined">search</span>
              <span>Search</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 lg:px-0 lg:mx-0">
            <button className="flex items-center gap-2 bg-primary/20 border border-primary text-primary px-4 py-2 rounded-full whitespace-nowrap transition-transform active:scale-95 shrink-0">
              <span className="material-symbols-outlined text-[20px] fill">festival</span>
              <span className="text-sm font-bold">Sinulog Specials</span>
            </button>
            <FilterPill icon="beach_access" label="Beachfront" />
            <FilterPill icon="apartment" label="City Apts" />
            <FilterPill icon="local_parking" label="Parking Spots" />
            <FilterPill icon="storefront" label="Food Stall Frontage" />
            <FilterPill icon="deck" label="Lawns & Camping" />
            <FilterPill icon="theater_comedy" label="Event Spaces" />
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Results Info Bar */}
        <div className="flex items-center justify-between">
          <p className="text-text-secondary text-sm"><span className="text-white font-bold">{properties.length}</span> properties found in Cebu</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-text-secondary hover:text-white text-sm font-medium transition-colors">
              <span className="material-symbols-outlined text-lg">tune</span> Filters
            </button>
            <div className="h-4 w-px bg-[#3a3527]"></div>
            <div className="flex bg-[#3a3527] p-1 rounded-lg">
              <button className="p-1.5 bg-surface-dark rounded text-white shadow-sm">
                <span className="material-symbols-outlined text-lg">grid_view</span>
              </button>
              <button className="p-1.5 text-text-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="col-span-full flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="ml-4 text-white">Loading properties...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="col-span-full bg-red-900/20 border border-red-900 rounded-lg p-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-red-400">error</span>
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Empty State - No properties listed yet */}
        {!loading && !error && properties.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-primary/10 p-6 rounded-full mb-4">
              <span className="material-symbols-outlined text-primary text-6xl">home_work</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">No Properties Available Yet</h3>
            <p className="text-text-secondary mb-4">Property owners haven't listed any properties yet.</p>
            <p className="text-text-secondary text-sm">Check back later or contact property owners to list their spaces.</p>
          </div>
        )}

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {properties.map((prop, index) => (
             <div key={index} className="group flex flex-col gap-3 cursor-pointer">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card-dark">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                         style={{ backgroundImage: `url("${prop.image}")` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    
                    <button className="absolute top-3 right-3 p-2 bg-surface-dark/60 backdrop-blur rounded-full text-white hover:text-red-500 hover:bg-white transition-all z-10">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    
                    {prop.badge && (
                        <div className={`absolute top-3 left-3 ${prop.badgeColor} text-xs font-bold px-2 py-1 rounded shadow-md`}>
                            {prop.badge}
                        </div>
                    )}
                    
                    {prop.guests && (
                        <div className="absolute bottom-3 left-3 flex gap-2">
                            <div className="bg-surface-dark/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">group</span> {prop.guests}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{prop.title}</h3>
                        <div className="flex items-center gap-1 text-white text-sm">
                            <span className="material-symbols-outlined text-[16px] fill text-primary">star</span>
                            <span>{prop.rating}</span>
                            {prop.reviews && <span className="text-text-secondary text-xs">{prop.reviews}</span>}
                        </div>
                    </div>
                    <p className="text-text-secondary text-sm">{prop.location}</p>
                    <p className="text-text-secondary text-xs mt-1">{prop.desc}</p>
                    <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-white font-bold text-lg">{prop.price}</span>
                        <span className="text-text-secondary text-sm">{prop.unit}</span>
                    </div>
                </div>
             </div>
           ))}
        </div>

        {/* Pagination / Load More */}
        <div className="flex flex-col items-center gap-4 py-8">
            <p className="text-text-secondary text-sm">Showing {Math.min(properties.length, 8)} of {properties.length} properties</p>
            <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-[#3a3527] rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-primary rounded-full"></div>
                </div>
            </div>
            {properties.length > 8 && (
            <button className="bg-[#3a3527] hover:bg-[#554e3a] text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mt-2">
                <span>Load More Properties</span>
                <span className="material-symbols-outlined">expand_more</span>
            </button>
            )}
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
};

// Helper for Filter Pills
const FilterPill = ({ icon, label }) => (
    <button className="flex items-center gap-2 bg-card-dark border border-[#3a3527] text-text-secondary hover:text-white hover:border-gray-500 px-4 py-2 rounded-full whitespace-nowrap transition-all active:scale-95 shrink-0">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
    </button>
);

export default Explore;