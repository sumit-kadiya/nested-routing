import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minWidth: "90vw",
        minHeight: "90vh",
        marginTop: 4,
        flexDirection: "column",
      }}
    >
      <List
        sx={{ width: "80%" }}
        subheader={<ListSubheader>Latest News</ListSubheader>}
      >
        <ListItem>
          <Typography variant="h5">
            Suryakumar, Pandya and Ashwin help India go 2-1 up
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h5">
            Pakistan pick Naseem Shah for Netherlands ODIs, Asia Cup
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h5">
            Fit-again Ollie Robinson returns for first two South Africa Tests
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h5">
            India-Pakistan Asia Cup game set for August 28
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h5">
            Pakistan to host England for seven T20Is in September-October
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h5">
            Kagiso Rabada out of Ireland T20Is
          </Typography>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default Home;
