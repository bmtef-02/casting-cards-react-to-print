import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import SelectCard4x2 from "./SelectCard4x2Component";

const styles = {
    page: {
        width: '29.7cm',
        height: '21cm',
        backgroundColor: 'white',
        boxShadow: '0 0 0.5cm',
        marginTop: '0.5cm',
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
    const [selectedNames, setSelectedNames] = useState(
        location.state.selectedNames ? location.state.selectedNames : Array.from(Array(8).fill(""))
    );
    const [numPages, setNumPages] = useState(
        location.state.numPages ? location.state.numPages : [""]
    );
    const [filter, setFilter] = useState("name-a-z");
    
    let start = 0;
    let end = 4

    useEffect(() => {
        let sortedArr = [];
        let list = [];
        axios.get(`http://localhost:3000/contestants`)
        .then(resp => {
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
        .catch(err => console.error(err))
    }, [filter]);

    const handleSubmit = () => {
        navigate("/print", { state: {
            selectedNames: selectedNames,
            sortedContestants: sortedContestants,
            gridType: location.state.gridType,
            numPages: numPages
        }})
    };

    const addMinusPage = (e) => {
        const newNumPages = [...numPages];

        if (e.target.id === "add") {
            newNumPages.push("");
            const newSelectedNames = selectedNames.concat(Array.from(Array(8).fill("")))
            setNumPages(newNumPages);
            setSelectedNames(newSelectedNames);
        } else if (e.target.id === "minus") {
            newNumPages.pop();
            const newSelectedNames = selectedNames;
            newSelectedNames.splice(selectedNames.length - 8, 8);
            setNumPages(newNumPages);
            setSelectedNames(newSelectedNames);
        } else console.log("invalid button");
    }

    if (location.state.gridType === "4x2") {
        return (
            <React.Fragment>
                <div className="container pt-2">
                    <div className="row">
                        <div className="col-auto">
                            <Link to="/">
                                <button className="btn btn-dark" href="/">Home</button>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="col">
                            <div className="row" style={{alignItems: "center", justifyContent: "flex-end" }}>
                                <div className="col-auto">
                                    <h5 className="m-0">Filter Options:</h5>
                                </div>
                                <div className="col-6">
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
                </div>
                <div className="position-relative">
                    {numPages.map((obj, i) => {
                        return (
                            <div style={styles.page} key={`page ${i + 1}`}>
                                <div className="container-fluid">
                                    <div className="row" style={styles.row}>
                                        {selectedNames.slice(start, end).map(() => {
                                            start += 1;
                                            end += 1;
                                            return (
                                                <div className="col" key={`card ${start - 1}`}>
                                                    <SelectCard4x2 searchList={searchList} cardNum={start - 1} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="row" style={styles.row}>
                                        {selectedNames.slice(start, end).map(() => {
                                            start += 1;
                                            end += 1;
                                            return (
                                                <div className="col" key={`card ${start - 1}`}>
                                                    <SelectCard4x2 searchList={searchList} cardNum={start - 1} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
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
                        {numPages.length > 1 ?
                            <div>
                                <i className="bi bi-dash-circle-fill" id="minus" style={styles.addPageBtn} onClick={addMinusPage} />
                            </div>
                            :
                            null
                        }
                    </div>
                    
                </div>
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