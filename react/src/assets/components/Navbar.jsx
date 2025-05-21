import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#009CE1] text-white px-4 py-4 md:px-8">
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
                    <Link to="/artikel" className="hover:underline">
                        <button className="flex items-center">Artikel</button>
                    </Link>
                    <Link to="/ourteam" className="hover:underline">
                        Our Team
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

            {/* Mobile Navigation with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        key="mobile-nav"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden mt-4 flex flex-col space-y-2 font-medium px-1"
                    >
                        <Link to="/" className="hover:underline">
                            Beranda
                        </Link>
                        <Link to="/artikel">Semua Artikel</Link>
                        <Link to="/ourteam" className="hover:underline">
                            Our Team
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
