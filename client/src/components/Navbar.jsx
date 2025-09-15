// import { House } from "lucide-react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import {
  HomeLogo,
  VideoLogo,
  MarketplaceLogo,
  GroupLogo,
  GameLogo,
  Grid,
  Messenger,
  Bell,
} from "./Logo";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Dropdown01 from "./Dropdown01";

export default function FacebookNavbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <header className="w-full h-14 bg-white shadow flex items-center justify-center z-50 px-4">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-2 absolute left-4">
        <div>
          <IoLogoFacebook size={45} className="text-blue-600" />
        </div>
        <div className="bg-gray-100 px-2 py-2.5 rounded-full focus:outline-none text-sm w-60 flex items-center">
          <span className="text-gray-500 mr-2">
            <FaSearch size={16} />
          </span>

          <input
            type="text"
            placeholder="Search Facebook"
            className="text-md outline-none bg-transparent w-full"
          />
        </div>
      </div>

      {/* Center: Navigation Icons */}
      <nav className="flex items-center gap-15 text-gray-500 w-130 justify-between ">
        <button className="p-2">
          <HomeLogo className=" h-6" />
        </button>
        <button className="p-2">
          <VideoLogo className=" h-6" />
        </button>
        <button className="p-2">
          <MarketplaceLogo className=" h-6" />
        </button>
        <button className="p-2">
          <GroupLogo className=" h-6" />
        </button>
        <button className="p-2">
          <GameLogo className=" h-6" />
        </button>
      </nav>

      {/* Right: Menu + Notifications + Profile */}
      <div className="flex items-center gap-3 absolute right-4">
        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
          <Grid size={20} />
        </div>
        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
          <Messenger size={20} />
        </div>
        <div className="relative w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
          <div>
            <Bell size={20} />
          </div>
          <span className="absolute top-[-6px] right-[-10px] bg-red-600 text-white text-xs px-1.5 rounded-full">
            12
          </span>
        </div>
        <div className="relative">
          <div onClick={toggleProfile} className="relative w-9 h-9">
            <FaUserCircle className="w-full h-full text-gray-400" />
            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-sm border border-gray-200">
              <FaChevronDown className="text-gray-600 text-[8px]" />
            </div>
          </div>
          {openProfile && (
            <div className="absolute z-50 right-0">
              <Dropdown01 />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
