import { Button, Card, CardContent, Grid, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditReviewForm = () => {
  const {reviews} = useSelector(store => store.reviewsReducer)
  const {id} = useParams();

  const reviewToUpdate = reviews.find(review => review.id === parseInt(id), 10)

  return (
    <div className='ReviewEditForm'> 
    {/* <h1>{reviewToUpdate.title}</h1> */}
      <Typography gutterBottom variant='h3' align='center' >
        Edit Review
      </Typography>
      <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px" }} variant="outlined">
        <CardContent align="center">
          <form onSubmit={null}>
            <Grid contatiner='true' spaceing={1}>
              <Grid item style={{margin:"10px"}}>
                <TextField label="Title" placeholder="Enter Title" variant='outlined' fullWidth  />
              </Grid>
              <Grid item style={{margin:"10px"}}>
                <TextField label=" Category" placeholder='Enter Category' variant='outlined' fullWidth />
              </Grid>
              <Grid item style={{margin:"10px"}}>
                <TextField label=" Content" placeholder='Enter Content' variant='outlined' fullWidth multiline minRows={10} />
              </Grid>
                <Grid item style={{margin:"10px"}}>
                  <Button type='submit' variant='contained' color='primary' fullWidth >Submit</Button>
                </Grid>            
              </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
};

export default EditReviewForm;