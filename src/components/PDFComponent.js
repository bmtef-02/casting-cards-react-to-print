import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Grid4x2 from "./Grid4x2Component";
import Grid5x2 from "./Grid5x2Component";
import SaveModal from "./SaveModalComponent";
import ConfirmModal from "./ConfirmModalComponent";
import Header from "./HeaderComponent";

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
    // const [openModal, setOpenModal] = useState(false);
    // const [confirmModal, setConfirmModal] = useState(false);
    // const [validated, setValidated] = useState(false);
    // const [changedGrid, setChangedGrid] = useState(location.state.changedGrid);
    const sortedContestants = location.state.sortedContestants;
    // const [isGridNew, setIsGridNew] = useState(true);
    const changedGrid = location.state.changedGrid;
    
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
                    <div className="col-auto">
                        <button className="btn btn-success" onClick={handlePrint}>Print</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-danger" onClick={handleEdit}>Reselect</button>
                    </div>
                    {/* <div className="col-auto">
                        {grid._id ?
                            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Update</button>
                            :
                            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Save</button>
                        }
                    </div> */}
                    {JSON.stringify(grid)}
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
            {/* <SaveModal 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                setConfirmModal={setConfirmModal} 
                validated={validated} 
                setValidated={setValidated}
                changedGrid={changedGrid}
                setChangedGrid={setChangedGrid}
                grid={grid}
                setGrid={setGrid}
                setIsGridNew={setIsGridNew}
            />
            <ConfirmModal 
                confirmModal={confirmModal} 
                setConfirmModal={setConfirmModal} 
                setValidated={setValidated}
                grid={grid}
                isGridNew={isGridNew}
            /> */}
        </React.Fragment>
    );
};