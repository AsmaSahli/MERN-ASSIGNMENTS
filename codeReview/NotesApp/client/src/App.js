
import './App.css';
import { Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import ShowOne from './components/ShowOne';
import Update from './components/Update';



function App() {
  return (
    <div className="App">
        <Routes>
            {<Route path="/" element={<Dashboard/>}  />}
            {<Route path="/notes" element={<Create/>}  />}
            {<Route path="/notes/:id" element={<ShowOne/>}  />}
            {<Route path="/notes/:id/edit" element={<Update/>}  />}
        </Routes>
        
    </div>
  );
}

export default App;
