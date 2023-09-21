import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Divider, IconButton, InputAdornment, Menu, MenuItem } from '@mui/material';
import { MyTypography, Search } from '../themes/themes';
import DrawerComponent from '../drawer/drawer';
import { Link } from 'react-router-dom';
import Brand from '../../asserts/images/Tillit PNG 2.png'
export default function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawer = () => {
        setOpenDrawer(true)
    }
    return (
        <React.Fragment>
            <AppBar position='static' sx={{ backgroundColor: "#fff", height: "65px" }}>
                <Toolbar sx={{ p: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Link to='/'>
                        <Box sx={{ display: { xs: 'none', sm: "block" }, width: "80px", mr: 1, height: "100%" }}>
                            <img src={Brand} width='100%' height='100%' alt="Brand" />
                        </Box>
                    </Link>
                    <IconButton onClick={handleDrawer} sx={{ display: { xs: 'block', sm: "none" } }}>
                        <span class="material-symbols-outlined">menu</span>
                    </IconButton>
                    <Search InputProps={{ startAdornment: (<InputAdornment position="start"><span class="material-symbols-outlined">search</span></InputAdornment>) }} size='small' fullWidth placeholder='Search...' />
                    <IconButton sx={{ display: { xs: "none", sm: "flex" }, border: "1px solid green", backgroundColor: "green", color: "#FFFF", ":hover": { border: "1px solid green", backgroundColor: "green", color: "#FFFF" }, borderRadius: "6px", ml: 1, py: "3px" }}>
                        <MyTypography sx={{ mr: 1, p: 0 }}>Cart</MyTypography>
                        <span class="material-symbols-outlined" style={{ padding: 0 }}>shopping_cart</span>
                    </IconButton>
                    <IconButton onClick={handleClick}>
                        <span class="material-symbols-outlined" style={{ fontSize: "26px" }}>account_circle</span>
                    </IconButton>
                    {1 > 2 ? <Button sx={{ textTransform: "none", color: "#454545" }}>Login</Button> : ""}
                </Toolbar>
            </AppBar>
            <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: { xs: 3, sm: 10 },
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <span class="material-symbols-outlined" style={{ marginRight: "10px" }}>account_circle</span> Profile
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ display: { xs: "flex", sm: "none" } }}>
                    <span class="material-symbols-outlined" style={{ marginRight: "10px" }}>shopping_cart</span> My Cart
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <span class="material-symbols-outlined" style={{ marginRight: "10px" }}>shopping_bag</span> My Orders
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <span class="material-symbols-outlined" style={{ marginRight: "10px" }}>settings</span> Settings
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose}>
                    <span class="material-symbols-outlined" style={{ marginRight: "10px" }}>logout</span> Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}