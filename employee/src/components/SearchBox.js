import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input onChange = {event => props.handleChange(event)}/>
        </div>
    )
} 

export default SearchBox