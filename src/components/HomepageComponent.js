import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Homepage4x2Grid from "../img/Homepage4x2Grid.png";
import Homepage5x2Grid from "../img/Homepage5x2Grid.png";
import SelectingCardExample from "../img/SelectingCardExample.png";

const styles = {
    imgRight: {
        position: "absolute",
        width: "500px",
        top: "0%",
        right: "0%",
        transform: "rotate(45deg)",
        zIndex: -1,
        opacity: 0.5
    },
    imgLeft: {
        position: "absolute",
        width: "500px",
        top: "0%",
        left: "0%",
        transform: "rotate(-45deg)",
        zIndex: -1,
        opacity: 0.5,
    },
    selectCard: {
        position: "relative",
        width: "80%",
        top: "5%",
    },
    PDFexample: {
        position: "relative",
        width: "80%",
        top: "10%",
    }
}

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
            <div className="text-center p-3 p-md-5 d-flex" style={{ position: "relative", overflow: "hidden", height: "400px" }}>
                <div className="col-md-4 mx-auto my-auto">
                    <h1>Casting Cards</h1>
                    <p>organize actors and actresses into beautiful grids that display headshots and personal information to make casting decisions easier.</p>
                    <img src={Homepage4x2Grid} alt="Homepage4x2Grid" style={styles.imgRight} />
                    <img src={Homepage4x2Grid} alt="Homepage4x2Grid" style={styles.imgLeft} />
                </div>
            </div>
            <div className="container-fluid text-center p-4">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="mt-3 p-5 pb-0 bg-dark text-white">
                            <h2>Selecting Cards</h2>
                            <p>No more wasting time positioning text and images. Just select the name of the person you want and the rest is taken care of.</p>
                            <div className="bg-light mx-auto mt-5" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0", overflow: "hidden" }}>
                                <img src={SelectingCardExample} alt="selecting-card-example" style={styles.selectCard} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-3 p-5 pb-0 bg-light">
                            <h2>Create PDFs</h2>
                            <p>Easily save your grid as a PDF to email out or print for your next pitch meeting.</p>
                            <div className="bg-dark mx-auto mt-5" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0", overflow: "hidden" }}>
                                <img src={Homepage5x2Grid} alt="Homepage5x2Grid" style={styles.PDFexample} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="my-3 p-5 bg-light">
                            <h2>Save Your Grids</h2>
                            <p>Want to change the people on your grid? No problem! You can save all of your grids and access them to make any edits you need.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="my-3 p-5 bg-dark text-white">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-1 p-md-3" id="create-grid">
                    <div className="col-md-5 mx-auto my-5">
                        <h1>Create A Grid</h1>
                        <p>Choose between a 4x2 grid with 8 people or a 5x2 grid with 10 people. Select which grid you want to create by selecting one of the options below. From there, you will be able to select the people you want to appear on your grid. Once again, no more wasting time formatting your grid. Everything is done for you. All you need to do is select people!</p>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-5">
                        <div className="card">
                            <h2 className="card-header">4x2 Grid</h2>
                            <div className="card-body">
                                <p className="card-text">This grid will show up to 8 people.</p>
                                <button className="btn btn-lg btn-dark" type="button" name="4x2" style={{ width: "80%" }} onClick={handleClick}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="card">
                            <h2 className="card-header">5x2 Grid</h2>
                            <div className="card-body">
                                <p className="card-text">This grid will show up to 10 people.</p>
                                <button className="btn btn-lg btn-dark" type="button" name="5x2" style={{ width: "80%" }} onClick={handleClick}>Get Started</button>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}