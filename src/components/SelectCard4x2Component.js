import React from "react";
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

export default function SelectCard4x2({ searchList, cardNum, selectedNames, setSelectedNames }) {

    const handleFieldChange = (selectedName) => {
        const newArray = [...selectedNames];

        if (selectedName === null) {
            newArray[cardNum] = "";
        } else {
            newArray[cardNum] = selectedName.value;
        }

        setSelectedNames(newArray);
    };

    console.log(selectedNames)
    console.log(searchList)

    return (
        <div className="card rounded-0" style={styles.card}>
            <Select
                defaultValue={
                    selectedNames[cardNum] ?
                    {value: selectedNames[cardNum], label: selectedNames[cardNum]}
                    : null
                }
                options={searchList}
                onChange={handleFieldChange}
                isClearable={true}
            />
            <div>{`Card #${cardNum + 1}`}</div>
            <div>You chose: {(selectedNames[cardNum] === "") ? `empty` :`${selectedNames[cardNum]}`}</div>
        </div>
    );
};