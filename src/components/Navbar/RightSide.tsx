"use client"
import React from 'react'
import { useTheme, Box, useMediaQuery, Button, IconButton, Badge, Menu, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { createNewProjectMain, menuLink, rightSideContainer } from './style';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';
import ButtonSubmit from '../ui/button-submit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logout } from '@/actions/owner/owner-logout';

const RightSide = () => {
    const { isDark, setIsDark } = useThemeContext()
    const theme = useTheme()
    const ismediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    return (
        <Box sx={{ width: ismediumScreen ? "50%" : "100%", ...rightSideContainer }}>
            <Button sx={createNewProjectMain}>
                + Create new projects
            </Button>

            {
                isDark ?
                    <LightModeIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => setIsDark(prev => !prev)}
                    /> :
                    <DarkModeIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => setIsDark(prev => !prev)}
                    />
            }

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
                <Link
                    href={'/profile'}
                    style={{
                        ...menuLink,
                        textAlign: 'center',
                        backgroundColor: "transparent",
                        color: "#000"
                    }}
                >
                    Profile
                </Link>
                <form action={logout}>
                    <ButtonSubmit btnStyle={{
                        ...menuLink,
                        gap: "10px",
                        textAlign: 'center',
                        textTransform: "capitaize",
                        backgroundColor: theme.palette.error.main,
                        color: "#fff"
                    }}>
                        <ExitToAppIcon />
                        <Typography variant='body2'>Logout</Typography>
                    </ButtonSubmit>
                </form>
            </Menu>
        </Box>
    )
}

export default RightSide
