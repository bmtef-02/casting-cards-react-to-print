import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function SaveModal(props) {

    const location = useLocation();
    const { openModal, setOpenModal } = props;
    const [reqBody, setReqBody] = useState({
        showName: "",
        season: null,
        pitch: null,
        description: "",
        selectedNames: location.state.selectedNames,
        numPages: location.state.numPages,
        gridType: location.state.gridType
    });

    const handleFieldChange = (event) => {
        if (event.target.name === "showName") {
            setReqBody({
                ...reqBody,
                [event.target.name]: event.target.value
            });
        } else if (event.target.name === "season") {
            setReqBody({
                ...reqBody,
                [event.target.name]: event.target.value
            });
        } else if (event.target.name === "pitch") {
            setReqBody({
                ...reqBody,
                [event.target.name]: event.target.value
            });
        } else if (event.target.name === "description") {
            setReqBody({
                ...reqBody,
                [event.target.name]: event.target.value
            });
        }
    }

    const handleSave = () => {
        setOpenModal(false);
        console.log('saved')
    }

    return (
        <Modal show={openModal} onHide={() => setOpenModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Save Grid</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="showName">
                        <Form.Label>Show Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter the show name" 
                            onChange={handleFieldChange} 
                            name="showName"
                            value={reqBody.showName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="season">
                        <Form.Label>Season</Form.Label>
                        <Form.Control 
                            type="number"
                            min={1} 
                            placeholder="Enter the season number" 
                            style={{ width: "75%" }}
                            onChange={handleFieldChange} 
                            name="season"
                            value={reqBody.season}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pitch">
                        <Form.Label>Pitch</Form.Label>
                        <Form.Control 
                            type="number"
                            min={1} 
                            placeholder="Enter the pitch number" 
                            style={{ width: "75%" }}
                            onChange={handleFieldChange} 
                            name="pitch"
                            value={reqBody.pitch}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description (optional)</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Enter a description about the show" 
                            onChange={handleFieldChange} 
                            name="description"
                            value={reqBody.description}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={() => setOpenModal(false)}>Close</button>
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
            </Modal.Footer>
            {JSON.stringify(reqBody)}
        </Modal>
    );
}