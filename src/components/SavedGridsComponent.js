import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

export default function SavedGrids() {

    const url = `http://localhost:3000/grids`;
    const navigate = useNavigate();
    const [allGrids, setAllGrids] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            const arr = resp.data;
            setAllGrids(arr);
        })
        .catch(err => console.error(err))
    }, [url])

    const handleClick = (event) => {
        event.preventDefault();
        const grid = allGrids.find(grid => grid._id === event.target.value)

        if (grid.gridType === "4x2") {
            navigate("/selection4x2", { state: {
                grid: grid,
            }});
        } else if (grid.gridType === "5x2") {
            navigate("/selection5x2", { state: {
                grid: grid,
            }});
        } else {
            navigate("/");
        }
    }

    return (
        <React.Fragment>
            <Header />
            <div className="text-center p-3 p-md-5">
                <div className="col-md-5 mx-auto my-5">
                    <h1>Saved Grids</h1>
                    <p>View, print, or edit any of your grids that you previoiusly saved.</p>
                </div>
            </div>
            <div className="container-fluid text-center p-4 mt-2 bg-light">
                <div className="row g-4 justify-content-sm-center justify-content-lg-start">
                    {allGrids.map(grid => {
                        return (
                            <div className="col-lg-4 col-md-5" key={grid._id}>
                                <div className="card h-100 border-dark">
                                    <h4 className="card-header bg-dark text-white">{grid.showName}</h4>
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <h2 className="card-title">{`Season ${grid.season}, Round ${grid.pitch}`}</h2>
                                        <p className="card-text">{grid.description}</p>
                                        <button className="btn btn-lg btn-outline-dark mt-auto" type="button" value={grid._id} style={{ width: "50%" }} onClick={handleClick}>View</button>
                                    </div>
                                </div>
                            </div>
                            // <div className="col-12" style={{ border: "1px solid black", margin: "5px", padding: "1px" }} key={grid._id}>
                            //     <h1>{grid.showName}</h1>
                            //     <h2>{`Season ${grid.season}, Round ${grid.pitch}`}</h2>
                            //     <button className="btn btn-primary" value={grid._id} onClick={handleClick}>View Grid</button>
                            // </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}