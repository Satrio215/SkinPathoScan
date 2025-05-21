import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div
            className="text-white px-4 md:px-8"
            style={{
                backgroundImage: 'url("/bg-kanker.png")',
                backgroundSize: "50%",
                backgroundRepeat: "repeat",
                backgroundPosition: "top left",
            }}
        >
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-center pt-20"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                OUR TEAM
            </motion.h1>

            <motion.div
                className=" flex justify-center mx-auto"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            >
                <img
                    src="/about.webp"
                    alt="About our team"
                    className="w-full max-w-4xl h-auto rounded-xl shadow-xl object-cover mb-10 mt-20 md:mb-60"
                />
            </motion.div>
        </div>
    );
};

export default AboutUs;
