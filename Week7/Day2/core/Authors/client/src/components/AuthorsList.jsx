
import Header from './Header'
import Container from '@mui/material/Container';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AuthorsList = () => {
  const [authors,setauthors]=useState([])

  useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/Author/')
          .then(res=>{
            
              setauthors(res.data)
          })
          .catch(err => console.log(err))

  },[])

  const deleteMe = (deleteId) => {
      axios.delete("http://127.0.0.1:8000/api/Author/" + deleteId)
          .then(res => {

          console.log("OK this author has been adopted" , res.data)
          const filteredauthors = authors.filter((eachauthor) => {
                  return eachauthor._id !== deleteId
          })
          setauthors(filteredauthors)
          })
          .catch(err => {
              console.log(err)
          })
      
  }
  return (
    <>
      <Header linkPath="/authors/new" link="Add an author" tag="we have quotes by :" /> 
    <Container maxWidth="sm">
    <TableContainer component={Paper}>
      <Table border={1}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell colSpan={2} style={{textAlign:'center'}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author) => (
            <TableRow key={author._id}>
              <TableCell>{author.name}</TableCell>
              <TableCell style={{textAlign:'center'}}>
                <Button component={Link} to={`/authors/edit/${author._id}`} variant="contained" color="primary">
                  Edit
                </Button>
              </TableCell>
              <TableCell style={{textAlign:'center'}}>
                <Button onClick={() => deleteMe(author._id)} variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  )
}

export default AuthorsList