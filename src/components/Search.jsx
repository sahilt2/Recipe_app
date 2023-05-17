import React from 'react';

const Search = ({change}) => {
    return (
        <div>
            <label htmlFor="search">Search for recipe:</label>
            <input type="text" id="search" onChange={change}/>
        </div>
    );
};

export default Search;