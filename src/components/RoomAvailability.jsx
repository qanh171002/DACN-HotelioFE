import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const RoomAvailability = ({ data }) => {
  const chartData = [
    {
      name: "Room",
      Occupied: data.occupied,
      Reserved: data.reserved,
      Available: data.available,
      NotReady: data.notReady,
    },
  ];

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-even">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Room Availability</h1>
        <button className="text-gray-400 hover:text-gray-600">⋯</button>
      </div>

      <ResponsiveContainer width="100%" height={30}>
        <BarChart data={chartData} layout="vertical" stackOffset="expand">
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          radius={[0, 10, 10, 0]}
          <Bar
            dataKey="Occupied"
            stackId="a"
            fill="#3B82F6"
            radius={[10, 0, 0, 10]}
          />
          <Bar dataKey="Reserved" stackId="a" fill="#60A5FA" />
          <Bar dataKey="Available" stackId="a" fill="#BFDBFE" />
          <Bar
            dataKey="NotReady"
            stackId="a"
            fill="#ccd3e4"
            radius={[0, 10, 10, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Details Grid */}
      <div className="grid grid-cols-2 mt-6 text-base gap-x-6 gap-y-4">
        <div className="flex items-start gap-2">
          <div className="w-1 h-5 bg-blue-500 rounded" />
          <div>
            <p className="text-gray-500">Occupied</p>
            <p className="text-lg font-semibold">{data.occupied}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="w-1 h-5 bg-blue-300 rounded" />
          <div>
            <p className="text-gray-500">Reserved</p>
            <p className="text-lg font-semibold">{data.reserved}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="w-1 h-5 bg-blue-100 rounded" />
          <div>
            <p className="text-gray-500">Available</p>
            <p className="text-lg font-semibold">{data.available}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="w-1 h-5 bg-gray-300 rounded" />
          <div>
            <p className="text-gray-500">Not Ready</p>
            <p className="text-lg font-semibold">{data.notReady}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomAvailability;
