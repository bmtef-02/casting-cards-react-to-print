import React from "react";
import { useNavigate } from "react-router-dom";
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

    const handleClick = (event) => {
        event.preventDefault();
        if (event.target.name === "4x2") {
            let path = `/selection4x2`;
            navigate(path, { state: event.target.name });
        } else if (event.target.name === "5x2") {
            let path = `/selection5x2`;
            navigate(path, { state: event.target.name })
        } else {
            console.log("event.target.name is not 4x2 nor 5x2");
        }
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row" style={styles.selectTitleRow}>
                    <h1>Select how many cards you want in your grid:</h1>
                </div>
                <div className="row" style={styles.gridSelectRow}>
                    <div className="col-md" style={styles.gridSelectCol}>
                        <h3>4x2 Grid</h3>
                        <img src={Grid4x2Example} alt="Grid4x2Example" style={styles.img} name="4x2" onClick={handleClick} />
                    </div>
                    <div className="col-md" style={styles.gridSelectCol}>
                        <h3>5x2 Grid</h3>
                        <img src={Grid5x2Example} alt="Grid5x2Example" style={styles.img} name="5x2" onClick={handleClick} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}