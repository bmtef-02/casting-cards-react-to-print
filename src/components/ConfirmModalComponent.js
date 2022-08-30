import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

export default function ConfirmModal(props) {

    const { confirmModal, setConfirmModal } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const [updatedGrid, setUpdatedGrid] = useState({})

    useEffect(() => {
        if (location.state.gridId) {
            axios.get(`http://localhost:3000/grids/${location.state.gridId}`)
            .then(resp => {
                setUpdatedGrid(resp.data)
                console.log(resp.data)
            })
            .catch(err => console.error(err))
        }
    }, [location.state.gridId, confirmModal]);

    const handleClick = (event) => {
        if (event.target.name === "grid") {
            navigate("/print", { state: {
                selectedNames: location.state.selectedNames,
                sortedContestants: location.state.sortedContestants,
                gridType: location.state.gridType,
                numPages: location.state.numPages,
                gridId: location.state.gridId,
                changedGrid: location.state.changedGrid,
                grid: updatedGrid
            }})
            setConfirmModal(false);
        } else {
            navigate("/")
        }
    }

    return (
        <Modal show={confirmModal} background="static">
                <Modal.Header>
                    <Modal.Title>Update Confirmed!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {location.state.gridId}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClick} name="home">Home</button>
                    <button className="btn btn-primary" onClick={handleClick} name="grid">View Updated Grid</button>
                </Modal.Footer>
        </Modal>
    );
}