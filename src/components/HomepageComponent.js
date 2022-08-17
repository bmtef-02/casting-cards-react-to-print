import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const styles = {
    selectTitleRow: {
        textAlign: "center"
    },
    gridSelectRow: {
        textAlign: "center",
        marginTop: "25px",
    }
}

export default function Home() {

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        if (event.target.name === "4x2") {
            let path = `/selection4x2`;
            navigate(path, { state: event.target.name });
        } else if (event.target.name === "5x2") {
            console.log(event.target.name);
        }
    }
    return (
        <React.Fragment>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
            <div className="container">
                <div className="row" style={styles.selectTitleRow}>
                    <h1>Select how many cards you want in your grid:</h1>
                </div>
                <div className="row" style={styles.gridSelectRow}>
                    <div className="col">
                        <button type="button" className="btn btn-dark btn-lg" name="4x2" onClick={handleClick}>
                            4x2 Grid
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-dark btn-lg" name="5x2" onClick={handleClick}>
                            5x2 Grid
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}