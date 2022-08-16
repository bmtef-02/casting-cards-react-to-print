import React from "react";
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
                    <CardComponent selection={location.state.selectedNames[0]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state.selectedNames[1]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state.selectedNames[2]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state.selectedNames[3]} sortedContestants={location.state.sortedContestants} />
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent selection={location.state.selectedNames[4]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state.selectedNames[5]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state.selectedNames[6]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <CardComponent selection={location.state.selectedNames[7]} sortedContestants={location.state.sortedContestants} />
                </div>
            </div>
        </div>
    )
});

export default GridComponent;