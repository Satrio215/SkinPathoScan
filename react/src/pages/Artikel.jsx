import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader2, AlertCircle } from "lucide-react";

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
        <div className="py-12 px-4">
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
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {artikels.map((artikel) => (
                            <div
                                key={artikel.id}
                                className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden"
                            >
                                <img
                                    src={`https://qwerty.satrio.io/public/${artikel.gambar}`}
                                    alt={artikel.judul}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://via.placeholder.com/300x200?text=Gambar+Tidak+Tersedia";
                                    }}
                                    className="w-full md:w-64 h-56 object-cover"
                                />
                                <div className="p-6 flex flex-col justify-between w-full">
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-3 break-words">
                                            {artikel.judul}
                                        </h2>
                                        <p className="text-gray-600 mb-4 line-clamp-4 break-all">
                                            {artikel.bio
                                                ? artikel.bio.slice(0, 200) +
                                                  "..."
                                                : "Tidak ada deskripsi"}
                                        </p>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <Link
                                            to={`/artikel/${artikel.id}`}
                                            className="inline-block px-5 py-2 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition"
                                        >
                                            Selengkapnya
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
