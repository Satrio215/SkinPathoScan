import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="flex justify-between items-center p-6 bg-gray-800">
            <h1 className="text-3xl font-bold text-white">SkinPathoScan</h1>
            <nav className="space-x-6 text-white font-medium hidden md:flex">
                <a href="#" className="hover:underline">
                    Beranda
                </a>
                <a href="#" className="hover:underline">
                    Artikel
                </a>
                <a href="#" className="hover:underline">
                    About Us
                </a>
            </nav>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
                {isMenuOpen ? "✖" : "☰"}
            </button>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="absolute top-16 right-0 left-0 bg-gray-800 p-6 space-y-4 md:hidden">
                    <a href="#" className="block text-white hover:underline">
                        Beranda
                    </a>
                    <a href="#" className="block text-white hover:underline">
                        Artikel
                    </a>
                    <a href="#" className="block text-white hover:underline">
                        About Us
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
