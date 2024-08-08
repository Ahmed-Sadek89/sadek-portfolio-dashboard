import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Divider, Drawer, IconButton, useMediaQuery } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import DrawerLinks from './DrawerLinks';
import Link from 'next/link';
import { drawerContainer, ListItemStyle, mainLinkStyle } from './style';
import Image from 'next/image';

// drawerWidth=240
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

}));
type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    variant: "persistent" | "temporary"
}
const CustomDrawer = ({ open, setOpen, variant }: props) => {
    const theme = useTheme();
    const ismediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    useEffect(() => {
        ismediumScreen === false && setOpen(false)
        ismediumScreen === true && setOpen(true)
    }, [ismediumScreen, setOpen])
    return (
        <Drawer
            sx={drawerContainer}
            variant={variant}
            anchor={theme.direction === 'ltr' ? "left" : "right"}
            open={open}
            onClose={() => setOpen(false)}
        >
            <DrawerHeader>
                <ListItem sx={ListItemStyle}>

                    <Link style={{ ...mainLinkStyle, textTransform: "uppercase" }} href={"/"} >
                        <Image src={'/Logo.svg'} alt='logo' width={30} height={30} />
                        <span>dream</span>
                    </Link>
                    {
                        !ismediumScreen &&
                        <IconButton onClick={() => setOpen(prev => !prev)} sx={{ color: "text.primary" }}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    }

                </ListItem>
            </DrawerHeader>
            <Divider />
            <DrawerLinks setOpen={setOpen} />
        </Drawer>
    )
}

export default CustomDrawer