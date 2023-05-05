import { Button, TableCell, TableRow } from "@mui/material";
import { possibleColumneTypes } from "utils/constant";
import {
  ICreateItem,
  ITableBody,
  IColumnData,
  TGenericType,
} from "utils/types";
import { useDispatch } from "react-redux";
import { successState } from "redux/slices/bidItems.slice";

const iterator = (
  column: IColumnData,
  row: ICreateItem,
  value: string | number | undefined,
  dispatch: TGenericType
) => {
  switch (column.type) {
  case possibleColumneTypes.button:
    return (
      <Button
        sx={{ padding: "0px 12px 0px 12px" }}
        variant="contained"
        onClick={() => {
          dispatch(successState());
          column.onClick?.(row);
        }}
      >
        {column.buttonLabel}
      </Button>
    );
  case possibleColumneTypes.day:
    return `${value}` + " " + "D";
  default:
    return value;
  }
};

const TableBodyComponent = ({ rows, columns }: ITableBody) => {
  const dispatch = useDispatch();
  return (
    <>
      {rows?.map((row: ICreateItem) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
          {columns?.map((column: IColumnData, index: number) => {
            const value = row[column.id as keyof ICreateItem];
            return (
              <TableCell
                align={column.align}
                sx={{ width: "2rem" }}
                key={index}
              >
                {iterator(column, row, value, dispatch)}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
};

export default TableBodyComponent;
