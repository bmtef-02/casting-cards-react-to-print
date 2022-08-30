import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

export default function ConfirmModal(props) {

    const { 
        confirmModal, 
        setConfirmModal, 
        setValidated, 
        grid,
        isGridNew,
    } = props;
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target.name === "grid") {
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
                    {isGridNew ? "Grid Saved!" : "Grid Updated!"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {grid._id}
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClick} name="home">Home</button>
                <button className="btn btn-primary" onClick={handleClick} name="grid">View Grid</button>
            </Modal.Footer>
        </Modal>
    );
}