import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from './components/Header';
import React, {Component} from 'react';

function App() {
  // const [input, setInput] = useState("");
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return (

     <div>
      {/* <input type="text"  value={input}  onChange={(e) => setInput(e.target.value)} />
      <h3>Input text: {input}</h3> */}
       <FormInput />
      <ChildComponent count={count} onClick={incrementCount}  />
      <Header />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

function FormInput() {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Input text: {input}</h3>
    </div>
  );
}
// function ChildComponent() {
//   console.log("child component is rendering");
//   return <div>This is child component.</div>;
// };

const ChildComponent = React.memo(function ChildComponent({ count, onClick }) {
  console.log("child component is rendering");
  return (
    <div>
      {/* ... */}
      <button onClick={onClick}>Increment</button>
      {/* ... */}
    </div>
  );
});

export default App;

//const DocumentWorkItemPage = (props)=>{}
//export default DocumentWorkItemPage;
