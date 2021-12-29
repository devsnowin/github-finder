import React, { useContext, useState } from 'react';
import "./SearchBar.style.css";
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

const SearchBar = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    
    const [search, setSearch] = useState("");

    const handleChange = e => setSearch(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (search === '') alertContext.setAlert('Please enter something!', 'danger');
        else {
            githubContext.searchUsers(search);
            setSearch("");
        }
    }
    
    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" className="form__input" placeholder='search users' value={search} onChange={handleChange} autoComplete="off"/>
            </form>
            <i className="fas fa-lg fa-search" onClick={handleSubmit}></i>
        </div>
    )
}

export default SearchBar
