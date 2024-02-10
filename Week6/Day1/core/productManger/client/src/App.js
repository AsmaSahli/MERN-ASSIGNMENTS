
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
        <Routes>
            {<Route path="/Products" element={<AddProduct/>}  />}

            
        </Routes>
        
    </div>
  );
}

export default App;
