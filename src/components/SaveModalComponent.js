import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function SaveModal(props) {

    const location = useLocation();
    const { openModal, setOpenModal } = props;
    const [reqBody, setReqBody] = useState({
        showName: "",
        season: "",
        pitch: "",
        description: "",
        selectedNames: location.state.selectedNames,
        numPages: location.state.numPages,
        gridType: location.state.gridType
    });
    const [validated, setValidated] = useState(false);
    const url = `http://localhost:3000/grids`;

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

    const handleSave = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {

            // let body = {
            //     season: reqBody.season,
            //     pitch: reqBody.pitch,
            //     showName: reqBody.show,
            //     description: reqBody.description,
            //     selectedNames: reqBody.selectedNames,
            //     gridType: reqBody.gridType,
            //     numPages: reqBody.numPages,
            // };

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

            postGrid(url, reqBody)
            .then(response => {
                console.log(response)
                setOpenModal(false);
            })
            .catch(err => {
                console.log("cannot post grid");
                console.log(err);
            })
        }

        setValidated(true);
    }

    return (
        <Modal show={openModal} onHide={() => setOpenModal(false)}>
            <Form noValidate validated={validated} onSubmit={handleSave}>
                <Modal.Header closeButton>
                    <Modal.Title>Save Grid</Modal.Title>
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
                    <button className="btn btn-secondary" onClick={() => setOpenModal(false)}>Close</button>
                    <button className="btn btn-primary" type="submit">Save</button>
                </Modal.Footer>
            </Form>
            {JSON.stringify(reqBody)}
        </Modal>
    );
}