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

    const deleteMe = (deleteId) => {
        axios.delete("http://127.0.0.1:8000/api/Product/" + deleteId)
            .then(res => {
                console.log("this product has been deleted",res.data)
            const filteredProducts = Products.filter((eachProduct) => {
                    return eachProduct._id !== deleteId
            })
            setProducts(filteredProducts)
            })
            .catch(err => {
                console.log(err)
            })
        
    }

  return (
    <div>
        <h1>All Products</h1>
        
            
                {
                    Products.map((product)=>{
                        return(
                            <div key={product._id}>
                            <Link to={`/Products/${product._id}`}>
                            <h4 >{product.title}</h4>
                            </Link>
                            <button onClick={()=>{deleteMe(product._id)}} >Delete</button>
                            <Link to={`/edit/${product._id}`}><button>Edit Product</button></Link>
                            </div>



                        )
                    })
                }
        

    </div>
  )
}

export default DisplayAllProduct