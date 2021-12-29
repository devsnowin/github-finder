import React, { useContext, useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader';
import User from '../userCard/UserCard.component'
import GithubContext from '../../context/github/githubContext';
import "./UserCards.style.css"

const UserCards = () => {

    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;
    
    if (loading) return <PulseLoader css={loaderStyle} />
    else if (users) {
        return (
            <div className='cards'>
                {users.map(user => { return <User key={user.id} user={user} /> })}
            </div>
        );
    }
    else return <>
        <h1>No users found!</h1>
    </>;
}

const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    color: 'rgb(48, 40, 73)'
}

export default UserCards;
