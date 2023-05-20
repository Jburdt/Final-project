import { Button, Card, CardActions, CardContent, IconButton, Typography, CardMedia, makeStyles, Container, Grid, Modal, Chip, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReviews } from './actions/Reviews';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  const {reviews} = useSelector(state => state.reviewsReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [expanded, setExpanded] = useState(false);

  // const comment = comments.map((comment, index) => (<Typography key={index}>{comment}</Typography>))

  // DELETE REQUEST
  const handleDelete = (id) => {
    dispatch(deleteReviews(id))
  };

  // EDIT REQUEST
  const handleEdit = () => {
    navigate('/reviews/:id/edit')
  };

  // SHOW FULL REVIEW CODE
  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  };

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

            <CardActions>

              <Button onClick={ handleOpen } variant="outlined" size="small" color="primary">
                View Full Review
              </Button>

              <Modal
                open={open}
                onClose={handleClose}>
                  <div style={modalStyle} className={classes.paper}>
                  <h2 id="simple-modal-title">{review.title}</h2>
                  <p id="simple-modal-description">{review.content}
                  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className={classes.heading}>Comments:</Typography>
                      <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      
                    <Typography>
                      Blah blah
                    </Typography>


                    </AccordionDetails>
                  </Accordion>
                  </p>
                  <em style={{color: "red"}}>Published by: {review.author.username}</em>
                  </div>
              </Modal>

              

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