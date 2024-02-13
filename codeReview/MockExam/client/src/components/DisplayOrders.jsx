import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import {Table,TableBody, TableCell,TableContainer, TableHead,TableRow,Paper,Checkbox,} from '@mui/material';
const DisplayOrders = () => {
    const [Pizza,setPizza]=useState([])
    const [showDelivered, setShowDelivered] = useState(true);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/Pizza/')
            .then(res=>{
                setPizza(res.data)
            })
            .catch(err => console.log(err))

    },[])

    const deleteMe = (deleteId) => {
        axios.delete("http://127.0.0.1:8000/api/Pizza/" + deleteId)
            .then(res => {
                console.log("this Pizza has been deleted",res.data)
            const filteredPizza = Pizza.filter((eachPizza) => {
                    return eachPizza._id !== deleteId
            })
            setPizza(filteredPizza)
            })
            .catch(err => {
                console.log(err)
            })
        
    }
    const updateDeliveredStatus = (pizzaId, isDelivered) => {
        axios.patch(`http://127.0.0.1:8000/api/Pizza/${pizzaId}`, { isDelivered })
          .then(res => {
            console.log("Delivery status updated", res.data);
            const updatedPizza = Pizza.map(eachPizza =>
              eachPizza._id === pizzaId ? { ...eachPizza, isDelivered } : eachPizza
            );
            setPizza(updatedPizza);
          })
          .catch(err => {
            console.log(err);
          });
      };
    const handleHideDelivered = () => {
        setShowDelivered(false);
      };
    
      const handleShowDelivered = () => {
        setShowDelivered(true);
      };

  return (

    <Container>
                <Typography variant="h1" gutterBottom> Pizza Order</Typography>
                <Link to={"/New"}><Button size='small' variant="contained" color="secondary"  >Order A pizza</Button></Link>
                <div className="actions" >
                <Typography variant="h4" gutterBottom> Find Stores in your area !</Typography>
                <Button  variant="contained" color="primary" onClick={handleHideDelivered} >Hide delivred pizzas</Button>
                <Button  variant="contained" color="success" onClick={handleShowDelivered} >Show delivred pizzas</Button>
                </div>


    <TableContainer component={Paper}>
      <Table>
        <TableHead >
          <TableRow>
            <TableCell >Delivery Time</TableCell>
            <TableCell>Pizza</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Delivered</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                Pizza.map((pizza)=>{
                    return(
                        (showDelivered || !pizza.isDelivered) &&
                        <TableRow key={pizza._id}>
                        <TableCell>{pizza.delivreyTime}</TableCell>
                        <TableCell>{pizza.pizzaName}</TableCell>
                        <TableCell>{pizza.size}</TableCell>
                        <TableCell>
                        <Checkbox
                        checked={pizza.isDelivered}
                        onChange={() => updateDeliveredStatus(pizza._id, !pizza.isDelivered)}
                        />
                        </TableCell>
                        <TableCell>
                        <Button  variant="contained" color="error" onClick={()=>{deleteMe(pizza._id)}} >Remove</Button>
                        </TableCell>
                    </TableRow>
                    )
                })
            }

        </TableBody>
      </Table>
    </TableContainer>
    </Container>

  )
}

export default DisplayOrders