import React from 'react';

export const HowItWorks = () => {
  return (
    <section className="w-full bg-white dark:bg-[#1a222b] py-20 px-4 sm:px-10 border-y border-[#f0f2f4] dark:border-[#293038]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight mb-4">How EstateBook Works</h2>
          <p className="text-[#617589] dark:text-gray-400 text-lg">Your journey to finding the perfect property or hosting travelers is just a few steps away.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent z-0"></div>
          
          {[
            { icon: "travel_explore", title: "1. Find Your Stay", desc: "Search through thousands of verified listings by location, dates, and amenities to find your match." },
            { icon: "check_circle", title: "2. Book Securely", desc: "Reserve your property instantly with our secure payment protection and transparent pricing." },
            { icon: "vpn_key", title: "3. Enjoy Your Trip", desc: "Check in with ease and enjoy your stay. Our 24/7 support is here to help if you need anything." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10 group">
              <div className="size-24 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                <span className="material-symbols-outlined text-[40px]">{item.icon}</span>
              </div>
              <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#617589] dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Benefits = () => {
  return (
    <section className="w-full max-w-[1280px] px-4 sm:px-10 py-20 mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Why Choose Us</span>
            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
              Experience the Difference with EstateBook
            </h2>
            <p className="text-[#617589] dark:text-gray-400 text-lg leading-relaxed">
              Whether you're a traveler seeking adventure or a host looking to maximize earnings, our platform offers unmatched benefits tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "verified_user", color: "text-green-600 bg-green-100", title: "Verified Listings", desc: "Every home is vetted for quality and safety standards." },
              { icon: "support_agent", color: "text-blue-600 bg-blue-100", title: "24/7 Support", desc: "Our dedicated team is always ready to assist you." },
              { icon: "savings", color: "text-purple-600 bg-purple-100", title: "Low Fees", desc: "Transparent pricing with no hidden charges for guests." },
              { icon: "public", color: "text-orange-600 bg-orange-100", title: "Global Reach", desc: "Properties in over 190 countries ready for booking." },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white dark:hover:bg-[#1a222b] transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800 hover:shadow-md">
                <div className={`size-12 rounded-lg ${benefit.color} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined">{benefit.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#111418] dark:text-white text-lg mb-1">{benefit.title}</h4>
                  <p className="text-sm text-[#617589] dark:text-gray-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img alt="Modern minimalist home exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470" />
          <div className="absolute bottom-8 left-8 z-20 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Host</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Own a property?</h3>
            <p className="text-white/90 mb-4 max-w-md">Join thousands of hosts and start earning. We make management simple.</p>
            <button className="bg-white text-[#111418] px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              List Your Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="w-full bg-[#f0f2f4] dark:bg-[#0d141c] py-20 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight">Trusted by Travelers</h2>
          <div className="flex gap-2">
            <button className="size-10 rounded-full bg-white dark:bg-[#1a222b] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition-colors text-[#111418] dark:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="size-10 rounded-full bg-white dark:bg-[#1a222b] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition-colors text-[#111418] dark:text-white">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { text: "EstateBook made our family vacation planning effortless. The property was exactly as described, and the booking process was seamless.", name: "Sarah Jenkins", role: "Traveler from UK", img: "https://i.pravatar.cc/150?img=5" },
            { text: "As a property owner, I appreciate the transparency and the quality of guests I find through this platform. Highly recommended!", name: "Michael Chen", role: "Superhost in Toronto", img: "https://i.pravatar.cc/150?img=11" },
            { text: "The customer support team went above and beyond when we needed to change our dates last minute. Fantastic service.", name: "Elena Rodriguez", role: "Traveler from Spain", img: "https://i.pravatar.cc/150?img=9" }
          ].map((review, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1a222b] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                   <span key={i} className="material-symbols-outlined fill-current text-[20px]">star</span>
                ))}
              </div>
              <p className="text-[#111418] dark:text-gray-200 text-lg leading-relaxed italic">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img alt={review.name} className="size-12 rounded-full object-cover" src={review.img} />
                <div>
                  <p className="font-bold text-[#111418] dark:text-white">{review.name}</p>
                  <p className="text-sm text-[#617589] dark:text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto bg-primary rounded-3xl p-10 sm:p-16 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-white text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to start your journey?</h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-medium">Join millions of travelers and hosts on EstateBook today. Sign up now and get $50 off your first booking.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors text-lg">
              Get Started
            </button>
            <button className="px-8 py-4 bg-primary border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};