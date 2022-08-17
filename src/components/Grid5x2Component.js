import React from "react";
import { useLocation } from "react-router-dom";
import MiniCard from "./MiniCardComponent";

const styles = {
    page: {
        paddingTop: '0.1cm',
    },
    row: {
        margin: '50px 10px 10px 10px'
    }
};

const Grid5x2 = React.forwardRef((props, ref) => {
    const location = useLocation();

    return (
        <div ref={ref} className="container-fluid" style={styles.page}>
            <div className="row" style={styles.row}>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[0]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[1]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[2]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[3]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[4]} sortedContestants={location.state.sortedContestants} />
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[5]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[6]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[7]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[8]} sortedContestants={location.state.sortedContestants} />
                </div>
                <div className="col">
                    <MiniCard selection={location.state.selectedNames[9]} sortedContestants={location.state.sortedContestants} />
                </div>
            </div>
        </div>
    )
});

export default Grid5x2;