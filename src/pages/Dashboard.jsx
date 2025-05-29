import {
  HiOutlineCalendar,
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import Stat from "../components/Stat";

import { HiOutlineLogout } from "react-icons/hi";
import DurationChart from "../components/DurationChart";
import RoomAvailability from "../components/RoomAvailability";

function Dashboard() {
  return (
    <div className="grid grid-cols-5 gap-6">
      <div className="flex flex-col justify-center col-span-2 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back, User!
        </h2>
        <p className="text-gray-500 text-md">
          Here’s a quick overview of your dashboard.
        </p>
      </div>

      <div className="flex items-center justify-end col-span-3 gap-4 mb-6">
        <div>Lọc theo ngày</div>
      </div>

      {/* Stats Section */}
      <Stat
        title="New Bookings"
        value="840"
        icon={<HiOutlineCalendar className="text-2xl text-blue-500" />}
        color="bg-blue-100"
        percentage={10}
        isGradient={true}
      />
      <Stat
        title="Check-ins"
        value="231"
        icon={<HiOutlineUser className="text-2xl text-yellow-500" />}
        color="bg-yellow-100"
        percentage={12}
      />
      <Stat
        title="Check-outs"
        value="124"
        icon={<HiOutlineLogout className="text-2xl text-teal-500" />}
        color="bg-teal-100"
        percentage={4}
      />
      <Stat
        title="Rooms Available"
        value="32"
        icon={<HiOutlineHome className="text-2xl text-green-500" />}
        color="bg-green-100"
        percentage={-8}
      />
      <Stat
        title="Total Revenue"
        value="$5,000"
        icon={<HiOutlineCurrencyDollar className="text-2xl text-red-500" />}
        color="bg-red-100"
        percentage={10}
      />

      {/* Chart section */}
      <DurationChart />
      {/* <RoomAvailability
        data={{
          occupied: 286,
          reserved: 87,
          available: 32,
          notReady: 13,
        }}
      /> */}
    </div>
  );
}

export default Dashboard;
