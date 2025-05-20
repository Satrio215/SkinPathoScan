import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../assets/containers/HeroSection";
import ImageAnalyzer from "../assets/containers/ImageAnalyzer";
import { Link } from "react-router-dom";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setResult(null);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        if (!image) return;
        const formData = new FormData();
        formData.append("file", image);
        setLoading(true);
        setResult(null);
        try {
            const response = await fetch(
                "https://azrafazizz-skincancer-fastapi.hf.space/v2/predict/",
                {
                    method: "POST",
                    body: formData,
                },
            );
            if (!response.ok) throw new Error("Upload gagal");
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error(error);
            setResult({ error: "Gagal memproses gambar" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: 'url("/bg-kanker.png")',
                backgroundSize: "50%",
                backgroundRepeat: "repeat",
                backgroundPosition: "top left",
            }}
        >
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <HeroSection />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <ImageAnalyzer
                    image={image}
                    preview={preview}
                    result={result}
                    loading={loading}
                    handleFileChange={handleFileChange}
                    handleSubmit={handleSubmit}
                />
            </motion.div>

            <motion.section
                className="py-12 md:pt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
                    Tipe - Tipe Kanker Kulit
                </h2>
                <p className="text-base md:text-lg text-center mb-8 text-white">
                    Membantu anda memahami kanker kulit
                </p>

                <div className="max-w-6xl mx-auto px-4 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        {[1, 2].map((_, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col bg-white text-black p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-md "
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.6,
                                }}
                            >
                                <div className="w-full aspect-square flex items-center justify-center rounded-xl mb-4 overflow-hidden bg-gray-200">
                                    <img
                                        src={
                                            index === 0
                                                ? "/ganas.png"
                                                : "/tidak-ganas.png"
                                        }
                                        alt={
                                            index === 0
                                                ? "Kanker Kulit Ganas"
                                                : "Kanker Kulit Tidak Ganas"
                                        }
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                <div className="flex flex-col justify-between pb-2">
                                    <h3 className="text-center text-lg font-semibold mb-2">
                                        {index === 0
                                            ? "Kenali kanker kulit ganas"
                                            : "Kenali kanker kulit tidak ganas"}
                                    </h3>
                                    <Link
                                        to={
                                            index === 0
                                                ? "/ganas"
                                                : "/tidak-ganas"
                                        }
                                        className="bg-[#043d7a] text-white font-semibold px-4 py-2 rounded-lg text-center"
                                    >
                                        Pelajari lebih lanjut
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-12 px-6 md:py-20 md:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
                    Pemeriksa Kanker <br /> Kulit Dengan AI
                </h2>

                {[1, 2].map((_, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 md:p-10 rounded-2xl shadow-lg mb-10 w-full max-w-5xl mx-auto text-black"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        {/* Gambar */}
                        <div className="w-full mb-6 rounded-xl overflow-hidden">
                            <img
                                src={
                                    index === 0
                                        ? "/keadaan.png"
                                        : "/algoritma.png"
                                }
                                alt={
                                    index === 0
                                        ? "Pita Kesadaran Kanker"
                                        : "Algoritma CNN"
                                }
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Judul dan Paragraf */}
                        <h4 className="text-xl md:text-2xl font-semibold mb-3">
                            {index === 0 ? "Keadaan Terkini" : "Algoritma AI"}
                        </h4>
                        <p className="text-base md:text-xl leading-relaxed text-justify">
                            {index === 0
                                ? "Dalam dunia medis, deteksi dini kanker kulit merupakan salah satu faktor krusial dalam meningkatkan tingkat kesembuhan pasien. Namun, kenyataannya, proses diagnosis konvensional masih menghadapi berbagai kendala seperti prosedur yang invasif, biaya yang tinggi, serta waktu tunggu yang lama. Di sisi lain, masyarakat awam sering kali kesulitan mengenali gejala awal kanker kulit karena keterbatasan akses terhadap informasi dan tenaga medis, terutama di wilayah terpencil."
                                : "Algoritma AI yang digunakan adalah CNN. Algoritma Convolutional Neural Network (CNN) dipilih karena kemampuannya yang unggul dalam mengenali pola visual dari gambar."}
                        </p>
                    </motion.div>
                ))}
            </motion.section>
        </div>
    );
};

export default Home;
