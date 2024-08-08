import { styled } from '@mui/material/styles';
import { drawerWidth } from '../drawerWidth';


export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),

    minHeight: "100vh",
    background: theme.palette.primary.dark,
    '@media (min-width:0px)': {
        marginLeft: 0,
    },
    '@media (min-width:900px)': {
        marginLeft: `-${drawerWidth}px`,
    },
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '@media (min-width:0px)': {
            marginLeft: `0`,
        },
        '@media (min-width:900px)': {
            marginLeft: 0,
        },
    }),
}));