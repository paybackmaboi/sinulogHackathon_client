import React from 'react';

const Hero = () => {
  return (
    // Updated height from h-[600px] to h-[85vh] and added min-h-[600px] for smaller screens
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
        <img 
          alt="Luxury modern villa with pool at sunset" 
          className="w-full h-full object-cover animate-pulse-slow transform scale-105" 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
        />
      </div>

      <div className="relative z-20 flex flex-col items-center gap-8 px-4 max-w-[960px] text-center w-full">
        <div className="flex flex-col gap-4 animate-fade-in-up">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
            Find Your Place in the World
          </h1>
          <p className="text-white/90 text-lg sm:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
            From cozy city apartments to seaside villas, book your next stay or list your property with ease.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-[800px] bg-white rounded-full p-2 shadow-2xl flex flex-col sm:flex-row items-center gap-2 transform transition-all hover:scale-[1.01]">
          {/* Location */}
          <div className="flex-1 w-full sm:w-auto relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <input 
              className="w-full h-12 pl-12 pr-4 rounded-full border-none bg-transparent text-gray-800 placeholder:text-gray-500 focus:ring-0 text-base font-medium outline-none" 
              placeholder="Where do you want to go?" 
              type="text"
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
          
          {/* Dates */}
          <div className="flex-1 w-full sm:w-auto relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <input 
              className="w-full h-12 pl-12 pr-4 rounded-full border-none bg-transparent text-gray-800 placeholder:text-gray-500 focus:ring-0 text-base font-medium outline-none" 
              placeholder="Add dates" 
              type="text"
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

          {/* Guests */}
          <div className="flex-1 w-full sm:w-auto relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="material-symbols-outlined">group</span>
            </div>
            <input 
              className="w-full h-12 pl-12 pr-4 rounded-full border-none bg-transparent text-gray-800 placeholder:text-gray-500 focus:ring-0 text-base font-medium outline-none" 
              placeholder="Add guests" 
              type="text"
            />
          </div>

          <button className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined">search</span>
            <span>Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;