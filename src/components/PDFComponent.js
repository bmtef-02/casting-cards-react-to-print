import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation, useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import Grid4x2 from "./Grid4x2Component";
import Grid5x2 from "./Grid5x2Component";
import Header from "./HeaderComponent";
import { Col } from "react-bootstrap";

export default function PDF() {

    const pageStyle = `
        @page {
            size: 29.7cm 21cm;
        },
        @media print {
            @page { size: landscape; }
        }
    `;
    
    const componentRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const grid = location.state.grid;
    const sortedContestants = location.state.sortedContestants;
    const changedGrid = location.state.changedGrid;
    const [openHint, setOpenHint] = useState(false);
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: pageStyle,
    });
    
    const handleEdit = () => {
        if (grid.gridType === "4x2") {
            navigate("/selection4x2", { state: {
                grid: grid,
                changedGrid: changedGrid,
            }});
        } else if (grid.gridType === "5x2") {
            navigate("/selection5x2", { state: {
                grid: grid,
                changedGrid: changedGrid,
            }});
        } else {
            navigate("/");
        }
    };

    return (
        <React.Fragment>
            <Header />
            <div className="container pt-2 pb-4">
                <div className="row">
                    <div className="col-md-auto mb-md-0 mb-3">
                        <button className="btn btn-success" onClick={handlePrint}>Print / Save PDF</button>
                    </div>
                    <div className="col-md-auto  mb-md-0 mb-3">
                        <button className="btn btn-warning" onClick={handleEdit}>Back To Selection</button>
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-info" onClick={() => setOpenHint(!openHint)}>
                            Printing Tips
                            { openHint ? <i className="bi bi-chevron-up ms-2"></i> : <i className="bi bi-chevron-down ms-2"></i>}
                        </button>
                        <Collapse in={openHint}>
                            <div className="mt-3">
                                <h4>For best printing results, set the following:</h4>
                                <p>Destination: <strong>Save to PDF</strong></p>
                                <p>Paper Size/Type: <strong>A4</strong></p>
                                <p>Scale: <strong>Fit to page width</strong></p>
                                <p>Margins: <strong>None</strong></p>
                                <p>Option to Print Headers and Footers: <strong>OFF / Unchecked</strong></p>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
            { grid.gridType === "4x2" ? 
                <React.Fragment>
                    <Grid4x2 
                        ref={componentRef}
                        sortedContestants={sortedContestants}
                        grid={grid}
                    />
                </React.Fragment>
                :
                grid.gridType === "5x2" ?
                    <React.Fragment>
                        <Grid5x2 
                            ref={componentRef} 
                            sortedContestants={sortedContestants}
                            grid={grid}
                        />
                    </React.Fragment>
                    :
                    <h1>Grid type not found, go back to Homepage</h1>
            }
        </React.Fragment>
    );
};