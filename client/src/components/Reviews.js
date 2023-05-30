import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Reviews = () => {
  const classes = useStyles();
  const { currentUser} = useSelector(store => store.reviewsReducer);
  const reviews = useSelector(store => store.reviewsReducer.reviews);
  const [showMyReviews, setShowMyReviews] = useState(false);

  // console.log( currentUser)
  console.log('in review', reviews)

  const handleButtonClick = () => {
    setShowMyReviews(!showMyReviews);
  };

  const filteredReviews = showMyReviews ? reviews.filter((review) => review.author.username === currentUser.username) : reviews;

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Movie Reviews
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Don't be afraid to speak your mind. These reviews are judgement free!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={() => handleButtonClick()}>
                  {showMyReviews ? 'Show All Reviews' : 'Show My Reviews'}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    All Reviews
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={ Link } to="/reviews/new" variant="contained" color="inherit">
                    Create Review
                  </Button>
                  {/* <ul>
                    {filteredReviews.map((review) => (
                      <li key={review.id}>{review.content}<em style={{color: "red"}}>Published by: {review.author.username}</em></li>
                    ))}
                  </ul> */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {reviews.map((review, idx) =>  {return <ReviewCard key={idx} review={review} />})}
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          End of Reviews
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thank you for supporting the page!
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}

export default Reviews;