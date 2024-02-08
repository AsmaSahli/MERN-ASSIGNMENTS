// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import Show from './components/Show';



function App() {
  return (

      <div className="App">
        <h2></h2>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/country/:name" element={<Show />} />
        </Routes>
      </div>
  );
}
export default App;
