import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "./CardComponent";

const styles = {
    page: {
        paddingTop: '0.1cm',
    },
    row: {
        margin: '10px'
    }
};

const GridComponent = React.forwardRef((props, ref) => {
    const location = useLocation();

    return (
        <div ref={ref} className="container-fluid" style={styles.page}>
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent selection={location.state[0]} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state[1]} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state[2]} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state[3]} />
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent selection={location.state[4]} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state[5]} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state[6]} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state[7]} />
                </div>
            </div>
        </div>
    )
});

export default GridComponent;