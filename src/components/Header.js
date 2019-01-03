import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
    <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            React Layouts App
          </Typography>
        </Toolbar>
      </AppBar>
  )};

export default Header;