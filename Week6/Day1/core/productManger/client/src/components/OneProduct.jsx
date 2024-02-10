import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = () => {
    const [product,setProduct]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Product/${id}`)
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)

        })
        .catch(err=>console.log(err))
        
    },[id])


  return (
    <div>
        {
            product?(
                <>
                    <h1>{product.title}</h1>
                    <h3>{product.price}</h3>
                    <h3>{product.description}</h3>
                </>

            ):
            null
        }
    </div>
  )
}

export default OneProduct