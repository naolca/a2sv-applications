"use client";

import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { useRouter } from "next/navigation";

import { users } from "../../mock/user";

import Iconify from "../../components/iconify";

import { emptyRows, applyFilter, getComparator } from "../../components/utils";
import UserTableToolbar from "../../components/user-table-toolbar";
import UserTableHead from "../../components/user-table-head";
import UserTableRow from "../../components/user-table-row";
import TableEmptyRows from "../../components/table-empty-rows";
import TableNoData from "../../components/table-no-data";
import Scrollbar from "@/app/components/scrollbar";
import { useGetInpersonApplicantsQuery } from "@/app/redux/slices/applications_slice";
import { da } from "@faker-js/faker";
import { Box, CircularProgress } from "@mui/material";

// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data, error, isLoading } = useGetInpersonApplicantsQuery({}) as any;

  const [applicants, setApplicants] = useState([] as any[]);

  const router = useRouter(); 

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          setApplicants((applicants) => [
            ...applicants,
            {
              id: data[i]._id,
              name: data[i].fields[0].value,
              email: data[i].fields[1].value,
              school: data[i].fields[15].value,
            },
          ]);

          console.log(applicants);
        }
      }
    };
    fetchData();
  }, [data]);

  if (isLoading) return (
    <Box  margin={'auto'} sx={{ display: 'flex'  }}>
    <CircularProgress
      size={40}
      sx={{
        color: 'primary.main',
      }}
     />
  </Box>
  );
  if (error) return <div>Error:</div>;

  const handleSort = (event: any, id: any) => {
    const isAsc = orderBy === id && order === "asc";
    if (id !== "") {
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event: { target: { checked: any } }) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n: { name: any }) => n.name);
      //   setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event: { target: { value: any } }) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: applicants,
    comparator: getComparator(order, orderBy),
    filterName,
  });


  const handleRowClick = (event: any, id: any) => {
    router.push(`/admin-dashboard/inperson/${id}`);

  }



  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Inperson Applicants</Typography>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: 500,
            "& table": { minWidth: 800 },
          }}
        >
          <TableContainer sx={{ overflow: "auto" }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order="asc"
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: "name", label: "Name" },
                  { id: "email", label: "Email" },
                  { id: "school", label: "School" },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      onClick={handleRowClick}
                      id={row.id}
                      name={row.name}
                      email={row.email}
                      school={row.school}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}

