import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Grid4x2 from "./Grid4x2Component";
import Grid5x2 from "./Grid5x2Component";
import SaveModal from "./SaveModalComponent";
import ConfirmModal from "./ConfirmModalComponent";

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
    console.log(location.state);
    const navigate = useNavigate();
    const [grid, setGrid] = useState(location.state.grid);
    console.log(grid)
    const [openModal, setOpenModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [changedGrid, setChangedGrid] = useState(location.state.changedGrid);
    const selectedNames = grid.selectedNames;
    const sortedContestants = location.state.sortedContestants;
    const gridType = grid.gridType;
    const numPages = grid.numPages;
    const gridId = grid._id;
    const [isGridNew, setIsGridNew] = useState(true);
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: pageStyle,
    });
    
    const handleEdit = () => {
        if (gridType === "4x2") {
            navigate("/selection4x2", { state: {
                grid: grid,
            }});
        } else  if (gridType === "5x2") {
            navigate("/selection5x2", { state: {
                selectedNames: selectedNames,
                gridType: gridType,
                numPages: numPages,
                gridId: gridId,
                grid: grid,
            }});
        } else {
            navigate("/");
        }
    };

    return (
        <React.Fragment>
            <div className="container pt-2 pb-4">
                <div className="row">
                    <div className="col-auto">
                        <Link to="/">
                            <button className="btn btn-dark" href="/">Home</button>
                        </Link>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success" onClick={handlePrint}>Print</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-danger" onClick={handleEdit}>Edit</button>
                    </div>
                    <div className="col-auto">
                        {gridId ?
                            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Update</button>
                            :
                            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Save</button>
                        }
                    </div>
                    {JSON.stringify(grid)}
                </div>
            </div>
            { gridType === "4x2" ? 
                <React.Fragment>
                    <Grid4x2 
                        ref={componentRef}
                        sortedContestants={sortedContestants}
                        grid={grid}
                    />
                </React.Fragment>
                :
                gridType === "5x2" ?
                    <React.Fragment>
                        <Grid5x2 
                            ref={componentRef} 
                            numPages={numPages}
                            selectedNames={selectedNames}
                            sortedContestants={sortedContestants}
                        />
                    </React.Fragment>
                    :
                    <h1>Grid type not found, go back to Homepage</h1>
            }
            <SaveModal 
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
            />
        </React.Fragment>
    );
};