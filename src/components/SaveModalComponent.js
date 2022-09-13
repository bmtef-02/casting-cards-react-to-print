import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function SaveModal(props) {

    const { 
        openModal, 
        setOpenModal, 
        setConfirmModal, 
        validated, 
        setValidated, 
        changedGrid,
        setChangedGrid,
        grid,
        setGrid,
        setIsGridNew
    } = props;
    const [reqBody, setReqBody] = useState({});
    const [changedForm, setChangedForm] = useState(false);
    // const postUrl = `http://localhost:3000/grids`;
    // const putUrl = `http://localhost:3000/grids/${grid._id}`;
    const postUrl = `https://dry-cliffs-03397.herokuapp.com/grids`;
    const putUrl = `https://dry-cliffs-03397.herokuapp.com/grids/${grid._id}`;

    useEffect(() => {
        setReqBody({
            showName: grid._id ? grid.showName : "",
            season: grid._id ? JSON.stringify(grid.season) : "",
            pitch: grid._id ? JSON.stringify(grid.pitch) : "",
            description: grid._id ? grid.description : "",
            selectedNames: grid.selectedNames,
            numPages: grid.numPages,
            gridType: grid.gridType
        })
    }, [grid])

    const handleFieldChange = (event) => {
        setChangedGrid(true);
        
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
            if (grid._id) {
                putGrid(putUrl, reqBody)
                .then(response => {
                    console.log(response, "- updated");
                    setGrid(response);
                    setOpenModal(false);
                    setConfirmModal(true);
                    setIsGridNew(false);
                })
                .catch(err => {
                    console.log("cannot update grid");
                    console.log(err);
                })
            } else {
                postGrid(postUrl, reqBody)
                .then(response => {
                    console.log(response, "- saved");
                    setGrid(response);
                    setOpenModal(false);
                    setConfirmModal(true);
                    setIsGridNew(true);
                })
                .catch(err => {
                    console.log("cannot post grid");
                    console.log(err);
                })
            }
            setChangedForm(false);
        }

        setValidated(true);
        setChangedGrid(false);
    };

    return (
        <Modal show={openModal} onHide={() => setOpenModal(false)}>
            <Form noValidate validated={validated} onSubmit={handleSave}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {grid._id ? "Update Grid" : "Save Grid"}
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
                    <button className="btn btn-primary" type="submit" disabled={!changedGrid && !changedForm}>
                        {grid._id ? "Save Changes" : "Save Grid"}
                    </button>
                </Modal.Footer>
            </Form>
            {JSON.stringify(reqBody)}
        </Modal>
    );
}