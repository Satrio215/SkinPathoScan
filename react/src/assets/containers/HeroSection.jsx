import React from "react";

const HeroSection = () => {
    return (
        <section className="text-white px-4 py-16 md:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Hello, Welcome to <br />
                        <span className="text-white">SkinPathoScan</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                        Membantu Anda mendeteksi kanker kulit sejak dini dengan
                        mudah dan cepat. Cukup unggah foto kulit Anda, dan
                        sistem AI kami akan menganalisisnya secara instan.
                        Didukung oleh dokter kulit profesional, kami hadir untuk
                        memberikan hasil yang akurat dan aman.
                        <br className="hidden md:block" />
                        <strong>Deteksi dini, selamatkan lebih banyak.</strong>
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src="/home.png"
                        alt="Skin Analysis Illustration"
                        className="w-full max-w-sm md:max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
