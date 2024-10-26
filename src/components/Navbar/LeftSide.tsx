import { Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import FormBaseInput from '../ui/form-base-input';

const LeftSide = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <Box className="w-full md:w-1/2 flex items-center">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(prev => !prev)}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            <FormBaseInput
                className="bg-transparent border border-[#2c2e33] hidden md:flex items-center justify-between rounded-[10px] gap-2 px-2 py-2 w-full"
                placeholder="Search…"
                Icon={SearchIcon}
            />
            <Link
                className='text-sm block md:hidden'
                href={"/"}
            >
                Ahmed Sadek | أْحْمَدْ صَادِقْ
            </Link>
        </Box>
    )
}

export default LeftSide