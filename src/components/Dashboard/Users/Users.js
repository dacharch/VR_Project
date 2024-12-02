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
import { FormState } from '../../../contextApi/StateProvider';
import { useState } from 'react';
import EditUser from '../../EditUser/EditUser';




const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'roles', label: 'Roles', minWidth: 100 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
    
  },
  {
    id: 'permission',
    label: "Permission",
    minWidth: 170,
    align: 'right',
    format : (value) => value.toLocaleString('en-US'),
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








export default function Users() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] =useState(10);
  const [open, setOpen] = useState(false);
  const[userId,setUserId] = useState() ;
  const {data} = FormState() ;

  const [users, setUpdateUsers] = useState(data) ;
  
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };  

  const editUser = (id) =>{
    setOpen(true) ;    
    setUserId(id) ;
  }

  const deleteUser = (id) =>{
    const updatedUsers = users.filter((user) => user.id !== id);
    console.log(updatedUsers) ;
    setUpdateUsers(updatedUsers);
  }

  return (

   <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:'gray' , color:'white', fontSize:'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
                return (
                  <TableRow hover key={user.id}>
                    {columns.map((column) => {
                      const value = user[column.id];
                      
                    
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                          {column.id =="editUser" ? (<EditIcon onClick={()=>editUser()} style={{cursor:'pointer', color:'green'}}/>): ''}
                          {column.id == "deleteUser" ? (<DeleteForeverIcon style={{cursor: 'pointer' ,color:'red'} } onClick={()=>deleteUser(user.id)}/>) : ''}
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
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    <EditUser open={open} onClose={handleClose} id={userId}/>

    
   </div> 
   
  );
}
