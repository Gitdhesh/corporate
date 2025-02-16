import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ 
          flexGrow: 1, 
          textDecoration: 'none', 
          color: 'inherit' 
        }}>
          EcoLearn Corporate
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={RouterLink} to="/training">Training</Button>
          <Button color="inherit" component={RouterLink} to="/profile">Profile</Button>
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 