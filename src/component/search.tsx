import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC = () => {
  return (
    <div className="relative flex-1 max-w-xl">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-sm border border-gray-200 focus:outline-none focus:border-gray-300 text-sm"
        />
      </div>
    </div>
  );
};

export default SearchBar;
