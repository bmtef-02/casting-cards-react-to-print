import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PDF from "./components/PDFComponent";
import SelectionComponent from "./components/SelectionComponent";

function Home() {
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/selection">
                <button>Make Selections</button>
            </Link>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/print" element={<PDF />} />
            <Route path="/selection" element={<SelectionComponent />} />
        </Routes>
    );
}

export default App;