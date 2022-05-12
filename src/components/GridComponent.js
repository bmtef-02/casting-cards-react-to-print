import React from "react";
import CardComponent from "./CardComponent";

const styles = {
    page: {
        paddingTop: '0.1cm',
    },
    row: {
        margin: '10px'
    }
}

const GridComponent = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="container-fluid" style={styles.page}>
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