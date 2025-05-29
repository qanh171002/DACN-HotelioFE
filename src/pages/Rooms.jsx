import Button from "../components/Button";
import Modal from "../components/Modal";
import AddRoomForm from "../components/AddRoomForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRooms, createRoom } from "../api/roomApi";
import { FaUserFriends, FaBed } from "react-icons/fa";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

/*
const mockRooms = [
  {
    id: 1,
    roomNumber: 101,
    maxOccupancy: 1,
    roomType: "Single bed",
    price: 100,
    status: "Available",
    location: "1",
  },
  {
    id: 2,
    roomNumber: 102,
    maxOccupancy: 2,
    roomType: "Double bed",
    price: 150,
    status: "Reserved",
    location: "1",
  },
  {
    id: 3,
    roomNumber: 201,
    maxOccupancy: 2,
    roomType: "Double bed",
    price: 150,
    status: "Available",
    location: "2",
  },
  {
    id: 4,
    roomNumber: 202,
    maxOccupancy: 4,
    roomType: "Twin beds",
    price: 350,
    status: "Reserved",
    location: "2",
  },
  {
    id: 5,
    roomNumber: 301,
    maxOccupancy: 1,
    roomType: "Single bed",
    price: 100,
    status: "Booked",
    location: "3",
  },
  {
    id: 6,
    roomNumber: 302,
    maxOccupancy: 4,
    roomType: "Twin beds",
    price: 350,
    status: "Available",
    location: "3",
  },
  {
    id: 7,
    roomNumber: 401,
    maxOccupancy: 1,
    roomType: "Single bed",
    price: 100,
    status: "Booked",
    location: "4",
  },
  {
    id: 8,
    roomNumber: 402,
    maxOccupancy: 4,
    roomType: "Twin beds",
    price: 350,
    status: "Available",
    location: "4",
  },
  {
    id: 9,
    roomNumber: 501,
    maxOccupancy: 2,
    roomType: "Double bed",
    price: 250,
    status: "Reserved",
    location: "5",
  },
  {
    id: 10,
    roomNumber: 502,
    maxOccupancy: 2,
    roomType: "Double bed",
    price: 250,
    status: "Available",
    location: "5",
  },
];
*/

const statusColors = {
  Available: {
    base: "bg-blue-500",
    hover: "hover:bg-blue-600",
  },
  Reserved: {
    base: "bg-green-500",
    hover: "hover:bg-green-600",
  },
  Booked: {
    base: "bg-red-500",
    hover: "hover:bg-red-600",
  },
};

function Rooms() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState("");
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setIsLoading(true);
        const data = await getRooms();
        setRooms(data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleAddRoom = async (newRoom) => {
    try {
      setIsSubmitting(true);
      const createdRoom = await createRoom(newRoom);
      setRooms((prevRooms) => [...prevRooms, createdRoom]);
      setIsModalOpen(false);
      toast.success("Room added successfully!");
    } catch (err) {
      toast.error("Failed to add room!");
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFloorChange = (e) => {
    setSelectedFloor(e.target.value);
  };

  const filteredRooms = selectedFloor
    ? rooms.filter((room) => String(room.location) === selectedFloor)
    : rooms;

  return (
    <div className="grid grid-cols-5 gap-6">
      {/* Header text (2 cột) */}
      <div className="flex flex-col justify-center col-span-2 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">List of Rooms</h2>
        <p className="text-gray-500 text-md">
          Here is the list of your hotel rooms.
        </p>
      </div>

      {/* Filter and button (3 cột) */}
      <div className="flex items-center justify-end col-span-3 gap-4 mb-6">
        <select
          className="px-3 py-2 text-sm border rounded-md"
          value={selectedFloor}
          onChange={handleFloorChange}
        >
          <option value="">All floors</option>
          <option value="1">1st floor</option>
          <option value="2">2nd floor</option>
          <option value="3">3rd floor</option>
          <option value="4">4th floor</option>
          <option value="5">5th floor</option>
        </select>
        <Button onClick={() => setIsModalOpen(true)}>Add Room</Button>
      </div>

      {/* Room cards */}
      <div className="col-span-5 p-6 bg-white rounded-2xl">
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <Spinner />
          </div>
        ) : filteredRooms.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <FaBed className="mb-2 text-6xl text-gray-400" />
            <div className="text-lg font-semibold text-gray-400">
              There are no rooms available on this floor at the moment.
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-16">
              <LegendItem color="bg-blue-500" label="Available" />
              <LegendItem color="bg-green-500" label="Reserved" />
              <LegendItem color="bg-red-500" label="Booked" />
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddRoomForm
          onSubmit={handleAddRoom}
          onClose={() => setIsModalOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </div>
  );
}

export default Rooms;

function RoomCard({ room }) {
  const navigate = useNavigate();
  const roomName = `Cabin ${String(room.roomNumber).padStart(3, "0")}`;
  const colors = statusColors[room.status] || {
    base: "bg-gray-500",
    hover: "hover:bg-gray-600",
  };
  return (
    <div
      className={`relative flex min-h-[140px] cursor-pointer flex-col justify-between rounded-2xl p-6 text-white shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-lg ${colors.base} ${colors.hover}`}
      onClick={() => navigate(`/rooms/${room.id}`)}
    >
      <div className="mb-4 text-xl font-bold tracking-wide text-white">
        {roomName}
      </div>
      <div className="flex flex-col gap-2 mb-14">
        <div className="flex items-center text-base">
          <FaUserFriends className="mr-2 text-gray-100" />
          <span className="text-gray-100">
            For up to <span className="font-semibold">{room.maxOccupancy}</span>{" "}
            {room.maxOccupancy === 1 ? "guest" : "guests"}
          </span>
        </div>
        <div className="flex items-center text-base">
          <FaBed className="mr-2 text-gray-100" />
          <span className="text-gray-100">{room.roomType}</span>
        </div>
      </div>
      <div className="absolute text-2xl font-bold text-white bottom-6 right-6">
        ${room.price}
        <span className="text-base font-semibold text-gray-200">/ night</span>
      </div>
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <div className={`h-3 w-3 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}
