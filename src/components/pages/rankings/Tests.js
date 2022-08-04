import React, { useState } from "react";
import { Box, Button, Divider, List, ListItem } from "@mui/material";
import { TestTeam, TestBatter, Testbowler } from "../../../data/Data";
import TableData from "../../reusable-comp/TableData";

const Tests = () => {
  const [data, setData] = useState(TestTeam);
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
          <Button variant="outlined" onClick={() => setData(TestTeam)}>
            Teams
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" onClick={() => setData(TestBatter)}>
            Batting
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" onClick={() => setData(Testbowler)}>
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

export default Tests;
