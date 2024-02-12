import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { Card, Container, CardHeader, CardContent, CardActions, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [Notes,setNotes]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/Notes/')
            .then(res=>{
                setNotes(res.data)
            })
            .catch(err => console.log(err))

    },[])

    const deleteMe = (deleteId) => {
        axios.delete("http://127.0.0.1:8000/api/Notes/" + deleteId)
            .then(res => {
                console.log("this note has been deleted",res.data)
            const filteredNotes = Notes.filter((eachProduct) => {
                    return eachProduct._id !== deleteId
            })
            setNotes(filteredNotes)
            })
            .catch(err => {
                console.log(err)
            })
        
    }
  return (
    <>
        <Header/>

        {
            Notes.map((note)=>{

                return(
                    <Container maxWidth="sm" key={note._id}>
                    <Card style={{backgroundColor:'#FFC8DD'}}>
                    <CardHeader title={note.title} subheader={note.createdAt} />
                    <CardContent>
                        {note.content} 
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link to={`/notes/${note._id}/edit`}><Button  variant="contained" size="small" color="primary">Edit</Button></Link>
                        <Button  variant="contained" size="small" color="secondary" onClick={() => deleteMe(note._id)}>Delete</Button>
                    </CardActions>
                    </Card>
                    <br />
                    </Container>
                

                        )
                    })
                }


    </>
  )
}

export default Dashboard