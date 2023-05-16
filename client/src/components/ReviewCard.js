import { Button, Card, CardActions, CardContent, IconButton, Typography, CardMedia, makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReviews } from './actions/Reviews';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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

const ReviewCard = () => {
  const reviews = useSelector(state => state.reviewsReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // DELETE REQUEST
  const handleDelete = (id) => {
    dispatch(deleteReviews(id))
  };

  // EDIT REQUEST
  const handleEdit = () => {
    navigate('/reviews/:id/edit')
  };

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
    <Grid container spacing={4}>
      {reviews.map((review) => (
        <Grid item key={review.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={review.image}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {review.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {review.category.category}
              </Typography>
              <Typography>
                {review.content.split('').slice(0, 150).join('') + "..."}
              </Typography>
              <Typography>
                Reviewer: {review.author.username}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small" color="primary">
                View Full Review
              </Button>
              <Button variant="outlined" onClick={handleEdit} size="small" color="primary">
                Edit
              </Button>
              <IconButton onClick={() => handleDelete(review.id)} color='secondary' aria-label="delete" className={classes.margin}>
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