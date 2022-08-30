import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

export default function ConfirmModal(props) {

    const { 
        confirmModal, 
        setConfirmModal, 
        setValidated, 
        newGrid,
        changedGrid,
        gridId,
        selectedNames,
        sortedContestants,
        gridType,
        numPages,
    } = props;
    const navigate = useNavigate();
    const [updatedGrid, setUpdatedGrid] = useState({})

    useEffect(() => {
        if (gridId) {    // if grid was updated
            axios.get(`http://localhost:3000/grids/${gridId}`)
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
    }, [gridId, newGrid, confirmModal]);

    const handleClick = (event) => {
        if (event.target.name === "grid") {
            navigate("/print", { state: {
                selectedNames: selectedNames,
                sortedContestants: sortedContestants,
                gridType: gridType,
                numPages: numPages,
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
                        {gridId ? "Grid Updated!" : "Grid Saved!"}
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