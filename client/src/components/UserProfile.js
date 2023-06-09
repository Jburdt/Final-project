import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "./actions/User";

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser(id, navigate));
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "60px",
          marginTop: "70px",
        }}
      >
        Hello, {currentUser?.username}
      </Typography>
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container className={classes.root} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} style={{ marginBottom: "10px" }}>
                User Name: {currentUser?.name}
              </Paper>
            </Grid>
            <Button
              onClick={() => {
                handleDelete(currentUser.id);
              }}
              fullWidth
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Delete Profile
            </Button>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
