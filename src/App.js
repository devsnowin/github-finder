import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/layout/navbar/NavBar.component';
import Alert from './components/layout/alert/Alert.component';
import SearchBar from './components/SearchBar/SearchBar.component';
import UserCards from "./components/userCards/UserCards.component";
import About from "./components/pages/about/About.component";
import User from './components/pages/user/User.component';
import './App.css';

const App = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    setLoading(true);
    
    const GITHUB_API = `https://api.github.com/users?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const res = await axios.get(GITHUB_API);
    
    setUsers(res.data);
    setLoading(false);
  }
  
  // Search github users
  const searchUsers = async text => {
    setLoading(true);    
    const GITHUB_API = `https://api.github.com/search/users?q=${text}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const res = await axios.get(GITHUB_API);
    
    setLoading(false);    
    setUsers(res.data.items);
    
    setAlert('Founded a list of users!', 'success');
    
  }
  
  // Get single GitHub user
  const getUser = async (username) => {
    setLoading(true);  
    
    const GITHUB_API = `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const res = await axios.get(GITHUB_API);
    
    setLoading(false);
    setUser(res.data);
  }
  
  // Get users repo
  const getUserRepos = async (username) => {
    setLoading(true);
    
    const GITHUB_API = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const res = await axios.get(GITHUB_API);
    
    setLoading(false);
    setRepos(res.data);
    }

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  }
    
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Alert alert={alert} />          
          <Routes>
            <Route index exact path="/" element={ 
                <Fragment>
                <SearchBar searchUsers={searchUsers} setAlert={showAlert} />
                <UserCards loading={loading} users={users} />
                </Fragment>
            } />
            <Route path="/about" element={<About />} />
            <Route
              path="/user/:username"
              element={<User getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={ loading }/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
