import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import RegisterForm from './_components/RegisterForm';


const Register = () => {
    return (
        <>
            <Box className="flex flex-col gap-1">
                <Typography sx={{ color: "text.primary" }} variant="h6">
                    Adventure starts here 🚀
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                    Make your app management easy and fun!
                </Typography>
            </Box>
            <RegisterForm />
            <Box className="flex items-center gap-2 w-full justify-center">
                <Typography sx={{ color: "secondary.main" }}>Already have an account?</Typography>
                <Link href='/login' style={{ color: "#2196f3" }}>Sign in instead</Link>
            </Box>
        </>
    )
}

export default Register