import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Contacts from './Contacts'
import PropTypes from 'prop-types'
import {Consumer} from "../../Context";
import '../../contact.css'
class Contact extends Component {
    state ={  showContactInfo: true};
    onShowClick = (e)=>{
        this.setState( {showContactInfo: !this.state.showContactInfo} )
    }
    onDeleteClick = (id, dispatch)=>{
        // this.props.deleteClickHandler();
        dispatch({type: 'Delete_Contact', payload:id});
    }

   render() {
       const {id,name,address,phone} = this.props.item;
       const {showContactInfo} = this.state;
       return (
           <Consumer>
               {
                   value=> {
                       const {dispatch} = value;
                       return(
                       <div className="card card-body mb-3">
                           <h4>{name} <i
                               onClick={this.onShowClick}
                               className="fa fa-sort-down"
                               style={{cursor: 'pointer'}}
                           />
                               <i className="fa fa-times"
                                  style={{cursor: 'pointer', float: 'right', color: 'red'}}
                                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                               >
                               </i>
                           </h4>
                           {showContactInfo ? (<ul className="list-group">
                               <li className="list-group-item">Address: {address} </li>
                               <li className="list-group-item">Phone No: {phone}  </li>
                           </ul>) : null}

                       </div>
                   )
                   }
               }

           </Consumer>


       );
   }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     blood: PropTypes.string.isRequired
// }
//

export default Contact;
