import React, {Component} from 'react';
// import logo from './logo.svg';
import Contacts from './Contacts'
// // import './App.css';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'

import './contact.css'
import Contact from "./Contact";
class App extends Component{
render() {


  return (
      <div className="App">
        <Header title="Contact Manager"  />
          <div className="container">
           <Contacts/>
      </div>
      </div>
  );
 }
}



export default App;
