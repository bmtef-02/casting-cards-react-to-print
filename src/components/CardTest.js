import React, { useEffect } from "react";
import placeholder from "../img/placeholder.png"

const styles = {
    card: {
        border: 'solid 2px black',
        width: '2.48in',
        height: '3.92in',
    },
    rowImg: {
        borderBottom: 'solid 2px black',
        height: '2.28in',
    },
    img: {
        objectFit: 'cover',
        height: '2.26in',
        width: '2.44in',
        borderBottom: 'solid 2px black'
    },
    cardBody: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0',
        marginTop: '3px',
    },
    cardInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '0',
        // border: '1px solid black',
        width: '2.40in',    // full width is 2.44in
        height: '0.22in',   // full height is 0.26in
        fontSize: '16px'
    }
};

function CardTest() {
    return (
        <div className="card rounded-0" style={styles.card}>
            <img src={placeholder} alt="N/A" className="card-img-top rounded-0" style={styles.img} />
            <div className="card-body" style={styles.cardBody} />
        </div>
    );
};

export default CardTest;