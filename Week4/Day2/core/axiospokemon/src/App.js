import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemon(response.data.results);
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
