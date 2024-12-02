import React from 'react'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CloseIcon from "@mui/icons-material/Close";
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { FormState } from '../../contextApi/StateProvider';



const roles = ["Admin", "Editor", "Viewer"];
const statuses = ["Active", "Inactive"]; 
const permissions =["Read", "Write", "Update", "ALL"]  ;

const EditUser = ({open,onClose,id}) => {
  
  const {data,setData} = FormState() ;

  

  return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="add-user-modal-title"
    aria-describedby="add-user-modal-description"
  >
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        border: "2px solid #000",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography id="add-user-modal-title" variant="h6" component="h2">
          Edit User
        </Typography>
        <IconButton >
          <CloseIcon onClick={onClose}/>
        </IconButton>
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
        
      >
        <TextField
          label="Name"
          name="name"
          
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          select
          label="Role"
          name="role"
         
          variant="outlined"
          fullWidth
          required
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Status"
          name="status"
         
          variant="outlined"
          fullWidth
          required
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>

        <TextField
           select
           label="Permissions"
           name="Permissions"
           variant="outlined"
           fullWidth
           requied
        >
          {
            permissions.map((perm) =>(
                 <MenuItem key={perm} value={perm}>
                    {perm}
                 </MenuItem>
            ))
          }
        </TextField>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  </Modal>
  )
}

export default EditUser ;