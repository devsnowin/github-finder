import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/navbar/NavBar.component';
import Alert from './components/layout/alert/Alert.component';
import Home from './components/pages/home/Home.component';
import About from "./components/pages/about/About.component";
import User from './components/pages/user/User.component';
import NotFound from './components/pages/notFound/NotFound.component';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:username" element={<User />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
            <Alert />
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
