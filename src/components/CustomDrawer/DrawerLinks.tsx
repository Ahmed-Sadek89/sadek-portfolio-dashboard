import { Box, Divider } from '@mui/material'
import DrawerLink from './DrawerLink'
import HomeIcon from '@mui/icons-material/Home';
import ThemeModeOptions from './ThemeModeOptions';
import ProfileOption from './ProfileOption';
import { getAwnerById } from '@/lib/getAwnerById';
import { getPropsFromAwnerCounts } from '@/helpers/getPropsFromAwnerCounts';
import { useEffect, useState } from 'react';


type props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerLinks = ({ setOpen }: props) => {
    const [awnerCounts, setAwnerCounts] = useState<PropsFromAwnerCounts>([])
    useEffect(() => {
        const getAwnerCounts = async () => {
            const awnerById: awner = await getAwnerById();
            const propsFromAwnerCount = getPropsFromAwnerCounts(awnerById)
            setAwnerCounts(propsFromAwnerCount)
        }
        getAwnerCounts()
    }, []);

    return (
        <Box sx={{ color: "text.secondary" }}>
            <DrawerLink Icon={HomeIcon} text="home" route={'/'} setOpen={setOpen} />
            {
                awnerCounts && awnerCounts.map((key, index) => (
                    <DrawerLink
                        key={index}
                        Icon={key.icon}
                        text={key.name}
                        route={key.route}
                        setOpen={setOpen}
                    />
                ))
            }
            
            <Divider sx={{ my: "10px" }} />
            <ThemeModeOptions />
            <Divider sx={{ my: "10px" }} />
            <ProfileOption setOpen={setOpen} />
        </Box>
    )
}

export default DrawerLinks