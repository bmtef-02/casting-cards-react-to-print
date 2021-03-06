import React, { useState } from "react";
import Select from 'react-select'

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

function SelectCardComponent({ searchList, cardNum, selectedNames, setSelectedNames }) {

    const handleFieldChange = (selectedName) => {
        const newArray = [...selectedNames];

        if (selectedName === null) {
            newArray[cardNum] = undefined;
        } else {
            newArray[cardNum] = selectedName.value;
        }

        setSelectedNames(newArray);
    };

    return (
        <div className="card rounded-0" style={styles.card}>
            <Select 
                options={searchList}
                onChange={handleFieldChange}
                isClearable={true}
            />
            <div>{`You chose: ${selectedNames[cardNum]}`}</div>
        </div>
    );
};

export default SelectCardComponent;