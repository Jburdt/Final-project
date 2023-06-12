import { Typography } from "@material-ui/core";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Ooops, page not found</Typography>
    </div>
  );
};

export default NotFound;
