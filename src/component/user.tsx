import React from "react";
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const UserMenu: React.FC = () => {
  return (
    <div className="flex items-center space-x-6">
      <button className="flex flex-col items-center text-gray-700 hover:text-gray-900">
        <FiUser className="h-5 w-5" />
        <span className="text-xs mt-1">Profile</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 hover:text-gray-900">
        <FiHeart className="h-5 w-5" />
        <span className="text-xs mt-1">Wishlist</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 hover:text-gray-900">
        <FiShoppingBag className="h-5 w-5" />
        <span className="text-xs mt-1">Bag</span>
      </button>
    </div>
  );
};

export default UserMenu;
