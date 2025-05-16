import React from "react";

const HeroSection = () => {
    return (
        <section className="text-white px-4 py-16 md:px-8">
            <div className="grid md:grid-cols-2 items-center gap-10 mb-16">
                <div>
                    <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                        Hello, Welcome to <br />
                        <span className="text-white">SkinPathoScan</span>
                    </h2>
                    <p className="text-lg text-white/90">
                        Membantu Anda mendeteksi kanker kulit sejak dini dengan
                        mudah dan cepat. Cukup unggah foto kulit Anda, dan
                        sistem AI kami akan menganalisisnya secara instan.
                        Didukung oleh dokter kulit profesional, kami hadir untuk
                        memberikan hasil yang akurat dan aman. Deteksi dini,
                        selamatkan lebih banyak.
                    </p>
                </div>
                <div>
                    <img
                        src="/home.png"
                        alt="Skin Analysis Illustration"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
