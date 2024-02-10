import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const [title,setTitle]=useState("")
  const[price,setPrice]=useState()
  const [description,setDescription]=useState("")
  const nav =useNavigate()
  const {id}=useParams()

  const  UpdateHandler=(event)=>{
    event.preventDefault()
    const Product={
      title:title,
      price:price,
      description:description
    }
    axios.patch("http://127.0.0.1:8000/api/Product/"+ id,Product)
      .then(
        res=>{
            console.log("Product updated",res.data)
            nav("/")
        }

      )
      .catch(err=> console.log("err",res.data))
      

  }
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/Product/${id}`)
    .then(res=>{
        console.log(res.data)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)

    })
    .catch(err=>console.log(err))
    
},[id])

    
  return (
    <>
        
        <form onSubmit={UpdateHandler}>
        <div className="container">

        <h1>Product Manager</h1>
            
            <div className="formGroup">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className="formGroup">
                <label htmlFor="Price">Price</label>
                <input type="text" id='Price'value={price} onChange={(event) => setPrice(event.target.value)}/>
            </div>
            <div className="formGroup">
                <label htmlFor="Description">Description</label>
                <input type="text" id='Description'value={description} onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <button type="submit" >Update</button>
            
        </div>

        </form>    
    </>
  )
}

export default EditProduct