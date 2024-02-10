
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DisplayAllPets from './components/DisplayAllPets';
import AddPets from './components/AddPets';
import OnePet from './components/OnePet';
import UpdatePet from './components/UpdatePet';


function App() {
  return (
    <div className="App">
        <div className="header">Pet Shelter </div>
        <Routes>
            {<Route path="/" element={<DisplayAllPets/>}  />}
            {<Route path="/newPet" element={<AddPets/>}  />}
            {<Route path="/Pet/:id" element={<OnePet/>}  />}
            {<Route path="/Pet/:id/update" element={<UpdatePet/>}  />}
            
        </Routes>
    </div>
  );
}


export default App;
