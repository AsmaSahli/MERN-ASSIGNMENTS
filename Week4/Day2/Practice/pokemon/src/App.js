import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(response => {
        setPokemon(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((pokemon, i) => (
          <li key={i}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
