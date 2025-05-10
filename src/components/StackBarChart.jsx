import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const StackBarChart = ({ data }) => {
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
    <ResponsiveContainer width="100%" height={30}>
      <BarChart data={chartData} layout="vertical" stackOffset="expand">
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />
        <Tooltip />
        <Bar dataKey="Occupied" stackId="a" fill="#3B82F6" />
        <Bar dataKey="Reserved" stackId="a" fill="#60A5FA" />
        <Bar dataKey="Available" stackId="a" fill="#BFDBFE" />
        <Bar dataKey="NotReady" stackId="a" fill="#E5E7EB" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackBarChart;
