import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArtikelDetail = () => {
    const { slug } = useParams();
    const [artikel, setArtikel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtikel = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://qwerty.satrio.io/api/articles/${slug}`,
                );
                setArtikel(response.data.data);
            } catch (error) {
                console.error("Gagal mengambil detail artikel:", error);
                setError(
                    error.response?.status === 404
                        ? "Artikel tidak ditemukan."
                        : "Terjadi kesalahan saat memuat artikel. Silakan coba lagi nanti.",
                );
            } finally {
                setLoading(false);
            }
        };

        fetchArtikel();
    }, [slug]);

    // Render content with paragraph breaks
    const renderContent = (content) => {
        if (!content) return null;

        return content.split("\n").map((paragraph, index) =>
            paragraph ? (
                <p key={index} className="mb-4 break-words break-all">
                    {paragraph}
                </p>
            ) : (
                <br key={index} />
            ),
        );
    };

    if (loading) {
        return (
            <div className="p-8 flex justify-center items-center">
                <div className="spinner w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8">
                <h1 className="text-4xl font-bold mb-8">Error</h1>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!artikel) return null;

    return (
        <div>
            {/* Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 break-words">
                    {artikel.judul || "Artikel"}
                </h1>

                {/* Image Container */}
                <div className="bg-white rounded-lg overflow-hidden mb-12 shadow-lg">
                    {artikel.gambar ? (
                        <img
                            src={`https://qwerty.satrio.io/public/${artikel.gambar}`}
                            alt={artikel.judul}
                            className="w-full h-auto object-cover"
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.style.background =
                                    "repeating-conic-gradient(#f3f4f6 0% 25%, #ffffff 0% 50%) 50% / 40px 40px";
                                e.target.parentElement.style.minHeight =
                                    "300px";
                            }}
                        />
                    ) : (
                        <div
                            className="w-full"
                            style={{
                                background:
                                    "repeating-conic-gradient(#f3f4f6 0% 25%, #ffffff 0% 50%) 50% / 40px 40px",
                                minHeight: "300px",
                            }}
                        ></div>
                    )}
                </div>

                {/* Content */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 break-words">
                        {artikel.judul}
                    </h2>

                    <div className="prose prose-lg max-w-none break-words break-all">
                        {artikel.bio &&
                            artikel.bio.split(/\r?\n/).map((line, index) =>
                                line ? (
                                    <p
                                        key={index}
                                        className="mb-2 break-words break-all"
                                    >
                                        {line}
                                    </p>
                                ) : (
                                    <br key={index} />
                                ),
                            )}
                        {renderContent(artikel.konten)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtikelDetail;
