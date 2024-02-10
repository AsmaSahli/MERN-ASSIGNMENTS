
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Params from './components/Params';

tnn  

function App() {
  return (

      <div className="App">

        <Routes>
          {<Route path="/home" element={<Home/>} />}
          {<Route path="/:word" element={<Params/>} />}
          {<Route path="/:word/:color/:bgcolor" element={<Params/>} />}
        </Routes>
      </div>
  );
}
export default App;
