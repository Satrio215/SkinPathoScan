import React from "react";
import Navbar from "./Navbar";

const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <header>
                <Navbar />
            </header>

            {/* Main content area */}
            <main className="flex-1 px-4 py-8 md:px-8 bg-blue-600">
                <div className="max-w-7xl mx-auto w-full">{children}</div>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white text-center py-4">
                <div className="max-w-7xl mx-auto">
                    &copy; {new Date().getFullYear()} SkinPathoScan. All rights
                    reserved.
                </div>
            </footer>
        </div>
    );
};

export default DefaultLayout;
