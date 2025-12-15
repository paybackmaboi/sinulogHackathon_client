import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProp, setSelectedProp] = useState(null); // For modal
  const [bookForm, setBookForm] = useState({ customerName: '', contactNumber: '', bookingDate: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/properties').then(res => setProperties(res.data));
  }, []);

  const submitBooking = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/bookings', {
      ...bookForm,
      propertyTitle: selectedProp.title
    });
    alert("Booking Request Sent!");
    setSelectedProp(null);
  };

  return (
    <section id="listings" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Available Spaces</h2>
        
        {/* Category Filters could go here */}

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div key={prop.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
              <div className="h-48 overflow-hidden relative">
                <span className="absolute top-2 right-2 bg-black/70 px-2 py-1 text-xs rounded text-white z-10">{prop.category}</span>
                <img src={prop.imageUrl} alt={prop.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
                <p className="text-brand-gold font-bold text-lg">₱ {prop.price}</p>
                <button onClick={() => setSelectedProp(prop)} className="mt-4 w-full py-2 bg-brand-gold text-black font-bold rounded hover:bg-yellow-500 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedProp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md border border-brand-gold">
            <h3 className="text-xl font-bold mb-4">Book: {selectedProp.title}</h3>
            <form onSubmit={submitBooking}>
              <input required placeholder="Your Name" className="w-full p-2 mb-3 bg-gray-700 rounded" onChange={e => setBookForm({...bookForm, customerName: e.target.value})} />
              <input required placeholder="Contact Number" className="w-full p-2 mb-3 bg-gray-700 rounded" onChange={e => setBookForm({...bookForm, contactNumber: e.target.value})} />
              <input required type="date" className="w-full p-2 mb-4 bg-gray-700 rounded text-white" onChange={e => setBookForm({...bookForm, bookingDate: e.target.value})} />
              <div className="flex gap-2">
                <button type="button" onClick={() => setSelectedProp(null)} className="w-1/2 py-2 bg-gray-600 rounded">Cancel</button>
                <button type="submit" className="w-1/2 py-2 bg-brand-gold text-black font-bold rounded">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Listings;