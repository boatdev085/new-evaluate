"use client";
import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as MUITable,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Table = (props: Props) => {
  const router = useRouter();
  function createData(no: string, date: number, action: number) {
    return { no, date, action };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Eclair", 262, 16.0),
    createData("Cupcake", 305, 3.7),
    createData("Gingerbread", 356, 16.0),
  ];
  return (
    <TableContainer component={Paper} sx={{ background: "white" }}>
      <MUITable
        sx={{
          minWidth: 650,
          "& td, & th": { borderRight: "1px solid rgba(224, 224, 224, 1)" },
          "& td:last-child, & th:last-child": { borderRight: "none" },
        }}
        aria-label="simple table"
      >
        <TableHead sx={{ background: "#f5f5f5" }}>
          <TableRow>
            <TableCell>ลำดับที่</TableCell>
            <TableCell>วันที่ทำแบบประเมิน</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.no}
              onClick={() => router.push(`/user/result/${row.no}`)}
            >
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
