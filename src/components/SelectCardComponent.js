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

function SelectCardComponent({contestantList}) {

    return (
        <div className="card rounded-0" style={styles.card}>
            <select>
                {contestantList.map((name, index) => (
                    <option value={name} key={index}>{name}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectCardComponent;