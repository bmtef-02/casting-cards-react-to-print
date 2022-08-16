import React, { useEffect } from "react";
import placeholder from "../img/placeholder.png"

const styles = {
    card: {
        border: 'solid 2px black',
        width: '0.62in',
        height: '0.98in',
    },
    rowImg: {
        borderBottom: 'solid 2px black',
        height: '2.28in',
    },
    img: {
        objectFit: 'cover',
        height: '0.56in',
        width: '0.61in',
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
        width: '0.54in',    // full width is 2.44in
        height: '0.05in',   // full height is 0.26in
        fontSize: '4px'
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

function MiniCard({selection, sortedContestants}) {

    return (
        <div className="card rounded-0" style={styles.card}>
            <img src={placeholder} alt="N/A" className="card-img-top rounded-0" style={styles.img} />
            <div className="card-body" style={styles.cardBody} />
        </div>
    );

    // const index = sortedContestants.map(obj => `${obj.lastName}, ${obj.firstName}`).indexOf(selection)

    // useEffect(() => {
    //     resizeText({
    //         elements: document.querySelectorAll(".card-text")
    //     });
    // }, [])

    // if (index > -1) {
    //     return (
    //         <div className="card rounded-0" style={styles.card}>
    //             <img src={`${sortedContestants[index].imgSrc}`} alt={`${sortedContestants[index].firstName} ${sortedContestants[index].lastName}'s Headshot`} className="card-img-top rounded-0" style={styles.img} />
    //             <div className="card-body" style={styles.cardBody}>
    //                 <p className="card-text" style={styles.cardInfo}>{`${sortedContestants[index].firstName} ${sortedContestants[index].lastName}`}</p>
    //                 <p className="card-text" style={styles.cardInfo}>{sortedContestants[index].ethnicity}</p>
    //                 <p className="card-text" style={styles.cardInfo}>{sortedContestants[index].relStatus}</p>
    //                 <p className="card-text" style={styles.cardInfo}>{sortedContestants[index].location}</p>
    //                 <p className="card-text" style={styles.cardInfo}>{`${sortedContestants[index].age} years old`}</p>
    //                 <p className="card-text" style={styles.cardInfo}>{`IQ: ${sortedContestants[index].IQ}`}</p>
    //             </div>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="card rounded-0" style={styles.card}>
    //             <img src={placeholder} alt="N/A" className="card-img-top rounded-0" style={styles.img} />
    //             <div className="card-body" style={styles.cardBody} />
    //         </div>
    //     );
    // }
};

export default MiniCard;