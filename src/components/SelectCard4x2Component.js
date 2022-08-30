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

export default function SelectCard4x2({ searchList, cardNum, setChangedGrid, setGrid, grid }) {

    const handleFieldChange = (selectedName) => {
        const newArray = [...grid.selectedNames];

        if (selectedName === null) {
            newArray[cardNum] = "";
        } else {
            newArray[cardNum] = selectedName.value;
        }

        setGrid({
            ...grid,
            selectedNames: newArray
        })
        setChangedGrid(true)
    };

    return (
        <div className="card rounded-0" style={styles.card}>
            <Select
                defaultValue={
                    grid.selectedNames[cardNum] ?
                    {value: grid.selectedNames[cardNum], label: grid.selectedNames[cardNum]}
                    : null
                }
                options={searchList}
                onChange={handleFieldChange}
                isClearable={true}
            />
            <div>{`Card #${cardNum + 1}`}</div>
            <div>You chose: {(grid.selectedNames[cardNum] === "") ? `empty` :`${grid.selectedNames[cardNum]}`}</div>
        </div>
    );
};