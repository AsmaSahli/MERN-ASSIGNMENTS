import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/display';


function App() {
  const [box,setBox]=useState([])





  return (
    <div className="App">


        <Form box={box} setBox={setBox} />
        <Display box={box}/>

    </div>
  );
}

export default App;