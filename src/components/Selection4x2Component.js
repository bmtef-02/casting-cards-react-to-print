import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import SelectCard4x2 from "./SelectCard4x2Component";
import Header from "./HeaderComponent";
import SaveModal from "./SaveModalComponent";
import ConfirmModal from "./ConfirmModalComponent";
import ErrorModal from "./ErrorModalComponents";

const styles = {
    page: {
        width: '29.7cm',
        height: '21cm',
        backgroundColor: 'white',
        boxShadow: '0 0 0.5cm',
        marginTop: '0.2cm',
        marginBottom: '0.5cm',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '0.1cm'
    },
    row: {
        margin: '10px'
    },
    addPageBtn: {
        margin: "0 15px 0 0",
        fontSize: "50px",
        cursor: "pointer",
    }
};

export default function Selection4x2() {

    const location = useLocation();
    const navigate = useNavigate();
    const [sortedContestants, setSortedContestants] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [grid, setGrid] = useState(
        location.state.grid ? location.state.grid :
        {
            _id: "",
            description: "",
            gridType: location.state.gridType,
            numPages: [""],
            pitch: "",
            season: "",
            selectedNames: Array.from(Array(8).fill("")),
            showName: ""
        }
    );

    const [filter, setFilter] = useState("name-a-z");
    const [openModal, setOpenModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [contestantLoading, setContestantLoading] = useState(true);
    const [validated, setValidated] = useState(false);
    const [changedGrid, setChangedGrid] = useState(
        location.state.changedGrid ? location.state.changedGrid : false
    );
    const [isGridNew, setIsGridNew] = useState(true);
    const cancelLink = grid._id ? "/savedGrids" : "/#create-grid"

    let start = 0;
    let end = 4

    useEffect(() => {
        let sortedArr = [];
        let list = [];
        // axios.get(`http://localhost:3000/contestants`)
        axios.get('https://casting-cards-app.onrender.com/contestants')
        .then(resp => {
            setContestantLoading(false);
            const arr = resp.data;
            if (filter === 'name-a-z' || null) {
                sortedArr = arr.sort((a, b) => {
                    let lastNameA = a.lastName.toUpperCase();
                    let lastNameB = b.lastName.toUpperCase();
                    let firstNameA = a.firstName.toUpperCase();
                    let firstNameB = b.firstName.toUpperCase();
    
                    if (lastNameA === lastNameB) {
                        return (firstNameA < firstNameB) ? -1 : (firstNameA > firstNameB) ? 1 : 0;
                    }
                    return (lastNameA < lastNameB) ? -1 : (lastNameA > lastNameB) ? 1 : 0;
                });

                list = sortedArr.map(obj => {
                    return {
                        value: `${obj.lastName}, ${obj.firstName}`,
                        label: `${obj.lastName}, ${obj.firstName}`
                    }
                });
            } else if (filter === 'name-z-a') {
                sortedArr = arr.sort((a, b) => {
                    let lastNameA = a.lastName.toUpperCase();
                    let lastNameB = b.lastName.toUpperCase();
                    let firstNameA = a.firstName.toUpperCase();
                    let firstNameB = b.firstName.toUpperCase();
    
                    if (lastNameA === lastNameB) {
                        return (firstNameA < firstNameB) ? 1 : (firstNameA > firstNameB) ? -1 : 0;
                    }
                    return (lastNameA < lastNameB) ? 1 : (lastNameA > lastNameB) ? -1 : 0;
                });

                list = sortedArr.map(obj => {
                    return {
                        value: `${obj.lastName}, ${obj.firstName}`,
                        label: `${obj.lastName}, ${obj.firstName}`
                    }
                });
            } else if (filter === 'age-ascending') {
                sortedArr = arr.sort((a, b) => {
                    let lastNameA = a.lastName.toUpperCase();
                    let lastNameB = b.lastName.toUpperCase();

                    if (a.age === b.age) {
                        return (lastNameA < lastNameB) ? -1 : (lastNameA > lastNameB) ? 1 : 0;
                    }
                    return (a.age < b.age) ? -1 : (a.age > b.age) ? 1 : 0;
                });

                list = sortedArr.map(obj => {
                    return {
                        value: `${obj.lastName}, ${obj.firstName}`,
                        label: `${obj.lastName}, ${obj.firstName} (${obj.age})`
                    }
                });
            } else if (filter === 'age-descending') {
                sortedArr = arr.sort((a, b) => {
                    let lastNameA = a.lastName.toUpperCase();
                    let lastNameB = b.lastName.toUpperCase();

                    if (a.age === b.age) {
                        return (lastNameA < lastNameB) ? -1 : (lastNameA > lastNameB) ? 1 : 0;
                    }
                    return (a.age < b.age) ? 1 : (a.age > b.age) ? -1 : 0;
                });

                list = sortedArr.map(obj => {
                    return {
                        value: `${obj.lastName}, ${obj.firstName}`,
                        label: `${obj.lastName}, ${obj.firstName} (${obj.age})`
                    }
                });
            } else if (filter === 'ethnicity') {
                sortedArr = arr.sort((a, b) => {
                    let lastNameA = a.lastName.toUpperCase();
                    let lastNameB = b.lastName.toUpperCase();

                    if (a.ethnicity === b.ethnicity) {
                        return (lastNameA < lastNameB) ? -1 : (lastNameA > lastNameB) ? 1 : 0;
                    }
                    return (a.ethnicity < b.ethnicity) ? -1 : (a.ethnicity > b.ethnicity) ? 1 : 0;
                });

                list = sortedArr.map(obj => {
                    return {
                        value: `${obj.lastName}, ${obj.firstName}`,
                        label: `${obj.lastName}, ${obj.firstName} (${obj.ethnicity})`
                    }
                });
            }
            setSortedContestants(sortedArr);
            setSearchList(list);
        })
        .catch(err => {
            setErrorModal(true);
            setContestantLoading(false);
            console.error(err)
        })
    }, [filter]);

    const handleSubmit = () => {
        navigate("/print", { state: {
            sortedContestants: sortedContestants,
            changedGrid: changedGrid,
            grid: grid,
        }})
    };

    const addMinusPage = (e) => {
        const newNumPages = [...grid.numPages];

        if (e.target.id === "add") {
            newNumPages.push("");
            const newSelectedNames = grid.selectedNames.concat(Array.from(Array(8).fill("")))
           setGrid({
                ...grid,
                numPages: newNumPages,
                selectedNames: newSelectedNames
            });
            setChangedGrid(true);
        } else if (e.target.id === "minus") {
            newNumPages.pop();
            const newSelectedNames = grid.selectedNames;
            newSelectedNames.splice(grid.selectedNames.length - 8, 8);
            setGrid({
                ...grid,
                numPages: newNumPages,
                selectedNames: newSelectedNames
            });
            setChangedGrid(true);
        } else console.log("invalid button");
    }

    if (grid.gridType === "4x2") {
        return (
            <React.Fragment>
                <Header />
                <div className="container pt-2">
                    <div className="row">
                        <div className="col-auto">
                            <button className="btn btn-success" onClick={handleSubmit}>Preview PDF</button>
                        </div>
                        <div className="col-auto">
                            <Link to={cancelLink}>
                                <button className="btn btn-danger" href="/">Cancel</button>
                            </Link>
                        </div>
                        <div className="col-auto">
                            {grid._id ?
                                <button className="btn btn-primary position-relative" onClick={() => setOpenModal(true)}>
                                    Update / Edit Title
                                    {changedGrid ? 
                                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                            <span className="visually-hidden">Save Alert</span>
                                        </span>
                                        : null
                                    }
                                </button>
                                :
                                <button className="btn btn-primary position-relative" onClick={() => setOpenModal(true)}>
                                    Save
                                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span className="visually-hidden">Save Alert</span>
                                    </span>
                                </button>
                            }
                        </div>
                        <div className="col">
                            <div className="row" style={{alignItems: "center", justifyContent: "flex-end" }}>
                                <div className="col-auto">
                                    <h5 className="m-0">Filter Options:</h5>
                                </div>
                                <div className="col-4">
                                    <select className='form-select' onChange={(e) => setFilter(e.target.value)}>
                                        <option value='name-a-z' defaultValue>Last Name (A-Z)</option>
                                        <option value='name-z-a' defaultValue>Last Name (Z-A)</option>
                                        <option value='age-ascending'>Age (Ascending)</option>
                                        <option value='age-descending'>Age (Descending)</option>
                                        <option value='ethnicity'>Ethnicity (A-Z)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                            <h3 className="m-0">
                                {grid.showName ? `${grid.showName}` : `Untitled`}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                            <h4 className="m-0">
                                {grid.showName ? `Season ${grid.season} - Round ${grid.pitch}` : null}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    {grid.numPages.map((obj, i) => {
                        return (
                            <div style={styles.page} key={`page ${i + 1}`}>
                                <div className="container-fluid">
                                    <div className="row" style={styles.row}>
                                        {grid.selectedNames.slice(start, end).map(() => {
                                            start += 1;
                                            end += 1;
                                            return (
                                                <div className="col" key={`card ${start - 1}`}>
                                                    <SelectCard4x2 
                                                        searchList={searchList} 
                                                        cardNum={start - 1} 
                                                        setGrid={setGrid}
                                                        grid={grid}
                                                        setChangedGrid={setChangedGrid}
                                                        contestantLoading={contestantLoading}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="row" style={styles.row}>
                                        {grid.selectedNames.slice(start, end).map(() => {
                                            start += 1;
                                            end += 1;
                                            return (
                                                <div className="col" key={`card ${start - 1}`}>
                                                    <SelectCard4x2 
                                                        searchList={searchList} 
                                                        cardNum={start - 1}
                                                        setGrid={setGrid}
                                                        grid={grid}
                                                        setChangedGrid={setChangedGrid}
                                                        contestantLoading={contestantLoading}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="position-absolute bottom-0 end-0" style={{ marginRight: "10px" }}>
                        <div>
                            <i className="bi bi-plus-circle-fill" id="add" style={styles.addPageBtn} onClick={addMinusPage} />
                        </div>
                        {grid.numPages.length > 1 ?
                            <div>
                                <i className="bi bi-dash-circle-fill" id="minus" style={styles.addPageBtn} onClick={addMinusPage} />
                            </div>
                            :
                            null
                        }
                    </div>
                    
                </div>
                <SaveModal 
                    openModal={openModal}
                    setOpenModal={setOpenModal} 
                    setConfirmModal={setConfirmModal} 
                    validated={validated} 
                    setValidated={setValidated}
                    changedGrid={changedGrid}
                    setChangedGrid={setChangedGrid}
                    grid={grid}
                    setGrid={setGrid}
                    setIsGridNew={setIsGridNew}
                    setErrorModal={setErrorModal}
                />
                <ConfirmModal 
                    confirmModal={confirmModal} 
                    setConfirmModal={setConfirmModal} 
                    setValidated={setValidated}
                    grid={grid}
                    isGridNew={isGridNew}
                />
                <ErrorModal
                    errorModal={errorModal}
                    setErrorModal={setErrorModal}
                />
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
                <h1>Grid Type Unknown. Please go back to Homepage.</h1>
            </React.Fragment>
        );
    }
};