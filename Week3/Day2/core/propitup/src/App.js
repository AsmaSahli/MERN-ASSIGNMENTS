
import './App.css';
import Person from './Components/Person';
function App() {
  return (
    <div className="App">
      <Person
      firstName={"Jane"}
      lastName={"Doe"}
      age={45}
      hair={"Black"}      
      />
      <Person
      firstName={"John"}
      lastName={"Smith"}
      age={88}
      hair={"Brown"}      
      />
      <Person
      firstName={"Millard"}
      lastName={"Fillmore"}
      age={50}
      hair={"Brown"}      
      />
      <Person
      firstName={"Maria"}
      lastName={"Smith"}
      age={62}
      hair={"Brown"}      
      />

    </div>
  );
}

export default App;
