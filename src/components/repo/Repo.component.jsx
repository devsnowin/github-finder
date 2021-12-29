import React from 'react';
import PropTypes from 'prop-types';
import "./Repo.style.css";

export const Repo = ({repo}) => {
    return (
        <div className="repo">
            <h3>
                <a href={repo.html_url} target="_blank">{ repo.name }</a>
            </h3>
            <hr />
        </div>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired,
}
