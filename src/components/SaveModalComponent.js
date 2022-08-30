import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function SaveModal(props) {

    const { openModal, setOpenModal, setConfirmModal } = props;
    const location = useLocation();
    const [reqBody, setReqBody] = useState({
        showName: location.state.grid ? location.state.grid.showName : "",
        season: location.state.grid ? JSON.stringify(location.state.grid.season) : "",
        pitch: location.state.grid ? JSON.stringify(location.state.grid.pitch) : "",
        description: location.state.grid ? location.state.grid.description : "",
        selectedNames: location.state.selectedNames,
        numPages: location.state.numPages,
        gridType: location.state.gridType
    });
    const [validated, setValidated] = useState(false);
    const [changedForm, setChangedForm] = useState(false);
    const postUrl = `http://localhost:3000/grids`;
    const putUrl = `http://localhost:3000/grids/${location.state.gridId}`;

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
        setChangedForm(true);
    }

    const handleSave = (event) => {
        event.preventDefault();
        console.log('handleSave triggered')

        async function postGrid(url = "", data = {}) {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            return response.json();
        };

        async function putGrid(url = "", data = {}) {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            return response.json();
        };

        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (location.state.grid) {
                putGrid(putUrl, reqBody)
                .then(response => {
                    console.log(response);
                    setOpenModal(false);
                    setConfirmModal(true);
                })
                .catch(err => {
                    console.log("cannot update grid");
                    console.log(err);
                })
            } else {
                postGrid(postUrl, reqBody)
                .then(response => {
                    console.log(response)
                    setOpenModal(false);
                })
                .catch(err => {
                    console.log("cannot post grid");
                    console.log(err);
                })
            }
            setChangedForm(false);
        }

        setValidated(true);
    };

    return (
        <Modal show={openModal} onHide={() => setOpenModal(false)}>
            <Form noValidate validated={validated} onSubmit={handleSave}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {location.state.grid ? "Update Grid" : "Save Grid"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="showName">
                        <Form.Label>Show Name</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Enter the show name" 
                            onChange={handleFieldChange} 
                            name="showName"
                            value={reqBody.showName}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a show name</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="season">
                        <Form.Label>Season</Form.Label>
                        <Form.Control 
                            required
                            type="number"
                            min={1} 
                            placeholder="Enter the season number" 
                            style={{ width: "75%" }}
                            onChange={handleFieldChange} 
                            name="season"
                            value={reqBody.season}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a season number</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pitch">
                        <Form.Label>Pitch/Round</Form.Label>
                        <Form.Control 
                            required
                            type="number"
                            min={1} 
                            placeholder="Enter the pitch number" 
                            style={{ width: "75%" }}
                            onChange={handleFieldChange} 
                            name="pitch"
                            value={reqBody.pitch}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a pitch/round number</Form.Control.Feedback>
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
               </Modal.Body> 
               <Modal.Footer>
                    <button className="btn btn-secondary" type="button" onClick={() => setOpenModal(false)}>Close</button>
                    <button className="btn btn-primary" type="submit" disabled={!location.state.changedGrid && !changedForm}>
                        {location.state.grid ? "Update Grid" : "Save Grid"}
                    </button>
                </Modal.Footer>
            </Form>
            {JSON.stringify(reqBody)}
        </Modal>
    );
}