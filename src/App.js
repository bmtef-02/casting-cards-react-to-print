import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import GridComponent from "./components/GridComponent";

function App() {
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
                <button onClick={handlePrint}>Print</button>
            </div>
            <div style={styles.page}>
                <GridComponent ref={componentRef} />
            </div>
            
        </React.Fragment>
    );
}

export default App;