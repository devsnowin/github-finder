import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.style.css"

const NavBar = ({title, icon}) => {
    return (
        <nav className='nav-bar'>
            <h1 className='nav-brand'>
                <i className={icon}/>
                {title}
            </h1>
            <div className="nav-links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/about" className='nav-link'>About</Link>
            </div>
        </nav>
    )
}

NavBar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-lg fa-github'
}

export default NavBar
