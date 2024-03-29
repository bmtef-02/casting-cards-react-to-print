import React from "react";
import { Routes, Route } from "react-router-dom";
import PDF from "./components/PDFComponent";
import Home from "./components/HomepageComponent";
import Selection4x2 from "./components/Selection4x2Component";
import Selection5x2 from "./components/Selection5x2Component";
import SavedGrids from "./components/SavedGridsComponent";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/print" element={<PDF />} />
            <Route path="/selection4x2" element={<Selection4x2 />} />
            <Route path="/selection5x2" element={<Selection5x2 />} />
            <Route path="/savedGrids" element={<SavedGrids />} />
        </Routes>
    );
}

export default App;