import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DisplayAllPets = () => {
    const [pets,setPets]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/pets/')
            .then(res=>{
                setPets(res.data)
            })
            .catch(err => console.log(err))

    },[])

    const deleteMe = (deleteId) => {
        axios.delete("http://127.0.0.1:8000/api/pets/" + deleteId)
            .then(res => {

            console.log("OK this pet has been adopted" , res.data)
            const filteredPets = pets.filter((eachPet) => {
                    return eachPet._id !== deleteId
            })
            setPets(filteredPets)
            })
            .catch(err => {
                console.log(err)
            })
        
    }

  return (
    <>
        <Link to={"/newPet"} className='btn btn-primary'> Add another Pet</Link> 
        <br />


        <table className='table table-striped'>
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Type</td>
                    <td>Name</td>
                    <td>Animal is sick ?</td>
                    <td>Number of legs </td>
                    <td> Actions </td>
                    <td> Actions </td>
                </tr>
            </thead>
            <tbody>
                {pets.map(pet=>{
                    return(
                        <tr key={pet._id}>
                            <td><img src={pet.image} width={100} /></td>
                            <td>{pet.animalType}</td>
                            <td>{pet.name}</td>
                            <td>{pet.isSick ? "yes":"no"}</td>
                            <td>{pet.numOfLegs}</td>
                            <td className='actions'><Link to={`/Pet/${pet._id}`}><button>View</button></Link></td>
                            <td><button onClick={() => { deleteMe(pet._id) }}>Adopt</button></td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
        
    </>
  )
}

export default DisplayAllPets