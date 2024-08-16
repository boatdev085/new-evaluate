"use client";
import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as MUITable,
  Typography,
} from "@mui/material";
import React from "react";
import ModalEdit from "./ModalEdit";

type Props = {};

const SectionTable = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  function createData(
    id: number,
    name: string,
    email: string,
    count: number,
    regis_date: string,
    date_now: string,
    people: string
  ) {
    return { id, name, email, count, regis_date, date_now, people };
  }
  const rows = [
    createData(
      1,
      "Frozen yoghurt",
      "mail@mail.com",
      2,
      "25/05/2567",
      "09/06/2567",
      "บิดา-มารดา / ผู้ปกครอง"
    ),
    createData(
      2,
      "Frozen yoghurt",
      "mail@mail.com",
      2,
      "25/05/2567",
      "09/06/2567",
      "บิดา-มารดา / ผู้ปกครอง"
    ),
    createData(
      3,
      "Frozen yoghurt",
      "mail@mail.com",
      2,
      "25/05/2567",
      "09/06/2567",
      "บิดา-มารดา / ผู้ปกครอง"
    ),
    createData(
      4,
      "Frozen yoghurt",
      "mail@mail.com",
      2,
      "25/05/2567",
      "09/06/2567",
      "บิดา-มารดา / ผู้ปกครอง"
    ),
  ];
  return (
    <>
      <ModalEdit open={open} onClose={() => setOpen(false)} />
      <TableContainer
        component={Paper}
        sx={{ background: "white", marginTop: "100px", marginBottom: "180px" }}
      >
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
              <TableCell>ลำดับ</TableCell>
              <TableCell align="right">ชื่อ - นามสกุล</TableCell>
              <TableCell align="right">อีเมล์</TableCell>
              <TableCell align="right">จำนวนแบบประเมิน</TableCell>
              <TableCell align="right">วันที่สมัคร</TableCell>
              <TableCell align="right">วันที่เข้าใช้งานล่าสุด</TableCell>
              <TableCell align="right">สิทธิการใช้งาน</TableCell>
              <TableCell align="right">Admin Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
                <TableCell align="right">{row.regis_date}</TableCell>
                <TableCell align="right">{row.date_now}</TableCell>
                <TableCell align="right">{row.people}</TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: "pointer" }}
                  onClick={() => setOpen(true)}
                >
                  <Typography variant="body2" color="black">
                    Edit
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
    </>
  );
};

export default SectionTable;
