import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "./NavBarComponent";
import Grid4x2Example from "../img/Grid4x2Example.png";
import Grid5x2Example from "../img/Grid5x2Example.png";

const styles = {
    selectTitleRow: {
        textAlign: "center"
    },
    gridSelectRow: {
        textAlign: "center",
        marginTop: "25px",
    },
    gridSelectCol: {
        border: "black solid 1px",
        borderRadius: "50px",
        background: "white",
        margin: "10px 25px",
        padding: "10px 0 20px 0",
    },
    img: {
        maxWidth: "80%",
        cursor: "pointer",
    }
}

export default function Home() {

    const navigate = useNavigate();

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     if (event.target.name === "4x2") {
    //         let path = `/selection4x2`;
    //         navigate(path, { state: {
    //             gridType: event.target.name
    //         } });
    //     } else if (event.target.name === "5x2") {
    //         let path = `/selection5x2`;
    //         navigate(path, { state: {
    //             gridType: event.target.name
    //         }});
    //     } else if (event.target.name === "savedGrids") {
    //         navigate(`/savedGrids`);
    //     } else {
    //         console.log("event.target.name is not 4x2 nor 5x2");
    //     }
    // }

    const handleClick = (event) => {
        if (event.target.id === "nav-create-grid") {
            const element = document.getElementById("create-grid");
            element.scrollIntoView();
        } else {
            console.log('nothing happens')
        }
    };

    return (
        <React.Fragment>
            <NavbarComponent handleClick={handleClick} />
            <div className="text-center p-3 p-md-5">
                <div className="col-md-5 mx-auto my-5">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="container-fluid text-center px-4">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="mt-3 p-5 pb-0 bg-dark text-white">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="bg-light mx-auto mt-5" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-3 p-5 pb-0 bg-light">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="bg-dark mx-auto mt-5" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="my-3 p-5 bg-light">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="my-3 p-5 bg-dark text-white">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-1 p-md-3" id="create-grid">
                    <div className="col-md-5 mx-auto my-5">
                        <h1>Create A Grid</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-5">
                        <div className="card">
                            <h4 className="card-header">4x2 Grid</h4>
                            <div className="card-body">
                                <h2 className="card-title">Lorem Ipsum</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className="btn btn-lg btn-dark" type="button" style={{ width: "80%" }}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="card">
                            <h4 className="card-header">5x2 Grid</h4>
                            <div className="card-body">
                                <h2 className="card-title">Lorem Ipsum</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className="btn btn-lg btn-dark" type="button" style={{ width: "80%" }}>Get Started</button>
                            </div>
                        </div>
                    </div >
                </div>
                {/* <div className="row" style={styles.gridSelectRow}>
                    <div className="col-md" style={styles.gridSelectCol}>
                        <h3>4x2 Grid</h3>
                        <img src={Grid4x2Example} alt="Grid4x2Example" style={styles.img} name="4x2" onClick={handleClick} />
                    </div>
                    <div className="col-md" style={styles.gridSelectCol}>
                        <h3>5x2 Grid</h3>
                        <img src={Grid5x2Example} alt="Grid5x2Example" style={styles.img} name="5x2" onClick={handleClick} />
                    </div>
                </div>
                <div className="row">
                    <button className="btn btn-primary" name="savedGrids" onClick={handleClick}>View Saved Grids</button>
                </div> */}
            </div>
        </React.Fragment>
    )
}