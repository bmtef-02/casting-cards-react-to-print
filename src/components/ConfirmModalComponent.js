import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function ConfirmModal(props) {

    

    const navigate = useNavigate();
    const location = useLocation();
    const { confirmModal, setConfirmModal } = props;

    const handleClick = (event) => {
        if (event.target.name === "grid") {
            // navigate("/print", { state: {
            //     selectedNames: selectedNames,
            //     sortedContestants: sortedContestants,
            //     gridType: location.state.gridType,
            //     numPages: numPages,
            //     gridId: location.state.gridId,
            //     changedGrid: changedGrid,
            //     grid: location.state.grid,
            // }})
            setConfirmModal(false);
        } else {
            navigate("/")
        }
    }

    console.log(location.state)

    return (
        <Modal show={confirmModal} background="static">
                <Modal.Header>
                    <Modal.Title>Update Confirmed!</Modal.Title>
                </Modal.Header>
               <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClick} name="home">Home</button>
                    <button className="btn btn-primary" onClick={handleClick} name="grid">View Updated Grid</button>
                </Modal.Footer>
        </Modal>
    );
}