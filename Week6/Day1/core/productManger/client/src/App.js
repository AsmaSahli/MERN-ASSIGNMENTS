
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import DisplayAllProduct from './components/DisplayAllProduct';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <div className="App">
        <Routes>
            {<Route path="/" element={<DisplayAllProduct/>}  />}
            {<Route path="/Products" element={<AddProduct/>}  />}
            {<Route path="/Products/:id" element={<OneProduct/>}  />}

            
        </Routes>
        
    </div>
  );
}

export default App;
