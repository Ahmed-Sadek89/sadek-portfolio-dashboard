"use client"
import React, { useState } from 'react'
import { Box, IconButton, InputBase } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

const passwordInputContainer = {
    flexGrow: 1,
    color: 'text.secondary',
    padding: '5px ',
    '& input::-ms-clear': { display: 'none' },
    '& input::-webkit-clear-button': { display: 'none' },
    '& input::-webkit-inner-spin-button': { display: 'none' },
    '& input::-webkit-outer-spin-button': { display: 'none' },
    '& input[type="password"]': {
        '&::-ms-reveal': { display: 'none' },
        '&::-ms-clear': { display: 'none' },
    },
}

const BasePasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Box sx={{ borderColor: "text.secondary" }} className="flex items-center bg-transparent border rounded-[10px] py-1 px-2 w-full">
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
    )
}

export default BasePasswordInput
