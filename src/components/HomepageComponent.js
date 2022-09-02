import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./HeaderComponent";

export default function Home() {

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        if (event.target.name === "4x2") {
            navigate("/selection4x2", { state: {
                gridType: event.target.name
            }});
        } else if (event.target.name === "5x2") {
            navigate("/selection5x2", { state: {
                gridType: event.target.name
            }});
        } else console.log("grid type unknown")
    };

    return (
        <React.Fragment>
            <Header />
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
                                <button className="btn btn-lg btn-dark" type="button" name="4x2" style={{ width: "80%" }} onClick={handleClick}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="card">
                            <h4 className="card-header">5x2 Grid</h4>
                            <div className="card-body">
                                <h2 className="card-title">Lorem Ipsum</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className="btn btn-lg btn-dark" type="button" name="5x2" style={{ width: "80%" }} onClick={handleClick}>Get Started</button>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </React.Fragment>
    )
}