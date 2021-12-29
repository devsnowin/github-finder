import React, { useState } from 'react'
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';
import User from '../userCard/UserCard.component'
import "./UserCards.style.css"

const UserCards = ({ users, loading }) => {
    if (loading) return <PulseLoader css={loaderStyle} />
    else if (users) {
        return (
            <div className='cards'>
                {users.map(user => { return <User key={user.id} user={user} /> })}
            </div>
        );
    }
    else return <></>;
}

const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    color: 'rgb(48, 40, 73)'
}

UserCards.propTypes = {
    users: PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default UserCards;
