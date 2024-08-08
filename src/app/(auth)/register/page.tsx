import { Box, Typography } from '@mui/material'
import { boxContainer, greetingTextStyle, logoStyle, userLink } from './style';
import LoginForm from './_components/RegisterForm';
import Link from 'next/link';
import Image from 'next/image';


const Register = () => {
    return (
        <Box sx={boxContainer}>
            <Image src={'/Logo.svg'} alt='logo' style={logoStyle} width={30} height={100} className='w-[10%] h-auto' />
            <Box sx={greetingTextStyle}>
                <Typography sx={{ color: "text.primary" }} variant="h6">
                    Adventure starts here 🚀
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                    Make your app management easy and fun!
                </Typography>
            </Box>
            <LoginForm />
            <Box sx={userLink}>
                <Typography>Already have an account?</Typography>
                <Link href='/login' style={{ color: "#2196f3" }}>Sign in instead</Link>
            </Box>
        </Box>
    )
}

export default Register