import React, {Component} from 'react';
// import logo from './logo.svg';
import Contact from './Contact.js'
import './App.css';
import Header from './Header'
class App extends Component{
render() {


  return (
      <div className="App">
          <h1>This is my component</h1>
          <Header/>
          <Contact />

      </div>
  );
 }
}

export default App;
