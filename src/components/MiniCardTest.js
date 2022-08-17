import React, { useRef } from "react";
import MiniCard from "./MiniCardComponent";

function PDF() {
    const pageStyle = `
        @page {
            size: 29.7cm 21cm;
        },
        @media print {
            @page { size: landscape; }
        }
    `;

    const styles = {
        page: {
            width: '29.7cm',
            height: '21cm',
            backgroundColor: 'white',
            boxShadow: '0 0 0.5cm',
            marginTop: '0.5cm',
            marginBottom: '0.5cm',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    };
    
    return (
        <React.Fragment>
            <div style={styles.page}>
                <div className="container-fluid" style={{ paddingTop: '0.1cm' }}>
                    <div className="row" style={{ margin: '50px 10px 10px 10px' }}>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                    </div>
                    <div className="row" style={{ margin: '50px 10px 10px 10px' }}>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                        <div className="col">
                            <MiniCard />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PDF;