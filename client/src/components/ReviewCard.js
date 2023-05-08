import { Button, Card, CardActions, CardContent, IconButton, Typography, CardMedia, makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReviews } from './actions/Reviews';
// import reviewsReducer from './reducers/reviewsReducer';

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

const cards = [1];

const ReviewCard = () => {
  const reviews  = useSelector(store => store.reviewsReducer);
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log(reviews, "inside review card")

  // DELETE REQUEST
  const handleDelete = () => {
    // dispatch(deleteReviews(review.id))
    dispatch(deleteReviews(reviews.id))
  };


  return (
    <Container className={classes.cardGrid} maxWidth="lg">
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
                {reviews.map((review) => 
                  <Typography key={review.id} 
                  gutterBottom variant="h5" component="h2">
                    {review.title}
                  </Typography>
                )}
              <Typography>
                Content goes here
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
              <IconButton onClick={handleDelete} color='secondary' aria-label="delete" className={classes.margin}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
};

export default ReviewCard;