import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const NavStyle = { textDecoration: "none", color: "inherit" };

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={NavStyle}>
              CRICBUZZ
            </Link>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/teams" style={NavStyle}>
              <Button color="inherit">Teams</Button>
            </Link>
            <Link to="/rankings" style={NavStyle}>
              <Button color="inherit">Rankings</Button>
            </Link>
            <Link to="/about" style={NavStyle}>
              <Button color="inherit">Contact Us</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
