"use client"
import { useState } from 'react';
import { Box, Button, IconButton, InputBase, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { forgetPasswordLink, formContentStyle, inputContainerStyle, inputLabelStyle, inputStyle, passwordBoxContainer, passwordInputContainer, passwordLabelsStyle, submitBtn } from '../style';
import Link from 'next/link';
import { login } from '@/actions';
import { useFormState, useFormStatus } from 'react-dom';
import ButtonSubmit from '@/components/ui/button-submit';
import TextError from '@/components/ui/text-error';


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [state, formAction] = useFormState<any, FormData>(login, undefined);

    return (
        <form style={{ ...formContentStyle, flexDirection: "column" }} action={formAction}>
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

            <TextError>{state ? state.error : ""}</TextError>
            <ButtonSubmit btnStyle={submitBtn}>
                Sign in
            </ButtonSubmit>
        </form>
    )
}

export default LoginForm