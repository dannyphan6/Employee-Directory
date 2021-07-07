import React from 'react';

const EmployeeTable = (props) => {
    console.log(props);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            image
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <span onClick = {(event) => props.handleHeader(event)}>
                                Button
                            </span>
                            name
                        </th>
                    </tr>
                    <tr>
                        <th>
                            email
                        </th>
                    </tr>
                    <tr>
                        <th>
                            phone
                        </th>
                    </tr>
                    <tr>
                        <th>
                            age
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