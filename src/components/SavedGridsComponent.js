import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SavedGrids() {

    const url = `http://localhost:3000/grids`;
    const [allGrids, setAllGrids] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            const arr = resp.data;
            setAllGrids(arr);
        })
        .catch(err => console.error(err))
    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.value)
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