import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Container, Card, CardContent, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Update = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [important,setImportant]=useState(false)
    const [errors, setErrors] = useState([]); 
    const nav =useNavigate()
    const {id}=useParams()
    const noteHandler=(event)=>{
        event.preventDefault()
        const newnote={
            title,
            content,
            important
    
        }
        axios.patch(`http://127.0.0.1:8000/api/Notes/${id}`,newnote)
            .then(
                res=>{
                    console.log("Note Updated successfully",res.data)
                    nav(`/notes/${id}`)
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
        axios.get(`http://127.0.0.1:8000/api/Notes/${id}`)
        .then(res=>{
            console.log(res.data)
            setTitle(res.data.title)
            setContent(res.data.content)
            setImportant(res.data.important)
    
        })
        .catch(err=>console.log(err))
        
    },[id])
  return (
    <div>

        <>
        <Header/>
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                {errors.map((err, index) => (
                    <p key="{index}" style={{color:'red', fontSize:'small'}} >{err}</p>
                ))}
                    <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)}margin="normal"/>
                    <TextField label="Content" multiline rows={4} fullWidth value={content} onChange={(e) => setContent(e.target.value)}  margin="normal"/>
                    <FormControlLabel control={<Checkbox checked={important} onChange={(e) => {  setImportant(e.target.checked); }} />}label="Important"/>

                </CardContent>
                <Button variant="contained" color="primary" onClick={noteHandler} >
                    Update
                </Button>
            </Card>
        </Container>

    </>
    </div>
  )
}

export default Update