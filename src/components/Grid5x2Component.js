import React from "react";
import { useLocation } from "react-router-dom";
import MiniCard from "./MiniCardComponent";

const styles = {
    page: {
        paddingTop: '0.1cm',
        width: '29.7cm',
        height: '21cm',
        backgroundColor: 'white',
        boxShadow: '0 0 0.5cm',
        marginTop: '0cm',
        marginBottom: '0.5cm',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    row: {
        margin: '50px 10px 10px 10px'
    }
};

const Grid5x2 = React.forwardRef((props, ref) => {
    const location = useLocation();
    let start = 0;
    let end = 5;

    return (
        <div ref={ref}>
            {location.state.numPages.map((obj, i) => {
                return (
                    <div className="container-fluid" style={styles.page} key={`page ${i + 1}`}>
                        <div className="row" style={styles.row}>
                            {location.state.selectedNames.slice(start, end).map(() => {
                                start += 1;
                                end += 1;

                                return (
                                    <div className="col" key={`card ${start-1}`}>
                                        <MiniCard selection={location.state.selectedNames[start-1]} sortedContestants={location.state.sortedContestants} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="row" style={styles.row}>
                            {location.state.selectedNames.slice(start, end).map(() => {
                                start += 1;
                                end += 1;

                                return (
                                    <div className="col" key={`card ${start-1}`}>
                                        <MiniCard selection={location.state.selectedNames[start-1]} sortedContestants={location.state.sortedContestants} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    )
});

export default Grid5x2;