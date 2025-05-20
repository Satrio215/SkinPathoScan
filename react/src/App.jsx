import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Artikel from "./pages/Artikel.jsx";
import ArtikelDetail from "./pages/ArtikelDetail.jsx";
import DefaultLayout from "./assets/components/DefaultLayout.jsx";

function App() {
    return (
        <Router>
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artikel" element={<Artikel />} />
                    <Route path="/artikel/:id" element={<ArtikelDetail />} />
                </Routes>
            </DefaultLayout>
        </Router>
    );
}

export default App;
