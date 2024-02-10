import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddPets = () => {
  const [petImage,setPetImage] =useState("")
  const [petName, setPetName]=useState("")
  const [petType, setPetType]=useState("")
  const [sick, setSick]=useState(false)
  const [numOfLegs, setNumOfLegs]=useState()
  const nav =useNavigate()

 const  newPetHandler=(event)=>{
    event.preventDefault()
    const newPet={
      animalType:petType,
      image:petImage,
      name:petName,
      isSick:sick,
      numOfLegs:numOfLegs
    }
    axios.post("http://127.0.0.1:8000/api/pets/",newPet)
      .then(
        res=>{
            console.log("Added New Pet",res.data)
            nav("/")
        }

      )
      .catch(err=> console.log("err",res.data))
      

  }
  return (
    <div>
        <Link to={"/"} className='btn btn-primary '> Home</Link>

      <div className="container-sm">
      <form onSubmit={newPetHandler} className="mt-4">
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="text" id="image" className="form-control" value={petImage} onChange={(event) => setPetImage(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input type="text" id="type" className="form-control" value={petType} onChange={(event) => setPetType(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" value={petName} onChange={(event) => setPetName(event.target.value)} />
        </div>
        <div className="mb-3 form-check">
          The animal is sick?<input type="checkbox" id="sick" className="form-check-input" checked={sick} onChange={(event) => setSick(event.target.checked)} />
        </div>
        <div className="mb-3">
          <label htmlFor="legs" className="form-label">Number of Legs</label>
          <input type="text" id="legs" className="form-control" value={numOfLegs} onChange={(event) => setNumOfLegs(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add New Pet</button>
      </form>
    </div>
    </div>
  )
}

export default AddPets