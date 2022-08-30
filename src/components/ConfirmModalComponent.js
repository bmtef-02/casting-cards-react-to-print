import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

export default function ConfirmModal(props) {

    const { 
        confirmModal, 
        setConfirmModal, 
        setValidated, 
        newGrid,
        changedGrid,
    } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const [updatedGrid, setUpdatedGrid] = useState({})

    useEffect(() => {
        if (location.state.gridId) {    // if grid was updated
            axios.get(`http://localhost:3000/grids/${location.state.gridId}`)
            .then(resp => {
                setUpdatedGrid(resp.data);
                console.log(resp.data);
            })
            .catch(err => console.error(err))
        } else if (newGrid._id) {    // if grid was new
            axios.get(`http://localhost:3000/grids/${newGrid._id}`)
            .then(resp => {
                setUpdatedGrid(resp.data);
                console.log(resp.data);
            })
            .catch(err => console.error(err))
        }
    }, [location.state.gridId, newGrid, confirmModal]);

    const handleClick = (event) => {
        if (event.target.name === "grid") {
            navigate("/print", { state: {
                selectedNames: location.state.selectedNames,
                sortedContestants: location.state.sortedContestants,
                gridType: location.state.gridType,
                numPages: location.state.numPages,
                gridId: updatedGrid._id,
                changedGrid: changedGrid,
                grid: updatedGrid
            }})
            setConfirmModal(false);
            setValidated(false);
        } else {
            navigate("/")
        }
    }

    return (
        <Modal show={confirmModal} background="static">
                <Modal.Header>
                    <Modal.Title>
                        {location.state.gridId ? "Grid Updated!" : "Grid Saved!"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {updatedGrid._id}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClick} name="home">Home</button>
                    <button className="btn btn-primary" onClick={handleClick} name="grid">View Grid</button>
                </Modal.Footer>
        </Modal>
    );
}