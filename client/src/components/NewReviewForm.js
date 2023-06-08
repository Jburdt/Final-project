import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from './actions/Reviews';

function Copyright() {
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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = {
  title: '',
  image: '',
  content: '',
  categories: { category: '' }
}

const NewReviewForm = () => {
  const [formData, setFormData] = useState(initialState);
  const errors = useSelector(store => store.errorsReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview(formData, navigate))
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddIcon fontSize='large'/>
        </Avatar>
          <Typography component="h1" variant="h5">
            Create New Review
          </Typography>
            <Card>
              <CardContent>
                <form className='new-review-form' onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField onChange={handleChange} name='title'value={formData.title} label="Title" placeholder='Enter Title' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField onChange={handleChange} name='image'value={formData.image} label="Image link" variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                      <TextField onChange={handleChange} name='content'value={formData.content} label="Content" multiline minRows={10} variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                      <TextField onChange={handleChange} name='category'value={formData.category} label="Category" multiline variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                      <Button type='submit' variant='contained' color='primary' fullWidth>Submit Review</Button>
                    </Grid>
                  </Grid>
              </form>
              </CardContent>
            </Card>
      </div>
      <div style={{ color: "red" }}>
           {errors}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default NewReviewForm;