import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

    const hello = true;
    const name = "azmaeen";
    const a = 40;
    const b= 23;

   let math = (
        <h4>{a} + {b} = {a+b}</h4>
    );


  return (
      <div className="App">
          <h1>This is my component</h1>
          {hello? <h4>Hello {name.toUpperCase()}</h4>:null}
          {math}
      </div>
  );
}

export default App;
