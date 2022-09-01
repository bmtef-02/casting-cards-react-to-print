import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavbarComponent(props) {

    const { handleClick } = props;

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
                            {/* <Nav.Link href="/" className="ms-auto px-4" eventKey="1">Home</Nav.Link>
                            <Nav.Link className="ms-auto px-4" id="nav-create-grid" eventKey="2" onClick={handleClick}>Create Grid</Nav.Link>
                            <Nav.Link href="/savedGrids" className="ms-auto px-4" eventKey="3">Saved Grids</Nav.Link> */}
                            <NavLink to="/" className="nav-link ms-auto px-4" eventKey="1">Home</NavLink>
                            <NavLink to="#create-grid" className="nav-link ms-auto px-4" id="nav-create-grid" eventKey="2">Create Grid</NavLink>
                            <NavLink to="/savedGrids" className="nav-link ms-auto px-4" eventKey="3">Saved Grids</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}