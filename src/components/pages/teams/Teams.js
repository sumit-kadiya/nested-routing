import React from "react";

import { Box, List, ListItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
const NavStyle = { color: "inherit", fontSize: "24px" };

const Teams = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "90vw",
        margin: "40px auto",
      }}
    >
      <List sx={{ width: "20%" }}>
        <ListItem>
          <Link to="ind" style={NavStyle}>
            India
          </Link>
        </ListItem>
        <ListItem>
          <Link to="pak" style={NavStyle}>
            Pakistan
          </Link>
        </ListItem>
        <ListItem>
          <Link to="aus" style={NavStyle}>
            Australia
          </Link>
        </ListItem>
        <ListItem>
          <Link to="eng" style={NavStyle}>
            England
          </Link>
        </ListItem>
        <ListItem>
          <Link to="rsa" style={NavStyle}>
            South Africa
          </Link>
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          minHeight: "100%",
          // backgroundColor: "yellow",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Teams;
