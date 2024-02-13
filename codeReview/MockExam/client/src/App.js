
import './App.css';
import { Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import DisplayOrders from './components/DisplayOrders';
import NewPizza from './components/NewPizza';




function App() {
  return (
    <div className="App">
        <Routes>
            {<Route path="/" element={<DisplayOrders/>}  />}
            {<Route path="/New" element={<NewPizza/>}  />}

        </Routes>
        
    </div>
  );
}

export default App;
