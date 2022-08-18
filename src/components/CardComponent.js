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
    },
    blankCard: {
        border: 'none',
        width: '2.48in',
        height: '3.92in',
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

function CardComponent({selection, sortedContestants}) {

    const index = sortedContestants.map(obj => `${obj.lastName}, ${obj.firstName}`).indexOf(selection)

    useEffect(() => {
        resizeText({
            elements: document.querySelectorAll(".card-text")
        });
    }, [])

    if (index > -1) {
        return (
            <div className="card rounded-0" style={styles.card}>
                <img src={`${sortedContestants[index].imgSrc}`} alt={`${sortedContestants[index].firstName} ${sortedContestants[index].lastName}'s Headshot`} className="card-img-top rounded-0" style={styles.img} />
                <div className="card-body" style={styles.cardBody}>
                    <p className="card-text" style={styles.cardInfo}>{`${sortedContestants[index].firstName} ${sortedContestants[index].lastName}`}</p>
                    <p className="card-text" style={styles.cardInfo}>{sortedContestants[index].ethnicity}</p>
                    <p className="card-text" style={styles.cardInfo}>{sortedContestants[index].relStatus}</p>
                    <p className="card-text" style={styles.cardInfo}>{sortedContestants[index].location}</p>
                    <p className="card-text" style={styles.cardInfo}>{`${sortedContestants[index].age} years old`}</p>
                    <p className="card-text" style={styles.cardInfo}>{`IQ: ${sortedContestants[index].IQ}`}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card rounded-0" style={styles.blankCard} />
        );
    }
};

export default CardComponent;