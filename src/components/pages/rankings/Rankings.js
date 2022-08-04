import React from "react";
import { AppBar, Box, Typography, Toolbar, Stack, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const NavStyle = { textDecoration: "none", color: "inherit" };
const Rankings = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "90vw",
        minHeight: "90vh",
        margin: "40px auto",
        flexDirection: "column",
      }}
    >
      <AppBar position="static" color="transparent" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h5" component="h5" sx={{ flexGrow: 1 }}>
            ICC Men's Rankings
          </Typography>
          <Stack direction="row" spacing={4}>
            <Link to="tests" style={NavStyle}>
              <Button color="inherit">Tests</Button>
            </Link>
            <Link to="odis" style={NavStyle}>
              <Button color="inherit">ODIs</Button>
            </Link>
            <Link to="twenty20" style={NavStyle}>
              <Button color="inherit">T20Is</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
};

export default Rankings;
