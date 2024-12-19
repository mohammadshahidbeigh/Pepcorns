import React from "react";
import SearchBar from "./search";
import UserMenu from "./user";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8 mr-8">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          <div className="hidden md:flex space-x-6">
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
              MEN
            </button>
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
              WOMEN
            </button>
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
              KIDS
            </button>
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
              HOME & LIVING
            </button>
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
              BEAUTY
            </button>
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
              STUDIO<span className="ml-1 text-xs text-pink-500">NEW</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 flex-1 justify-center max-w-2xl mr-8">
          <SearchBar />
        </div>

        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
