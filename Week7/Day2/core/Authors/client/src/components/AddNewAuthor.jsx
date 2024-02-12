import React, { useState } from 'react'
import Header from './Header'
import Container from '@mui/material/Container';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const AddNewAuthor = () => {
  const [name,setName]=useState("")
  const [errors, setErrors] = useState([]); 
  const nav=useNavigate()
  
  const authorHandler=(event)=>{
    event.preventDefault()
    const newauthor={
        name:name,

    }
    axios.post("http://127.0.0.1:8000/api/Author/",newauthor)
        .then(
            res=>{
                console.log("author Added successfully",res.data)
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


  return (
    <>
      <Header linkPath="/authors" link="Home" tag="Add a new author:" />
      <Container maxWidth="sm">
      <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          {errors.map((err, index) => (
                    <p key="{index}" style={{color:'red', fontSize:'small'}} >{err}</p>
                ))}
            <TextField label="Name" fullWidth onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <Link to={"/authors"}>
            <Button variant="contained" color="secondary" fullWidth>
            Cancel
            </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth onClick={authorHandler}>
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

export default AddNewAuthor