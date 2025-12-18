import api from './axiosConfig';

// Create a new booking (User)
export const createBooking = async (bookingData) => {
  try {
    // bookingData: { customerName, contactNumber, bookingDate, propertyTitle, UserId, PropertyId }
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Get all bookings (Admin Dashboard)
export const getAllBookings = async () => {
  try {
    const response = await api.get('/bookings');
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

// Get bookings for a specific user (User Profile History)
export const getUserBookings = async (userId) => {
  try {
    const response = await api.get(`/bookings/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    throw error;
  }
};

// Update Booking Status (Admin: Approve/Reject)
export const updateBookingStatus = async (id, status) => {
  try {
    // status: "Confirmed" or "Cancelled"
    const response = await api.put(`/bookings/${id}/status`, { status });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};