import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import { Button, ButtonBase, Card, CardContent, FormHelperText, Grid, GridList, MenuItem, Select, TextField } from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';
// import { InputLabel, MenuItem, Select, TextareaAutosize } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
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
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField label="Title" placeholder='Enter Title' variant='outlined' fullWidth required/>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField label="Image link" placeholder='Enter Image link' variant='outlined' fullWidth required/>
                  </Grid>
                  <Grid xs={12} item>
                  <TextField label="Review" multiline rows={10} placeholder='Enter Review' variant='outlined' fullWidth required/>
                  </Grid>
                  <Grid xs={12} item>
                    <FormHelperText>Select a Category</FormHelperText>
                    <Select fullWidth variant='outlined'
                      label="Category"
                      id="demo-simple-select-filled"
                      value={null}
                      onChange={null}
                    >
                      <MenuItem value="Category">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </Grid>
                  <Grid xs={12} item>
                  <Button type='submit' variant='contained' color='primary' fullWidth >Submit Review</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>


        {/* <form className={classes.form} noValidate> */}
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="image"
            label="Image"
            type="image"
            id="image"
            autoComplete="image"
          /> */}

          {/* <TextareaAutosize
            maxRows={4}
            required
            aria-label="maximum height"
            placeholder="Say your mind"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
          /> */}

          {/* <TextareaAutosize aria-label="empty textarea" placeholder="Empty" /> */}

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container> */}
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          {/* </Grid> */}
        {/* </form> */}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default NewReviewForm;