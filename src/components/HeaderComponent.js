import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header() {

    const createGridActive = window.location.hash === "#create-grid" ? true : false; 

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <svg className="d-inline-block align-text-middle" id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> 
                            <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> 
                        </svg>
                        Casting Cards
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto" style={{ fontSize: "20px"}}>
                            <Nav.Link 
                                as={NavLink} 
                                to="/" 
                                className="ms-auto px-4" 
                                eventKey="0" 
                                style={({ isActive }) => ({
                                    fontWeight: isActive && !createGridActive ? "bold" : "lighter",
                                    color: "white"
                                })}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to="/#create-grid" 
                                className="ms-auto px-4" 
                                eventKey="1"
                                style={({ isActive }) => ({
                                    fontWeight: createGridActive ? "bold" : "lighter",
                                    color: "white"
                                })}
                            >
                                Create Grid
                            </Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to="/savedGrids" 
                                className="ms-auto px-4" 
                                eventKey="2"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? "bold" : "lighter",
                                    color: "white"
                                })}
                            >
                                Saved Grids
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}