import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SelectCardComponent from "./SelectCardComponent";

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

function SelectionComponent() {

    const [sortedContestants, setSortedContestants] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [selectedNames, setSelectedNames] = useState(Array(8));

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
            sortedContestants: sortedContestants
        }})
    }

    return (
        <React.Fragment>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div style={styles.page}>
                <div className="container-fluid">
                    <div className="row" style={styles.row}>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={0} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={1} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={2} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={3} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                    </div>
                    <div className="row" style={styles.row}>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={4} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={5} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={6} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                        <div className="col">
                            <SelectCardComponent searchList={searchList} cardNum={7} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SelectionComponent;