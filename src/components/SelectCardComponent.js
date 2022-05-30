import React, { useState } from "react";

const styles = {
    card: {
        border: 'solid 2px black',
        width: '2.48in',
        height: '3.92in',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '0.5cm',
        paddingLeft: '0.5cm'
    }
};

function SelectCardComponent({ contestantList, cardNum, selectedNames, setSelectedNames }) {

    const handleFieldChange = (event) => {
        const newArray = [...selectedNames];
        newArray[cardNum] = event.target.value;
        console.log(newArray)
        setSelectedNames(newArray);
    };

    return (
        <div className="card rounded-0" style={styles.card}>
            <select onChange={handleFieldChange}>
                <option value={""} key={0} id={0}>None</option>
                {contestantList.map((name, index) => (
                    <option value={name} key={index + 1} id={index + 1}>{name}</option>
                ))}
            </select>
            <div>{`You chose: ${selectedNames[cardNum]}`}</div>
        </div>
    );
};

export default SelectCardComponent;