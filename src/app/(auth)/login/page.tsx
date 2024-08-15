import { Box, Typography } from '@mui/material'
import { boxContainer, greetingTextStyle, logoStyle, userLink } from './style';
import LoginForm from './_components/LoginForm';
import Link from 'next/link';
import Image from 'next/image';


const Login = () => {
    
    return (
        <Box sx={boxContainer}>
            <Image src={'/Logo.svg'} alt='logo' style={logoStyle} width={30} height={100} className='w-[10%] h-auto' />
            <Box sx={greetingTextStyle}>
                <Typography sx={{ color: "text.primary" }} variant="h6">
                    Welcome to Dream! 👋
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                    Please sign-in to your account and start the adventure
                </Typography>
            </Box>
            <LoginForm />
            <Box sx={userLink}>
                <Typography>New on our platform?</Typography>
                <Link href='/register' style={{ color: "#2196f3" }}>Create an account</Link>
            </Box>
        </Box>
    )
}

export default Login