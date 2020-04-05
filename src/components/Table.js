import React, { useState, useContext } from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
import Button from "./Button.js"
import { EmployeeContext } from './EmployeeContext.js';


function Table() {
    
    const [url] = useState("https://randomuser.me/api/?results=25")
    
    const { sortFunc } = useGet(url);
    
    const { displayedEmployees} = useContext(EmployeeContext)

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc("name")}><Button>First Name</Button></td>
                    <td onClick={() => sortFunc("lastname")}><Button>Last Name</Button></td>
                    <td onClick={() => sortFunc("age")}><Button>Age</Button></td>
                    <td onClick={() => sortFunc("gender")}><Button>Gender</Button></td>
                    <td>E-mail</td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.dob.age}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>          
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;