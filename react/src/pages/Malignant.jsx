import React from "react";
import { motion } from "framer-motion";

const Malignant = () => {
    return (
        <div className="text-white px-4 md:px-8 py-10 max-w-7xl mx-auto">
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-center"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                Kanker Kulit (Jinak)
            </motion.h1>

            <p className="text white">
                Semua kanker jinak umumnya berdiferensiasi baik. Sebagai contoh
                kanker jinak otot polos yaitu leiomioma uteri. Sel tumornya
                menyerupai sel otot polos. Demikian pula lipoma yaitu kanker
                jinak berasal dari jaringan lemak, sel tumornya terdiri atas sel
                lemak matur,menyerupai sel jaringan lemak normal.
            </p>

            <p className="text-white">
                kanker jinak biasanya tumbuh lambat sedangkan tumor ganas cepat.
                Tetapi derajat kecepatan tumbuh tumor jinak tidak tetap,kadang –
                kadang tumor jinak tumbuh lebih cepat daripada tumor ganas.
                Karena tergantung pada hormone yang mempengaruhi dan adanya
                penyediaan darah yang memadai. Pada dasarnya derajat pertumbuhan
                tumor berkaitan dengan tingkat diferensiasi sehingga kebanyakan
                tumor ganas tumbuh lebih cepat daripada tumor jinak.
            </p>

            <div>
                <p>Moluskum Kontagiosium</p>

                <p>
                    Moluskum kontagiosum adalah infeksi kulit menular yang
                    disebabkan oleh virus Molluscum contagiosum. Penyakit ini
                    umumnya menyerang anak-anak dan ditandai dengan benjolan
                    kecil berbentuk bulat dengan lekukan di tengah. Lesi bisa
                    menyebar melalui kontak langsung atau benda yang
                    terkontaminasi. Meskipun bisa menyebabkan gatal, penyakit
                    ini biasanya tidak berbahaya dan dapat sembuh sendiri dalam
                    6–12 bulan tanpa pengobatan.
                </p>
            </div>
            <motion.div
                className="my-20 flex justify-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            >
                <img
                    src="/about.webp"
                    alt="About our team"
                    className="w-full max-w-4xl h-auto rounded-xl shadow-xl object-cover my-40"
                />
            </motion.div>
        </div>
    );
};

export default Malignant;
