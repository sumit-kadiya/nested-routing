import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const ListData = ({ data, name }) => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      <ListSubheader>
        <Typography variant="h4">{name}</Typography>
      </ListSubheader>
      {data.map((player) => (
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>{player}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default ListData;
