"use client"
import React from 'react'
import { useTheme, IconButton, Menu, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import ButtonSubmit from '../ui/button-submit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logout } from '@/actions/owner/owner-logout';

const UserOptionMenu = () => {
    const theme = useTheme()
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    
    return (
        <>
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
                    className="text-center text-black bg-transparent cursor-pointer px-[30px] py-[20px] text-[15px]"
                >
                    Profile
                </Link>
                <form action={logout}>
                    <ButtonSubmit btnStyle={{
                        cursor: 'pointer',
                        padding: '20px 30px',
                        fontSize: "15px",
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
        </>
    )
}

export default UserOptionMenu
