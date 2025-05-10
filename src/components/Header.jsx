import { HiMagnifyingGlass } from "react-icons/hi2";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";

function Header() {
  return (
    <header className="shadow-even flex items-center justify-between bg-white px-10 py-4">
      <div className="flex w-full max-w-sm items-center gap-2">
        <HiMagnifyingGlass className="text-2xl text-gray-700" />
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md border border-gray-300 p-2 text-sm transition-all duration-100 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
      </div>
      <div className="flex items-center gap-6">
        <HeaderMenu />
        <UserAvatar />
      </div>
    </header>
  );
}

export default Header;
