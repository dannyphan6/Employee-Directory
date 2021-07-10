import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import SearchBox from './SearchBox'
import './style.css'

const Header = () => {
    return (
        <header>
            <Jumbotron className='jumbotron'>
                <h1>Employee Directory</h1>
                <p>
                    Search for an employee by name.
                </p>
                <hr class="my-4"></hr>
            </Jumbotron>
        </header>
    )
}

export default Header;