import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PDF from "./components/PDFComponent";
import MiniCardTest from "./components/MiniCardTest";
import Home from "./components/HomepageComponent";
import Selection4x2 from "./components/Selection4x2Component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/print" element={<PDF />} />
            <Route path="/selection4x2" element={<Selection4x2 />} />
            <Route path="/minicards" element={<MiniCardTest />} />
        </Routes>
    );
}

export default App;