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
        navBar: {
            marginBottom: '0.5cm',
        },
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
            <div style={styles.navBar}>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <button onClick={handlePrint}>Print</button>
            </div>
            { location.state.gridType === "4x2" ? 
                <React.Fragment>
                    <Grid4x2 ref={componentRef} />
                </React.Fragment>
                :
                location.state.gridType === "5x2" ?
                    <React.Fragment>
                        <Grid5x2 ref={componentRef} />
                    </React.Fragment>
                    :
                    <h1>Grid type not found, go back to Homepage</h1>
            }
        </React.Fragment>
    );
};

export default PDF;