import React from "react";
import { List, ListItemText, Divider, Drawer, Box, Toolbar, ListItemButton } from "@mui/material";
import Brand from '../../asserts/images/Tillit PNG 2.png';



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
                    {["Home", "My Cart"].map((text, index) => (
                        <ListItemButton key={text}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default DrawerComponent;
