import { Button, Card, CardActions, CardContent, IconButton, Typography, CardMedia, makeStyles, Container, Grid, Modal, Chip, Divider } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReviews } from './actions/Reviews';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// STYLES
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
    height: '450',
    paddingTop: '140%', // 1:1,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ReviewCard = () => {
  const reviews = useSelector(state => state.reviewsReducer.reviews);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  // DELETE REQUEST
  const handleDelete = (id) => {
    dispatch(deleteReviews(id))
  };

  // EDIT REQUEST
  const handleEdit = (id) => {
    navigate(`/reviews/${id}/edit`)
  };

  // SHOW FULL REVIEW CODE
  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getModalStyle() {
    return {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90%',
      maxHeight: '90%',
      overflow: 'auto',
    };
  };

  // ADD COMMENT
  const handleComment = () => {
    console.log("adding comment")
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
              <Typography variant="h5" component="h2">
                {review.title}
              </Typography>
              <Chip label={review.category.category}></Chip>
              <Typography>
                {review.content.split('').slice(0, 150).join('') + "..."}
              </Typography>
              <Typography>
                <em style={{color: "red"}}>Published by: {review.author.username}</em>
              </Typography>
            </CardContent>
            <div className='button-container' style={{ display: 'flex', justifyContent: 'center' }}>
            <CardActions>
              <Button onClick={ handleOpen } variant="outlined" size="small" color="primary">
                View Full Review
              </Button>
              <Modal
                open={open}
                onClose={handleClose}>
                  <div style={modalStyle} className={classes.paper}>
                  <Typography variant='h4' id="simple-modal-title">{review.title}</Typography>
                  <Typography><em style={{color: "red"}}>Published by: {review.author.username}</em></Typography>
                  <Divider />
                  <Typography variant='subtitle2' id="simple-modal-description">{review.content}</Typography>
                  <Divider />
                  <Typography variant='body1'>Comments:</Typography>
                  {review.comments.map((review, idx) => {return <Typography key={idx} variant='subtitle2'>{review.user.name}- {review.comment}<Divider /></Typography>})}
                  </div>
              </Modal>
              <Button variant="outlined" onClick={() => handleEdit(review.id)} size="small" color="primary">
                Edit
              </Button>
              <Button variant="outlined" onClick={() => handleComment('')} size="small" color="primary">
                Comment
              </Button>
              <IconButton onClick={() => handleDelete(review.id)} color='secondary' aria-label="delete" className={classes.margin}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </CardActions>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
};

export default ReviewCard;