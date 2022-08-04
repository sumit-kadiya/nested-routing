import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "300px",
        height: "300px",
        justifyContent: "space-between",
        margin: "40px auto",
        flexDirection: "column",
        textAlign: "left",
        textTransform: "full-width",
      }}
    >
      <Typography variant="h5">Contact Details</Typography>
      <Divider flexItem />
      <Typography variant="p">TIMES INTERNET LTD.</Typography>
      <Typography variant="p">Regd. Office: Express Building,</Typography>
      <Typography variant="p">New Delhi, - 110002, INDIA</Typography>
      <Typography variant="p">9-10, Bahadurshah Zafar Marg,</Typography>
      <Typography variant="p">Corp. Office: No. 190-B, 2nd Floor,</Typography>
      <Typography variant="p">HN Plaza,100 Ft Ring road,</Typography>
      <Typography variant="p">6th Main, BSK 3rd Stage,</Typography>
      <Typography variant="p">Bangalore-560085, INDIA</Typography>
      <Typography variant="p">
        Phone: <strong>080-26790623</strong>
      </Typography>
    </Box>
  );
};

export default Contact;
