import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { CONTESTANTS } from "../shared/contestants";

const styles = {
    page: {
        paddingTop: '0.1cm',
    },
    row: {
        margin: '10px'
    }
};

const GridComponent = React.forwardRef((props, ref) => {
    const [contestant, setContestant] = useState(CONTESTANTS)

    return (
        <div ref={ref} className="container-fluid" style={styles.page}>
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
                <div className="col">
                    <CardComponent contestant={contestant} />
                </div>
            </div>
        </div>
    )
});

export default GridComponent;