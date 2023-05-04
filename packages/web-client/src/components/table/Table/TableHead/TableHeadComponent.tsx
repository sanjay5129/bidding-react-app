import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { IColumnData, IColumnProp } from "utils/types";
const TableHeadRenderrer = ({ columns }: IColumnProp) => {
  return (
    <TableRow>
      {columns?.map((column: IColumnData) => (
        <TableCell
          key={column.id}
          align={column.align}
          sx={{ width: "3rem", fontWeight: 700 }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
};
export default TableHeadRenderrer;
