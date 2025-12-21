import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const PublicListings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [detailProperty, setDetailProperty] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all properties from Firebase
        const propertiesCollection = collection(db, "properties");
        const snapshot = await getDocs(propertiesCollection);
        
        // Transform data for display
        const propertyList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Transform to match our UI needs
        const transformedProperties = propertyList.map(prop => ({
          id: prop.id,
          title: prop.title || "Untitled Property",
          description: prop.desc || "No description available",
          location: prop.location || "Unknown Location",
          price: prop.price ? `$${prop.price}` : "Price on request",
          category: prop.category || "Unknown",
          imageUrl: prop.imageUrl || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470",
          rating: prop.rating || "New",
          ownerId: prop.ownerId || "unknown"
        }));

        setProperties(transformedProperties);
        
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to load properties. Please refresh the page.");
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleContactClick = (property) => {
    setSelectedProperty(property);
  };

  const closeContactModal = () => {
    setSelectedProperty(null);
  };

  // Get category badge info
  const getCategoryInfo = (category) => {
    const categoryMap = {
      'Driveways': { badge: 'Parking Spot', color: 'bg-blue-600', icon: 'local_parking' },
      'Lawns': { badge: 'Camping Spot', color: 'bg-green-600', icon: 'camping' },
      'Frontage': { badge: 'Food Stall', color: 'bg-yellow-600', icon: 'storefront' },
      'House': { badge: 'Full Property', color: 'bg-purple-600', icon: 'home' }
    };
    return categoryMap[category] || { badge: category, color: 'bg-gray-600', icon: 'help' };
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Properties for Sinulog</h1>
          <p className="text-xl text-gray-600">Browse all listed spaces - no login required!</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="ml-4 text-gray-600">Loading properties...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && properties.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-blue-100 p-6 rounded-full inline-block mb-4">
              <span className="material-symbols-outlined text-blue-600 text-6xl">home_work</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Properties Available Yet</h3>
            <p className="text-gray-600 mb-4">Property owners haven't listed any spaces for Sinulog yet.</p>
            <p className="text-gray-500">Check back later or contact us to list your property!</p>
          </div>
        )}

        {/* Properties Grid */}
        {properties.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map((property) => {
              const categoryInfo = getCategoryInfo(property.category);
              
              return (
                <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-200">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                      style={{ backgroundImage: `url('${property.imageUrl}')` }}
                    ></div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 ${categoryInfo.color} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                      <span className="material-symbols-outlined text-xs">{categoryInfo.icon}</span>
                      <span>{categoryInfo.badge}</span>
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                      <span className="text-sm font-bold">{property.rating}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 truncate">{property.title}</h3>
                      <span className="text-lg font-bold text-blue-600">{property.price}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 truncate">{property.description}</p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span className="material-symbols-outlined text-xs mr-1">location_on</span>
                      <span>{property.location}</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleContactClick(property)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">mail</span>
                        <span>Contact Owner</span>
                      </button>
                      <button
                        onClick={() => setDetailProperty(property)}
                        className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">info</span>
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Contact Owner Modal - Requires Login */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Contact Property Owner</h3>
              <button 
                onClick={closeContactModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 mb-2">You need to login or register to contact the owner of:</p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-bold text-gray-900">{selectedProperty.title}</p>
                <p className="text-gray-600 text-sm">{selectedProperty.location}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link 
                to="/login"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">login</span>
                <span>Login</span>
              </Link>
              <Link 
                to="/signup"
                className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">person_add</span>
                <span>Register</span>
              </Link>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Already have an account? Login to contact owners and book properties.
            </p>
          </div>
        </div>
      )}

      {/* Property Detail Modal */}
      {detailProperty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Property Details</h3>
              <button 
                onClick={() => setDetailProperty(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Property Image */}
            <div className="mb-6">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${detailProperty.imageUrl}')` }}
                ></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${getCategoryInfo(detailProperty.category).color} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                  <span className="material-symbols-outlined text-xs">{getCategoryInfo(detailProperty.category).icon}</span>
                  <span>{getCategoryInfo(detailProperty.category).badge}</span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                  <span className="text-sm font-bold">{detailProperty.rating}</span>
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{detailProperty.title}</h4>
                <p className="text-gray-600 mb-4">{detailProperty.description}</p>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="material-symbols-outlined text-xs mr-2">location_on</span>
                  <span>{detailProperty.location}</span>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Price</span>
                    <span className="text-2xl font-bold text-blue-600">{detailProperty.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{detailProperty.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                      {detailProperty.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Property Features</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  <span>Available for Sinulog Week</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  <span>Verified Property</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  <span>24/7 Access</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  <span>Secure Location</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setDetailProperty(null);
                  handleContactClick(detailProperty);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">mail</span>
                <span>Contact Owner</span>
              </button>
              <button
                className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">favorite</span>
                <span>Save</span>
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Some actions may require login or registration.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicListings;