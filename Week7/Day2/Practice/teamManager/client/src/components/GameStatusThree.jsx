import React, { useEffect, useState } from 'react'
import Header from './Header'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import {Table,TableBody, TableCell,TableContainer, TableHead,TableRow,Paper, Button} from '@mui/material';
import axios from 'axios'

const GameStatusThree = () => {
    const [Player,setPlayer]=useState([])  

    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/Player/')
        .then(res=>{
            setPlayer(res.data)
        })
        .catch(err => console.log(err))

},[])
const updateStatus = (playerId, status) => {
    const updatedPlayers = Player.map(player =>
    player._id === playerId ? { ...player, gameThree: status } : player
    );
    
    axios.patch(`http://127.0.0.1:8000/api/Player/${playerId}`, { gameThree: status })
    .then(res => console.log('Status updated ', res.data))
    .catch(err => console.log(err));

setPlayer(updatedPlayers);
};
return (
    <>
    <Header/>
    <Typography variant="h2" gutterBottom>Player Status - Game 1</Typography>
    <Typography variant="h5" gutterBottom><Link to={"/players/game/1"}>Game 1</Link> | <Link to={'/players/game/2'} >Game 2</Link> | <Link to={'/players/game/3'} >Game 3</Link></Typography>
    <Container maxWidth='lg'>
    <TableContainer component={Paper}>
    <Table>
    <TableHead style={{color:''}}>
        <TableRow>
        <TableCell >Team Name</TableCell>
        <TableCell colSpan={3}>Actions</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
        Player.map((player)=>(
        <TableRow key={player._id}>
            <TableCell>{player.name}</TableCell>
            <TableCell className='actions'>
                <Button
                    className='button'
                    color={player.gameThree === 'playing' ? 'success' : 'primary'}
                    variant={player.gameThree==='playing'? 'contained':null}
                    onClick={() => updateStatus(player._id, 'playing')}
                >
                    Playing
                </Button>
                <Button
                    className='button'
                    variant={player.gameThree==='not playing'? 'contained':null}
                    color={player.gameThree === 'not playing' ? 'error' : 'primary'}
                    onClick={() => updateStatus(player._id, 'not playing')}
                >
                    Not Playing
                </Button>
                <Button
                    variant={player.gameThree==='undecided'? 'contained':null}
                    className='button'
                    onClick={() => updateStatus(player._id, 'undecided')}
                >
                    Undecided
                </Button>
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

export default GameStatusThree