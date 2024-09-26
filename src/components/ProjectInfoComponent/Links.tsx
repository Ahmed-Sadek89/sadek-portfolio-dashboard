import { Box } from '@mui/material'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Links = ({ liveUrl, repoUrl }: { liveUrl: string, repoUrl: string }) => {
    return (
        <Box className="flex items-center justify-start sm:justify-end gap-x-3 w-full sm:w-1/3">
            <Link href={liveUrl as string}>
                <RemoveRedEyeIcon className='text-9xl transition duration-300' sx={{ color: "text.secondary", ":hover": { color: "text.primary" } }} />
            </Link>
            <Link href={repoUrl as string}>
                <GitHubIcon className='text-9xl transition duration-300' sx={{ color: "text.secondary", ":hover": { color: "text.primary" } }} />
            </Link>
        </Box>
    )
}

export default Links
