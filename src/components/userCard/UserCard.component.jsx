import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./UserCard.style.css";

const UserCard = ({user: {login, avatar_url, html_url}}) => { 

    return (
        <div className="card">
            <div className="user-details">
                <div className="profile">
                    <img src={avatar_url} alt="profile" className="profile__img" />
                </div>
                <h4 className="name">{ login }</h4>
            </div>
            <Link to={`/user/${login}`} className="btn btn-more">More</Link>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserCard;

