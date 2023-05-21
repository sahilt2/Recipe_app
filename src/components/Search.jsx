import React from 'react';

const Search = ({change}) => {
    return (
        <div className='search-input'>
            <label htmlFor="search">Search for recipe</label>
            <input type="text" id="search" onChange={change} placeholder='country or recipe name ..'/>
        </div>
    );
};

export default Search;