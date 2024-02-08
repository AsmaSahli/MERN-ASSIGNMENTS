// List.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const List = () => {
  //useNavigate to change our browser URL 
  const nav=useNavigate()

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags')
      .then(res => {
        setCountries(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      
      <h1>Countries List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((c, i) => (
            <tr key={i}>
              <td>{c.name.common}</td>
              <td><img src={c.flags.png} alt="" height={100} /></td>
              <td><button onClick={()=>nav(`/country/${c.name.common}`)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default List;
