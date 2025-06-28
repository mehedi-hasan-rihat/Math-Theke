import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

export default function Mainlayout() {
    return (
        <div className="">
            <header className="sticky top-0 z-50 text-white">
                <Navbar />
            </header>

            <div className="flex h-[calc(100vh-60px)]">
                <main className="flex-1 overflow-y-auto p-2">
                    <div className="min-h-full">
                        <Outlet />
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}
