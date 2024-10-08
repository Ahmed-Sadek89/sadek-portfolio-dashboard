import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DrawerLink from './DrawerLink'
import { Typography, useTheme } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logoutLinkStyle } from './style';
import ButtonSubmit from '../ui/button-submit';
import { logout } from '@/actions/owner/owner-logout';

const ProfileOption = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const theme = useTheme()

    return (
        <>
            <Typography color='text.primary' padding={'10px'} fontWeight={"bold"}>Admin: </Typography>
            <DrawerLink Icon={AccountBoxIcon} text="profile" route={'/profile'} setOpen={setOpen} />

            <form action={logout}>

                <ButtonSubmit btnStyle={{ ...logoutLinkStyle, backgroundColor: theme.palette.error.main, }}>
                    <ExitToAppIcon />
                    <Typography variant='body2'>Logout</Typography>
                </ButtonSubmit>
            </form>
        </>
    )
}

export default ProfileOption