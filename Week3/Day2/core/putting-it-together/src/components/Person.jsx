import React , {useState}from 'react'

const Person = (props) => {
    const[a , setAge]=useState(props.age)

  return (
    <div>
        <h1>{props.lastName} ,{props.firstName} </h1>
        <p>Age: {a} </p>
        <p>Hair Color: {props.hair}</p>
        <button onClick={(event)=> setAge(a+1)} className='btn btn-outline-secondary'>Birthday Button for {props.firstName}</button>
    </div>
  )
}

export default Person