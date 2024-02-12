import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
        <Typography variant="h1" gutterBottom>Notes</Typography>
        <Typography variant="h5" gutterBottom><Link to={"/"}>Home</Link> | <Link to={"/notes"}>Create</Link></Typography>
    </>
  )
}

export default Header