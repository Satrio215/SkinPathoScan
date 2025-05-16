import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#D3D8E8] text-blue-900 px-8 py-8">
            <div className="max-w-6xl mx-auto flex justify-between py-5">
                {/* Left Section */}
                <div>
                    <h1 className="font-bold text-2xl mb-2">SkinPathoScan</h1>
                    <div className="flex flex-col space-y-1 text-sm">
                        <a
                            href="mailto:azraf.aziz@gmail.com"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 12h.01M12 16h.01M8 12h.01M12 12h.01M12 8h.01M4 6h16M4 18h16"
                                />
                            </svg>
                            azraf.aziz@gmail.com
                        </a>
                        <a
                            href="tel:082140429494"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5h2l3.6 7.59a1 1 0 01-.2 1.12l-2.8 2.8a16 16 0 007.49 7.49l2.8-2.8a1 1 0 011.12-.2L19 19v2a1 1 0 01-1 1A16 16 0 013 5z"
                                />
                            </svg>
                            0821-4042-9494
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <a
                        href="#about"
                        className="text-sm hover:underline font-semibold"
                    >
                        About Us
                    </a>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-blue-400 my-4" />

            {/* Footer note */}
            <p className="text-xs font-bold text-blue-900">
                ©2025, Tim Capstone TIF 1 Kelompok 1
            </p>
        </footer>
    );
};

export default Footer;
