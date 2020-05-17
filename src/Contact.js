import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import PropTypes from 'prop-types'
import './contact.css'
class Contact extends Component {
   render() {






       const {name,address,blood} = this.props;
       return (
           <div >
               <ul>
                   <li>Name: {name} </li>
                   <li>Address: {address} </li>
                   <li>Blood group: {blood}  </li>
               </ul>
           </div>
       );
   }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    blood: PropTypes.string.isRequired
}

export default Contact;
