import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {

    return (
        <footer className="p-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 m-lg-0 mb-5">
                        <Navbar.Brand href="/">
                            <svg className="d-inline-block align-text-middle" id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> 
                                <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> 
                            </svg>
                            Casting Cards
                        </Navbar.Brand>
                    </div>
                    <div className="col m-lg-0 mb-5">
                        <Nav className="d-flex justify-content-lg-evenly flex-lg-row flex-column">
                            <Nav.Link as={NavLink} to="/" className="text-white px-0">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/#create-grid" className="text-white px-0">Create Grid</Nav.Link>
                            <Nav.Link as={NavLink} to="/savedGrids" className="text-white px-0">Saved Grids</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end m-lg-0 mb-5">
                        <Navbar.Brand href="https://github.com/bmtef-02/casting-cards-react-to-print.git" className="d-flex align-items-center">
                            GitHub
                            <span style={{ fontSize: "25px", marginLeft: 2}}><i className="bi bi-github"></i></span>
                        </Navbar.Brand>
                    </div>
                </div>
            </div>
        </footer>
    );
}