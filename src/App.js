import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Routes, Route, Link } from "react-router-dom";
import GridComponent from "./components/GridComponent";
import SelectionComponent from "./components/SelectionComponent";

function PDF() {
    const pageStyle = `
        @page {
            size: 29.7cm 21cm;
        },
        @media print {
            @page { size: landscape; }
        }
    `;

    const styles = {
        page: {
            width: '29.7cm',
            height: '21cm',
            backgroundColor: 'white',
            boxShadow: '0 0 0.5cm',
            marginTop: '0.5cm',
            marginBottom: '0.5cm',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    };
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: pageStyle,
    });
    
    return (
        <React.Fragment>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/selection">
                    <button>Make Selections</button>
                </Link>
                <button onClick={handlePrint}>Print</button>
            </div>
            <div style={styles.page}>
                <GridComponent ref={componentRef} />
            </div>
        </React.Fragment>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<PDF />} />
            <Route path="/selection" element={<SelectionComponent />} />
        </Routes>
    );
}

export default App;