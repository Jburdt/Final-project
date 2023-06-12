import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Grid } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" component={Link} to="/">
        Burd's Movie Reviews
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: "450",
    paddingTop: "140%", // 1:1,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Reviews = () => {
  const classes = useStyles();
  const currentUser = useSelector((store) => store.usersReducer);
  const reviews = useSelector((store) => store.reviewsReducer.reviews);
  const [showMyReviews, setShowMyReviews] = useState(false);

  //make a function that will filter the reviews based on the current user
  const handleButtonClick = () => {
    return reviews.filter(
      (review) => review.author.username === currentUser.username
    );
  };

  return (
    <>
      <main>
        <div id="test">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Movie Reviews
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Don't be afraid to speak your mind. These reviews are judgement
            free!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick()}
                >
                  {showMyReviews ? "Show All Reviews" : "Show My Reviews"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/reviews/new"
                  variant="contained"
                  color="inherit"
                >
                  Create Review
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
      <div
        style={{
          flexGrow: 1,
        }}
      ></div>
      {/* <Grid container alignItems="center">
        <Grid item xs={12} md={6} lg={4}>
          {reviews.map((review, idx) => {
            return (
              <ReviewCard
                key={idx}
                review={review}
                category={review.category}
              />
            );
          })}
        </Grid>
      </Grid> */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          End of Reviews
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Thank you for supporting the page!
        </Typography>
        <Copyright />
      </footer>
      <div id="delete-this-when-done">
      <Grid container alignItems="center">
        <Grid item xs={12} md={6} lg={4}>
          {reviews.map((review, idx) => {
            return (
              <ReviewCard
                key={idx}
                review={review}
                category={review.category}
              />
            );
          })}
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default Reviews;