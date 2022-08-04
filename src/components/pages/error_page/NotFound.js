import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "90vw",
        margin: "40px auto",
      }}
    >
      <Typography variant="h4">
        Page Not Found! Go Back To <Link to="/">Home</Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
