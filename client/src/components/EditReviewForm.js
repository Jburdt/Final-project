import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editReviews } from "./actions/Reviews";

const initialState = {
  title: "",
  category: "",
  content: "",
  image: "",
};

const EditReviewForm = () => {
  const { reviews } = useSelector((store) => store.reviewsReducer);
  const [formData, setFormData] = useState(initialState);
  const errors = useSelector((store) => store.errorsReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (reviews.length > 0) {
      const review = reviews.find((review) => review.id === parseInt(id, 10));
      setFormData({
        title: review.title,
        content: review.content,
        image: review.image,
        category: review.category.category,
      });
    }
  }, [id, reviews, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editReviews(id, formData, navigate));
  };

  return (
    <>
      <div className="ReviewEditForm">
        <Typography gutterBottom variant="h3" align="center">
          Edit Review
        </Typography>
        <Card
          style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
          variant="outlined"
        >
          <CardContent align="center">
            <form onSubmit={handleSubmit}>
              <Grid spaceing={1}>
                <Grid item style={{ margin: "10px" }}>
                  <TextField
                    onChange={handleChange}
                    name="title"
                    value={formData.title}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item style={{ margin: "10px" }}>
                  <TextField
                    onChange={handleChange}
                    name="category"
                    value={formData.category}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item style={{ margin: "10px" }}>
                  <TextField
                    onChange={handleChange}
                    name="image"
                    value={formData.image}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item style={{ margin: "10px" }}>
                  <TextField
                    onChange={handleChange}
                    name="content"
                    value={formData.content}
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    minRows={10}
                  />
                </Grid>
                <Grid item style={{ margin: "10px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
      <div style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
        {errors}
      </div>
    </>
  );
};

export default EditReviewForm;
