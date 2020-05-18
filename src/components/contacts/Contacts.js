import React, {Component} from 'react';
import Contact from './Contact'
import {Consumer} from "../../Context";

class Contacts extends Component {


    // deleteContact=(id)=>{
    //     const {contacts} = this.state
    //     const newContacts = contacts.filter(item=> id!==item.id)
    //     this.setState({contacts:newContacts })
    // }
    render(){
        return(
        <Consumer>
            {
             value=>{
                 const {contacts} = value;
                 return (
                     <div>
                         {
                             contacts.map(item => (
                                 <Contact
                                     key = {item.id}
                                     item = {item}
                                     // deleteClickHandler ={ this.deleteContact.bind(this,item.id)}
                                 />
                             ))
                         }
                     </div>
                 );
             }
            }
        </Consumer>
        );
    }

}

export default Contacts;