import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Header = ({linkPath,link,tag}) => {
  return (
    <>
    <Typography variant="h1" gutterBottom>Favorite Authors</Typography>
    <Typography variant="h3" gutterBottom><Link to={{linkPath}}>{link}</Link></Typography>
    <Typography variant="h4" gutterBottom>{tag}</Typography>

    </>
  )
}

export default Header