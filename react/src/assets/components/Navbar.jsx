import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-[#009CE1] text-white px-4 py-4 md:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Brand */}
                <h1 className="text-2xl font-bold">
                    <Link to="/">SkinPathoScan</Link>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 font-medium">
                    <Link to="/" className="hover:underline">
                        Beranda
                    </Link>

                    {/* Artikel Dropdown */}
                    <div className="relative">
                        <button
                            className="flex items-center hover:underline"
                            onClick={() => setDropdownOpen((prev) => !prev)}
                        >
                            Artikel <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white text-black shadow rounded w-44 z-20">
                                <Link
                                    to="/artikel"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Semua Artikel
                                </Link>
                                <Link
                                    to="/artikel/detail"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Detail Artikel
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="hover:underline">
                        About Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="md:hidden mt-4 flex flex-col space-y-2 font-medium px-1">
                    <Link to="/" className="hover:underline">
                        Beranda
                    </Link>

                    {/* Dropdown pakai details/summary */}
                    <details className="group">
                        <summary className="cursor-pointer hover:underline">
                            Artikel
                        </summary>
                        <div className="ml-4 space-y-1">
                            <Link
                                to="/artikel"
                                className="block hover:underline"
                            >
                                Semua Artikel
                            </Link>
                            <Link
                                to="/artikel/detail"
                                className="block hover:underline"
                            >
                                Detail Artikel
                            </Link>
                        </div>
                    </details>

                    <Link to="/about" className="hover:underline">
                        About Us
                    </Link>
                </nav>
            )}
        </header>
    );
};
export default Navbar;
