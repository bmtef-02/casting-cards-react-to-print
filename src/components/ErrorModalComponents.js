import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

export default function ErrorModal(props) {

    const { 
        errorModal,
        setErrorModal,
    } = props;
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target.name === "grid") {
            setErrorModal(false);
        } else {
            navigate("/")
        }
    }

    return (
        <Modal show={errorModal} background="static">
            <Modal.Header>
                <Modal.Title>Oh No...Error!</Modal.Title>
            </Modal.Header>
            <Modal.Body>There was a problem with the server. Please try again later.</Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClick} name="home">Home</button>
                <button className="btn btn-primary" onClick={handleClick} name="grid">Close</button>
            </Modal.Footer>
        </Modal>
    );
}