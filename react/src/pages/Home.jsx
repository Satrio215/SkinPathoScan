import React, { useState } from "react";
import HeroSection from "../assets/containers/HeroSection";
import ImageAnalyzer from "../assets/containers/ImageAnalyzer";

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
        <div className="min-h-screen bg-gradient-to-b text-white font-sans">
            <div className="max-w-7xl mx-auto p-6">
                <HeroSection />
                <ImageAnalyzer />
            </div>
        </div>
    );
};

export default Home;
