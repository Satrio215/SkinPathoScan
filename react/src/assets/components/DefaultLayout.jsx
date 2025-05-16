import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <header>
                <Navbar />
            </header>

            {/* Main content area */}

            <main
                className="flex-1 px-4 py-8 md:px-8"
                style={{
                    background: "linear-gradient(to bottom, #009CE1, #006BA1)",
                }}
            >
                <div className="max-w-7xl mx-auto w-full text-white">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className=" text-white text-center">
                <Footer />
            </footer>
        </div>
    );
};

export default DefaultLayout;
