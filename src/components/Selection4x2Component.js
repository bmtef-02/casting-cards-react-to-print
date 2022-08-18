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
    }
};

export default function Selection4x2() {

    const [sortedContestants, setSortedContestants] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [selectedNames, setSelectedNames] = useState(Array.from(Array(8)));
    const [numPages, setNumPages] = useState([""]);
    const location = useLocation();
    let start = 0;
    let end = 4;

    useEffect(() => {
        axios.get(`http://localhost:3000/contestants`)
        .then(resp => {
            const arr = resp.data;
            const sortedArr = arr.sort((a, b) => {
                let lastNameA = a.lastName.toUpperCase();
                let lastNameB = b.lastName.toUpperCase();
                let firstNameA = a.firstName.toUpperCase();
                let firstNameB = b.firstName.toUpperCase();

                if (lastNameA === lastNameB) {
                    return (firstNameA < firstNameB) ? -1 : (firstNameA > firstNameB) ? 1 : 0;
                }
                return (lastNameA < lastNameB) ? -1 : (lastNameA > lastNameB) ? 1 : 0;
            });
            const list = sortedArr.map(obj => {
                return {
                    value: `${obj.lastName}, ${obj.firstName}`,
                    label: `${obj.lastName}, ${obj.firstName}`
                }
            })
            setSortedContestants(sortedArr);
            setSearchList(list);
        })
        .catch(err => console.error(err))
    }, []);

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/print", { state: {
            selectedNames: selectedNames,
            sortedContestants: sortedContestants,
            gridType: location.state,
            numPages: numPages
        }})
    };

    const addPage = () => {
        const newNumPages = [...numPages];
        newNumPages.push("");
        const newSelectedNames = selectedNames.concat(Array.from(Array(8)))
        setNumPages(newNumPages);
        setSelectedNames(newSelectedNames);
    }

    return (
        <React.Fragment>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={addPage}>Add page</button>
            </div>
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
        </React.Fragment>
    )
};