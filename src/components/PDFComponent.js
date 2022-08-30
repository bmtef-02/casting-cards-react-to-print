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
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [validated, setValidated] = useState(false);


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: pageStyle,
    });
    
    const handleEdit = () => {
        if (location.state.gridType === "4x2") {
            navigate("/selection4x2", { state: {
                selectedNames: location.state.selectedNames,
                gridType: location.state.gridType,
                numPages: location.state.numPages,
                gridId: location.state.gridId,
                grid: location.state.grid,
            }});
        } else  if (location.state.gridType === "5x2") {
            navigate("/selection5x2", { state: {
                selectedNames: location.state.selectedNames,
                gridType: location.state.gridType,
                numPages: location.state.numPages,
                gridId: location.state.gridId,
                grid: location.state.grid,
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
                        {location.state.gridId ?
                            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Update</button>
                            :
                            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Save</button>
                        }
                    </div>
                    {JSON.stringify(location.state.grid)}
                </div>
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
            <SaveModal openModal={openModal} setOpenModal={setOpenModal} setConfirmModal={setConfirmModal} validated={validated} setValidated={setValidated} />
            <ConfirmModal confirmModal={confirmModal} setConfirmModal={setConfirmModal} setValidated={setValidated} />
        </React.Fragment>
    );
};