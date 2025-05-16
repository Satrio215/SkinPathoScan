import React, { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";

const ImageAnalyzer = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const gajahRef = useRef(null);
    const [showGajah, setShowGajah] = useState(true);
    const [bubbleMessage, setBubbleMessage] = useState(
        "Silakan unggah gambar kulit Anda",
    );
    const [showBubble, setShowBubble] = useState(true);

    const animasiGajahTerbang = () => {
        if (!gajahRef.current) return Promise.resolve();

        const tl = gsap.timeline();

        tl.to(gajahRef.current, {
            y: -300, // terbang lebih tinggi
            duration: 2,
            ease: "power1.out",
        })
            .to(
                gajahRef.current,
                {
                    x: "-=20", // goyang ke kiri
                    duration: 0.3,
                    yoyo: true,
                    repeat: 5, // bolak-balik 5 kali
                    ease: "sine.inOut",
                },
                "-=1.5", // mulai goyang saat gajah masih terbang (offset overlap animasi)
            )
            .to(gajahRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
                onComplete: () => {
                    setShowGajah(false);
                    // reset posisi gajah biar siap muncul lagi
                    gsap.set(gajahRef.current, { x: 0, y: 0, opacity: 1 });
                },
            });

        return tl.then ? tl.then() : Promise.resolve();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
            setBubbleMessage("Klik tombol Submit untuk deteksi kulit Anda!");
            setShowBubble(true); // Pastikan bubble tetap tampil setelah upload
        }
    };

    const handleSubmit = async () => {
        if (!image) return;
        setLoading(true);

        setShowBubble(false); // Sembunyikan bubble saat submit
        await animasiGajahTerbang();
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

    const handleClear = async () => {
        setPreview(null);
        setResult(null);
        setLoading(false);
        setShowGajah(true);
        setShowBubble(true); // Sembunyikan bubble saat submit
        setBubbleMessage("Silakan unggah gambar kulit Anda");
    };
    return (
        <>
            <h2 className="text-2xl md:text-4xl font-bold text-center p-4">
                Deteksi Kanker Kulit
            </h2>
            <p className="text-base md:text-xl text-center p-4 pb-8 md:pb-10">
                Silakan unggah foto kulit yang ingin Anda periksa
            </p>

            <div className="bg-white rounded-3xl shadow-lg p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Upload & Preview Area */}
                <div className="flex flex-col">
                    <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl w-full h-64 md:h-96 transition-all duration-300">
                        {!preview ? (
                            <label className="text-center cursor-pointer w-full h-full flex flex-col items-center justify-center">
                                <div className="text-gray-400 text-2xl mb-2">
                                    <img
                                        src="/uploadIcon.webp"
                                        className="w-14 h-14"
                                        alt="upload"
                                    />
                                </div>
                                <p className="text-gray-600 text-sm md:text-base">
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
                                className="w-full h-64 md:h-96 object-cover rounded-xl border"
                            />
                        )}
                    </div>

                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-3 md:gap-4">
                        <Button
                            variant="outline"
                            onClick={handleClear}
                            fullWidth
                        >
                            Clear
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                            disabled={loading}
                            isLoading={loading}
                            fullWidth
                        >
                            Submit
                        </Button>
                    </div>
                </div>
                {/* Result Area */}
                <div className="mt-6 md:mt-0">
                    {!result && (
                        <div className="text-center ms-4 p-4 bg-white border rounded-2xl text-gray-700 flex flex-col justify-end h-full relative">
                            {/* Bubble Chat */}

                            {showBubble && (
                                <div className="relative bg-blue-100 text-blue-900 p-3 rounded-xl max-w-xs text-sm md:text-base">
                                    <p className="font-semibold">
                                        {bubbleMessage}
                                    </p>
                                    <div className="absolute bottom-[-8px] left-2/3 transform -translate-x-1/2 w-0 h-2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-100"></div>
                                </div>
                            )}

                            {/* Bubble Chat Submit */}

                            {/* Maskot Gajah */}
                            {showGajah && (
                                <div className="ms-36" ref={gajahRef}>
                                    <img
                                        src="/Gajah.webp"
                                        className="w-40 h-40 mt-6"
                                        alt="upload"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {result && (
                        <div className="p-4 md:p-6 bg-gray-50 border rounded-2xl text-left">
                            <h2 className="font-semibold text-gray-700 text-lg mb-4">
                                Hasil Analisis:
                            </h2>
                            <ProgressBar
                                label="Malignant (Ganas)"
                                value={result.predictions?.Malignant}
                                color="bg-red-500"
                            />
                            <ProgressBar
                                label="Benign (Jinak)"
                                value={result.predictions?.Benign}
                                color="bg-green-500"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const ProgressBar = ({ label, value, color }) => {
    const percentage = (value * 100).toFixed(2);
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700 font-medium">
                    {label}
                </span>
                <span className="text-sm text-gray-700 font-semibold">
                    {percentage}%
                </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} transition-all duration-500 ease-in-out`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ImageAnalyzer;
