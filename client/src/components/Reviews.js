import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

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
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const Reviews = () => {
  const classes = useStyles();
  const reviews = useSelector((store) => store.reviewsReducer.reviews);
  const [orderByTitle, setOrderByTitle] = useState(false);
  // const [searchTerm, setSearchTerm] = useState();

  // Sorts reviews by title
  const handleButtonClick = () => {
    setOrderByTitle(!orderByTitle);
    return reviews.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const reviewCards = reviews.map((review, idx) => {
    return <ReviewCard key={idx} review={review} category={review.category} />;
  });

  return (
    <>
      <main>
        <div id="card-page" className={classes.cardContent}>
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
                  onClick={handleButtonClick}
                >
                  {"Order by Title"}
                </Button>
              </Grid>
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
              />
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
            <Grid container spacing={3} alignItems="center">
              {reviewCards}
            </Grid>
          </div>
        </div>
      </main>
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
    </>
  );
};

export default Reviews;
