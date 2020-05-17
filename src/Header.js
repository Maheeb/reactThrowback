import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './contact.css'
const Header = (props) =>{

    const {title} = props;
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <a  style={headerStyle} className="navbar-brand" href="#">{title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        </nav>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headerStyle = {
    color: 'white',
    fontSize: '20px'
}
export default Header;
