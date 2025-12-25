import { Bell, Search } from "lucide-react";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex gap-4">
        <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
          <Search size={20} className="text-gray-600" />
        </button>
        <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
          افزودن پروژه جدید
        </button>
      </div>
      <Logo />
    </div>
  );
};

export default Header;
