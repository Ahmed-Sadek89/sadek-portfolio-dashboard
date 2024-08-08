import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DrawerLink from './DrawerLink'
import { Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logoutLinkStyle } from './style';

const ProfileOption = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const theme = useTheme()
    return (
        <>
            <Typography color='text.primary' padding={'10px'} fontWeight={"bold"}>Admin: </Typography>
            <DrawerLink Icon={AccountBoxIcon} text="profile" setOpen={setOpen} />
            <Link href="/login" style={{ ...logoutLinkStyle, backgroundColor: theme.palette.error.main }}>
                <ExitToAppIcon />
                <Typography variant='h6'>Logout</Typography>
            </Link>
        </>
    )
}

export default ProfileOption