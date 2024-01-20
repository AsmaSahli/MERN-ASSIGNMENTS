import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => {

        return response.json()
      })
      .then(response => {
        setPokemon(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
    

  }, []);  

  return (
    <div className="App" >
      <ul>
        {
          pokemon.map((pokemon, i)=>{
            return (<li key={i}>{pokemon.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;