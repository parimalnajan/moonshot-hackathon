<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    lets hack
=======
import React from 'react';
import { useState } from 'react';
import './App.css';
import  CustomizeButton from './buttons/CustumizeButton.jsx';
import firebaseinit from './firebase'
import { Sandpack } from "@codesandbox/sandpack-react";

function App() {
const [db,setDb] = useState([
    
  ])
  console.log(firebaseinit)


  return (
    <div className="App">

<Sandpack template="react" files={{"/App.js":<CustomizeButton/>}} SandpackPredefinedTheme = "dark" theme={"dark"} />;

 <CustomizeButton/>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
