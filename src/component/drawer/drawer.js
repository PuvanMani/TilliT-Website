import React from "react";
import { List, ListItemText, Divider, Drawer, Box, Toolbar, ListItemButton } from "@mui/material";
import Brand from '../../asserts/images/Tillit PNG 2.png';
import { Link } from "react-router-dom";



const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Drawer role="presentation" open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Box sx={{ width: "200px" }}>
                <Toolbar sx={{ justifyContent: "center", p: 0 }}>
                    <Box sx={{ width: "100px" }}>
                        <img src={Brand} width='100%' height='100%' alt="Brand" />
                    </Box>
                </Toolbar>
                <Divider />
                <List>
                    {[{ name: "Home", path: "/" }, { name: "My Cart", path: "/shopping/cart" }].map((text, index) => (
                        <Link to={text.path} style={{ textDecoration: "none", color: "#000" }}>
                            <ListItemButton key={text.name}>
                                <ListItemText onClick={() => setOpenDrawer(false)} primary={text.name} />
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default DrawerComponent;
