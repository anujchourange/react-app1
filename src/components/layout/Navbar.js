import React  from 'react';
import PropTypes from 'prop-types';

const Navbar =({icon,title})=> {
    Navbar.defaultProps ={
        title:'Github Finder',
        icon :'fab fa-github'
    };

    Navbar.propTypes = {
        title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    };

    
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}/> {title}
            </h1> 
        </nav>
    )

}

export default Navbar
