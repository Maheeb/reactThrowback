import React, {Component} from 'react';
// import logo from './logo.svg';
import Contacts from './components/contacts/Contacts'
// // import './App.css';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "./Context";
import './contact.css'
import Contact from "./components/contacts/Contact";
import AddContact from "./components/contacts/AddContact"
class App extends Component{
render() {


  return (
      <Provider>
      <div className="App">
        <Header title="Contact Manager"  />
          <div className="container">
              <AddContact/>
           <Contacts/>
      </div>
      </div>
      </Provider>
  );
 }
}



export default App;
