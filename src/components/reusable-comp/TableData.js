import React from "react";
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

const TableData = ({ data }) => {
  return (
    <TableContainer>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>No.</TableCell>
            <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
              Ratings
            </TableCell>
          </TableRow>
        </TableHead>
        {
          <TableBody sx={{ border: 0 }}>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ fontSize: 18 }}>{item.id}</TableCell>
                <TableCell sx={{ fontSize: 18 }}>{item.name}</TableCell>
                <TableCell sx={{ fontSize: 18 }}>{item.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        }
      </Table>
    </TableContainer>
  );
};
TableData.defaultProps = {
  data: [],
};
export default TableData;
