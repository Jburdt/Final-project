import { Button, Card, CardContent, Grid, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const EditReviewForm = () => {
  const reviews = useSelector(state => state.reviewsReducer);
  console.log('Review Card', reviews, "edit review form")

  reviews.map((review)=> {
    return console.log(review.category)
  })


  return (
    <div className='ReviewEditForm'> 
      <Typography gutterBottom variant='h3' align='center' >
        Edit Review
      </Typography>

      <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px" }} variant="outlined">
        <CardContent align="center">
          <form onSubmit={null}>
            <Grid contatiner='true' spaceing={1}>

              <Grid item style={{margin:"10px"}}>
                <TextField label="Title" placeholder='Enter Title' variant='outlined' fullWidth  />
              </Grid>

              <Grid item style={{margin:"10px"}}>
                <TextField label=" Content" placeholder='Enter Content' variant='outlined' fullWidth multiline minRows={10} />
              </Grid>

              {/* <Grid item style={{margin:"10px"}}>
                <Select
                  variant='outlined' 
                  fullWidth 
                  id="CategorySelect"
                  value={''}
                  onChange={null}
                  displayEmpty
                >
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                <MenuItem value={null}>Ten</MenuItem>
                </Select>
              </Grid> */}
              
              <Grid item style={{margin:"10px"}}>
                <Select
                  variant='outlined' 
                  fullWidth 
                  id="CategorySelect"
                  value={''}
                  onChange={null}
                  displayEmpty
                  >
                  {/* {reviews.map((review) => {
                    return <MenuItem key={review.id} value={review.category}>{review.category}</MenuItem>
                  })} */}
                
                </Select>
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