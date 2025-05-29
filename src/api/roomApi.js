import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const getRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/room`);
    console.log(response.data);
    return Array.isArray(response.data)
      ? response.data.map((room) => ({
          id: room.id,
          roomNumber: room.roomNumber,
          maxOccupancy: room.maxOccupancy,
          roomType: room.roomType,
          price: room.price,
          status: room.status,
          location: room.location,
        }))
      : [];
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};

export const getRoomById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/room/${id}`);
    return {
      id: response.data.id,
      roomNumber: response.data.roomNumber,
      maxOccupancy: response.data.maxOccupancy,
      roomType: response.data.roomType,
      price: response.data.price,
      status: response.data.status,
      location: response.data.location,
    };
  } catch (error) {
    console.error(`Error fetching room with id ${id}:`, error);
    throw error;
  }
};

export const createRoom = async (room) => {
  try {
    const response = await axios.post(`${API_URL}/room`, room);
    return response.data;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

export const updateRoom = async (id, room) => {
  try {
    const response = await axios.put(`${API_URL}/room/${id}`, room);
    return {
      id: response.data.id,
      roomNumber: response.data.roomNumber,
      maxOccupancy: response.data.maxOccupancy,
      roomType: response.data.roomType,
      price: response.data.price,
      status: response.data.status,
      location: response.data.location,
    };
  } catch (error) {
    console.error(`Error updating room with id ${id}:`, error);
    throw error;
  }
};

export const deleteRoom = async (id) => {
  try {
    await axios.delete(`${API_URL}/room/${id}`);
  } catch (error) {
    console.error(`Error deleting room with id ${id}:`, error);
    throw error;
  }
};
