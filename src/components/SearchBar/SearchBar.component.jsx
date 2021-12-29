import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./SearchBar.style.css";

const SearchBar = ({ searchUsers, setAlert }) => {
    const [search, setSearch] = useState("");

    const handleChange = e => setSearch(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (search === '') setAlert('Please enter something!', 'danger');
        else {
            searchUsers(search);
            setSearch("");
        }
    }
    
    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" className="form__input" placeholder='search users' value={search} onChange={handleChange} />
            </form>
            <i className="fas fa-lg fa-search"></i>
        </div>
    )
}

SearchBar.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default SearchBar
