import React from 'react';
import Table from 'react-bootstrap/Table'
import { BsArrowUpDown } from "react-icons/bs";

const EmployeeTable = (props) => {
    console.log(props);
    return (
        <div id="font">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>
                            Photo
                        </th>
                        <th>
                            Name
                            <span id="sort-btn"onClick = {(event) => props.handleHeader(event)}><BsArrowUpDown className="fa-4x"></BsArrowUpDown></span>
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                {props.employees.map((employee) => {
                    return (
                    <tr key = {employee.login.uuid}>
                        <td>
                            <img src={employee.picture.thumbnail} alt='Employee'/>
                        </td>
                        <td>
                            {employee.name.first} {employee.name.last}
                        </td>
                        <td>
                            {employee.email}
                        </td>
                        <td>
                            {employee.phone}
                        </td>
                        <td>
                            {employee.dob.age}
                        </td>
                    </tr>

                    )
                })

                }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default EmployeeTable;