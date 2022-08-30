import React from "react";
import CardComponent from "./CardComponent";

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
        margin: '10px'
    }
};

const Grid4x2 = React.forwardRef((props, ref) => {
    
    const {
        numPages,
        selectedNames,
        sortedContestants
    } = props;
    let start = 0;
    let end = 4;

    return (
        <div ref={ref}>
            {numPages.map((obj, i) => {
                return (
                    <div className="container-fluid" style={styles.page} key={`page ${i + 1}`}>
                        <div className="row" style={styles.row}>
                            {selectedNames.slice(start, end).map(() => {
                                start += 1;
                                end += 1;

                                return (
                                    <div className="col" key={`card ${start-1}`}>
                                        <CardComponent selection={selectedNames[start-1]} sortedContestants={sortedContestants} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="row" style={styles.row}>
                            {selectedNames.slice(start, end).map(() => {
                                start += 1;
                                end += 1;

                                return (
                                    <div className="col" key={`card ${start-1}`}>
                                        <CardComponent selection={selectedNames[start-1]} sortedContestants={sortedContestants} />
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

export default Grid4x2;