import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputAdornment from '@mui/material/InputAdornment';
import GroupIcon from '@mui/icons-material/Group';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, TextField, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Users from "../Users/Users";
import AddUserModel from '../../Model/AddUserModel';
import "./layout.css"
import { FormState } from '../../../contextApi/StateProvider';

const drawerWidth = "240";



const NAVIGATION = [
  {
    number: 0,
    title: "All Users",
    icon: <GroupIcon />
  },
  {
    number: 1,
    title: "Active Users",
    icon: <DoneAllIcon />

  },
  {
    number: 2,
    title: "Inactive Users",
    icon: <RemoveDoneIcon />
  },
  {
    number: 3,
    title: "Logout",
    icon: <LogoutIcon />
  }

];


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 35,
  p: 2,
};




const Layout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [searchTerm,setSearchTerm] =useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {data,setData} = FormState() ;


  const handleListItem = (number) => {
    setSelectedIndex(number);
  }

  const searchUser  = (e)=>{
    let value = e.target.value ;
    if(isNaN(value)){
      setSearchTerm(value) ;
    }
    filterData() ;
  }
  
  const filterData = ()=>{
    
      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
    
  }




  const BottomContent = () => {

    switch (selectedIndex) {
      case 0: return <Users />

    }


  }
  return (
    <div className='layout_container'>
      <div>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              marginTop: `4rem`,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >

          <List>
            {NAVIGATION.map((item) => (
              <ListItem key={item.number} disablePadding>
                <ListItemButton
                  selected={selectedIndex === item.number}
                  onClick={() => handleListItem(item.number)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: '#6200ea',
                      color: 'red',
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: '#4500b5',
                    },
                  }}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ bgcolor: 'background.default', p: 12 }}
        >
        </Box>

      </div>
      <div className='right_container'>
        <Box className="search_container" component="section">
          <Box>
            <TextField
              variant="outlined"
              placeholder="Search User..."
              onChange={searchUser}

              sx={{
                width: '100%',
                maxWidth: 300,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#888',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#6200ea',
                    boxShadow: '0 0 8px rgba(98, 0, 234, 0.4)',
                  },
                },
              }}

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#6200ea' }} />
                  </InputAdornment>
                )
              }}

            />

          </Box>
          <Box>
            <Button
              size='medium'
              variant='contained'
              onClick={handleOpen}
            >
              Add New User
            </Button>
          </Box>
        </Box>
         <AddUserModel open={open} onClose={handleClose}/>
        <Box>
          <BottomContent />
        </Box>
      </div>
    </div>
  )
}

export default Layout