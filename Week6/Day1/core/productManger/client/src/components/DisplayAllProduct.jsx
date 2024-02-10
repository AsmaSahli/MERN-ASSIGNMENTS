import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayAllProduct = () => {
    const [Products,setProducts]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/Product/')
            .then(res=>{
                setProducts(res.data)
            })
            .catch(err => console.log(err))

    },[])

  return (
    <div>
        <h1>All Products</h1>
        
            
                {
                    Products.map((product)=>{
                        return(
                            <Link key={product._id} to={`/Products/${product._id}`}>
                                    <h4 >{product.title}</h4>
                            </Link>

                        )
                    })
                }
        

    </div>
  )
}

export default DisplayAllProduct