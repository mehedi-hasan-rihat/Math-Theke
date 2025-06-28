import {
    Salad,
    Apple,
    EggFried,
    Drumstick,
    Wheat,
    Flame,
    Droplet,
    CupSoda,
    Croissant,
    Baby,
    HeartPulse,
    SprayCan,
    PawPrint,
    ChevronRight,
} from "lucide-react";

const categories = [
    {
        name: "Fresh Vegetables",
        icon: <Salad size={20} />,
        subcategories: [
            { name: "Organic Vegetables", type: "authentic" },
            { name: "Bazaar Vegetables", type: "normal" },
        ],
    },
    {
        name: "Fresh Fruits",
        icon: <Apple size={20} />,
        subcategories: [
            { name: "Organic Fruits", type: "authentic" },
            { name: "Regular Fruits", type: "normal" },
        ],
    },
    {
        name: "Dairy & Eggs",
        icon: <EggFried size={20} />,
        subcategories: [
            { name: "Farm Fresh Dairy", type: "authentic" },
            { name: "Packaged Dairy", type: "normal" },
        ],
    },
    {
        name: "Meat & Fish",
        icon: <Drumstick size={20} />,
        subcategories: [
            { name: "Grass-fed Meat", type: "authentic" },
            { name: "Regular Market Meat", type: "normal" },
        ],
    },
    {
        name: "Grains & Pulses",
        icon: <Wheat size={20} />,
        subcategories: [
            { name: "Organic Pulses", type: "authentic" },
            { name: "Bazaar Pulses", type: "normal" },
        ],
    },
    {
        name: "Spices & Masalas",
        icon: <Flame size={20} />,
        subcategories: [
            { name: "Handmade Masalas", type: "authentic" },
            { name: "Commercial Spices", type: "normal" },
        ],
    },
    {
        name: "Edible Oils & Ghee",
        icon: <Droplet size={20} />,
        subcategories: [
            { name: "Cold-Pressed Oils", type: "authentic" },
            { name: "Refined Oils", type: "normal" },
        ],
    },
    {
        name: "Snacks & Beverages",
        icon: <CupSoda size={20} />,
        subcategories: [
            { name: "Handmade Snacks", type: "authentic" },
            { name: "Packaged Snacks", type: "normal" },
        ],
    },
    {
        name: "Bakery & Breads",
        icon: <Croissant size={20} />,
        subcategories: [
            { name: "Sourdough & Artisanal", type: "authentic" },
            { name: "Regular Bakery", type: "normal" },
        ],
    },
    {
        name: "Home Cleaning",
        icon: <SprayCan size={20} />,
        subcategories: [
            { name: "Eco-Friendly Cleaners", type: "authentic" },
            { name: "Standard Cleaners", type: "normal" },
        ],
    },
];

export default function CategoryMenu() {
    return (
        <div className="w-60 bg-white shadow p-4 hidden lg:block rounded-lg">
            <ul className="space-y-4">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between cursor-pointer hover:text-[#F37A16] group"
                    >
                        <div className="flex items-center space-x-2">
                            {category.icon}
                            <span className="text-sm font-medium">
                                {category.name}
                            </span>
                        </div>
                        <span className="text-gray-400 group-hover:text-[#F37A16]">
                            <ChevronRight />
                        </span>
                    </li>
                ))}

                {/* {categories.map((cat) => (
                    <div key={cat.name}>
                        <h3 className="flex items-center gap-2">
                            {cat.icon} {cat.name}
                        </h3>
                        <ul>
                            {cat.subcategories.map((sub) => (
                                <li key={sub.name} className="pl-6 text-sm">
                                    {sub.name}{" "}
                                    <span className="text-xs text-gray-500">
                                        ({sub.type})
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))} */}
            </ul>
        </div>
    );
}
