import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'

const Show = () => {

    const [country,setCountry]=useState(null)
    const {name}=useParams()

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then(res=>{
                setCountry(res.data[0])
            })
            .catch(err=>console.log(err))
    },[name])

  return (
    <div>
        {country?
        <>
        <h1>{country.name.common}</h1> 
        <img src={country.flags.png} alt="" height={200} />
        <p>Capital:{country.capital[0]}</p>
        <p>Population:{country.populations}</p>
        <p>Timezone:{country.timezones.map((t)=>(
            <p>{t}</p>
        )) }</p>
        </>
        : <p>Loading...</p>}
        
        
    </div>
  )
}

export default Show