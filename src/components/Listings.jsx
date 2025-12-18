import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Listings = () => {
  const [properties, setProperties] = useState([]);

  // Static fallback data matching the design
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

  useEffect(() => {
    // Attempt to fetch from API, otherwise use static data
    axios.get('http://localhost:5000/api/properties')
      .then(res => {
        if (res.data && res.data.length > 0) {
            // Map API data to new design structure if necessary
            setProperties(res.data);
        } else {
            setProperties(staticProperties);
        }
      })
      .catch(() => setProperties(staticProperties));
  }, []);

  return (
    <section className="w-full max-w-[1280px] px-4 sm:px-10 py-16 mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-tight">Top-Rated Stays</h2>
          <p className="text-[#617589] dark:text-gray-400 mt-2 text-lg">Explore some of the most loved homes around the globe.</p>
        </div>
        <a className="hidden sm:flex items-center gap-1 text-primary font-bold hover:underline" href="#">
          View all <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
        </a>
      </div>

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
                  {prop.rating || "4.9"}
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
      </div>

      <div className="mt-8 flex justify-center sm:hidden">
        <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white w-full">View all stays</button>
      </div>
    </section>
  );
};

export default Listings;