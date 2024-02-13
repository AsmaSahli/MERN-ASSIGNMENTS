import React, { useEffect, useState } from 'react'
import Header from './Header'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import {Table,TableBody, TableCell,TableContainer, TableHead,TableRow,Paper, Button} from '@mui/material';
import axios from 'axios'
const PlayerList = () => { 
  const [Player,setPlayer]=useState([])  

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/Player/')
        .then(res=>{
            setPlayer(res.data)
        })
        .catch(err => console.log(err))

},[])

const deleteMe = (deleteId,playerName) => {
  const deleteConfirm = window.confirm(`Are you sure you want to remove ${playerName}?`);
  
  if (deleteConfirm) {
    axios.delete(`http://127.0.0.1:8000/api/Player/${deleteId}`)
      .then(res => {
        console.log('This player has been deleted', res.data);
        const filteredPlayers = Player.filter((player) => player._id !== deleteId);
        setPlayer(filteredPlayers);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
  return (
    <>
        <Header/>
        <Typography variant="h5" gutterBottom><Link to={"/players/list"}>List</Link> | <Link to={"/players/addplayer"}>Add Player</Link></Typography>
        <Container>
        <TableContainer component={Paper}>
      <Table>
        <TableHead style={{color:''}}>
          <TableRow>
            <TableCell >Team Name</TableCell>
            <TableCell>Preferred Position</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Player.map((player)=>(
            <TableRow key={player._id}>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.position}</TableCell>
              <TableCell>
              <Button  variant="contained" color="error" onClick={()=>{deleteMe(player._id,player.name)}} >Remove</Button>
              </TableCell>
          </TableRow>
            ))
          }

        </TableBody>
      </Table>
    </TableContainer>
    </Container>


    </>
  )
}

export default PlayerList