import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <i className={icon}></i> {title}
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github fa-lg'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
