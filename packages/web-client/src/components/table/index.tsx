import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import SkeletonLoader from "../loader/skeletonLoader";
import NoData from "../no-data";
import TableHeadComponent from "./Table/TableHead/TableHeadComponent";
import TableBodyComponent from "./Table/TableBody/TableBodyComponent";
import { ITableComponent } from "utils/types";

const TableComponent = ({ rows, isLoading, columns }: ITableComponent) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "14px 22px 1px 22px",
        }}
      >
        <SkeletonLoader />
      </Box>
    );
  }
  if (rows?.length < 1) return <NoData />;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "14px 22px 1px 22px",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableHeadComponent columns={columns} />
            </TableHead>
            <TableBody>
              <TableBodyComponent columns={columns} rows={rows} />
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
export default TableComponent;
