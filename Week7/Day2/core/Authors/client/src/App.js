
import './App.css';
import '@fontsource/roboto/300.css';
import { Route, Routes } from 'react-router-dom';
import AuthorsList from './components/AuthorsList';
import AddNewAuthor from './components/AddNewAuthor';
import EditAuthor from './components/EditAuthor';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Routes>
            {<Route path="/authors" element={<AuthorsList/>}  />}
            {<Route path="/authors/new" element={<AddNewAuthor/>}  />}
            {<Route path="/authors/:id/edit" element={<EditAuthor/>}  />}
        </Routes>
      
    </div>
  );
}

export default App;
