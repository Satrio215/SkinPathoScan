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
        }
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
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
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
        style={{ backgroundImage: "url('/bg-kanker.png')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Tipe - Tipe Kanker Kulit
        </h2>
        <p className="text-base md:text-lg text-center mb-8 text-white">
            Membantu Anda memahami dan berkomunikasi dengan pengguna bahasa isyarat.
        </p>

        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center gap-8">
            {[1, 2].map((_, index) => (
                <motion.div
                key={index}
                className="flex flex-col bg-white text-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] w-full lg:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                <div className="w-full aspect-square rounded-xl mb-4 overflow-hidden bg-gray-200">
                    <img
                    src={index === 0 ? "/ganas.png" : "/tidak-ganas.png"}
                    alt={index === 0 ? "Kanker Kulit Ganas" : "Kanker Kulit Tidak Ganas"}
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-between pb-4">
                    <h3 className="text-center text-2xl font-semibold mb-2">
                        {index === 0
                        ? "Kenali kanker kulit ganas"
                        : "Kenali kanker kulit tidak ganas"}
                    </h3>
                        <Link
                        to={index === 0 ? "/ganas" : "/tidak-ganas"}
                        className="bg-[#043d7a] text-white font-semibold px-4 py-2 rounded-lg w-full text-center"
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
        className="py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
          Pemeriksa Kanker Kulit Dengan AI
        </h2>
        {[1, 2].map((_, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-lg mb-8 max-w-4xl mx-auto text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="w-full h-2 bg-gray-300 rounded mb-4" />
            <h4 className="font-semibold mb-2">
              {index === 0 ? "Keadaan Terkini" : "Jenis AI"}
            </h4>
            <p className="text-sm">
              {index === 0
                ? "Dalam dunia medis, deteksi dini kanker kulit merupakan salah satu faktor krusial dalam meningkatkan tingkat kesembuhan pasien. Namun, kenyataannya, proses diagnosis konvensional masih menghadapi berbagai kendala seperti prosedur yang invasif, biaya yang tinggi, serta waktu tunggu yang lama. Di sisi lain, masyarakat awam sering kali kesulitan mengenali gejala awal kanker kulit karena keterbatasan akses terhadap informasi dan tenaga medis, terutama di wilayah terpencil."
                : "Jenis AI yang digunakan adalah supervised learning dengan algoritma klasifikasi seperti SVM, KNN, dan Naive Bayes. Dataset yang dipakai berasal dari ISIC, berisi citra lesi kulit yang sudah dilabeli. Ekstraksi fitur dilakukan dengan metode ABCD, GLCM, dan HOG untuk mendukung proses klasifikasi dan meningkatkan akurasi deteksi kanker kulit."}
            </p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Home;
