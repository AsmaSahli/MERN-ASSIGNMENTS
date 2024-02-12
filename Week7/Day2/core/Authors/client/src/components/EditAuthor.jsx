import React, { useEffect, useState } from 'react'
import Header from './Header'
import {Link , useNavigate, useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import axios from 'axios';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';

const EditAuthor = () => {
  const [name,setName]=useState("")
  const [errors, setErrors] = useState([]); 
  const nav=useNavigate()
  const {id}=useParams()

  const  UpdateHandler=(event)=>{
    event.preventDefault()
    const Author={
      name:name,
    }
    axios.patch("http://127.0.0.1:8000/api/Author/"+ id,Author)
      .then(
        res=>{
            console.log("Author updated",res.data)
            nav("/authors")
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
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/Author/${id}`)
    .then(res=>{
        console.log(res.data)
        setName(res.data.name)
    })
    .catch(err=>console.log(err))
    
},[id])
  return (
    <>
        <Header linkPath="/authors" link="Home" tag="Edit this author" /> 
        <Container maxWidth="sm">
        <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          {errors.map((err, index) => (
                    <p key="{index}" style={{color:'red', fontSize:'small'}} >{err}</p>
                ))}
            <TextField label="Name" value={name} fullWidth onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <Link to={"/authors"}>
            <Button variant="contained" color="secondary" fullWidth>
            Cancel
            </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth onClick={ UpdateHandler}>
              Submit 
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

        </Container>  
    </>
  )
}

export default EditAuthor