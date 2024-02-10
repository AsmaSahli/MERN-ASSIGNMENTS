import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const OneProduct = () => {
    const [product,setProduct]=useState(null)
    const {id}=useParams()
    const nav =useNavigate()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Product/${id}`)
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)

        })
        .catch(err=>console.log(err))
        
    },[id])
    const deleteMe = (deleteId) => {
        axios.delete("http://127.0.0.1:8000/api/Product/" + deleteId)
            .then(res => {
                console.log("this product has been deleted",res.data)
                nav("/")
            })
            .catch(err => {
                console.log(err)
            })
        
    }


  return (
    <div>
        {
            product?(
                <>
                    <h1>{product.title}</h1>
                    <h3>{product.price}</h3>
                    <h3>{product.description}</h3>
                    <button onClick={()=>{deleteMe(id)}} >Delete</button>
                    <Link to={`/edit/${id}`}><button>Edit Product</button></Link>
                    
                </>

            ):
            null
        }
    </div>
  )
}

export default OneProduct