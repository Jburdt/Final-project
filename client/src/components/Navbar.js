import React from 'react';
import TheatersTwoToneIcon from '@material-ui/icons/TheatersTwoTone';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className="Navbar">
      <AppBar position="static">
        <Toolbar>
          <TheatersTwoToneIcon style={{ fontSize: 40 }} />
          <Typography variant="h6" className={classes.title}>
            Burd's Movie Reviews
          </Typography>
            <Button component={ Link } to="/" color="inherit">Home</Button>
            <Button component={ Link } to="/user/profile" color="inherit">Profile</Button>
            <Button component={ Link } to="/reviews" color="inherit">Reviews</Button>
            <Button component={ Link } to="/signup" color="inherit">Signup</Button>
            <Button component={ Link } to="/login" color="inherit">Login</Button>
            <Button component={ Link } to="/" color="secondary">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;