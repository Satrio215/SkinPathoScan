import React, { useState } from "react";
import Button from "../components/Button";

const ImageAnalyzer = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
        }
    };

    const handleSubmit = async () => {
        if (!image) return;
        setLoading(true);
        // Simulasi API
        setTimeout(() => {
            setResult({
                predictions: {
                    Malignant: Math.random() * 0.5 + 0.25,
                    Benign: Math.random() * 0.5 + 0.25,
                },
            });
            setLoading(false);
        }, 2000);
    };

    const handleClear = () => {
        setImage(null);
        setPreview(null);
        setResult(null);
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
                                    ↑
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
                            disabled={!preview}
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
