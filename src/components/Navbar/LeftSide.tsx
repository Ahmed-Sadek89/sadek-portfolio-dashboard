import { Box, IconButton, InputBase, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { leftSideContainer, logoLink, searchInputContainer } from './style';
import Image from 'next/image';

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
                <Box sx={searchInputContainer}>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ width: "100%" }}
                    />
                    <SearchIcon />
                </Box>
            }
            {
                !ismediumScreen &&
                <Link
                    style={{...logoLink, textTransform: "uppercase",}}
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