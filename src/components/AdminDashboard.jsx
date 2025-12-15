import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('add'); // 'add' or 'bookings'
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    title: '', price: '', location: '', category: 'Transient', imageUrl: ''
  });

  const fetchBookings = async () => {
    const res = await axios.get('http://localhost:5000/api/bookings');
    setBookings(res.data);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/properties', formData);
    alert('Property Posted!');
    setFormData({ title: '', price: '', location: '', category: 'Transient', imageUrl: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Owner <span className="text-brand-gold">Dashboard</span></h1>
          <button onClick={() => { localStorage.clear(); window.location.href='/'; }} className="text-red-400 underline">Logout</button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button onClick={() => setActiveTab('add')} className={`px-6 py-2 rounded ${activeTab==='add' ? 'bg-brand-gold text-black' : 'bg-gray-700'}`}>Post Property</button>
          <button onClick={() => {setActiveTab('bookings'); fetchBookings();}} className={`px-6 py-2 rounded ${activeTab==='bookings' ? 'bg-brand-gold text-black' : 'bg-gray-700'}`}>View Bookings</button>
        </div>

        {activeTab === 'add' ? (
          <form onSubmit={handlePost} className="bg-gray-800 p-8 rounded-xl max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Add New Listing</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <select className="p-3 bg-gray-700 rounded" onChange={e => setFormData({...formData, category: e.target.value})}>
                <option value="Transient">Transient House</option>
                <option value="View Deck">View Deck / Cafe</option>
                <option value="Parking">Parking Lot</option>
              </select>
              <input placeholder="Price (PHP)" className="p-3 bg-gray-700 rounded" onChange={e => setFormData({...formData, price: e.target.value})} />
            </div>
            <input placeholder="Property Title" className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={e => setFormData({...formData, title: e.target.value})} />
            <input placeholder="Location" className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={e => setFormData({...formData, location: e.target.value})} />
            <input placeholder="Image URL" className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
            <button className="bg-blue-600 w-full py-3 rounded font-bold">Publish Listing</button>
          </form>
        ) : (
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-700 text-brand-gold">
                <tr>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Property</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} className="border-b border-gray-700">
                    <td className="p-4">{b.customerName}</td>
                    <td className="p-4">{b.contactNumber}</td>
                    <td className="p-4">{b.propertyTitle}</td>
                    <td className="p-4">{b.bookingDate}</td>
                    <td className="p-4 text-green-400">{b.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;