import { Box, 
    Button, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
} from "@mui/material";
import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';



const DrawerCont = () => {
    const [open, setOpen] = useState(false);

    const homelinks = ['Clearance', 'Change Of Course', 'Requirements', 'Transfer'];

    const toggleDrawer = () => {
        setOpen(!open)
    }
    return(
        <div>
            <IconButton onClick={toggleDrawer}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
                    <List>
                        {homelinks.map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                            <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default DrawerCont