import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_REPOS
} from '../types';

let GITHUB_CLIENT_ID;
let GITHUB_CLIENT_SECRET;

if (process.env.NODE_ENV !== 'production') {
    GITHUB_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    GITHUB_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
}
else {
    GITHUB_CLIENT_ID = process.env.CLIENT_ID;
    GITHUB_CLIENT_SECRET = process.env.CLIENT_SECRET;
}

const GithubState = props => {    
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search users
    const searchUsers = async text => {
        setLoading();

        const GITHUB_API = `https://api.github.com/search/users?q=${text}&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(GITHUB_API);
        
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    // Get user
    const getUser = async (username) => {
        setLoading();  
        
        const GITHUB_API = `https://api.github.com/users/${username}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(GITHUB_API);
        
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    // Get repos
    const getUserRepos = async (username) => {
        setLoading();
        
        const GITHUB_API = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(GITHUB_API);
        
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    // Set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            getUserRepos,
            getUser
        }}
    >
        {props.children}
    </GithubContext.Provider>
    
}

export default GithubState;
