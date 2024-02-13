import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
              <Typography variant="h4" gutterBottom><Link to={"/players/list"}>Manage Players</Link> | <Link to={"/players/game/1"}>Manage Player Status</Link></Typography>
    </div>
  )
}

export default Header