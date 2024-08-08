"use client"
import React from 'react'
import { useTheme, Box, useMediaQuery, Button, IconButton, Badge, Menu } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { createNewProjectMain, menuLink, rightSideContainer } from './style';
import Link from 'next/link';

const RightSide = () => {
    const theme = useTheme()
    const ismediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    return (
        <Box sx={{ width: ismediumScreen ? "50%" : "100%", ...rightSideContainer }}>
            <Button sx={createNewProjectMain}>
                + Create new projects
            </Button>
            <LightModeIcon
                sx={{ cursor: "pointer" }}

            />
            <DarkModeIcon
                sx={{ cursor: "pointer" }}

            />
            {/* {
                isDark ?
                    <LightModeIcon
                        sx={{ cursor: "pointer" }}

                    /> :
                    <DarkModeIcon
                        sx={{ cursor: "pointer" }}

                    />
            } */}

            <IconButton size="medium" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
            </IconButton>
            <IconButton
                size="medium"
                color="inherit"
            >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>


            <IconButton
                size="medium"
                edge="end"
                color="inherit"
                onClick={(e) => setAnchorElUser(e.currentTarget)}
            >
                <AccountCircle />
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
                MenuListProps={{
                    sx: { padding: '0px', display: "flex", flexDirection: "column" }
                }}
            >
                {
                    ['Profile', 'Logout'].map((setting) => (
                        <Link
                            key={setting}
                            href={setting === "Profile" ? '/profile' : "#"}
                            style={{
                                ...menuLink,
                                textAlign: 'center',
                                backgroundColor: setting === "Profile" ? "transparent" : theme.palette.error.main,
                                color: setting === "Profile" ? "#000" : "#fff"
                            }}
                        >
                            {setting}
                        </Link>
                    ))
                }
            </Menu>
        </Box>
    )
}

export default RightSide
