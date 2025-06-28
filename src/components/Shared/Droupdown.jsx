import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ label = "Menu", items = [] }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
            >
                {label}
                <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            {open && (
                <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="py-1 text-sm text-gray-700">
                        {items.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={item.onClick}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

//----------------//
/// USE CASE ///
//---------------//

// const menuItems = [
//     { label: "Profile", onClick: () => alert("Profile clicked") },
//     { label: "Settings", onClick: () => alert("Settings clicked") },
//     { label: "Logout", onClick: () => alert("Logging out") },
// ];
// <div className="m-10">
//     <Dropdown label="User Menu" items={menuItems} />
// </div>;
