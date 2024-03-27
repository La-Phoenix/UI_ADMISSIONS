import { 
    Box, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText 
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout'
import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../Utils/AuthWrapper";



const DrawerCont = () => {
    const navigate = useNavigate()
    const { logout } = AuthData()
    const [open, setOpen] = useState(false);

    const homelinks = [{
        name: 'Verify O/levels', 
        link: 'verifyOlevels'
    },{
        name: 'Clearance Uploads', 
        link: 'clearance'
    },{
        name: 'Change Of Course', 
        link: 'changeofcourse'
    }, {
        name: 'Transfer',
        link: 'transfer'
    }];

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
                        <ListItem >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <HomeIcon />
                            </IconButton>
                            <ListItemButton onClick={() => (
                                navigate('Home')
                            )}>
                            <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        {homelinks.map((item, index) => (
                        <ListItem key={index} >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <ListItemButton onClick={() => (
                                navigate(item.link)
                            )}>
                            <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                        <ListItem >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <LogoutIcon />
                            </IconButton>
                            <ListItemButton onClick={() => {
                                logout()
                                navigate('auth')
                            }}>
                            <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default DrawerCont