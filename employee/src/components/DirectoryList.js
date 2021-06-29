import React, {Component} from 'react'
import API from '../utils/api'
import EmployeeTable from './EmployeeTable'
import SearchBox from './SearchBox'

class DirectoryList extends Component {
    state = {
        users: [],
        filteredUsers: [],
        order: 'descend'
    }

    // When page loads, run the function that calls the API
    componentDidMount() {
        API.getRandomUser().then(res => {
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            })
        })
    }

    handleChange = (event) => {
        // Value that users entered 
        const value = event.target.value

        // Filters through all users from API call
        const filteredUsers = this.state.users.filter(user => {
            
            // Taking user input and joining it all together in lowercase in the event that they don't capitalize a employee's name
            let userValues = Object.values(user).join('').toLowerCase()

            // Taking those values and checking to see if that data exists in the API call
            // If values exist in the API call, then the array has an index IF NOT then data doesn't exist in array
            return userValues.indexOf(value.toLowerCase()) !== -1
        })
        this.setState({
            filteredUsers: filteredUsers
        })
    }
    render() {
        return (
            <div>

            <SearchBox handleChange = {this.handleChange}></SearchBox>
            <EmployeeTable employees = {this.state.filteredUsers}>

            </EmployeeTable>
            </div>
        )
    }
}

export default DirectoryList
