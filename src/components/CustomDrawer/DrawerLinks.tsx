import { Box, Divider } from '@mui/material'
import DrawerLink from './DrawerLink'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import HotelIcon from '@mui/icons-material/Hotel';
import PaidIcon from '@mui/icons-material/Paid';
import ThemeModeOptions from './ThemeModeOptions';
import ProfileOption from './ProfileOption';


type props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DrawerLinks = ({ setOpen }: props) => {
    return (
        <Box sx={{ color: "text.secondary" }}>
            <DrawerLink Icon={HomeIcon} text="home" setOpen={setOpen} />
            <DrawerLink Icon={GroupIcon} text="users" setOpen={setOpen} />
            <DrawerLink Icon={LocalOfferIcon} text="offers" setOpen={setOpen} />
            <DrawerLink Icon={NextPlanIcon} text="plans" setOpen={setOpen} />
            <DrawerLink Icon={HotelIcon} text="hotels" setOpen={setOpen} />
            <DrawerLink Icon={PaidIcon} text="payments" setOpen={setOpen} />
            <Divider sx={{ my: "10px" }} />
            <ThemeModeOptions />
            <Divider sx={{ my: "10px" }} />
            <ProfileOption setOpen={setOpen} />
        </Box>
    )
}

export default DrawerLinks