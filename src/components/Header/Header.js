import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormGroup from '@mui/material/FormGroup';

import { useState } from 'react';

const Header = () => {

    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open,setOpen] = useState(false) ;

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleClose = ()=>{
         
    }
   
    return (
        <div>
           <Box sx={{ flexGrow: 1 ,height:'100' }}>
            <FormGroup>
            </FormGroup>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Pannel
                    </Typography>
                    {auth && (
                        <div>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >

                                <AccountCircle />
                                <Typography color="white" mx={1}>
                                     John
                                </Typography>
                            </IconButton>
                            
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    </div>

         
       
    )
}

export default Header