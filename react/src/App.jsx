import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DefaultLayout from "./assets/components/DefaultLayout.jsx";

function App() {
    return (
        <Router>
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </DefaultLayout>
        </Router>
    );
}

export default App;
