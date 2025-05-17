import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArtikelDetail = () => {
    const { id } = useParams();
    const [artikel, setArtikel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtikel = async () => {
            try {
                const response = await axios.get(`https://qwerty.satrio.io/api/articles/${id}`);
                setArtikel(response.data.data);
            } catch (error) {
                console.error("Gagal mengambil detail artikel:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArtikel();
    }, [id]);

    if (loading) return <div className="p-4">Loading...</div>;
    if (!artikel) return <div className="p-4 text-red-600">Artikel tidak ditemukan.</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{artikel.judul}</h1>
            <img
                src={`https://qwerty.satrio.io/storage/${artikel.gambar}`}
                alt={artikel.judul}
                className="w-full h-auto mb-4 rounded"
            />
            <p className="text-gray-700 mb-4">{artikel.bio}</p>
            <p className="text-sm text-gray-500">
                Dipublikasikan pada: {new Date(artikel.created_at).toLocaleDateString()}
            </p>
        </div>
    );
};

export default ArtikelDetail;
