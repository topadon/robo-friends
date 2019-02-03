import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input className='pa3 ba b--green bg-lightest-blue' onChange={ searchChange } type='search' placeholder='Search robots'/>
        </div>
    );
}

export default SearchBox;