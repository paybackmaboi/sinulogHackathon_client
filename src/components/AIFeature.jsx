import React, { useState } from 'react';
import axios from 'axios';
import { FaRobot, FaMagic } from 'react-icons/fa';

const AIFeature = () => {
  const [formData, setFormData] = useState({ title: '', location: '', features: '' });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // In a real scenario, use localhost:5000/api/ai/generate-desc
      const res = await axios.post('http://localhost:5000/api/ai/generate-desc', formData);
      setResult(res.data.description);
    } catch (error) {
      setResult("Error connecting to AI server.");
    }
    setLoading(false);
  };

  return (
    <section id="ai-tools" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 flex items-center">
              <FaRobot className="text-brand-gold mr-3" /> AI Property Assistant
            </h2>
            <p className="text-gray-400 mb-6">
              Listing a property? Use our Generative AI to create compelling, professional market descriptions instantly. 
              Targeted for the Cebu real estate market.
            </p>
            
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Property Title (e.g. Modern Condo in IT Park)" 
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-brand-gold outline-none"
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-brand-gold outline-none"
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
              <textarea 
                placeholder="Key Features (e.g. pool, 3 bedrooms, seaview)" 
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-brand-gold outline-none h-24"
                onChange={(e) => setFormData({...formData, features: e.target.value})}
              ></textarea>
              
              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded font-bold hover:opacity-90 transition"
              >
                {loading ? 'Analyzing...' : <><FaMagic className="mr-2"/> Generate Description</>}
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 min-h-[300px] flex flex-col justify-center">
            {result ? (
              <div>
                <h3 className="text-brand-gold font-bold mb-2">AI Generated Output:</h3>
                <p className="text-gray-300 leading-relaxed italic">"{result}"</p>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>AI result will appear here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;