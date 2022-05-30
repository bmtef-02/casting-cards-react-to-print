import React, { useState } from "react";
import { CONTESTANTS } from "../shared/contestants";
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
        padding: '0',
        marginTop: '3px',
    },
    cardInfo: {
        textAlign: 'center',
        marginBottom: '0'
    }
};

function CardComponent({selection}) {

    const [contestant, setContestant] = useState(CONTESTANTS)

    const index = contestant.map(obj => `${obj.lastName}, ${obj.firstName}`).indexOf(selection)

    if (index > -1) {
        return (
            <div className="card rounded-0" style={styles.card}>
                <img src="https://thehappypuppysite.com/wp-content/uploads/2018/06/Shiba-Inu-Wonderful-Watchdog-or-Family-Pet_-HP-long.jpg" alt="Shiba inu puppy" className="card-img-top rounded-0" style={styles.img} />
                <div className="card-body" style={styles.cardBody}>
                    <p className="card-text" style={styles.cardInfo}>{`${contestant[index].firstName} ${contestant[index].lastName}`}</p>
                    <p className="card-text" style={styles.cardInfo}>{contestant[index].ethnicity}</p>
                    <p className="card-text" style={styles.cardInfo}>{contestant[index].relStatus}</p>
                    <p className="card-text" style={styles.cardInfo}>{contestant[index].location}</p>
                    <p className="card-text" style={styles.cardInfo}>{`${contestant[index].age} years old`}</p>
                    <p className="card-text" style={styles.cardInfo}>{`IQ: ${contestant[index].IQ}`}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card rounded-0" style={styles.card}>
                <img src={placeholder} alt="N/A" className="card-img-top rounded-0" style={styles.img} />
                <div className="card-body" style={styles.cardBody} />
            </div>
        );
    }
};

export default CardComponent;