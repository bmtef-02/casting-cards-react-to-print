import React, { useEffect, useState } from "react";
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
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0',
        marginTop: '3px',
    },
    cardInfoTest: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '0',
        // border: '1px solid black',
        width: '2.43in',    // full width is 2.44in
        height: '0.22in',   // full height is 0.26in
        fontSize: '16px'
    }
};

const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight;

const resizeText = ({
    elements,
    minSize = 5,
    maxSize = 20,
    step = 1,
    unit = 'px'
}) => {
    elements.forEach((el) => {
        let i = maxSize;

        while (isOverflown(el) && i >= minSize) {
            i -= step;
            el.style.fontSize = `${i}${unit}`;
        }


    });
};

function CardComponentTest({selection}) {

    const [contestant, setContestant] = useState(CONTESTANTS)

    const index = contestant.map(obj => `${obj.lastName}, ${obj.firstName}`).indexOf(selection)

    useEffect(() => {
        console.log("useEffect happened")
        resizeText({
            elements: document.querySelectorAll(".card-text-test")
        });
    }, [])

    if (index > -1) {
        return (
            <div className="card rounded-0" style={styles.card}>
                <img src="https://thehappypuppysite.com/wp-content/uploads/2018/06/Shiba-Inu-Wonderful-Watchdog-or-Family-Pet_-HP-long.jpg" alt="Shiba inu puppy" className="card-img-top rounded-0" style={styles.img} />
                <div className="card-body" style={styles.cardBody}>
                    <p className="card-text-test" style={styles.cardInfoTest}>{`${contestant[index].firstName} ${contestant[index].lastName}`}</p>
                    <p className="card-text-test" style={styles.cardInfoTest}>{contestant[index].ethnicity}</p>
                    <p className="card-text-test" style={styles.cardInfoTest}>{contestant[index].relStatus}</p>
                    <p className="card-text-test" style={styles.cardInfoTest}>{contestant[index].location}</p>
                    <p className="card-text-test" style={styles.cardInfoTest}>{`${contestant[index].age} years old`}</p>
                    <p className="card-text-test" style={styles.cardInfoTest}>{`IQ: ${contestant[index].IQ}`}</p>
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

export default CardComponentTest;