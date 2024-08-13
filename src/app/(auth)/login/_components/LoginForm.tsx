"use client"
import { useState } from 'react';
import { Box, Button, IconButton, InputBase, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { forgetPasswordLink, formContentStyle, inputContainerStyle, inputLabelStyle, inputStyle, passwordBoxContainer, passwordInputContainer, passwordLabelsStyle, submitBtn } from '../style';
import Link from 'next/link';


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const loginAction = (formData: FormData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("aya")
        console.log({ email, password })
    }
    return (
        <form style={{ ...formContentStyle, flexDirection: "column" }} action={loginAction}>
            <Box sx={inputContainerStyle}>
                <InputLabel sx={inputLabelStyle}>
                    Email
                </InputLabel>
                <InputBase
                    placeholder="Enter your email"
                    type="text"
                    sx={inputStyle}
                    name='email'
                />
            </Box>

            <Box sx={inputContainerStyle}>
                <Box sx={passwordLabelsStyle}>
                    <InputLabel sx={inputLabelStyle}>
                        Password
                    </InputLabel>
                    <Link href="/forget-password" style={forgetPasswordLink}>
                        Forget Password?
                    </Link>
                </Box>
                <Box sx={passwordBoxContainer} >
                    <InputBase
                        placeholder="************"
                        type={showPassword ? 'text' : 'password'}
                        sx={passwordInputContainer}
                        name='password'
                    />
                    <IconButton onClick={handleTogglePasswordVisibility} sx={{ color: 'text.secondary' }} >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </Box>
            </Box>


            <Button type="submit" sx={submitBtn} > Sign in </Button>
        </form>
    )
}

export default LoginForm