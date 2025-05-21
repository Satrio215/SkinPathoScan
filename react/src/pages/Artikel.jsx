import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader2, AlertCircle } from "lucide-react";
import Button from "../assets/components/Button";
import { motion } from "framer-motion";

const Artikel = () => {
    const [artikels, setArtikels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const fetchArticles = async (page = 1) => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://qwerty.satrio.io/api/articles?page=${page}`,
            );
            setArtikels(response.data.data.data);
            setLastPage(response.data.data.last_page);
            setError(null);
        } catch (error) {
            console.error("Gagal mengambil artikel:", error);
            setError("Terjadi kesalahan saat mengambil data artikel");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles(currentPage);
    }, [currentPage]);

    const LoadingState = () => (
        <div className="flex flex-col items-center justify-center p-12 w-full">
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
            <p className="text-lg text-gray-600">Memuat artikel...</p>
        </div>
    );

    const ErrorState = () => (
        <div className="flex flex-col items-center justify-center p-12 bg-red-50 rounded-lg border border-red-200">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-medium text-red-800 mb-2">
                Gagal memuat artikel
            </h3>
            <p className="text-red-600 mb-4">{error}</p>
            <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
                Coba Lagi
            </button>
        </div>
    );

    return (
        <div
            className="min-h-screen py-12 px-4"
            style={{
                backgroundImage: 'url("/bg-kanker.png")',
                backgroundSize: "50%",
                backgroundRepeat: "repeat",
                backgroundPosition: "top left",
            }}
        >
            <div className="max-w-5xl mx-auto mb-10">
                <h1 className="text-4xl font-bold text-white">
                    Artikel SkinPathoScan
                </h1>
            </div>

            {loading ? (
                <LoadingState />
            ) : error ? (
                <ErrorState />
            ) : (
                <>
                    <div className="space-y-12 max-w-7xl mx-auto rounded-3xl">
                        {artikels.map((artikel) => (
                            <motion.div
                                key={artikel.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-6 bg-white px-12 h-full py-12 rounded-3xl"
                            >
                                <img
                                    src={`https://qwerty.satrio.io/public/${artikel.gambar}`}
                                    alt={artikel.judul}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://via.placeholder.com/300x200?text=Gambar+Tidak+Tersedia";
                                    }}
                                    className="w-60 h-60 md:w-[400px] md:h-80 object-cover rounded shrink-0"
                                />
                                <div className="p-4 flex flex-col justify-between w-full overflow-hidden">
                                    <h2 className="text-3xl font-bold text-gray-800 my-4 break-words">
                                        {artikel.judul}
                                    </h2>
                                    <p className="text-gray-600 break-words leading-6 text-base md:hidden">
                                        {artikel.bio
                                            ? artikel.bio.slice(0, 50) +
                                              (artikel.bio.length > 50
                                                  ? "..."
                                                  : "")
                                            : "Tidak ada deskripsi"}
                                    </p>
                                    {/* Desktop: md = >=768px */}
                                    <p className="text-gray-600 break-words leading-6 text-base hidden md:block">
                                        {artikel.bio
                                            ? artikel.bio.slice(0, 300) +
                                              (artikel.bio.length > 300
                                                  ? "..."
                                                  : "")
                                            : "Tidak ada deskripsi"}
                                    </p>{" "}
                                    <div className="mx-auto mt-auto pt-4">
                                        <Link to={`/artikel/${artikel.slug}`}>
                                            <Button>Selengkapnya</Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {lastPage > 1 && (
                        <div className="flex justify-center mt-10 space-x-2">
                            {Array.from(
                                { length: lastPage },
                                (_, i) => i + 1,
                            ).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-4 py-2 rounded-md font-medium ${
                                        page === currentPage
                                            ? "bg-blue-700 text-white"
                                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Artikel;
