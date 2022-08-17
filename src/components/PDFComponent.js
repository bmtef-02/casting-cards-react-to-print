import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Link, useLocation } from "react-router-dom";
import Grid4x2 from "./Grid4x2Component";
import Grid5x2 from "./Grid5x2Component";

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
    const location = useLocation();

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
                <button onClick={handlePrint}>Print</button>
            </div>
            <div style={styles.page}>
                { location.state.gridType === "4x2" ? 
                    <Grid4x2 ref={componentRef} />
                    :
                    location.state.gridType === "5x2" ?
                    <Grid5x2 ref={componentRef} />
                    :
                    <h1>Grid type not found</h1>
                }
                
            </div>
        </React.Fragment>
    );
};

export default PDF;