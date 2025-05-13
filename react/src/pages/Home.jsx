import React, { useState } from "react";

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
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white font-sans">
            <div className="max-w-7xl mx-auto p-6">
                <header className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold">SkinPathoScan</h1>
                    <nav className="space-x-6 text-white font-medium">
                        <a href="#" className="hover:underline">
                            Beranda
                        </a>
                        <a href="#" className="hover:underline">
                            Artikel
                        </a>
                        <a href="#" className="hover:underline">
                            About Us
                        </a>
                    </nav>
                </header>

                <div className="grid md:grid-cols-2 items-center gap-10 mb-16">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                            Hello, Welcome to <br />{" "}
                            <span className="text-white">SkinPathoScan</span>
                        </h2>
                        <p className="text-lg text-white/90">
                            Membantu Anda mendeteksi kanker kulit sejak dini
                            dengan mudah dan cepat. Cukup unggah foto kulit
                            Anda, dan sistem AI kami akan menganalisisnya secara
                            instan. Didukung oleh dokter kulit profesional, kami
                            hadir untuk memberikan hasil yang akurat dan aman.
                            Deteksi dini, selamatkan lebih banyak.
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

                <div className="bg-white rounded-3xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl p-6">
                        {!preview ? (
                            <label className="text-center cursor-pointer">
                                <div className="text-gray-400 text-2xl mb-2">
                                    ↑
                                </div>
                                <p className="text-gray-600">
                                    Drop Image Here
                                    <br />
                                    ~or~
                                    <br />
                                    Click to Upload
                                </p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        ) : (
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-64 object-cover rounded-xl border"
                            />
                        )}
                        {preview && (
                            <button
                                onClick={() => {
                                    setPreview(null);
                                    setImage(null);
                                    setResult(null);
                                }}
                                className="mt-4 text-sm text-red-500 hover:underline"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    <div>
                        {result && (
                            <div className="mt-6 p-6 bg-gray-50 border rounded-2xl text-left">
                                <h2 className="font-semibold text-gray-700 text-lg mb-4">
                                    Hasil Analisis:
                                </h2>

                                {/* Malignant */}
                                <div className="mb-4">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-700 font-medium">
                                            Malignant (Ganas)
                                        </span>
                                        <span className="text-sm text-gray-700 font-semibold">
                                            {(
                                                result.predictions?.Malignant *
                                                100
                                            ).toFixed(2)}
                                            %
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-red-500 transition-all duration-500 ease-in-out"
                                            style={{
                                                width: `${(result.predictions?.Malignant * 100).toFixed(2)}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Benign */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-700 font-medium">
                                            Benign (Jinak)
                                        </span>
                                        <span className="text-sm text-gray-700 font-semibold">
                                            {(
                                                result.predictions?.Benign * 100
                                            ).toFixed(2)}
                                            %
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-green-500 transition-all duration-500 ease-in-out"
                                            style={{
                                                width: `${(result.predictions?.Benign * 100).toFixed(2)}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={loading || !image}
                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
