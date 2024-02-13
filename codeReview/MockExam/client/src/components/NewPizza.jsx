import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import {Grid,TextField,Select,MenuItem,InputLabel,FormControl,Button,} from "@mui/material";
import axios from "axios";

const NewPizza = () => {
    const [pizzaName,setPizzaName]=useState("")
    const[size,setSize]=useState()
    const [delivreyTime,setDelivreyTime]=useState()
    const [notes,setNotes]=useState()
    const nav =useNavigate()
    const [errors, setErrors] = useState([]); 
    const [pizzaOptions]=useState([ "Pepperoni","Cheese","Comibinations","Veggie","Philly Cheese Steak" , "Hawaiian" ,"Double Bacon Deluxe"]);
    const pizzaHandler=(event)=>{
        event.preventDefault()
        const newpizza={
            pizzaName,
            size,
            delivreyTime,
            notes,
            
        }
        axios.post("http://127.0.0.1:8000/api/Pizza/",newpizza)
            .then(
                res=>{
                    console.log("pizza Added successfully",res.data)
                    nav('/')
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
    <Container maxWidth="sm">
    <br />
    <Link to={"/"}>
        <Button variant="contained" color="primary">Go back Home</Button>
    </Link>
    <Typography variant="h3" gutterBottom>{size} {pizzaName} Pizza</Typography>

    {errors.map((err, index) => (
                    <p key="{index}" style={{color:'red', fontSize:'small'}} >{err}</p>
                ))}
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
            <InputLabel>Pizza</InputLabel>
            <Select
            label="Pizzas"
            onChange={(e) => setPizzaName(e.target.value)}
            >
            {pizzaOptions.map((pizza) => (
                <MenuItem key={pizza} value={pizza}>
                {pizza}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
            <InputLabel>Size</InputLabel>
            <Select label="Size" onChange={(e) => setSize(e.target.value)}>
            <MenuItem value="Small">Small</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Large">Large</MenuItem>
            </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <TextField fullWidth label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />

        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
            fullWidth
            type="datetime-local"
            label="Delivery Date"
            InputLabelProps={{ shrink: true }}
            value={delivreyTime}
            onChange={(e) => setDelivreyTime(e.target.value)}
        />
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained" color="success" onClick={pizzaHandler}>
            Order Now
        </Button>
        </Grid>
    </Grid>
    </Container>
);
};

export default NewPizza;
