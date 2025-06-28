import React from "react";
import { Menu, Search, User } from "lucide-react";

export default function Navbar() {
    return (
        <nav className=" bg-white shadow-md px-4 py-2">
            <div className="max-w-[1580px] mx-auto  flex items-center justify-between">
                {/* Left Section: Menu Icon + Logo */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-md hover:bg-gray-100">
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="text-xl font-semibold text-gray-800">
                        MyApp
                    </span>
                </div>
                {/* Middle Section: Search Bar */}
                <div className="hidden md:flex flex-1 mx-4">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                    </div>
                </div>
                {/* Right Section: Profile Icon */}
                <div>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <User className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
