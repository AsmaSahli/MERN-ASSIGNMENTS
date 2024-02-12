import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Card, Container, CardHeader, CardContent, CardActions, Button } from '@mui/material'
import Header from './Header'
const ShowOne = () => {
    const [Note,setNote]=useState(null)
    const nav=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Notes/${id}`)
            .then(res=>{
                setNote(res.data)
            })
            .catch(err => console.log(err))

    },[])

    const deleteMe = (deleteId) => {
        axios.delete("http://127.0.0.1:8000/api/Notes/" + deleteId)
            .then(res => {
                console.log("this Note has been deleted",res.data)
                nav("/")
            })
            .catch(err => {
                console.log(err)
            })
        
    }
  return (
    <div>
        <Header/>
        {
            Note?(


                    <Container maxWidth="sm" >
                    <Card style={{backgroundColor:'#bde0fe'}}>
                    <CardHeader title={Note.title} subheader={Note.createdAt} />
                    <CardContent>
                        {Note.content} 
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link to={`/Notes/${id}/edit`}><Button  variant="contained" size="small" color="primary">Edit</Button></Link>
                        <Button  variant="contained" size="small" color="secondary" onClick={() => deleteMe(id)}>Delete</Button>
                    </CardActions>
                    </Card>
                    <br />
                    </Container>
            ):null
                
         }
    </div>
  )
}

export default ShowOne