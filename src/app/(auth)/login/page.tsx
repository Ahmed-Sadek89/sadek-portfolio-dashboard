import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import LoginForm from './_components/LoginForm';


const Login = () => {
    return (
        <>
            <Box className="flex flex-col gap-1">
                <Typography sx={{ color: "text.primary" }} variant="h6">
                    Welcome to Dream! 👋
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                    Please sign-in to your account and start the adventure
                </Typography>
            </Box>
            <LoginForm />
            <Box className="flex items-center gap-2 w-full justify-center">
                <Typography sx={{ color: "secondary.main" }}>New on our platform?</Typography>
                <Link href='/register' style={{ color: "#2196f3" }}>Create an account</Link>
            </Box>
        </>
    )
}

export default Login