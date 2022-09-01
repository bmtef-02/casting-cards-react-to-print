import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PDF from "./components/PDFComponent";
import Home from "./components/HomepageComponent";
import Selection4x2 from "./components/Selection4x2Component";
import Selection5x2 from "./components/Selection5x2Component";
import SavedGrids from "./components/SavedGridsComponent";

function App() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === "") {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);

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