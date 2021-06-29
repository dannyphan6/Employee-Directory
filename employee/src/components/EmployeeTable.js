import React from 'react';

const EmployeeTable = (props) => {
    console.log(props);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            name
                        </td>
                    </tr>
                    <tr>
                        <td>
                            email
                        </td>
                    </tr>
                    <tr>
                        <td>
                            phone
                        </td>
                    </tr>
                    <tr>
                        <td>
                            age
                        </td>
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