import React from 'react'
import PropTypes from 'prop-types';
import { Repo } from '../repo/Repo.component';
import "./Repos.style.css";

export const Repos = ({repos}) => {
    return (
        <div className="repos">
            <h1>Recent Activities</h1>
            {repos.map(repo => <Repo repo={repo} key={repo.id} />)}
        </div>
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}
