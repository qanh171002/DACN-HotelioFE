import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineUsers,
  HiOutlineHomeModern,
  HiOutlineCog6Tooth,
  HiOutlineInboxStack,
} from "react-icons/hi2";
import { HiOutlineCash } from "react-icons/hi";

function Sidebar() {
  return (
    <aside className="relative z-10 flex flex-col w-64 h-full bg-white shadow-even">
      <div className="flex items-center justify-center">
        <h2 className="p-6 text-2xl font-bold text-blue-500">Hotelio</h2>
      </div>
      <nav className="flex flex-col p-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `my-2 flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-100 ease-in-out ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <HiOutlineHome className="mr-3 text-2xl" />
          Dashboard
        </NavLink>

        <NavLink
          to="/accounts"
          className={({ isActive }) =>
            `my-2 flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-100 ease-in-out ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <HiOutlineUsers className="mr-3 text-2xl" />
          Accounts
        </NavLink>

        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            `my-2 flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-100 ease-in-out ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <HiOutlineHomeModern className="mr-3 text-2xl" />
          Rooms
        </NavLink>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `my-2 flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-100 ease-in-out ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <HiOutlineCalendarDays className="mr-3 text-2xl" />
          Bookings
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            `my-2 flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-100 ease-in-out ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <HiOutlineInboxStack className="mr-3 text-2xl" />
          Properties
        </NavLink>
        <NavLink
          to="/invoices"
          className={({ isActive }) =>
            `my-2 flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-100 ease-in-out ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <HiOutlineCash className="mr-3 text-2xl" />
          Invoices
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `my-2 flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-100 ease-in-out ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <HiOutlineCog6Tooth className="mr-3 text-2xl" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
