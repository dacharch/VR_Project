import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { IconButton } from '@mui/material';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Roles', minWidth: 100 },
  {
    id: 'population',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
    
  },
  {
    id: 'editUser',
    label: 'Edit user',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'deleteUser',
    label: 'Delete User',
    minWidth: 170,
    align: 'right',
  },
];

function createData(name, code, population, size) {
  return { name, code, population, size };
}

const rows = [
  createData('Neeraj', 'Read', "Active", 3287263),
  createData('Potter', 'Write', 'In Active', 9596961),
  createData('Reetu', 'Read', 'Active', 301340),
  createData('Rani', 'Update', 'In Active', 9833520),
  createData('Voldemort', 'Read', 'In Active', 9984670),
  createData('Australia', 'Update', 'In Active', 7692024),
  createData('Karina', 'Write', 'Active', 357578),
  createData('Ritika', 'Update', 'In Active', 70273),
  createData('Pyari', 'Read', 'In Active', 1972550),
  createData('Sinhaniya', 'Write', 'Active', 377973),
  createData('Tinku', 'Update', 'In Active', 640679),
  createData('Raju', 'Admin', 'Active', 242495),
  createData('Vikas', 'Read', 'In Active', 17098246),
  createData('Neerja', 'Write', 'Active', 923768),
  createData('Radhe', 'Update', 'In   Active', 8515767),
];

export default function U() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };  

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                          {column.id =="editUser" ? (<EditIcon/>): ''}
                          {column.id == "deleteUser" ? (<DeleteForeverIcon/>) : ''}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
