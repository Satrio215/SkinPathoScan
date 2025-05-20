import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#002A6E] text-gray-900">
            {/* Header */}
            <Navbar />

            {/* Main content area */}

            <main
                className="flex-1 "
                style={{
                    background:
                        "linear-gradient(to bottom, #009CE1, #005296, #002A6E)",
                }}
            >
                <div className="w-full text-white">{children}</div>
            </main>

            {/* Footer */}
            <footer className=" text-white text-center">
                <Footer />
            </footer>
        </div>
    );
};

export default DefaultLayout;
