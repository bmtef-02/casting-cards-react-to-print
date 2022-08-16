import React from 'react';
import MiniCard from './MiniCardComponent';
import CardTest from './CardTest';

export default function MiniCardTest() {

    return (
        <React.Fragment>
            <div >
                <MiniCard />
            </div>
            <div style={{marginTop: '15px'}} >
                <CardTest />
            </div>
        </React.Fragment>
    );
}