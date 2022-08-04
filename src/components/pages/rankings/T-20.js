import React, { useState } from "react";
import { Box, Button, Divider, List, ListItem } from "@mui/material";
import TableData from "../../reusable-comp/TableData";
import { TtwentyTeam, TtwentyBatter, Ttwentybowler } from "../../../data/Data";

const Twenty20 = () => {
  const [data, setData] = useState(TtwentyTeam);
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        justifyContent: "space-around",
        minHeight: "100%",
        marginTop: "20px",
      }}
    >
      <List sx={{ width: "25%" }}>
        <ListItem>
          <Button variant="outlined" onClick={() => setData(TtwentyTeam)}>
            Teams
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" onClick={() => setData(TtwentyBatter)}>
            Batting
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" onClick={() => setData(Ttwentybowler)}>
            Bowling
          </Button>
        </ListItem>
      </List>
      <Divider orientation="vertical" flexItem />
      <Box
        sx={{
          display: "flex",
          width: "70%",
          minHeight: "100%",
        }}
      >
        <TableData data={data} />
      </Box>
    </Box>
  );
};

export default Twenty20;
