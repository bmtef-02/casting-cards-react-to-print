import React, { useState } from "react";

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
        padding: '0',
        marginTop: '3px',
    },
    cardInfo: {
        textAlign: 'center',
        marginBottom: '0'
    }
};

function CardComponent({contestant}) {

    return (
        <div className="card rounded-0" style={styles.card}>
            <img src="https://thehappypuppysite.com/wp-content/uploads/2018/06/Shiba-Inu-Wonderful-Watchdog-or-Family-Pet_-HP-long.jpg" alt="Shiba inu puppy" className="card-img-top rounded-0" style={styles.img} />
            <div className="card-body" style={styles.cardBody}>
                <p className="card-text" style={styles.cardInfo}>{contestant[0].name}</p>
                <p className="card-text" style={styles.cardInfo}>{contestant[0].ethnicity}</p>
                <p className="card-text" style={styles.cardInfo}>{contestant[0].relStatus}</p>
                <p className="card-text" style={styles.cardInfo}>{contestant[0].location}</p>
                <p className="card-text" style={styles.cardInfo}>{contestant[0].age}</p>
                <p className="card-text" style={styles.cardInfo}>{contestant[0].IQ}</p>
            </div>
        </div>
    );
}

export default CardComponent;