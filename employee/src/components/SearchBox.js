import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input placeholder='Search' onChange = {event => props.handleChange(event)}/>
        </div>
    )
} 

export default SearchBox