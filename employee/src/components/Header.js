import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './style.css'

const Header = () => {
    return (
        <header>
            <Jumbotron className='custom-jumbotron'>
                <h1>Employee Directory</h1>
                <p>
                    Search for an employee by name.
                </p>
            </Jumbotron>
        </header>
    )
}

export default Header;