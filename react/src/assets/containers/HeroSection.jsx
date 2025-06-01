import React from "react";

const HeroSection = () => {
    return (
        <section className="text-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Hello, Welcome to <br />
                        <span className="text-white">SkinPathoScan Automasi</span>
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
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/home.png"
                        alt="Skin Analysis Illustration"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
