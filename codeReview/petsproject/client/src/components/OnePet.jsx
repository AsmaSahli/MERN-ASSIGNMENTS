import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OnePet = () => {
    const [pet,setPet]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/pets/${id}`)
          .then(res=>{
            console.log(res.data)
            setPet(res.data)

          })
          .catch(err=>console.log(err))
          
    },[id])


  return (
    <div>
      
          <Link to={"/"} className='btn btn-primary '> Home</Link>
          <br />
          {
            pet ?(
              <>
                <img src={pet.image} width={200} />
                <h3>{pet.name}</h3>
                <h6>{pet.animalType}</h6>
                <Link to={`/Pet/${id}/update`} className='btn btn-primary '> Update Informations</Link>

              </>
            ):
            null
            
          }
      
        

    </div>
  )
}

export default OnePet