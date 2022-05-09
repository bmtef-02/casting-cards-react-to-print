import React from "react";
import CardComponent from "./CardComponent";

const styles = {
    row: {
        margin: '10px'
    }
}

const GridComponent = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="container">
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent />
                </div>
                <div className="col">
                    <CardComponent />
                </div>
                <div className="col">
                    <CardComponent />
                </div>
                <div className="col">
                    <CardComponent />
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent />
                </div>
                <div className="col">
                    <CardComponent />
                </div>
                <div className="col">
                    <CardComponent />
                </div>
                <div className="col">
                    <CardComponent />
                </div>
            </div>
        </div>
    )
});

export default GridComponent;