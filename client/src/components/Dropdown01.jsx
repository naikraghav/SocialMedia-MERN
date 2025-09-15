import React from "react";
import {
  FaUserCircle,
  FaCog,
  FaQuestionCircle,
  FaMoon,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";

const Dropdown01 = () => {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] w-90 p-3 mt-2">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] px-5 ">
        <div className="flex items-center py-3 rounded-lg hover:bg-gray-100 cursor-pointer ">
          <FaUserCircle className="text-gray-400 text-4xl mr-3" />
          <span className="text-lg font-semibold text-black">Raghav Naik</span>
        </div>
        <div className="border-t-2 border-gray-400 my-1 "></div>

        {/* "See all profiles" button */}
        <div className="py-2 mb-2">
          <button className="flex items-center justify-center w-full px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300">
            <FaUserCircle className="mr-2" />
            See all profiles
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="space-y-1">
        <li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center">
            <FaCog className="text-black text-xl mr-3" />
            <span className="text-black">Settings & privacy</span>
          </div>
          <svg
            className="w-4 h-4 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center">
            <FaQuestionCircle className="text-black text-xl mr-3" />
            <span className="text-black">Help & support</span>
          </div>
          <svg
            className="w-4 h-4 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center">
            <FaMoon className="text-black text-xl mr-3" />
            <span className="text-black">Display & accessibility</span>
          </div>
          <svg
            className="w-4 h-4 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FaCommentDots className="text-black text-xl mr-3" />
          <div className="flex flex-col">
            <span className="text-black">Give feedback</span>
            <span className="text-black text-xs mt-0.5">CTRL B</span>
          </div>
        </li>
        <li className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FaSignOutAlt className="text-black text-xl mr-3" />
          <span className="text-black">Log Out</span>
        </li>
      </ul>

      {/* Footer */}
      <div className="border-t border-gray-200 mt-2 pt-2 text-xs text-gray-500">
        <a href="#" className="hover:underline mr-1">
          Privacy
        </a>
        <a href="#" className="hover:underline mr-1">
          · Terms
        </a>
        <a href="#" className="hover:underline mr-1">
          · Advertising
        </a>
        <a href="#" className="hover:underline mr-1">
          · Ad Choices
        </a>
        <span className="mr-1">
          <svg
            className="w-3 h-3 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a4 4 0 118 0 4 4 0 01-8 0z" />
          </svg>
        </span>
        <a href="#" className="hover:underline mr-1">
          Cookies
        </a>
        <a href="#" className="hover:underline mr-1">
          · More
        </a>
      </div>
    </div>
  );
};

export default Dropdown01;
