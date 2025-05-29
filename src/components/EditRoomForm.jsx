import React, { useState } from "react";
import Button from "./Button";
import { updateRoom } from "../api/roomApi";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";

function EditRoomForm({ room, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    number: room.roomNumber || "",
    floor: room.location || "",
    type: room.roomType || "",
    price: room.price || "",
    capacity: room.maxOccupancy || "",
    status: room.status || "Available",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const updatedRoom = {
        ...room,
        roomNumber: Number(formData.number),
        location: formData.floor,
        roomType: formData.type,
        price: Number(formData.price),
        maxOccupancy: Number(formData.capacity),
        status: formData.status,
      };

      const result = await updateRoom(room.id, updatedRoom);
      if (onSubmit) onSubmit(result);
      onClose();
      toast.success("Room updated successfully!");
    } catch (err) {
      toast.error("Failed to update room!");
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-6 text-xl font-semibold text-gray-800">Edit room</h2>

      {error && (
        <div className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-50">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Room number
            </label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Room number"
              className={inputClass}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Bed type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={inputClass}
              required
              disabled={isSubmitting}
            >
              <option value="">Choose bed type</option>
              <option value="Single bed">Single bed</option>
              <option value="Double bed">Double bed</option>
              <option value="Twin beds">Twin beds</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Capacity
            </label>
            <select
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className={inputClass}
              required
              disabled={isSubmitting}
            >
              <option value="">Choose capacity</option>
              <option value="1">1 person</option>
              <option value="2">2 person</option>
              <option value="4">4 person</option>
            </select>
          </div>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Floor
            </label>
            <select
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className={inputClass}
              required
              disabled={isSubmitting}
            >
              <option value="">Select floor</option>
              <option value="1">1st floor</option>
              <option value="2">2nd floor</option>
              <option value="3">3rd floor</option>
              <option value="4">4th floor</option>
              <option value="5">5th floor</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className={inputClass}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={inputClass}
              required
              disabled={isSubmitting}
            >
              <option value="Available">Available</option>
              <option value="Reserved">Reserved</option>
              <option value="Booked">Booked</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-6 mt-6 border-t">
        <Button variation="secondary" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <SpinnerMini /> : "Save"}
        </Button>
      </div>
    </form>
  );
}

export default EditRoomForm;
