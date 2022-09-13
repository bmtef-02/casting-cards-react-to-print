import React from "react";
import Select from 'react-select'
import Spinner from "react-bootstrap/Spinner";

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

export default function SelectCard4x2(props) {

    const {
        searchList,
        cardNum,
        setChangedGrid,
        setGrid,
        grid,
        contestantLoading,
    } = props;

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
            { contestantLoading ? 
                <div className="text-center">
                    Loading contestants...
                    <Spinner animation="border" className="mb-2" />
                </div>
                : null
            }
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
            <div className="text-center mt-2">{`Card #${cardNum + 1}`}</div>
            <div className="text-center">You chose: {(grid.selectedNames[cardNum] === "") ? `empty` :`${grid.selectedNames[cardNum]}`}</div>
        </div>
    );
};