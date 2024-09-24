import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { leftSideContainer, logoLink } from './style';
import Image from 'next/image';
import FormBaseInput from '../ui/form-base-input';

const LeftSide = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const theme = useTheme()
    const ismediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{ width: ismediumScreen ? "50%" : "100%", ...leftSideContainer }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(prev => !prev)}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            {
                ismediumScreen &&
                <FormBaseInput
                    className="bg-transparent border border-[#2c2e33] flex items-center justify-between rounded-[10px] gap-2 px-2 py-2 w-full"
                    placeholder="Search…"
                    Icon={SearchIcon}
                />

            }
            {
                !ismediumScreen &&
                <Link
                    style={{ ...logoLink, textTransform: "uppercase", }}
                    href={"/"}
                >
                    <Image src={'/Logo.svg'} alt='logo' width={30} height={30} />
                    <span>dream</span>
                </Link>
            }
        </Box>
    )
}

export default LeftSide