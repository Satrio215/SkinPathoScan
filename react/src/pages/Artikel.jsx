import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Artikel = () => {
    const [artikels, setArtikels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("https://qwerty.satrio.io/api/articles");
                setArtikels(response.data.data.data); // ambil array artikel dari nested data
            } catch (error) {
                console.error("Gagal mengambil artikel:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <div className="p-4">Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Daftar Artikel</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artikels.map((artikel) => (
                    <div
                        key={artikel.id}
                        className="bg-white rounded shadow p-4 hover:shadow-lg transition"
                    >
                        <img
                            src={`https://qwerty.satrio.io/storage/${artikel.gambar}`}
                            alt={artikel.judul}
                            className="w-full h-48 object-cover rounded mb-3"
                        />
                        <h2 className="text-xl font-semibold mb-2">{artikel.judul}</h2>
                        <p className="text-gray-600 mb-3">{artikel.bio.slice(0, 80)}...</p>
                        <Link
                            to={`/artikel/${artikel.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            Baca Selengkapnya
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artikel;
