import { useTheme } from '@mui/material/styles';
import { ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'
import React from 'react'
import { SvgIconComponent } from '@mui/icons-material';
import { ListItemIconStyle } from './style';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type props = {
    text: string,
    Icon: SvgIconComponent;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
const DrawerLink = ({ text, Icon, setOpen }: props) => {
    const theme = useTheme();
    const ismediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const pathname = usePathname()
    return (
        <Link
            href={text === "home" ? "/" : `/${text}`}
            className={`${pathname === (text === "home" ? "/" : `/${text}`) ? "active navLinkCustomStyle" : "navLinkCustomStyle"}`}
            onClick={() => !ismediumScreen && setOpen(false)}
        >
            <ListItemIcon sx={ListItemIconStyle}>
                <Icon sx={{ color: "text.secondary" }} />
            </ListItemIcon>
            <ListItemText primary={text} sx={{ textTransform: "capitalize" }} />
        </Link>
    )
}

export default DrawerLink