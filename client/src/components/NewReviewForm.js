import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import { Button, Card, CardContent, FormHelperText, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const NewReviewForm = () => {
  const classes = useStyles();
  const categories = useSelector(state => state.categoriesReducer);

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
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField label="Title" placeholder='Enter Title' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField label="Image link" placeholder='Enter Image link' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                    <TextField label="Review" multiline minRows={10} placeholder='Enter Review' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                      <FormHelperText>Select a Category</FormHelperText>
                      <Select fullWidth variant='outlined'
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-filled"
                        value={''}
                        onChange={null}
                        required
                      >
                        {categories.map(category => <MenuItem key={category.category}>{category.category}</MenuItem> )}
                      </Select>
                    </Grid>
                    <Grid xs={12} item>
                    <Button type='submit' variant='contained' color='primary' fullWidth >Submit Review</Button>
                    </Grid>
                  </Grid>
              </form>
              </CardContent>
            </Card>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default NewReviewForm;