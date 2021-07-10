import React from 'react';
import Table from 'react-bootstrap/Table'

const EmployeeTable = (props) => {
    console.log(props);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Photo
                        </th>
                        <th>
                            Name
                            <span onClick = {(event) => props.handleHeader(event)}>
                                Button
                            </span>
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            DOB
                        </th>
                    </tr>
                </thead>
                <tbody>
                {props.employees.map((employee) => {
                    return (
                    <tr key = {employee.login.uuid}>
                        <td>
                            <img src={employee.picture.thumbnail} alt='Employee Image'/>
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
            </table>
        </div>
    )
}

export default EmployeeTable;