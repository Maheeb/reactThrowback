import React, {Component} from 'react';
// import logo from './logo.svg';
import Contact from './Contact.js'
// // import './App.css';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'

import './contact.css'
class App extends Component{
render() {


  return (
      <div className="App">
        <Header title="Contact Manager"  />
          <div className="container">
        <Contact name={"Maheeb"} address={"Dhaka"} phone={"555-555-555"}/>
          <Contact name={"Azmaeen"} address={"Dhaka"} phone={"333-333-333"}/>
      </div>
      </div>
  );
 }
}



export default App;
