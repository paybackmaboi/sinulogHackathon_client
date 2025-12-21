import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../firebase'; // Import your Firebase DB connection
import { Link } from 'react-router-dom';

const Listings = () => {
  const [properties, setProperties] = useState([]);

  // Static fallback data (Used if Firebase is empty or fails)
  const staticProperties = [
    {
      id: 1,
      title: "Modern City Loft",
      location: "New York, USA",
      price: 185,
      rating: 4.92,
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470"
    },
    {
      id: 2,
      title: "Oceanfront Villa",
      location: "Malibu, California",
      price: 450,
      rating: 4.98,
      imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1470"
    },
    {
      id: 3,
      title: "Alpine Cabin",
      location: "Aspen, Colorado",
      price: 280,
      rating: 4.85,
      imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470"
    },
    {
      id: 4,
      title: "Skyline Penthouse",
      location: "Tokyo, Japan",
      price: 620,
      rating: 5.0,
      imageUrl: "https://images.unsplash.com/photo-1512918760383-5658fc14bc63?q=80&w=1470"
    }
  ];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 1. Reference the 'properties' collection in your Firestore
        const propertiesCollection = collection(db, "properties");
        
        // 2. Get the data (Snapshot)
        const snapshot = await getDocs(propertiesCollection);
        
        // 3. Map the data to an array
        const propertyList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // 4. Transform data to match the expected format for the Listings component
        const transformedProperties = propertyList.map(prop => ({
          id: prop.id,
          title: prop.title || "Untitled Property",
          location: prop.location || "Unknown Location",
          price: parseFloat(prop.price) || 0,
          rating: prop.rating || "New",
          imageUrl: prop.imageUrl || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470"
        }));

        // 5. Use only real data - no mock fallback
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

  return (
    <section className="w-full max-w-[1280px] px-4 sm:px-10 py-16 mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-tight">Top-Rated Stays</h2>
          <p className="text-[#617589] dark:text-gray-400 mt-2 text-lg">Explore some of the most loved homes around the globe.</p>
        </div>
        <Link to="/explore" className="hidden sm:flex items-center gap-1 text-primary font-bold hover:underline">
          View all <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
        </Link>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="col-span-full flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="ml-4 text-gray-600 dark:text-gray-400">Loading properties...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="col-span-full bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-red-500 dark:text-red-400">error</span>
          <p className="text-red-600 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Empty State - No properties listed yet */}
      {!loading && !error && properties.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-primary/10 p-6 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-6xl">home_work</span>
          </div>
          <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-2">No Properties Available Yet</h3>
          <p className="text-[#617589] dark:text-gray-400 mb-4">Property owners haven't listed any properties yet.</p>
          <p className="text-[#617589] dark:text-gray-400 text-sm">Check back later as more properties become available!</p>
        </div>
      )}

      {/* Property Grid - Only show if there are properties */}
      {properties.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((prop) => (
            <div key={prop.id} className="group flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <div className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined block text-[20px]">favorite</span>
              </div>
              <div 
                className="w-full h-full bg-gray-200 group-hover:scale-110 transition-transform duration-500 ease-out bg-cover bg-center" 
                style={{ backgroundImage: `url('${prop.imageUrl}')` }}
              ></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-1 text-[#111418] dark:text-white font-medium text-sm">
                  <span className="material-symbols-outlined text-primary text-base">star</span>
                  {prop.rating || "New"}
                </div>
              </div>
              <p className="text-[#617589] dark:text-gray-400 text-sm">{prop.location || "City, Country"}</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[#111418] dark:text-white font-bold text-lg">${prop.price}</span>
                <span className="text-[#617589] dark:text-gray-400 text-sm">/ night</span>
              </div>
            </div>
          </div>
        ))}
          ))}
        </div>
      )}

      {/* Mobile View All Button - Only show if there are properties */}
      {properties.length > 0 && (
        <div className="mt-8 flex justify-center sm:hidden">
          <Link to="/explore" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white w-full text-center">View all stays</Link>
        </div>
      )}
    </section>
  );
};

export default Listings;