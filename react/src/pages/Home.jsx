import React, { useState } from "react";
import HeroSection from "../assets/containers/HeroSection";
import ImageAnalyzer from "../assets/containers/ImageAnalyzer";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b text-white font-sans">
            <div className="max-w-7xl mx-auto p-6">
                <HeroSection />
                <ImageAnalyzer />
            </div>
        </div>
    );
};

export default Home;
