import React from 'react';
import TheatersIcon from '@material-ui/icons/Theaters';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/reviews">Reviews</Link></li>
//         <li><Link to="/reviews/new">Create Review</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar;

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className="Navbar">
      <AppBar position="static">
        <Toolbar>
          <TheatersIcon />
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Site name
          </Typography>
          <Button href="/" color="inherit" onClick={null}>Home</Button>
          <Button href="/login" color="inherit" onClick={null}>Login</Button>
          <Button href="/signup" color="inherit" onClick={null}>Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;