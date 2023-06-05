import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import MovieAnimation from "../../src/MovieAnimation.json"
import Lottie from "lottie-react"

function Copyright() {
  return (
    <Typography align='center' variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" component={ Link } to="/">
        Burd's Movie Reviews
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Hello Movie Fans!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            This is a place where we can share our thoughts about movies we have seen. Sign up and start 
            creating reviews to share with the world!
          </Typography>
          <Lottie animationData={MovieAnimation} />
        </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Home;