"use client"
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Main } from './Styles/MainStyle';
import { Box, useMediaQuery } from '@mui/material';
import { AppBar } from './Styles/AppbarStyle';
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import Navbar from '../Navbar/Navbar';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

}));

export default function Layout({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(true);
    const ismediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Navbar setOpen={setOpen} />
            </AppBar>
            <CustomDrawer open={open} setOpen={setOpen} variant={ismediumScreen === true ? "persistent" : "temporary"} />
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
}
