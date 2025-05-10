import Button from "../components/Button";

// mock data for rooms
const rooms = [
  {
    id: 101,
    type: "Single bed",
    price: "$100/night",
    status: "Available",
    capacity: "1 person",
  },
  {
    id: 102,
    type: "Double bed",
    price: "$150/night",
    status: "Reserved",
    capacity: "1-2 person",
  },
  {
    id: 103,
    type: "Double bed",
    price: "$150/night",
    status: "Available",
    capacity: "1-2 person",
  },
  {
    id: 104,
    type: "Twin beds",
    price: "$350/night",
    status: "Reserved",
    capacity: "2-4 person",
  },
  {
    id: 105,
    type: "Single bed",
    price: "$100/night",
    status: "Booked",
    capacity: "1 person",
  },
  {
    id: 106,
    type: "Twin beds",
    price: "$350/night",
    status: "Available",
    capacity: "2-4 person",
  },
  {
    id: 107,
    type: "Single bed",
    price: "$100/night",
    status: "Booked",
    capacity: "1 person",
  },
  {
    id: 108,
    type: "Twin beds",
    price: "$350/night",
    status: "Available",
    capacity: "2-4 person",
  },
  {
    id: 109,
    type: "Double bed",
    price: "$250/night",
    status: "Reserved",
    capacity: "1-2 person",
  },
  {
    id: 110,
    type: "Double bed",
    price: "$250/night",
    status: "Available",
    capacity: "1-2 person",
  },
];
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
  return (
    <div className="grid grid-cols-5 gap-6">
      {/* Header text (2 cột) */}
      <div className="flex flex-col justify-center col-span-2 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">List of Rooms</h2>
        <p className="text-sm text-gray-500">
          Here is the list of your hotel rooms.
        </p>
      </div>

      {/* Filter and button (3 cột) */}
      <div className="flex items-center justify-end col-span-3 gap-4 mb-6">
        <select className="px-3 py-2 text-sm border rounded-md">
          <option value="">1st floor</option>
        </select>
        <Button>Add Room</Button>
      </div>

      {/* Room cards */}
      <div className="col-span-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-16">
          <LegendItem color="bg-blue-500" label="Available" />
          <LegendItem color="bg-green-500" label="Reserved" />
          <LegendItem color="bg-red-500" label="Booked" />
        </div>
      </div>
    </div>
  );
}

export default Rooms;

function RoomCard({ room }) {
  const colors = statusColors[room.status] || {
    base: "bg-gray-500",
    hover: "hover:bg-gray-600",
  };

  return (
    <div
      className={`cursor-pointer rounded-2xl p-5 text-white shadow-md ${colors.base} ${colors.hover} transition duration-200 ease-in-out`}
    >
      <div className="mb-1 text-2xl font-semibold text-white">
        Room {room.id}
      </div>
      <div className="text-sm text-white">{room.type}</div>
      <div className="text-sm text-blue-50">{room.capacity}</div>
      <div className="mt-2 text-sm font-medium text-white">{room.price}</div>
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
