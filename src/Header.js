import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './contact.css'
const Header = (props) =>{

    const {title} = props;
    return(
        <div>
            <h2 style={headerStyle}> {title} </h2>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headerStyle = {
    color: 'green',
    fontSize: '50px'
}
export default Header;
