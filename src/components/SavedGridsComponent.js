import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
                selectedNames: grid.selectedNames,
                gridType: grid.gridType,
                numPages: grid.numPages,
                gridId: event.target.value,
                grid: grid,
            }});
        } else if (grid.gridType === "5x2") {
            navigate("/selection5x2", { state: {
                selectedNames: grid.selectedNames,
                gridType: grid.gridType,
                numPages: grid.numPages,
                gridId: event.target.value,
                grid: grid,
            }});
        } else {
            navigate("/");
        }
    }

    return (
        <div>
            <h1>Saved Grids</h1>
            <div className="container">
                <div className="row">
                    {allGrids.map(grid => {
                        return (
                            <div className="col-12" style={{ border: "1px solid black", margin: "5px", padding: "1px" }} key={grid._id}>
                                <h1>{grid.showName}</h1>
                                <h2>{`Season ${grid.season}, Round ${grid.pitch}`}</h2>
                                <button className="btn btn-primary" value={grid._id} onClick={handleClick}>View Grid</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}