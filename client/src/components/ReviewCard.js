import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  CardMedia,
  makeStyles,
  Modal,
  Divider,
  TextField,
  Grid,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviews } from "./actions/Reviews";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addComment } from "./actions/Reviews";
import { setErrors } from "./actions/Errors";

// STYLES
const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    marginBottom: "10px",
  },
  cardMedia: {
    height: "450",
    paddingTop: "140%", // 1:1
  },
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ReviewCard = ({ review }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [comment, setComment] = useState("");
  const errors = useSelector((store) => store.errorsReducer);

  // DELETE REQUEST
  const handleDelete = (id) => {
    dispatch(deleteReviews(id));
  };

  // EDIT REQUEST
  const handleEdit = (id) => {
    navigate(`/reviews/${id}/edit`);
  };

  // SHOW FULL REVIEW CODE
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getModalStyle() {
    return {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "90%",
      maxHeight: "90%",
      overflow: "auto",
    };
  }

  // ADD COMMENT
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(review.id, comment, setErrors));
    setComment("");
  };

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={review.image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            variant="h5"
            component="h2"
            style={{ textDecoration: "underline" }}
          >
            {review.title}
          </Typography>
          <Typography style={{ color: "blue" }}>
            Category: {review.category.category}
          </Typography>
          <Typography>
            {review.content.split("").slice(0, 150).join("") + "..."}
          </Typography>
          <Typography>
            <em style={{ color: "red" }}>
              Published by: {review.author.username}
            </em>
          </Typography>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardActions>
            <Button
              onClick={handleOpen}
              variant="outlined"
              size="small"
              color="primary"
            >
              View Full Review
            </Button>
            <Modal open={open} onClose={handleClose}>
              <div style={modalStyle} className={classes.paper}>
                <Typography variant="h4" id="simple-modal-title">
                  {review.title}
                </Typography>
                <Typography>
                  <em style={{ color: "red" }}>
                    Published by: {review.author.username}
                  </em>
                </Typography>
                <Divider />
                <Typography variant="subtitle2" id="simple-modal-description">
                  {review.content}
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                ></div>
                <Divider />
                <Typography variant="body1" color="primary">
                  Comments:
                </Typography>
                {review.comments.map((comment, idx) => {
                  return (
                    <Typography key={idx} variant="subtitle2">
                      {comment.user.name}- {comment.comment}
                      <Divider />
                    </Typography>
                  );
                })}
              </div>
            </Modal>
            <Button
              variant="outlined"
              onClick={() => handleEdit(review.id)}
              size="small"
              color="primary"
            >
              Edit
            </Button>
            <IconButton
              onClick={() => handleDelete(review.id)}
              color="secondary"
              aria-label="delete"
              className={classes.margin}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </CardActions>
        </div>
        <Divider />
        <form
          onSubmit={handleSubmit}
          id="comment-section"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <TextField
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            name="comment"
            helperText="Comments are show in the full review."
            id="outlined-basic"
            label="Add comment"
            variant="outlined"
            size="small"
            multiline
          />
          <Button
            style={{ marginLeft: "5px", marginBottom: "25px" }}
            type="submit"
            variant="outlined"
            size="small"
            color="primary"
          >
            submit
          </Button>
        </form>
        <div>
          <div
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {errors}
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default ReviewCard;
