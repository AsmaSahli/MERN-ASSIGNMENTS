
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import DisplayAllProduct from './components/DisplayAllProduct';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
        <Routes>
            {<Route path="/" element={<DisplayAllProduct/>}  />}
            {<Route path="/Products" element={<AddProduct/>}  />}
            {<Route path="/Products/:id" element={<OneProduct/>}  />}
            {<Route path="/edit/:id" element={<EditProduct/>}  />}
        </Routes>
        
    </div>
  );
}

export default App;
