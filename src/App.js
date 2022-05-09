import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import GridComponent from "./components/GridComponent";

function App() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return (
        <React.Fragment>
            <div>
                <button onClick={handlePrint}>Print</button>
            </div>
            <GridComponent ref={componentRef} />
        </React.Fragment>
    );
}

export default App;