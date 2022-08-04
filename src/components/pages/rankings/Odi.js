import React, { useState } from "react";
import { Box, Button, Divider, List, ListItem } from "@mui/material";
import TableData from "../../reusable-comp/TableData";
import { OdiTeam, OdiBatter, Odibowler } from "../../../data/Data";

const ODIs = () => {
  const [data, setData] = useState(OdiTeam);
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
          <Button variant="outlined" onClick={() => setData(OdiTeam)}>
            Teams
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" onClick={() => setData(OdiBatter)}>
            Batting
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" onClick={() => setData(Odibowler)}>
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

export default ODIs;
