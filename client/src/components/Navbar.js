import React from 'react';
import TheatersTwoToneIcon from '@material-ui/icons/TheatersTwoTone';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './actions/User';

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
  const dispatch = useDispatch();
  const {loggedIn, currentUser} = useSelector(store => store.userReducer);

  console.log("navbar.js", loggedIn)

  // LOGOUT USER
  const logoutUser = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    dispatch(logout())
  };

  const loggedInLinks = () => {
    return (
      <>
        <h1>Hello {currentUser.username}</h1>
        <Button component={ Link } to="/" color="inherit">Home</Button>
        <Button component={ Link } to="/reviews" color="inherit">Reviews</Button>
        <Button component={ Link } to="/user/profile" color="inherit">Profile</Button>
        <Button component={ Link } to="/" color="secondary" onClick={logoutUser}>Logout</Button>
      </>
    )
  };

  const loggedOutLinks = () => {
    return (
      <>
      <Button component={ Link } to="/signup" color="inherit">Signup</Button>
      <Button component={ Link } to="/login" color="inherit">Login</Button>
      </>
    )
  };

  return (
    
    <div className="Navbar">
      <AppBar position="static">
        <Toolbar>
          <TheatersTwoToneIcon style={{ fontSize: 40 }} />
          <Typography variant="h6" className={classes.title}>
            Burd's Movie Reviews
          </Typography>
            {loggedIn ? loggedInLinks() : loggedOutLinks()}
            {/* <Button component={ Link } to="/" color="inherit">Home</Button>
            <Button component={ Link } to="/user/profile" color="inherit">Profile</Button>
            <Button component={ Link } to="/reviews" color="inherit">Reviews</Button>
            <Button component={ Link } to="/signup" color="inherit">Signup</Button>
            <Button component={ Link } to="/login" color="inherit">Login</Button>
            <Button component={ Link } to="/" color="secondary" onClick={logoutUser}>Logout</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;