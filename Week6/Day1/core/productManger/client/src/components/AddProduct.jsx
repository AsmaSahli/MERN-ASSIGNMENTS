import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {
    const [title,setTitle]=useState("")
    const[price,setPrice]=useState()
    const [description,setDescription]=useState("")
    const [errors, setErrors] = useState([]); 

    const productHandler=(event)=>{
        event.preventDefault()
        const newProduct={
            title:title,
            price:price,
            description:description
        }
        axios.post("http://127.0.0.1:8000/api/Product/",newProduct)
            .then(
                res=>{
                    console.log("Product Added successfully",res.data)
                    setTitle("")
                    setPrice(0)
                    setDescription("")
                }
            )
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            }) 
    }

  return (
    <>
        
        <form onSubmit={productHandler}>

                
        <div className="container">

        <h1>Product Manager</h1>

            <div className="err">
            {errors.map((err, index) => (
                    <p key="{index}" style={{color:'red', fontSize:'small'}} >{err}</p>
                ))}
            </div>
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
            <button type="submit" >Create</button>
            
        </div>

        </form>    
    </>
  )
}

export default AddProduct